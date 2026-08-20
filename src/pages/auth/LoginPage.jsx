import { useState } from 'react';
import styled from 'styled-components';

import * as authApi from '../../apis/auth';
import { toApiError } from '../../apis/errors';
import AuthLayout from '../../components/auth/ui/AuthLayout';
import ModeToggle from '../../components/auth/ui/ModeToggle';
import RoleSelect from '../../components/auth/ui/RoleSelect';
import BackButton from '../../components/auth/ui/BackButton';
import Input from '../../components/auth/ui/Input';
import { StartButton } from '../../components/auth/ui/Button';
import OwnerSignupForm from '../../components/auth/OwnerSignupForm';
import MemberSignupForm from '../../components/auth/MemberSignupForm';
import MemberSetupForm from '../../components/auth/MemberSetupForm';
import { translations } from '../../components/auth/translations';
import { useAuth } from '../../context/AuthContext';

import mailIcon from '../../assets/icons/mail.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Notice = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 11px 14px;
  border-radius: 12px;
  font-family: Pretendard, 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  line-height: 1.6;
  border: 1px solid
    ${({ $tone }) => ($tone === 'error' ? '#F6CACD' : $tone === 'info' ? '#DDE2EA' : '#F5E2AE')};
  background: ${({ $tone }) =>
    $tone === 'error' ? '#FEF2F3' : $tone === 'info' ? '#F7F8FA' : '#FFF8E3'};
  color: ${({ $tone }) => ($tone === 'error' ? '#96131C' : $tone === 'info' ? '#525A66' : '#7A5A05')};
`;

const FieldError = styled.p`
  margin: -2px 0 0;
  font-family: Pretendard, 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  color: #d62a34;
`;

export default function LoginPage() {
  const {
    login,
    signupOwner,
    signupMemberAccount,
    completeAuth,
    sessionNotice,
    clearSessionNotice,
  } = useAuth();

  const [lang, setLang] = useState('ko');
  const t = translations[lang];

  const [mode, setMode] = useState('login');
  const [role, setRole] = useState('owner');

  const [memberStep, setMemberStep] = useState(1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const [workLocation, setWorkLocation] = useState('');
  const [jobRole, setJobRole] = useState('');

  const [submitting, setSubmitting] = useState(false);
  // 서버 에러는 봉투의 field 를 보고 칸 밑에 붙이거나(폼 오류) 위쪽 배너로 띄운다.
  const [formError, setFormError] = useState(null); // { field, message }

  const fieldError = (fieldName) => (formError?.field === fieldName ? formError.message : null);
  const bannerError = formError && !formError.field ? formError.message : null;

  const showError = (caught) => {
    const error = toApiError(caught);
    setFormError({ field: error.field, message: error.message });
  };

  const localError = (message) => setFormError({ field: null, message });

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setMemberStep(1);
    setFormError(null);
  };

  const handleRoleChange = (nextRole) => {
    setRole(nextRole);
    setMemberStep(1);
    setFormError(null);
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setFormError(null);
    clearSessionNotice();

    if (mode === 'login') {
      if (!email || !password) {
        localError(t.errorLoginRequired);
        return;
      }
      setSubmitting(true);
      try {
        await login({ email, password });
      } catch (caught) {
        showError(caught);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (role === 'owner') {
      if (!name || !email || !password || !companyName) {
        localError(t.errorRequired);
        return;
      }
      setSubmitting(true);
      try {
        await signupOwner({ email, password, displayName: name, companyName });
      } catch (caught) {
        showError(caught);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // 팀원 가입 1단계: 여기서는 서버를 부르지 않는다. 값만 확인하고 다음으로.
    if (memberStep === 1) {
      if (!name || !email || !password || !inviteCode) {
        localError(t.errorRequired);
        return;
      }
      setMemberStep(2);
      return;
    }

    // 팀원 가입 2단계: 계정을 만들고, 근무 위치·역할을 PATCH /api/me 로 저장한 뒤 입장.
    if (!workLocation || !jobRole) {
      localError(t.errorSetupRequired);
      return;
    }

    setSubmitting(true);
    try {
      await signupMemberAccount({
        email,
        password,
        displayName: name,
        companyCode: inviteCode,
      });
    } catch (caught) {
      // 회사 코드나 이메일 문제면 1단계 칸으로 돌려보낸다.
      const error = toApiError(caught);
      setFormError({ field: error.field, message: error.message });
      if (['companyCode', 'email', 'password'].includes(error.field)) setMemberStep(1);
      setSubmitting(false);
      return;
    }

    try {
      await authApi.updateMe({ location: workLocation, role: jobRole });
    } catch (caught) {
      // 계정은 이미 만들어졌다. 설정만 실패했으므로 알리고 그대로 진행한다.
      // 홈의 설정 모달에서 다시 고칠 수 있다.
      showError(caught);
    }

    try {
      await completeAuth();
    } catch (caught) {
      showError(caught);
    } finally {
      setSubmitting(false);
    }
  };

  const submitLabel = (() => {
    if (submitting) return '처리 중…';
    if (mode === 'login') return t.submitLogin;
    if (role === 'owner') return t.submitOwner;
    return memberStep === 1 ? t.submitMember : t.submitSetup;
  })();

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
      {/* 세션이 끊겨 되돌아온 경우 그 이유를 반드시 보여 준다. */}
      {sessionNotice?.text && <Notice $tone={sessionNotice.tone}>{sessionNotice.text}</Notice>}
      {bannerError && <Notice $tone="error">{bannerError}</Notice>}

      <ModeToggle
        value={mode}
        onChange={handleModeChange}
        signupLabel={t.signupLabel}
        loginLabel={t.loginLabel}
      />

      {mode === 'signup' && role === 'member' && memberStep === 2 && (
        <BackButton onClick={() => setMemberStep(1)}>{t.backLabel}</BackButton>
      )}

      {mode === 'signup' && !(role === 'member' && memberStep === 2) && (
        <RoleSelect
          value={role}
          onChange={handleRoleChange}
          ownerLabel={t.ownerLabel}
          memberLabel={t.memberLabel}
        />
      )}

      {mode === 'signup' && role === 'owner' && (
        <>
          <OwnerSignupForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            companyName={companyName}
            setCompanyName={setCompanyName}
            t={t}
          />
          {fieldError('email') && <FieldError>{fieldError('email')}</FieldError>}
          {fieldError('password') && <FieldError>{fieldError('password')}</FieldError>}
        </>
      )}

      {mode === 'signup' && role === 'member' && memberStep === 1 && (
        <>
          <MemberSignupForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            inviteCode={inviteCode}
            setInviteCode={setInviteCode}
            t={t}
          />
          {fieldError('email') && <FieldError>{fieldError('email')}</FieldError>}
          {fieldError('password') && <FieldError>{fieldError('password')}</FieldError>}
          {fieldError('companyCode') && <FieldError>{fieldError('companyCode')}</FieldError>}
        </>
      )}

      {mode === 'signup' && role === 'member' && memberStep === 2 && (
        <MemberSetupForm
          workLocation={workLocation}
          setWorkLocation={setWorkLocation}
          jobRole={jobRole}
          setJobRole={setJobRole}
          t={t}
        />
      )}

      {mode === 'login' && (
        <>
          <Input
            label={t.emailLabel}
            name="email"
            type="email"
            icon={<img src={mailIcon} alt="" width={14} height={14} />}
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label={t.passwordLabel}
            name="password"
            type="password"
            icon={<img src={lockIcon} alt="" width={14} height={14} />}
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      )}

      <StartButton onClick={handleSubmit} disabled={submitting}>
        {submitLabel}
      </StartButton>
    </AuthLayout>
  );
}
