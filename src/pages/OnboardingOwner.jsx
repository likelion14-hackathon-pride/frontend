import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import OwnerBadge from "../components/OwnerBadge";
import StepTabs from "../components/onboarding/StepTabs";
import StepPlaceholder from "../components/onboarding/steps/StepPlaceholder";
import { useLanguage } from "../context/LanguageContext";
import StepSources from "../components/onboarding/steps/StepSources";
import StepDraftReview from "../components/onboarding/steps/StepDraftReview";
import StepGuardrails from "../components/onboarding/steps/StepGuardrails";

const STEPS = [
  { id: 1, labelKo: "소스 연결", labelEn: "Connect sources" },
  { id: 2, labelKo: "핸드북 초안", labelEn: "Draft review" },
  { id: 3, labelKo: "되돌릴 수 없는 작업", labelEn: "Guardrails" },
  { id: 4, labelKo: "완료", labelEn: "Done" },
];

const OnboardingOwner = () => {
  const { lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [maxUnlockedStep, setMaxUnlockedStep] = useState(1);
  const headingRef = useRef(null);

  // 단계 이동 시 새 헤딩으로 포커스 이동 (스펙 8번 접근성 항목)
  useEffect(() => {
    headingRef.current?.focus();
  }, [currentStep]);

  // 모바일 가로 스크롤 탭바에서 현재 단계 자동 정렬
  useEffect(() => {
    document.getElementById(`onboarding-tab-${currentStep}`)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentStep]);

  const handleStepChange = (stepId) => {
    if (stepId <= maxUnlockedStep) setCurrentStep(stepId);
  };

  // 실제 스텝 컴포넌트가 들어오면 각 스텝의 '완료' 액션에서 호출하게 될 함수
  const handleNext = () => {
    const nextStep = Math.min(currentStep + 1, STEPS.length);
    setMaxUnlockedStep((prev) => Math.max(prev, nextStep));
    setCurrentStep(nextStep);
  };

  const activeStep = STEPS.find((step) => step.id === currentStep);

  return (
    <div className="min-h-screen bg-canvas font-display flex flex-col">
      <Header appTitle="SAI">
        <OwnerBadge lang={lang} />
      </Header>

      <StepTabs
        steps={STEPS}
        currentStep={currentStep}
        maxUnlockedStep={maxUnlockedStep}
        onStepChange={handleStepChange}
        lang={lang}
      />

      <div
        id={`onboarding-panel-${currentStep}`}
        role="region"
        aria-labelledby={`onboarding-tab-${currentStep}`}
        className="flex-1"
      >
        {currentStep === 1 ? (
          <StepSources
            headingRef={headingRef}
            onNext={handleNext}
            lang={lang}
          />
        ) : currentStep === 2 ? (
          <StepDraftReview
            headingRef={headingRef}
            onNext={handleNext}
            lang={lang}
          />
        ) : currentStep === 3 ? (
            <StepGuardrails headingRef={headingRef} onNext={handleNext} lang={lang} />
        ) : (
          <StepPlaceholder
            title={lang === "ko" ? activeStep.labelKo : activeStep.labelEn}
            headingRef={headingRef}
            onNext={handleNext}
            isLastStep={currentStep === STEPS.length}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
};

export default OnboardingOwner;
