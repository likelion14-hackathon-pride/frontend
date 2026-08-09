const OwnerBadge = ({ lang }) => {
  return (
    <div className="flex-none flex items-center gap-2.5 py-1.5 pl-1.5 pr-3.5 bg-canvas rounded-full">
      <span className="w-6 h-6 flex-none rounded-full bg-ink text-white text-[10px] font-bold flex items-center justify-center">
        {lang === "ko" ? "대표" : "OW"}
      </span>
      <span className="text-[11.5px] font-semibold text-muted whitespace-nowrap">
        {lang === "ko" ? "대표 계정 · Owner" : "Owner account"}
      </span>
    </div>
  );
};

export default OwnerBadge;
