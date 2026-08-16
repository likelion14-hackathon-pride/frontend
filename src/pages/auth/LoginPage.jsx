import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

import mailIcon from '../../assets/icons/mail.svg';
import lockIcon from '../../assets/icons/lock.svg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState('ko');
  const t = translations[lang];

  const [mode, setMode] = useState('signup');
  const [role, setRole] = useState('owner');

  // 팀원 가입 2단계(1: 기본 정보, 2: 회원 설정)
  const [memberStep, setMemberStep] = useState(1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  // 팀원 2단계(회원 설정) 전용 필드
  const [workLocation, setWorkLocation] = useState('');
  const [jobRole, setJobRole] = useState('');

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setMemberStep(1);
  };

  const handleRoleChange = (nextRole) => {
    setRole(nextRole);
    setMemberStep(1);
  };

  const handleSubmit = () => {
    if (mode === 'login') {
      if (!email || !password) {
        alert(t.errorLoginRequired);
        return;
      }
      // 로그인 API 호출 → 응답에 담긴 역할(오너/팀원 여부)로 이동 경로 분기
      // 오너 이메일인지 판별하는 로직은 백엔드에서 처리하고, 응답의 role 값을 그대로 사용
      // const { role: loggedInRole, ...profile } = await loginApi({ email, password });
      const loggedInRole = 'member'; // TODO: 실제 로그인 API 응답 값으로 교체
      navigate(loggedInRole === 'owner' ? '/owner' : '/member');
      return;
    }

    if (role === 'owner') {
      if (!name || !email || !password || !companyName) {
        alert(t.errorRequired);
        return;
      }
      // 오너 회원가입 API 호출
      navigate('/owner/onboarding');
      return;
    }

    // 팀원 가입 1단계: 기본 정보 입력 후 다음 단계로 이동
    if (memberStep === 1) {
      if (!name || !email || !password || !inviteCode) {
        alert(t.errorRequired);
        return;
      }
      setMemberStep(2);
      return;
    }

    // 팀원 가입 2단계: 회원 설정 후 최종 가입
    if (!workLocation || !jobRole) {
      alert(t.errorSetupRequired);
      return;
    }
    // 팀원 회원가입 API 호출
    navigate('/member', {
      state: { profile: { name, locationId: workLocation, role: jobRole } },
    });
  };

  const submitLabel = (() => {
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
      )}

      {mode === 'signup' && role === 'member' && memberStep === 1 && (
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

      <StartButton onClick={handleSubmit}>{submitLabel}</StartButton>
    </AuthLayout>
  );
}
