import axios from 'axios';

import { ENDPOINTS } from './endpoints';
import { ApiError, ERROR_CODE, toApiError } from './errors';

// VITE_API_URL 은 서버 오리진만 담는다. /api/... 는 endpoints.js 가 붙인다.
// 손으로 쓴 .env 는 공백이나 따옴표를 물고 오기 쉽고, 그대로 두면 요청 주소가
// 통째로 깨지면서 원인이 화면에 드러나지 않는다.
const baseURL = String(import.meta.env.VITE_API_URL ?? '')
  .trim()
  .replace(/^['"]|['"]$/g, '')
  .replace(/\/+$/, '');

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const tokenStore = {
  getAccess: () => localStorage.getItem(ACCESS_TOKEN_KEY),
  getRefresh: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  set(access, refresh) {
    if (access) localStorage.setItem(ACCESS_TOKEN_KEY, access);
    if (refresh) localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
    // 새 세션이 섰다. 다음 만료를 다시 알릴 수 있게 잠금을 푼다.
    sessionAlreadyEnded = false;
  },
  clear() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
  has: () => Boolean(localStorage.getItem(ACCESS_TOKEN_KEY)),
};

// 여기서 window.location 으로 튕기지 않는다. 화면을 통째로 새로 그리면
// "왜 로그인 화면으로 돌아왔는지"를 보여 줄 수 없기 때문이다.
// AuthContext 가 이 신호를 받아 사유와 함께 /login 으로 보낸다.
export const SESSION_ENDED_REASON = {
  EXPIRED: 'EXPIRED', // 액세스 토큰이 만료됐고 갱신도 실패했다
  INVALID: 'INVALID', // 서버가 토큰을 거부했다(재로그인 필요)
  NO_MEMBERSHIP: 'NO_MEMBERSHIP', // 로그인은 됐는데 소속이 없다(/api/me 404)
  MANUAL: 'MANUAL', // 사용자가 직접 로그아웃했다
};

const listeners = new Set();

// 요청 여러 개가 동시에 401 을 받으면 종료 신호도 여러 번 온다.
// 두 번째부터는 토큰이 이미 지워져 있어 사유가 EXPIRED 에서 INVALID 로 뒤바뀐다.
// 처음 판단한 사유가 맞으므로 한 번만 알린다.
let sessionAlreadyEnded = false;

export function onSessionEnded(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emitSessionEnded(reason) {
  if (sessionAlreadyEnded) return;
  sessionAlreadyEnded = true;
  tokenStore.clear();
  listeners.forEach((listener) => listener(reason));
}

// AuthContext 가 /api/me 결과로 직접 세션을 접을 때 쓴다.
// 뒤늦게 도착한 401 이 사유를 덮어쓰지 않도록 같은 잠금을 건다.
export function markSessionEnded() {
  sessionAlreadyEnded = true;
  tokenStore.clear();
}

export { emitSessionEnded };

const axiosInstance = axios.create({ baseURL, timeout: 30000 });

axiosInstance.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token && !config.skipAuth) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 토큰 갱신은 한 번에 하나만. 동시에 여러 요청이 401 을 받아도
// 리프레시는 한 번만 돌고 나머지는 그 결과를 기다린다.
let refreshInFlight = null;

async function refreshAccessToken() {
  const refresh = tokenStore.getRefresh();
  if (!refresh) return null;

  if (!refreshInFlight) {
    refreshInFlight = axios
      .post(`${baseURL}${ENDPOINTS.auth.tokenRefresh}`, { refresh })
      .then((response) => {
        const access = response.data?.access;
        if (!access) return null;
        tokenStore.set(access, null);
        return access;
      })
      .catch(() => null)
      .finally(() => {
        refreshInFlight = null;
      });
  }

  return refreshInFlight;
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const response = error?.response;
    const config = error?.config ?? {};

    // 응답이 없다 = 네트워크 오류. 5xx 도 마찬가지로 세션과 무관하다.
    // 여기서 로그아웃하면 서버가 잠깐 죽었을 때 전원이 튕긴다.
    if (!response || response.status >= 500) {
      return Promise.reject(toApiError(error));
    }

    if (response.status === 401 && !config.skipAuth && !config._retriedAfterRefresh) {
      const access = await refreshAccessToken();
      if (access) {
        config._retriedAfterRefresh = true;
        config.headers = { ...config.headers, Authorization: `Bearer ${access}` };
        return axiosInstance(config);
      }
      // 갱신까지 실패했다. 이제야 세션을 버린다.
      emitSessionEnded(
        tokenStore.getRefresh() ? SESSION_ENDED_REASON.EXPIRED : SESSION_ENDED_REASON.INVALID
      );
      return Promise.reject(toApiError(error));
    }

    // 로그인·가입처럼 토큰 없이 부르는 요청의 401 은 세션과 무관하다.
    // 여기서 세션을 접으면 로그인 실패가 남의 세션까지 끊는다.
    if (response.status === 401 && !config.skipAuth) {
      emitSessionEnded(SESSION_ENDED_REASON.EXPIRED);
      return Promise.reject(toApiError(error));
    }

    // 403 은 세션이 아니라 권한 문제다(companies/access.py 의 PermissionDenied).
    // 팀원이 대표 전용 화면을 열었을 뿐인 경우까지 로그아웃시키면 안 되므로
    // 여기서는 에러로만 올리고, 세션 종료는 AuthContext 가 /api/me 결과로 판단한다.
    return Promise.reject(toApiError(error));
  }
);

// 성공 응답의 본문만 꺼내 쓰는 얇은 래퍼.
export async function request(config) {
  const response = await axiosInstance(config);
  return response.data;
}

export const api = {
  get: (url, config) => request({ ...config, method: 'get', url }),
  post: (url, data, config) => request({ ...config, method: 'post', url, data }),
  patch: (url, data, config) => request({ ...config, method: 'patch', url, data }),
  put: (url, data, config) => request({ ...config, method: 'put', url, data }),
  delete: (url, config) => request({ ...config, method: 'delete', url }),
};

export { ApiError, ERROR_CODE };
export default axiosInstance;
