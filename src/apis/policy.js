import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

// 응답이 배열 그대로다. items 봉투가 없다.
export function fetchRiskKeywords(companyId) {
  return api.get(ENDPOINTS.riskKeywords.list(companyId));
}

// severity 를 생략하면 서버 기본값 CAUTION 이 된다.
export function createRiskKeyword(companyId, { keyword, message, severity }) {
  const body = { keyword };
  if (message !== undefined) body.message = message;
  if (severity !== undefined) body.severity = severity;
  return api.post(ENDPOINTS.riskKeywords.list(companyId), body);
}

export function deleteRiskKeyword(companyId, keywordId) {
  return api.delete(ENDPOINTS.riskKeywords.detail(companyId, keywordId));
}
