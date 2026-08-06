const StepPlaceholder = ({ title, headingRef, onNext, isLastStep, lang }) => {
  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-10">
      <h2 ref={headingRef} tabIndex={-1} className="text-[18px] font-extrabold outline-none">
        {title}
      </h2>
      <p className="text-[12.5px] text-muted mt-2">
        {lang === 'ko' ? '이 단계는 아직 구현 전입니다.' : 'This step is not implemented yet.'}
      </p>
      {!isLastStep && (
        <button
          type="button"
          onClick={onNext}
          className="mt-6 bg-accent text-white rounded-cta px-4 py-2.5 text-[13px] font-bold"
        >
          {lang === 'ko' ? '다음 단계로 (임시)' : 'Next step (temp)'}
        </button>
      )}
    </div>
  )
}

export default StepPlaceholder