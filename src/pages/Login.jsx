import { useState } from 'react'
import Header from '../components/Header'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom' 

const Login = () => {
  const {lang, setLang} = useLanguage()
  const [authMode, setAuthMode] = useState('signup')
  const [role, setRole] = useState('owner')

  const isOwnerSignup = role === 'owner' && authMode === 'signup'
  const needsCode = role === 'member' || (role === 'owner' && authMode === 'login') 

  const submitLabel =
  role === 'member'
    ? (lang === 'ko' ? '회사에 합류하기' : 'Join the company')
    : authMode === 'signup'
      ? (lang === 'ko' ? '회사 만들고 설정 시작' : 'Create company & start setup')
      : (lang === 'ko' ? '로그인' : 'Sign in')


  const [company, setCompany] = useState('')

  const companyCode = company.trim()           
    ? company.trim().replace(/\s+/g, '').toUpperCase().slice(0, 6) + '-4821'
    : 'ECHO-4821'

  return (
    <div className="min-h-screen bg-canvas font-display flex flex-col">
      <Header appTitle='SAI'>
        <div className="ml-auto flex-none flex items-center gap-0.5 p-[3px] bg-[#F2F2F4] rounded-full">
          <button
            type="button"
            onClick={() => setLang('ko')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-bold transition ${
              lang === 'ko' ? 'bg-white text-ink shadow-[0_1px_3px_rgba(17,17,20,0.1)]' : 'bg-transparent text-muted'
            }`}
          >
            🇰🇷 한국어
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-bold transition ${
              lang === 'en' ? 'bg-white text-ink shadow-[0_1px_3px_rgba(17,17,20,0.1)]' : 'bg-transparent text-muted'
            }`}
          >
            <span className="text-[13px]">🇺🇸</span>English
          </button>
        </div>
      </Header>

      <div className="flex-1 flex items-start justify-center px-8 pt-14 pb-20">
        <form className="w-full max-w-md bg-white rounded-card shadow-[0_14px_40px_rgba(17,17,20,0.05),0_14px_40px_rgba(17,17,20,0.05)] p-8 space-y-5">

          <div className="flex gap-1 bg-[#EDEDF0] p-1 rounded-input">
            <button
              type="button"
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2 rounded-lg text-[11.5px] font-bold transition ${
                authMode === 'signup' ? 'bg-white text-ink shadow-sm' : 'bg-transparent text-muted'
              }`}
            >
              {lang === 'ko' ? '계정 만들기' : 'Create an account'}
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-2 rounded-lg text-[11.5px] font-bold transition ${
                authMode === 'login' ? 'bg-white text-ink shadow-sm' : 'bg-transparent text-muted'
              }`}
            >
              {lang === 'ko' ? '이미 계정이 있습니다' : 'I already have an account'}
            </button>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#B4B4BC] tracking-wider mb-2">
              {lang === 'ko' ? '역할 선택' : 'Choose your role'}
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setRole('owner')}
                className={`p-3.5 rounded-[13px] text-[13.5px] font-bold text-center border transition ${
                  role === 'owner'
                    ? 'bg-[#FFF6EC] border-[#F0C88E] text-ink' : 'bg-field border-[#EFEFF1] text-muted'
                }`}
              >
                {lang === 'ko' ? '대표 · Owner' : 'Owner'}
              </button>
              <button
                type="button"
                onClick={() => setRole('member')}
                className={`p-3.5 rounded-[13px] text-[13.5px] font-bold text-center border transition ${
                  role === 'member'
                    ? 'bg-[#FFF6EC] border-[#F0C88E] text-ink' : 'bg-field border-[#EFEFF1] text-muted'
                }`}
              >
                {lang === 'ko' ? '팀원 · Member' : 'Member'}
              </button>
            </div>
          </div>

          {isOwnerSignup && (
            <div className="bg-[#FFF6EC] border border-[#F6DCC0] rounded-input p-3.5 text-[11.5px] text-[#8A5A1E] leading-relaxed">
              {lang === 'ko' ? '여기서 만든 계정은 대표(Owner) 계정이 됩니다.' : 'The account you create here becomes the Owner account.'}
            </div>
          )}

          <label className="flex flex-col gap-1.5">
            <span className="text-[11.5px] font-bold text-muted">
              {lang === 'ko' ? '아이디 (업무용 이메일)' : 'Email (work address)'}
            </span>
            <input
              type="email"
              placeholder="daepyo@company.com"
              className="border border-border rounded-input px-3.5 py-3 text-sm bg-field outline-none focus:border-accent transition"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[11.5px] font-bold text-muted">
              {lang === 'ko' ? '비밀번호' : 'Password'}
            </span>
            <input
              type="password"
              placeholder={authMode ==='signup' ? (lang === 'ko' ? '8자 이상' : '8+ characters') : ''}
              className="border border-border rounded-input px-3.5 py-3 text-sm bg-field outline-none focus:border-accent transition"
            />
          </label>

          {isOwnerSignup && (
            <>
            <label className="flex flex-col gap-1.5">
              <span className="text-[11.5px] font-bold text-muted">
                {lang === 'ko' ? '회사 이름' : 'Company name'}
              </span>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value.replace(/[0-9]/g, ''))}
                placeholder={lang === 'ko' ? '예: 에코랩' : 'e.g. Echo Lab'}
                className="border border-border rounded-input px-3.5 py-3 text-sm bg-field outline-none focus:border-accent transition"
              />
            </label>
            <div className="bg-canvas rounded-xl px-3.5 py-3.5">
                <div className="text-[11px] font-bold text-muted">
                {lang === 'ko' ? '발급될 회사 코드' : 'Your company code'}
                </div>
                <div className="text-[17px] font-extrabold font-mono tracking-wider mt-1">
                    {companyCode}
                </div>
            </div>
            </>
          )}

          {needsCode && (
            <label className="flex flex-col gap-1.5">
                <span className="text-[11.5px] font-bold text-muted">
                    {lang === 'ko' ? '회사 코드' : 'Company code'}
                </span>
                <input
                    placeholder="ECHO-4821"
                    className="border border-border rounded-input px-3.5 py-3 text-sm font-mono tracking-wider bg-field outline-none focus:border-accent transition"
                />
            </label>
          )}

          {role === 'member' && (
            <label className="flex flex-col gap-1.5">
                <span className="text-[11.5px] font-bold text-muted">
                    {lang === 'ko' ? '읽을 언어' : 'Reading language'}
                </span>
                <select className="border border-border rounded-input px-3.5 py-3 text-sm bg-field outline-none focus:border-accent transition">
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                </select>
            </label>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-white rounded-cta py-3 text-[13.5px] font-bold
                       hover:brightness-95 transition"
          >
            {submitLabel}
          </button>
        
            <div className="flex items-center gap-2.5">
                <div className="flex-1 h-px bg-[#EFEFF1]" />
                <span className="text-[10px] font-bold text-[#C4C4CC] tracking-wider whitespace-nowrap">
                    {lang === 'ko' ? '로그인 없이 둘러보기' : 'Look around without signing in'}
                </span>
                <div className="flex-1 h-px bg-[#EFEFF1]" />
            </div>

            <div className="flex gap-2">
                <Link
                    to="/onboarding/owner"    // 임의값, 나중에 보고 수정하기 (밑에 app도!!)
                    className="flex-1 text-center py-2.5 rounded-input bg-[#F2F2F4] text-[#6B6B73] text-xs font-bold hover:bg-[#EAEAED] transition"
                >
                    {lang === 'ko' ? '대표 화면' : 'Owner screens'}
                </Link>
                <Link
                    to="/app"    
                    className="flex-1 text-center py-2.5 rounded-input bg-[#F2F2F4] text-[#6B6B73] text-xs font-bold hover:bg-[#EAEAED] transition"
                >
                    {lang === 'ko' ? '팀원 화면' : 'Member screens'}
                </Link>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Login