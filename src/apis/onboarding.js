import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

// scopeId 를 주면 그 프로젝트 질문, 생략하면 회사 질문이 온다.
export function fetchOnboarding(companyId, { scopeId } = {}) {
  return api.get(ENDPOINTS.onboarding.root(companyId), { params: { scopeId } });
}

export function updateOnboardingStep(companyId, onboardingStep) {
  return api.patch(ENDPOINTS.onboarding.root(companyId), { onboardingStep });
}

// 선택지를 골랐으면 그 문구를 그대로 보낸다. 서버가 라벨로 매칭한다.
export function answerOnboardingQuestion(companyId, templateKey, { answerKo, scopeId }) {
  const body = { answerKo };
  if (scopeId != null) body.scopeId = scopeId;
  return api.patch(ENDPOINTS.onboarding.question(companyId, templateKey), body);
}

// 넘어가면 앞서 만든 규칙도 함께 지워진다.
export function skipOnboardingQuestion(companyId, templateKey, { scopeId } = {}) {
  const body = { status: 'SKIPPED' };
  if (scopeId != null) body.scopeId = scopeId;
  return api.patch(ENDPOINTS.onboarding.question(companyId, templateKey), body);
}

export function completeOnboarding(companyId) {
  return api.post(ENDPOINTS.onboarding.complete(companyId), {});
}
