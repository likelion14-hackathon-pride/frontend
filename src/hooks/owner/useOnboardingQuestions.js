import { useCallback, useEffect, useMemo, useState } from 'react';

import * as onboardingApi from '../../apis/onboarding';
import { toApiError } from '../../apis/errors';
import {
  answerTextFor,
  toAnswerState,
  toQuestion,
} from '../../components/owner/onboarding/step2-handbook/handbookData';
import { useAsync } from '../useAsync';

// 화면 상태는 서버 응답에서 만들고, 확정된 답만 서버로 보낸다.
// '직접 입력' 을 누른 직후처럼 아직 저장할 것이 없는 상태는 로컬에만 둔다.
export function useOnboardingQuestions(companyId, scopeId = null) {
  const query = useAsync(
    () => onboardingApi.fetchOnboarding(companyId, { scopeId }),
    [companyId, scopeId],
    { enabled: Boolean(companyId) }
  );

  const [answers, setAnswers] = useState({});
  const [savingKey, setSavingKey] = useState(null);
  const [saveError, setSaveError] = useState(null);

  const items = useMemo(() => query.data?.questions ?? [], [query.data]);
  const questions = useMemo(() => items.map(toQuestion), [items]);

  useEffect(() => {
    if (!items.length) return;
    const next = {};
    items.forEach((item) => {
      next[item.templateKey] = toAnswerState(item);
    });
    setAnswers(next);
  }, [items]);

  const setAnswer = useCallback(
    async (templateKey, patch) => {
      const question = questions.find((item) => item.id === templateKey);
      if (!question) return;

      const previous = answers[templateKey] ?? { selected: null, customText: '', customSaved: false };
      const next = { ...previous, ...patch };
      setAnswers((prev) => ({ ...prev, [templateKey]: next }));

      // 서버에 보낼 것이 정해졌을 때만 부른다.
      const isSkip = next.selected === 'skip';
      const text = answerTextFor(question, next);
      if (!isSkip && !text) return;

      setSavingKey(templateKey);
      setSaveError(null);
      try {
        if (isSkip) {
          await onboardingApi.skipOnboardingQuestion(companyId, templateKey, { scopeId });
        } else {
          await onboardingApi.answerOnboardingQuestion(companyId, templateKey, {
            answerKo: text,
            scopeId,
          });
        }
      } catch (caught) {
        setSaveError(toApiError(caught));
        // 저장에 실패했으면 화면도 이전 값으로 되돌린다. 저장된 척하지 않는다.
        setAnswers((prev) => ({ ...prev, [templateKey]: previous }));
      } finally {
        setSavingKey(null);
      }
    },
    [answers, companyId, questions, scopeId]
  );

  // '회사 규칙만 쓰고 넘기기' — 이 벌의 질문을 전부 SKIPPED 로 보낸다.
  const skipAll = useCallback(async () => {
    setSaveError(null);
    for (const question of questions) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await onboardingApi.skipOnboardingQuestion(companyId, question.id, { scopeId });
      } catch (caught) {
        setSaveError(toApiError(caught));
        break;
      }
    }
    query.reload();
  }, [companyId, questions, scopeId, query]);

  return {
    questions,
    answers,
    setAnswer,
    skipAll,
    savingKey,
    saveError,
    clearSaveError: () => setSaveError(null),
    onboardingStep: query.data?.onboardingStep ?? 0,
    loading: query.loading,
    error: query.error,
    reload: query.reload,
  };
}

export default useOnboardingQuestions;
