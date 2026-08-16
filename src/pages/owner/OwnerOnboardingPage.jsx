import { useState } from 'react';
import OnboardingLayout from '../../components/owner/onboarding/OnboardingLayout';
import OnboardingHeader from '../../components/owner/onboarding/OnboardingHeader';
import SourceConnectStep from '../../components/owner/onboarding/step1-source/SourceConnectStep';
import HandbookReviewStep from '../../components/owner/onboarding/step2-handbook/HandbookReviewStep';
import RiskKeywordStep from '../../components/owner/onboarding/step3-risk/RiskKeywordStep';
import CompletionStep from '../../components/owner/onboarding/step4-complete/CompletionStep';
import {
  HANDBOOK_CATEGORIES,
  PROJECT_QUESTION_TEMPLATE,
  EMPTY_ANSWER,
  TOTAL_HANDBOOK_QUESTIONS,
  countConfirmed,
} from '../../components/owner/onboarding/step2-handbook/handbookData';

const INITIAL_RISK_KEYWORDS = [
  { id: 'risk-1', label: '프로덕션 DB', level: 'danger' },
  { id: 'risk-2', label: '배포', level: 'danger' },
  { id: 'risk-3', label: '삭제', level: 'warning' },
];

const INITIAL_HANDBOOK_ANSWERS = {
  'dc-1': {
    selected: 'custom',
    customText: '원격 개발자가 사수 없이도 같은 기준으로 판단하게 만드는 것',
    customSaved: true,
  },
  'dc-2': {
    selected: 'custom',
    customText: '초기 지표 달성 (신속한 기능 배포 및 매출 확보)',
    customSaved: true,
  },
  'dc-3': { selected: 1, customText: '', customSaved: false },
  'dc-4': {
    selected: 'custom',
    customText: '즉시 공개 소통 채널에 서면으로 전체 상황 공유',
    customSaved: true,
  },
};

// 백엔드 발급 API가 준비되면 이 값을 대체하세요.
const MOCK_COMPANY_CODE = 'LIMA-9976';

function OwnerOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [connectedSources, setConnectedSources] = useState(new Set());
  const [handbookAnswers, setHandbookAnswers] = useState(INITIAL_HANDBOOK_ANSWERS);
  const [projects, setProjects] = useState([]);
  const [riskKeywords, setRiskKeywords] = useState(INITIAL_RISK_KEYWORDS);

  const handleStepClick = (stepId) => {
    if (stepId < currentStep) setCurrentStep(stepId);
  };

  const handleToggleSource = (key) => {
    setConnectedSources((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleAnswerQuestion = (questionId, patch) => {
    setHandbookAnswers((prev) => ({
      ...prev,
      [questionId]: { ...EMPTY_ANSWER, ...prev[questionId], ...patch },
    }));
  };

  const handleAddProject = (name) => {
    setProjects((prev) => [...prev, { id: `project-${Date.now()}`, name, expanded: true, answers: {} }]);
  };

  const handleToggleProjectExpand = (projectId) => {
    setProjects((prev) =>
      prev.map((project) => (project.id === projectId ? { ...project, expanded: !project.expanded } : project))
    );
  };

  const handleProjectAnswerChange = (projectId, questionId, patch) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id !== projectId
          ? project
          : {
              ...project,
              answers: {
                ...project.answers,
                [questionId]: { ...EMPTY_ANSWER, ...project.answers[questionId], ...patch },
              },
            }
      )
    );
  };

  const handleSkipProjectToCompanyRules = (projectId) => {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id !== projectId) return project;
        const answers = {};
        PROJECT_QUESTION_TEMPLATE.forEach((question) => {
          answers[question.id] = { ...EMPTY_ANSWER, selected: 'skip' };
        });
        return { ...project, answers, expanded: false };
      })
    );
  };

  const handleAddRiskKeyword = (label, level) => {
    setRiskKeywords((prev) => [...prev, { id: `risk-${Date.now()}`, label, level }]);
  };

  const handleRemoveRiskKeyword = (id) => {
    setRiskKeywords((prev) => prev.filter((keyword) => keyword.id !== id));
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(MOCK_COMPANY_CODE);
  };

  const allHandbookQuestions = HANDBOOK_CATEGORIES.flatMap((category) => category.questions);
  const handbookConfirmedCount = countConfirmed(allHandbookQuestions, handbookAnswers);

  return (
    <OnboardingLayout>
      <OnboardingHeader currentStep={currentStep} onStepClick={handleStepClick} />

      {currentStep === 1 && (
        <SourceConnectStep
          connectedSources={connectedSources}
          onToggleSource={handleToggleSource}
          onCreateDraft={() => setCurrentStep(2)}
        />
      )}

      {currentStep === 2 && (
        <HandbookReviewStep
          handbookAnswers={handbookAnswers}
          onAnswerChange={handleAnswerQuestion}
          projects={projects}
          onAddProject={handleAddProject}
          onToggleProjectExpand={handleToggleProjectExpand}
          onProjectAnswerChange={handleProjectAnswerChange}
          onSkipProjectToCompanyRules={handleSkipProjectToCompanyRules}
          onFinish={() => setCurrentStep(3)}
        />
      )}

      {currentStep === 3 && (
        <RiskKeywordStep
          keywords={riskKeywords}
          onAddKeyword={handleAddRiskKeyword}
          onRemoveKeyword={handleRemoveRiskKeyword}
          onFinish={() => setCurrentStep(4)}
        />
      )}

      {currentStep === 4 && (
        <CompletionStep
          connectedSourcesCount={connectedSources.size}
          handbookConfirmedCount={handbookConfirmedCount}
          handbookTotal={TOTAL_HANDBOOK_QUESTIONS}
          riskKeywordCount={riskKeywords.length}
          companyCode={MOCK_COMPANY_CODE}
          onReviewSettings={() => setCurrentStep(1)}
          onOpenHandbook={() => {
            // TODO: 핸드북 페이지 라우트가 생기면 이동 처리로 교체
          }}
          onCopyCode={handleCopyCode}
        />
      )}
    </OnboardingLayout>
  );
}

export default OwnerOnboardingPage;
