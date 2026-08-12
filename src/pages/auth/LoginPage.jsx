import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/ui/AuthLayout';
import ModeToggle from '../../components/auth/ui/ModeToggle';
import RoleSelect from '../../components/auth/ui/RoleSelect';
import Input from '../../components/auth/ui/Input';
import { StartButton } from '../../components/auth/ui/Button';
import OwnerSignupForm from '../../components/auth/OwnerSignupForm';
import MemberSignupForm from '../../components/auth/MemberSignupForm';
import GuestSection from '../../components/auth/ui/GuestSection';
import { translations } from '../../components/auth/translations';

import mailIcon from '../../assets/icons/mail.svg';
import lockIcon from '../../assets/icons/lock.svg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState('ko');
  const t = translations[lang];

  const [mode, setMode] = useState('signup');
  const [role, setRole] = useState('owner');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleSubmit = () => {
    if (mode === 'login') {
      if (!email || !password) {
        alert(t.errorLoginRequired);
        return;
      }
      // 로그인 API 호출 넣기
      return;
    }

    if (role === 'owner') {
      if (!name || !email || !password || !companyName) {
        alert(t.errorRequired);
        return;
      }
      // 오너 회원가입 API 호출
    } else {
      if (!name || !email || !password || !inviteCode) {
        alert(t.errorRequired);
        return;
      }
      // 팀원 회원가입 API 호출
    }
  };

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
        onChange={setMode}
        signupLabel={t.signupLabel}
        loginLabel={t.loginLabel}
      />

      {mode === 'signup' && (
        <RoleSelect
          value={role}
          onChange={setRole}
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

      {mode === 'signup' && role === 'member' && (
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

      <StartButton onClick={handleSubmit}>
        {mode === 'signup' ? (role === 'owner' ? t.submitOwner : t.submitMember) : t.submitLogin}
      </StartButton>
      <GuestSection
        onOwnerPreview={() => navigate('/owner')}
        onMemberPreview={() => navigate('/member')}
        t={t}
      />
    </AuthLayout>
  );
}
