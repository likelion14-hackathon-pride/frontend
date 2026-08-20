import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import * as authApi from '../apis/auth';
import {
  markSessionEnded,
  onSessionEnded,
  SESSION_ENDED_REASON,
  tokenStore,
} from '../apis/axiosInstance';
import { ROLE } from '../apis/constants';
import { toApiError } from '../apis/errors';

const AuthContext = createContext(null);

// 세션이 끊겨 로그인 화면으로 되돌릴 때 그 이유를 반드시 화면에 남긴다.
// 말없이 튕기면 무엇이 잘못됐는지 알 수 없다.
export const SESSION_NOTICE = {
  [SESSION_ENDED_REASON.EXPIRED]: {
    tone: 'warn',
    text: '로그인 유효 시간이 지났습니다. 다시 로그인해 주세요.',
  },
  [SESSION_ENDED_REASON.INVALID]: {
    tone: 'error',
    text: '로그인 정보가 더 이상 유효하지 않습니다. 다시 로그인해 주세요.',
  },
  [SESSION_ENDED_REASON.NO_MEMBERSHIP]: {
    tone: 'error',
    text: '이 계정에 연결된 회사 소속을 찾을 수 없습니다. 대표님께 문의해 주세요.',
  },
  [SESSION_ENDED_REASON.MANUAL]: {
    tone: 'info',
    text: '로그아웃했습니다.',
  },
  DEFAULT: {
    tone: 'warn',
    text: '로그인이 필요합니다.',
  },
};

export function noticeFor(reason) {
  return SESSION_NOTICE[reason] ?? SESSION_NOTICE.DEFAULT;
}

const STATUS = {
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  ANONYMOUS: 'anonymous',
};

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [status, setStatus] = useState(() =>
    tokenStore.has() ? STATUS.LOADING : STATUS.ANONYMOUS
  );
  const [session, setSession] = useState(null); // { user, membership, company }
  const [sessionNotice, setSessionNotice] = useState(null);
  // 부트스트랩이 네트워크 · 5xx 로 실패한 경우. 세션은 버리지 않고 재시도 화면을 띄운다.
  const [bootstrapError, setBootstrapError] = useState(null);

  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;

  const clearSession = useCallback((reason) => {
    markSessionEnded();
    setSession(null);
    setStatus(STATUS.ANONYMOUS);
    setSessionNotice(reason ? { reason, ...noticeFor(reason) } : null);
  }, []);

  const loadMe = useCallback(async () => {
    setBootstrapError(null);
    try {
      const me = await authApi.fetchMe();
      setSession(me);
      setStatus(STATUS.AUTHENTICATED);
      return me;
    } catch (caught) {
      const error = toApiError(caught);

      // 401 은 axios 인터셉터가 이미 세션 종료를 알렸다. 여기서 두 번 처리하지 않는다.
      if (error.status === 401) return null;

      // /api/me 의 404 는 "소속이 없다"는 뜻이다(accounts/views.py:229).
      // 로그인은 됐지만 쓸 수 있는 회사가 없으므로 세션을 유지할 이유가 없다.
      if (error.status === 404) {
        clearSession(SESSION_ENDED_REASON.NO_MEMBERSHIP);
        return null;
      }

      // 403 이 /api/me 에서 났다면 토큰이 가리키는 계정 자체를 쓸 수 없다는 뜻이다.
      if (error.status === 403) {
        clearSession(SESSION_ENDED_REASON.INVALID);
        return null;
      }

      // 네트워크 오류와 5xx 는 서버 쪽 사정이다. 토큰을 버리지 않는다.
      setBootstrapError(error);
      setStatus(tokenStore.has() ? STATUS.LOADING : STATUS.ANONYMOUS);
      return null;
    }
  }, [clearSession]);

  useEffect(() => {
    if (!tokenStore.has()) {
      setStatus(STATUS.ANONYMOUS);
      return;
    }
    loadMe();
  }, [loadMe]);

  useEffect(
    () =>
      onSessionEnded((reason) => {
        setSession(null);
        setStatus(STATUS.ANONYMOUS);
        setSessionNotice({ reason, ...noticeFor(reason) });
        navigateRef.current('/login', { replace: true });
      }),
    []
  );

  const routeForRole = useCallback((role, company) => {
    if (role === ROLE.OWNER) {
      // 온보딩을 끝내지 않은 대표는 대시보드가 아니라 온보딩으로 간다.
      return company?.onboardingStatus === 'COMPLETED' ? '/owner' : '/owner/onboarding';
    }
    return '/member/home';
  }, []);

  const finishAuth = useCallback(
    async ({ navigateAfter = true } = {}) => {
      setSessionNotice(null);
      setStatus(STATUS.LOADING);
      const me = await loadMe();
      if (!me) return null;
      if (navigateAfter) {
        navigateRef.current(routeForRole(me.membership?.role, me.company), { replace: true });
      }
      return me;
    },
    [loadMe, routeForRole]
  );

  const login = useCallback(
    async (credentials) => {
      const result = await authApi.login(credentials);
      await finishAuth();
      return result;
    },
    [finishAuth]
  );

  const signupOwner = useCallback(
    async (payload) => {
      const result = await authApi.signupOwner(payload);
      // 회사 코드는 이 응답에만 담겨 온다. 온보딩 마지막 화면에서 다시 쓰므로 들고 간다.
      await finishAuth({ navigateAfter: false });
      navigateRef.current('/owner/onboarding', {
        replace: true,
        state: { companyCode: result?.company?.code },
      });
      return result;
    },
    [finishAuth]
  );

  // 팀원 가입은 근무 위치·역할을 함께 받지 않는다(MemberSignupSerializer 가 안 받는다).
  // 그래서 토큰만 세워 두고, 화면이 PATCH /api/me 까지 마친 뒤 completeAuth() 를 불러야
  // 로그인 상태가 된다.
  const signupMemberAccount = useCallback(async (payload) => {
    setSessionNotice(null);
    return authApi.signupMember(payload);
  }, []);

  const completeAuth = useCallback(() => finishAuth(), [finishAuth]);

  const logout = useCallback(async () => {
    await authApi.logout();
    markSessionEnded();
    setSession(null);
    setStatus(STATUS.ANONYMOUS);
    // reason: 'MANUAL'로 표시해서, RequireAuth가 이걸 자기 알림으로 덮어쓰지 않게 함
    setSessionNotice({ reason: SESSION_ENDED_REASON.MANUAL, tone: 'info', text: '' });
    navigateRef.current('/login', { replace: true });
  }, []);

  // PATCH /api/me 응답이 곧 새 세션이다.
  const applyMe = useCallback((me) => {
    if (me) setSession(me);
  }, []);

  const value = useMemo(
    () => ({
      status,
      isAuthenticated: status === STATUS.AUTHENTICATED,
      isLoading: status === STATUS.LOADING,
      user: session?.user ?? null,
      membership: session?.membership ?? null,
      company: session?.company ?? null,
      role: session?.membership?.role ?? null,
      companyId: session?.company?.id ?? null,
      sessionNotice,
      clearSessionNotice: () => setSessionNotice(null),
      setSessionNotice,
      bootstrapError,
      retryBootstrap: loadMe,
      login,
      signupOwner,
      signupMemberAccount,
      completeAuth,
      logout,
      refreshMe: loadMe,
      applyMe,
      routeForRole,
    }),
    [
      status,
      session,
      sessionNotice,
      bootstrapError,
      loadMe,
      login,
      signupOwner,
      signupMemberAccount,
      completeAuth,
      logout,
      applyMe,
      routeForRole,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export { STATUS as AUTH_STATUS };
