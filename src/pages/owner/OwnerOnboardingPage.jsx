import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as companiesApi from '../../apis/companies';
import * as onboardingApi from '../../apis/onboarding';
import * as policyApi from '../../apis/policy';
import * as sourcesApi from '../../apis/sources';
import { ONBOARDING_STEP } from '../../apis/constants';
import OnboardingLayout from '../../components/owner/onboarding/OnboardingLayout';
import OnboardingHeader from '../../components/owner/onboarding/OnboardingHeader';
import SourceConnectStep from '../../components/owner/onboarding/step1-source/SourceConnectStep';
import HandbookReviewStep from '../../components/owner/onboarding/step2-handbook/HandbookReviewStep';
import RiskKeywordStep from '../../components/owner/onboarding/step3-risk/RiskKeywordStep';
import CompletionStep from '../../components/owner/onboarding/step4-complete/CompletionStep';
import { ErrorState, InlineError, LoadingState } from '../../components/common/AsyncStates';
import { useAuth } from '../../context/AuthContext';
import { useAsync, useMutation } from '../../hooks/useAsync';

function OwnerOnboardingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { companyId, company, refreshMe } = useAuth();

  // 가입 응답에만 담겨 오는 회사 코드. 없으면 회사 조회로 채운다.
  const [companyCode, setCompanyCode] = useState(location.state?.companyCode ?? company?.code ?? '');

  const [currentStep, setCurrentStep] = useState(1);
  const [stepError, setStepError] = useState(null);
  const [summary, setSummary] = useState(null);

  const companyQuery = useAsync(
    () => companiesApi.fetchCompany(companyId),
    [companyId],
    { enabled: Boolean(companyId) && !companyCode }
  );

  useEffect(() => {
    if (companyQuery.data?.code) setCompanyCode(companyQuery.data.code);
  }, [companyQuery.data]);

  // 서버가 기억하는 진행 단계에서 이어 한다. 0(시작 전)이면 1단계부터.
  const onboardingQuery = useAsync(
    () => onboardingApi.fetchOnboarding(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  useEffect(() => {
    const step = onboardingQuery.data?.onboardingStep;
    if (step == null) return;
    setCurrentStep(Math.min(Math.max(step || 1, ONBOARDING_STEP.MIN), ONBOARDING_STEP.MAX));
  }, [onboardingQuery.data]);

  const connectionsQuery = useAsync(
    () => sourcesApi.fetchConnections(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  const keywordsQuery = useAsync(
    () => policyApi.fetchRiskKeywords(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  const saveStep = useMutation((step) => onboardingApi.updateOnboardingStep(companyId, step));
  const complete = useMutation(() => onboardingApi.completeOnboarding(companyId));
  const addKeyword = useMutation((payload) => policyApi.createRiskKeyword(companyId, payload));
  const removeKeyword = useMutation((id) => policyApi.deleteRiskKeyword(companyId, id));

  async function goToStep(step) {
    setStepError(null);
    setCurrentStep(step);
    // 진행 단계를 서버에도 남긴다. 중간에 나갔다 와도 이어서 할 수 있다.
    const result = await saveStep.mutate(step);
    if (!result.ok) setStepError(result.error);
  }

  const handleStepClick = (stepId) => {
    if (stepId < currentStep) goToStep(stepId);
  };

  async function handleFinishRisk() {
    const result = await complete.mutate();
    if (!result.ok) {
      setStepError(result.error);
      return;
    }
    setSummary(result.data?.summary ?? null);
    setCurrentStep(4);
    // onboardingStatus 가 COMPLETED 로 바뀌었으니 세션도 새로 받는다.
    refreshMe();
  }

  const handleCopyCode = () => {
    if (companyCode) navigator.clipboard?.writeText(companyCode);
  };

  const connections = connectionsQuery.data?.items ?? [];
  const keywords = keywordsQuery.data ?? [];

  if (!companyId) {
    return (
      <OnboardingLayout>
        <LoadingState label="회사 정보를 확인하는 중…" />
      </OnboardingLayout>
    );
  }

  if (onboardingQuery.loading && !onboardingQuery.data) {
    return (
      <OnboardingLayout>
        <LoadingState label="온보딩 진행 상황을 불러오는 중…" />
      </OnboardingLayout>
    );
  }

  if (onboardingQuery.error && !onboardingQuery.data) {
    return (
      <OnboardingLayout>
        <ErrorState error={onboardingQuery.error} onRetry={onboardingQuery.reload} />
      </OnboardingLayout>
    );
  }

  return (
    <OnboardingLayout>
      <OnboardingHeader currentStep={currentStep} onStepClick={handleStepClick} />

      <InlineError error={stepError} />

      {currentStep === 1 && (
        <SourceConnectStep
          companyId={companyId}
          connections={connections}
          loading={connectionsQuery.loading}
          error={connectionsQuery.error}
          onReload={connectionsQuery.reload}
          onCreateDraft={() => goToStep(2)}
        />
      )}

      {currentStep === 2 && (
        <HandbookReviewStep companyId={companyId} onFinish={() => goToStep(3)} />
      )}

      {currentStep === 3 && (
        <RiskKeywordStep
          keywords={keywords}
          loading={keywordsQuery.loading}
          error={keywordsQuery.error}
          onReload={keywordsQuery.reload}
          pending={addKeyword.pending || removeKeyword.pending || complete.pending}
          actionError={addKeyword.error || removeKeyword.error}
          onAddKeyword={async (keyword, severity) => {
            const result = await addKeyword.mutate({ keyword, severity });
            if (result.ok) keywordsQuery.reload();
          }}
          onRemoveKeyword={async (id) => {
            const result = await removeKeyword.mutate(id);
            if (result.ok) keywordsQuery.reload();
          }}
          onFinish={handleFinishRisk}
        />
      )}

      {currentStep === 4 && (
        <CompletionStep
          summary={summary}
          companyCode={companyCode}
          onReviewSettings={() => goToStep(1)}
          onOpenHandbook={() => navigate('/owner')}
          onCopyCode={handleCopyCode}
        />
      )}
    </OnboardingLayout>
  );
}

export default OwnerOnboardingPage;
