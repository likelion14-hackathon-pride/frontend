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
    <div
      role="tablist"
      aria-label={lang === "ko" ? "온보딩 단계" : "Onboarding steps"}
      className="flex gap-1 overflow-x-auto px-4 md:px-0 md:justify-center border-b border-border bg-white"
    >
      {steps.map((step, index) => {
        const isCurrent = step.id === currentStep;
        const isLocked = step.id > maxUnlockedStep;

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
            className={`flex-none whitespace-nowrap px-4 py-3 text-[12.5px] font-bold border-b-2 transition ${
              isCurrent
                ? "border-accent text-ink"
                : isLocked
                  ? "border-transparent text-faint cursor-not-allowed"
                  : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {step.id}. {lang === "ko" ? step.labelKo : step.labelEn}
          </button>
        );
      })}
    </div>
  );
};

export default StepTabs;
