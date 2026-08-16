import {
  AREA_KEY,
  AREA_KEY_DESCRIPTION,
  AREA_KEY_LABEL,
  AREA_KEY_ORDER,
  ENTRY_STATUS,
  SCOPE_KIND,
  lookup,
} from '../../../../apis/constants';

export { AREA_KEY, AREA_KEY_ORDER, ENTRY_STATUS, SCOPE_KIND };

// 회사 전반 규칙 카테고리. 회사 생성 시 서버가 4개를 시딩한다.
export const COMPANY_GROUPS = AREA_KEY_ORDER.map((areaKey) => ({
  key: areaKey,
  label: lookup(AREA_KEY_LABEL, areaKey),
  description: lookup(AREA_KEY_DESCRIPTION, areaKey),
  dotColor: '#1D4ED8',
}));

export function getGroupLabel(groupKey) {
  const companyGroup = COMPANY_GROUPS.find((group) => group.key === groupKey);
  if (companyGroup) return companyGroup.label;
  return groupKey ? String(groupKey).toUpperCase() : '';
}

// 확정 여부. 화면은 '확인됨 / 미확인 / 빈칸' 세 가지만 구분한다.
export function displayStatusOf(entry) {
  if (entry.status === ENTRY_STATUS.CONFIRMED) return 'confirmed';
  if (entry.status === ENTRY_STATUS.BLANK) return 'empty';
  return 'unconfirmed';
}

export function countByStatus(entries, status) {
  return entries.filter((entry) => displayStatusOf(entry) === status).length;
}
