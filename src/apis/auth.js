import { api, tokenStore } from './axiosInstance';
import { ENDPOINTS } from './endpoints';

// 발급된 회사 코드는 이 응답에서만 볼 수 있다.
export async function signupOwner({ email, password, displayName, companyName }) {
  const data = await api.post(
    ENDPOINTS.auth.signupOwner,
    { email, password, displayName, companyName },
    { skipAuth: true }
  );
  tokenStore.set(data.accessToken, data.refreshToken);
  return data;
}

export async function signupMember({ email, password, displayName, companyCode }) {
  const data = await api.post(
    ENDPOINTS.auth.signupMember,
    { email, password, displayName, companyCode },
    { skipAuth: true }
  );
  tokenStore.set(data.accessToken, data.refreshToken);
  return data;
}

export async function login({ email, password }) {
  const data = await api.post(ENDPOINTS.auth.login, { email, password }, { skipAuth: true });
  tokenStore.set(data.accessToken, data.refreshToken);
  return data;
}

// 서버는 발급된 토큰을 무효화하지 않는다. 실패해도 화면은 로그아웃으로 진행한다.
export async function logout() {
  try {
    await api.post(ENDPOINTS.auth.logout, {});
  } catch {
    // 서버가 못 받아도 로컬 세션은 정리한다.
  }
}

export function fetchMe() {
  return api.get(ENDPOINTS.me);
}

// 타임존은 보내지 않는다. 위치가 타임존을 정하므로 두 갈래로 보내면 어긋난다.
// 셋 다 없으면 profile_field_required 로 거절된다.
export function updateMe({ location, role, locale }) {
  const body = {};
  if (location !== undefined) body.location = location;
  if (role !== undefined) body.role = role;
  if (locale !== undefined) body.locale = locale;
  return api.patch(ENDPOINTS.me, body);
}
