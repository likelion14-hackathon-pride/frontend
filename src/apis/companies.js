import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

export function fetchCompany(companyId) {
  return api.get(ENDPOINTS.company.detail(companyId));
}

export function fetchOwnerDashboard(companyId) {
  return api.get(ENDPOINTS.company.dashboard(companyId));
}

export function fetchMembers(companyId, { cursor, limit } = {}) {
  return api.get(ENDPOINTS.company.members(companyId), { params: { cursor, limit } });
}

export function fetchCompanySettings(companyId) {
  return api.get(ENDPOINTS.company.settings(companyId));
}

// 시작과 끝이 같으면 working_hours_identical 로 거절된다.
export function updateCompanySettings(companyId, patch) {
  return api.patch(ENDPOINTS.company.settings(companyId), patch);
}

// 근무 위치 목록은 서버가 정한다. 프론트에 하드코딩한 목록을 쓰지 않는다.
// 위치별 대표 근무시간과 겹치는 시간까지 함께 온다.
export function fetchProfileOptions(companyId) {
  return api.get(ENDPOINTS.company.profileOptions(companyId));
}
