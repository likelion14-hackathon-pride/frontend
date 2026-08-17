import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

// entryCount 는 확정(CONFIRMED) 규칙 수다. 초안과 빈 항목은 세지 않는다.
export function fetchScopes(companyId, { kind } = {}) {
  return api.get(ENDPOINTS.handbook.scopes(companyId), { params: { kind } });
}

// 회사 전반 4개 공간은 회사 생성 시 시딩되므로 PROJECT 만 만들 수 있다.
export function createProjectScope(companyId, { name, description }) {
  return api.post(ENDPOINTS.handbook.scopes(companyId), {
    kind: 'PROJECT',
    name,
    ...(description !== undefined ? { description } : {}),
  });
}

export function fetchEntries(
  companyId,
  { scopeId, scopeKind, status, reviewStatus, cursor, limit } = {}
) {
  return api.get(ENDPOINTS.handbook.entries(companyId), {
    params: { scopeId, scopeKind, status, reviewStatus, cursor, limit },
  });
}

// 핸드북 화면은 계층 트리를 그려야 해서 한 페이지만으로는 만들 수 없다.
export async function fetchAllEntries(companyId, params = {}, { maxPages = 20 } = {}) {
  const items = [];
  let cursor;
  for (let page = 0; page < maxPages; page += 1) {
    // eslint-disable-next-line no-await-in-loop
    const data = await fetchEntries(companyId, { ...params, cursor, limit: 100 });
    items.push(...(data.items ?? []));
    cursor = data.nextCursor;
    if (!cursor) break;
  }
  return items;
}

// 저장 즉시 확정 상태가 된다. ruleEn 을 생략하면 서버가 영문을 만들어 채운다.
export function createEntry(companyId, { title, originalKo, ruleEn, scopeId }) {
  const body = { title, originalKo, scopeId };
  if (ruleEn !== undefined) body.ruleEn = ruleEn;
  return api.post(ENDPOINTS.handbook.entries(companyId), body);
}

export function fetchEntry(companyId, entryId) {
  return api.get(ENDPOINTS.handbook.entry(companyId, entryId));
}

export function updateEntry(companyId, entryId, patch) {
  return api.patch(ENDPOINTS.handbook.entry(companyId, entryId), patch);
}

// 확정된 항목만 지울 수 있다. 검토 전 초안은 REJECT 로 내린다.
export function deleteEntry(companyId, entryId) {
  return api.delete(ENDPOINTS.handbook.entry(companyId, entryId));
}

export function fetchEntryEvidence(companyId, entryId) {
  return api.get(ENDPOINTS.handbook.entryEvidence(companyId, entryId));
}

// APPROVE=확정, REJECT=보관, HOLD=초안 유지.
export function reviewEntry(companyId, entryId, decision) {
  return api.post(ENDPOINTS.handbook.entryReview(companyId, entryId), { decision });
}

// 승인할 수 없는 항목은 건너뛰고 skipped 에 사유와 함께 돌아온다.
export function reviewAllEntries(companyId, entryIds) {
  return api.post(ENDPOINTS.handbook.reviewAll(companyId), { entryIds });
}
