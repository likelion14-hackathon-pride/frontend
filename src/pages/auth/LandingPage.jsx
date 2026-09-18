import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AuthLayout from '../../components/auth/ui/AuthLayout';
import { StartButton } from '../../components/auth/ui/Button';
import { translations } from '../../components/auth/translations';
import { ROLE } from '../../apis/constants';
import { useAuth } from '../../context/AuthContext';

const Notice = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 11px 14px;
  border-radius: 12px;
  font-family: Pretendard, 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  line-height: 1.6;
  border: 1px solid #f6cacd;
  background: #fef2f3;
  color: #96131c;
`;

const TitleBlock = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-family: Pretendard, sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #17171b;
`;

const Subtitle = styled.p`
  margin-top: 4px;
  font-family: Pretendard, sans-serif;
  font-size: 13.5px;
  color: #6b6b73;
`;

const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 6px;
`;

const LoginLink = styled.button`
  width: 100%;
  margin-top: 6px;
  background: none;
  border: none;
  padding: 0;
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  color: #8a8a93;
  text-decoration: underline;
  cursor: pointer;
`;

export default function LandingPage() {
  const { demoLogin } = useAuth();
  const navigate = useNavigate();

  const [lang, setLang] = useState('ko');
  const t = translations[lang];

  const [pendingRole, setPendingRole] = useState(null);
  const [error, setError] = useState(null);

  async function handleDemo(role) {
    if (pendingRole) return;
    setError(null);
    setPendingRole(role);
    try {
      await demoLogin(role);
    } catch {
      // 서버 에러 코드와 무관하게 "체험 계정을 못 쓴다"는 뜻만 전달한다.
      setError(t.demoLoginFailed);
    } finally {
      setPendingRole(null);
    }
  }

  return (
    <AuthLayout
      brandWelcome={t.brandWelcome}
      heroTitle={t.heroTitle}
      heroDescriptionLine1={t.heroDescriptionLine1}
      heroDescriptionLine2={t.heroDescriptionLine2}
      checklist={t.checklist}
      lang={lang}
      onLangChange={setLang}
    >
      {error && <Notice>{error}</Notice>}

      <TitleBlock>
        <Title>{t.landingTitle}</Title>
        <Subtitle>{t.landingSubtitle}</Subtitle>
      </TitleBlock>

      <ButtonStack>
        <StartButton
          type="button"
          onClick={() => handleDemo(ROLE.OWNER)}
          disabled={Boolean(pendingRole)}
        >
          {pendingRole === ROLE.OWNER ? t.landingLoggingIn : t.landingOwnerButton}
        </StartButton>
        <StartButton
          type="button"
          onClick={() => handleDemo(ROLE.MEMBER)}
          disabled={Boolean(pendingRole)}
        >
          {pendingRole === ROLE.MEMBER ? t.landingLoggingIn : t.landingMemberButton}
        </StartButton>
      </ButtonStack>

      <LoginLink type="button" onClick={() => navigate('/login')}>
        {t.landingLoginLink}
      </LoginLink>
    </AuthLayout>
  );
}
