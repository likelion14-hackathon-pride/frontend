const LanguageToggle = ({ lang, setLang }) => {
  return (
    <div className="flex items-center gap-0.5 p-[3px] bg-[#F2F2F4] rounded-full">
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
  )
}

export default LanguageToggle