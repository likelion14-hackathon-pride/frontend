import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

export function fetchHome(companyId) {
  return api.get(ENDPOINTS.cards.home(companyId));
}

export function fetchCards(companyId, { column, scopeId, mine, cursor, limit } = {}) {
  return api.get(ENDPOINTS.cards.list(companyId), {
    params: { column, scopeId, mine: mine ? 'true' : undefined, cursor, limit },
  });
}

// 보드는 5개 열을 한 화면에 그린다. 커서를 끝까지 따라가 전부 모은다.
export async function fetchAllCards(companyId, params = {}, { maxPages = 20 } = {}) {
  const items = [];
  let cursor;
  for (let page = 0; page < maxPages; page += 1) {
    // eslint-disable-next-line no-await-in-loop
    const data = await fetchCards(companyId, { ...params, cursor, limit: 100 });
    items.push(...(data.items ?? []));
    cursor = data.nextCursor;
    if (!cursor) break;
  }
  return items;
}

// 여는 순간 서버가 읽음으로 표시한다.
export function fetchCard(companyId, cardId) {
  return api.get(ENDPOINTS.cards.detail(companyId, cardId));
}

// 어느 열에서 어디로 갈 수 있는지는 constants.ALLOWED_MOVES 를 따른다.
// assigneeId 를 null 로 보내면 담당자를 비운다.
export function updateCard(companyId, cardId, { status, assigneeId }) {
  const body = {};
  if (status !== undefined) body.status = status;
  if (assigneeId !== undefined) body.assigneeId = assigneeId;
  return api.patch(ENDPOINTS.cards.detail(companyId, cardId), body);
}

// 카드의 원문과 목적을 함께 넘겨 이 지시에 대한 질문으로 답한다.
export function askAboutCard(companyId, cardId, question) {
  return api.post(ENDPOINTS.cards.ask(companyId, cardId), { question });
}

// 페이지네이션이 없다.
export function fetchTasks(companyId) {
  return api.get(ENDPOINTS.cards.tasks(companyId));
}

export function createTask(companyId, { title, dueAt, scopeId }) {
  const body = { title };
  if (dueAt !== undefined) body.dueAt = dueAt;
  if (scopeId !== undefined) body.scopeId = scopeId;
  return api.post(ENDPOINTS.cards.tasks(companyId), body);
}

export function updateTask(companyId, taskId, patch) {
  return api.patch(ENDPOINTS.cards.task(companyId, taskId), patch);
}

export function deleteTask(companyId, taskId) {
  return api.delete(ENDPOINTS.cards.task(companyId, taskId));
}

export function fetchTiming(companyId, { scopeId, mine } = {}) {
  return api.get(ENDPOINTS.cards.timing(companyId), {
    params: { scopeId, mine: mine ? 'true' : undefined },
  });
}
