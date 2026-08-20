// 근무 시간과 회사 코드는 서버에서 온다(GET /companies/{id}/settings, /companies/{id}).
// 위험 키워드도 마찬가지다(GET /companies/{id}/risk-keywords).
// 여기에는 화면이 쓰는 기본 표시값만 둔다.

export const EMPTY_WORK_HOURS = { start: '--:--', end: '--:--', timezone: '' };
