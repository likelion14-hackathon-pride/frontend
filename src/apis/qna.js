import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

// 근거가 없으면 지어내지 않고 NO_SOURCE 로 답하며,
// 이때 대표에게 보낼 한국어 초안(draftKo)을 함께 준다.
export function ask(companyId, { question, threadId, scopeId }) {
  const body = { question };
  if (threadId != null) body.threadId = threadId;
  if (scopeId !== undefined) body.scopeId = scopeId;
  return api.post(ENDPOINTS.qna.ask(companyId), body);
}

export function fetchThreadMessages(companyId, threadId) {
  return api.get(ENDPOINTS.qna.threadMessages(companyId, threadId));
}

// 대표는 회사 전체를, 팀원은 본인이 올린 것만 본다.
export function fetchEscalations(companyId, { status, cursor, limit } = {}) {
  return api.get(ENDPOINTS.qna.questions(companyId), { params: { status, cursor, limit } });
}

export async function fetchAllEscalations(companyId, params = {}, { maxPages = 20 } = {}) {
  const items = [];
  let cursor;
  for (let page = 0; page < maxPages; page += 1) {
    // eslint-disable-next-line no-await-in-loop
    const data = await fetchEscalations(companyId, { ...params, cursor, limit: 100 });
    items.push(...(data.items ?? []));
    cursor = data.nextCursor;
    if (!cursor) break;
  }
  return items;
}

// 출처는 셋 중 하나: messageId(Ask SAI 답변) | blankId(카드 미정 항목) | questionEn(직접 입력).
// messageId 와 blankId 를 함께 보내면 conflicting_source 로 거절된다.
export function createEscalation(companyId, { messageId, blankId, questionEn, draftKo }) {
  const body = {};
  if (messageId != null) body.messageId = messageId;
  if (blankId != null) body.blankId = blankId;
  if (questionEn != null) body.questionEn = questionEn;
  if (draftKo != null) body.draftKo = draftKo;
  return api.post(ENDPOINTS.qna.questions(companyId), body);
}

export function fetchEscalation(companyId, escalationId) {
  return api.get(ENDPOINTS.qna.question(companyId, escalationId));
}

// DRAFT 상태에서만 고칠 수 있다.
export function updateEscalationDraft(companyId, escalationId, draftKo) {
  return api.patch(ENDPOINTS.qna.question(companyId, escalationId), { draftKo });
}

// itemId 는 질문을 올릴 슬랙 채널(수집 대상 Item)의 id 다.
// extraEn 은 보내는 시점에 한국어로 바뀌어 초안 뒤에 붙는다.
export function sendEscalation(companyId, escalationId, { itemId, extraEn }) {
  const body = { itemId };
  if (extraEn?.length) body.extraEn = extraEn;
  return api.post(ENDPOINTS.qna.questionSend(companyId, escalationId), body);
}

// 슬랙 스레드의 답장을 회수해 그것이 실제로 답인지 판정한다.
export function checkEscalationAnswer(companyId, escalationId) {
  return api.post(ENDPOINTS.qna.questionCheckAnswer(companyId, escalationId), {});
}

// 미리보기에서 고친 값만 보낸다. 안 보내면 proposal 그대로 저장된다.
export function approveEscalation(companyId, escalationId, { title, ruleEn, scopeId } = {}) {
  const body = {};
  if (title !== undefined) body.title = title;
  if (ruleEn !== undefined) body.ruleEn = ruleEn;
  if (scopeId !== undefined) body.scopeId = scopeId;
  return api.post(ENDPOINTS.qna.questionApprove(companyId, escalationId), body);
}

// 이미 규칙으로 승격된 질문은 물릴 수 없다.
export function dismissEscalation(companyId, escalationId) {
  return api.post(ENDPOINTS.qna.questionDismiss(companyId, escalationId), {});
}

// 이걸 눌러야 카드가 Answered 열에서 빠진다.
export function acknowledgeEscalation(companyId, escalationId) {
  return api.post(ENDPOINTS.qna.questionAcknowledge(companyId, escalationId), {});
}
