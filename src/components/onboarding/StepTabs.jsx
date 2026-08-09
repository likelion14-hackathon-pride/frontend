const StepTabs = ({
  steps,
  currentStep,
  maxUnlockedStep,
  onStepChange,
  lang,
}) => {
  const handleKeyDown = (e, index) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();

    const direction = e.key === "ArrowRight" ? 1 : -1;
    let nextIndex = index + direction;

    while (nextIndex >= 0 && nextIndex < steps.length) {
      if (steps[nextIndex].id <= maxUnlockedStep) {
        onStepChange(steps[nextIndex].id);
        document
          .getElementById(`onboarding-tab-${steps[nextIndex].id}`)
          ?.focus();
        break;
      }
      nextIndex += direction;
    }
  };

  return (
    <div className="flex-none bg-white border-b border-border">
      <div
        role="tablist"
        aria-label={lang === "ko" ? "온보딩 단계" : "Onboarding steps"}
        className="max-w-[1080px] mx-auto flex items-stretch overflow-x-auto px-4 md:px-8"
      >
        {steps.map((step, index) => {
          const isCurrent = step.id === currentStep;
          const isDone = step.id < currentStep;
          const isLocked = step.id > maxUnlockedStep;

          const circleClass = isCurrent
            ? "bg-accent text-white"
            : isDone
              ? "bg-ink text-white"
              : "bg-[#E7E7EB] text-[#A0A0A8]";

          return (
            <button
              key={step.id}
              id={`onboarding-tab-${step.id}`}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              aria-current={isCurrent ? "step" : undefined}
              aria-controls={`onboarding-panel-${step.id}`}
              tabIndex={isCurrent ? 0 : -1}
              disabled={isLocked}
              onClick={() => !isLocked && onStepChange(step.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`flex-none flex items-center gap-2.5 px-3.5 py-4 text-left border-b-2 transition ${
                isCurrent ? "border-accent opacity-100" : "border-transparent"
              } ${isLocked ? "opacity-40 cursor-not-allowed" : isCurrent ? "" : "opacity-55 hover:opacity-80"}`}
            >
              <span
                className={`w-6 h-6 flex-none rounded-full flex items-center justify-center text-[11.5px] font-extrabold ${circleClass}`}
              >
                {step.id}
              </span>
              <span className="flex flex-col items-start leading-tight min-w-0">
                <span className="text-[12.5px] font-bold whitespace-nowrap">
                  {lang === "ko" ? step.labelKo : step.labelEn}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepTabs;
