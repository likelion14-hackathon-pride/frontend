const Header = ({ appTitle, children }) => {
  return (
    <div className="h-[60px] flex-none flex items-center gap-3.5 px-8 bg-white border-b border-[#EFEFF1]">
      <div className="w-[30px] h-[30px] rounded-[9px] bg-accent flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <circle cx="8" cy="5" r="2.6" fill="#fff" />
          <rect x="3" y="9.4" width="10" height="3.4" rx="1.7" fill="#fff" opacity="0.85" />
        </svg>
      </div>
      <div className="text-[13px] font-bold tracking-tight whitespace-nowrap">
        {appTitle}
      </div>

      <div className="ml-auto flex-none flex items-center gap-2.5">
        {children}
      </div>
    </div>
  )
}

export default Header