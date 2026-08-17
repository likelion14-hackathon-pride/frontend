import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ROLE } from '../apis/constants';
import { ErrorState, LoadingState } from '../components/common/AsyncStates';
import { useAuth } from '../context/AuthContext';

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(127deg, #ffe7d4 0%, #fff2e8 46%, #ffdcc2 100%);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 460px;
  padding: 32px 34px;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 24px 60px -28px rgba(23, 44, 90, 0.4);
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #17171b;
`;

const Body = styled.p`
  margin: 0;
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 13.5px;
  line-height: 1.7;
  color: #6b6b73;
`;

const Button = styled.button`
  margin-top: 6px;
  padding: 11px 20px;
  border: none;
  border-radius: 999px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

// 세션 부트스트랩이 네트워크나 5xx 로 실패했을 때는 로그인 화면으로 보내지 않는다.
// 서버가 잠깐 죽었다고 토큰을 버리면 복구할 방법이 없기 때문이다.
export function RequireAuth() {
  const { isAuthenticated, isLoading, bootstrapError, retryBootstrap, setSessionNotice } = useAuth();
  const location = useLocation();

  const blocked = !isAuthenticated && !isLoading && !bootstrapError;

  useEffect(() => {
    if (blocked) {
      setSessionNotice((prev) =>
        prev ?? { reason: null, tone: 'warn', text: '로그인이 필요합니다.' }
      );
    }
  }, [blocked, setSessionNotice]);

  if (bootstrapError) {
    return (
      <Screen>
        <Card>
          <Title>서버에 연결하지 못했습니다</Title>
          <ErrorState error={bootstrapError} onRetry={retryBootstrap} compact />
          <Body>
            로그인 정보는 그대로 두었습니다. 연결이 돌아오면 다시 시도해 주세요.
          </Body>
        </Card>
      </Screen>
    );
  }

  if (isLoading) {
    return (
      <Screen>
        <LoadingState label="로그인 정보를 확인하는 중…" />
      </Screen>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

// 역할이 다르다고 세션을 버리지는 않는다. 왜 막혔는지 보여 주고 제 자리로 보낸다.
export function RequireRole({ role }) {
  const { role: myRole, company, routeForRole } = useAuth();
  const navigate = useNavigate();

  if (myRole === role) return <Outlet />;

  const target = routeForRole(myRole, company);
  const roleLabel = role === ROLE.OWNER ? '대표' : '팀원';

  return (
    <Screen>
      <Card>
        <Title>{roleLabel} 전용 화면입니다</Title>
        <Body>
          지금 계정의 역할은 <strong>{myRole ?? '알 수 없음'}</strong> 입니다. 이 화면은{' '}
          <strong>{role}</strong> 계정만 열 수 있습니다.
        </Body>
        <Button type="button" onClick={() => navigate(target, { replace: true })}>
          내 화면으로 가기
        </Button>
      </Card>
    </Screen>
  );
}

export function RedirectIfAuthenticated({ children }) {
  const { isAuthenticated, role, company, routeForRole } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={routeForRole(role, company)} replace />;
  }
  return children;
}
