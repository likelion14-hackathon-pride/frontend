// 질문 문구와 선택지는 서버가 갖고 있다(onboarding/questions.py).
// 프론트는 목록을 들고 있지 않고, 서버 응답을 화면이 쓰는 모양으로 바꾸기만 한다.

import {
  ONBOARDING_ANSWER_STATUS,
  ONBOARDING_CATEGORY_COLOR,
  ONBOARDING_CATEGORY_DESCRIPTION,
  ONBOARDING_CATEGORY_LABEL,
  ONBOARDING_CATEGORY_ORDER,
  lookup,
} from '../../../../apis/constants';

export const EMPTY_ANSWER = { selected: null, customText: '', customSaved: false };

export function toQuestion(item) {
  return {
    id: item.templateKey,
    text: item.question,
    title: item.title,
    options: item.options ?? [],
    placeholder: item.placeholder ?? '',
    category: item.category,
    entryId: item.entryId,
  };
}

// 고른 선택지는 라벨 문자열로 저장돼 오므로, 선택지 목록에서 위치를 되찾는다.
// 목록에 없으면 직접 입력한 답이다.
export function toAnswerState(item) {
  if (!item) return EMPTY_ANSWER;
  if (item.status === ONBOARDING_ANSWER_STATUS.SKIPPED) {
    return { selected: 'skip', customText: '', customSaved: false };
  }
  if (item.status !== ONBOARDING_ANSWER_STATUS.ANSWERED || !item.answerKo) {
    return EMPTY_ANSWER;
  }

  const index = (item.options ?? []).indexOf(item.answerKo);
  if (index >= 0) return { selected: index, customText: '', customSaved: false };

  return { selected: 'custom', customText: item.answerKo, customSaved: true };
}

export function answerTextFor(question, answer) {
  if (!answer) return null;
  if (answer.selected === 'skip') return null;
  if (answer.selected === 'custom') {
    return answer.customSaved && answer.customText.trim() ? answer.customText.trim() : null;
  }
  if (typeof answer.selected === 'number') return question.options[answer.selected] ?? null;
  return null;
}

export function getQuestionStatus(answer) {
  if (!answer || answer.selected === null || answer.selected === undefined) return 'unconfirmed';
  if (answer.selected === 'skip') return 'skip';
  if (answer.selected === 'custom') return answer.customSaved ? 'confirmed' : 'drafting';
  return 'confirmed';
}

export function getAnswerPreviewText(question, answer) {
  const status = getQuestionStatus(answer);
  if (status !== 'confirmed') return '';
  if (answer.selected === 'custom') return answer.customText;
  return question.options[answer.selected] ?? '';
}

export function countConfirmed(questions, answers) {
  return questions.filter((q) => getQuestionStatus(answers[q.id]) === 'confirmed').length;
}

// 순서는 constants.ONBOARDING_CATEGORY_ORDER 를 따르고, 모르는 카테고리는 뒤에 붙인다.
export function groupByCategory(items) {
  const byCategory = new Map();
  items.forEach((item) => {
    const key = item.category;
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key).push(toQuestion(item));
  });

  const known = ONBOARDING_CATEGORY_ORDER.filter((key) => byCategory.has(key));
  const unknown = Array.from(byCategory.keys()).filter(
    (key) => !ONBOARDING_CATEGORY_ORDER.includes(key)
  );

  return [...known, ...unknown].map((key) => ({
    key,
    label: lookup(ONBOARDING_CATEGORY_LABEL, key),
    description: lookup(ONBOARDING_CATEGORY_DESCRIPTION, key),
    dotColor: lookup(ONBOARDING_CATEGORY_COLOR, key),
    questions: byCategory.get(key),
  }));
}
