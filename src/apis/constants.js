// WorkLocation(models.TextChoices) — accounts/profile.py:7
export const WORK_LOCATION = {
  HANOI: 'HANOI',
  DA_NANG: 'DA_NANG',
  JAKARTA: 'JAKARTA',
  NEW_YORK: 'NEW_YORK',
  SEOUL: 'SEOUL',
  TOKYO: 'TOKYO',
};

export const WORK_LOCATION_LABEL = {
  HANOI: 'Hanoi',
  DA_NANG: 'Da Nang',
  JAKARTA: 'Jakarta',
  NEW_YORK: 'New York',
  SEOUL: 'Seoul',
  TOKYO: 'Tokyo',
  DEFAULT: '—',
};

// LOCATION_ZONES — accounts/profile.py:16
export const LOCATION_ZONE = {
  HANOI: 'Asia/Ho_Chi_Minh',
  DA_NANG: 'Asia/Ho_Chi_Minh',
  JAKARTA: 'Asia/Jakarta',
  NEW_YORK: 'America/New_York',
  SEOUL: 'Asia/Seoul',
  TOKYO: 'Asia/Tokyo',
  DEFAULT: 'Asia/Seoul', // Company.timezone / User.timezone 의 모델 기본값
};

// JobRole(models.TextChoices) — accounts/profile.py:26
export const JOB_ROLE = {
  BACKEND: 'BACKEND',
  FRONTEND: 'FRONTEND',
  DESIGN: 'DESIGN',
  PM: 'PM',
  QA: 'QA',
  DATA: 'DATA',
};

export const JOB_ROLE_LABEL = {
  BACKEND: 'Backend',
  FRONTEND: 'Frontend',
  DESIGN: 'Design',
  PM: 'PM',
  QA: 'QA',
  DATA: 'Data',
  DEFAULT: '—',
};

// Membership.Role — accounts/models.py:48
export const ROLE = {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER',
};

// MembershipSerializer.get_status — accounts/serializers.py:193
export const MEMBERSHIP_STATUS = {
  ACTIVE: 'ACTIVE',
  LEFT: 'LEFT',
};

// CompanySerializer.get_onboardingStatus — accounts/serializers.py:174
export const ONBOARDING_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
};

// accounts/views.py:24 NEXT_ROUTES — 로그인/가입 응답의 next 값
export const NEXT_ROUTE = {
  OWNER: 'onboarding/day0',
  MEMBER: 'app/home',
};

// UserSerializer.locale / ProfileUpdateSerializer.locale — accounts/serializers.py:143
export const LOCALE = { KO: 'ko', EN: 'en' };

// InstructionCard.Status — cards/models.py:7 (사람이 옮기는 상태)
export const CARD_STATUS = {
  READY: 'READY',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

// InstructionCard.Column — cards/models.py:12 (보드 열. 서버가 계산해 내려준다)
export const CARD_COLUMN = {
  READY: 'READY',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING: 'WAITING',
  ANSWERED: 'ANSWERED',
  DONE: 'DONE',
};

// 보드에 그리는 순서
export const CARD_COLUMN_ORDER = [
  CARD_COLUMN.READY,
  CARD_COLUMN.IN_PROGRESS,
  CARD_COLUMN.WAITING,
  CARD_COLUMN.ANSWERED,
  CARD_COLUMN.DONE,
];

export const CARD_COLUMN_LABEL = {
  READY: 'Ready',
  IN_PROGRESS: 'In progress',
  WAITING: 'Waiting',
  ANSWERED: 'Answered',
  DONE: 'Done',
  DEFAULT: 'Other',
};

// InstructionCard.Urgency — cards/models.py:21
export const URGENCY = {
  URGENT: 'URGENT',
  SOON: 'SOON',
  WHENEVER: 'WHENEVER',
  UNCLEAR: 'UNCLEAR',
};

export const URGENCY_LABEL = {
  URGENT: 'urgent',
  SOON: 'has a deadline',
  WHENEVER: 'whenever',
  UNCLEAR: 'urgency unclear',
  DEFAULT: 'urgency unclear',
};

// cards/services.py:14 ALLOWED_MOVES — 어느 열에서 어느 status 로 옮길 수 있는가.
// 서버가 check_move() 로 막으므로 화면도 같은 표를 쓴다. 틀리면 400 invalid_status_move 가 난다.
export const ALLOWED_MOVES = {
  READY: [CARD_STATUS.IN_PROGRESS],
  IN_PROGRESS: [CARD_STATUS.IN_PROGRESS, CARD_STATUS.DONE],
  WAITING: [CARD_STATUS.IN_PROGRESS],
  ANSWERED: [CARD_STATUS.IN_PROGRESS, CARD_STATUS.DONE],
  DONE: [CARD_STATUS.IN_PROGRESS],
  DEFAULT: [],
};

// Blank.AnsweredBy — cards/models.py:91
export const ANSWERED_BY = { SAI: 'SAI', OWNER: 'OWNER' };

// Task.Status — cards/models.py:110
export const TASK_STATUS = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

// TaskSerializer.get_origin — cards/serializers.py:239
export const TASK_ORIGIN = { CARD: 'CARD', SELF: 'SELF' };

// STATES — companies/timing.py:5
export const WORK_STATE = {
  WORKING: 'WORKING',
  OFF_HOURS: 'OFF_HOURS',
  UNKNOWN: 'UNKNOWN',
};

export const WORK_STATE_LABEL = {
  WORKING: 'working hours',
  OFF_HOURS: 'off hours',
  UNKNOWN: 'unknown',
  DEFAULT: 'unknown',
};

// BASES — cards/timing.py:27
export const REPLY_BASIS = {
  HISTORY: 'HISTORY',
  WORKING_HOURS: 'WORKING_HOURS',
};

// cards/timing.py:19 — canDo / needsPerson 목록은 각각 5건까지만 내려온다.
export const TIMING_BUCKET_LIMIT = 5;

// CompanyScope.Kind — handbook/models.py:6
export const SCOPE_KIND = { COMPANY: 'COMPANY', PROJECT: 'PROJECT' };

// CompanyScope.AreaKey — handbook/models.py:12 (회사 전반 규칙의 카테고리)
export const AREA_KEY = {
  COMPANY: 'COMPANY',
  PEOPLE: 'PEOPLE',
  PRODUCT_ENG: 'PRODUCT_ENG',
  SECURITY: 'SECURITY',
};

// 회사 생성 시 시딩되는 4개 공간의 화면 표기.
export const AREA_KEY_LABEL = {
  COMPANY: 'COMPANY',
  PEOPLE: 'PEOPLE GROUP',
  PRODUCT_ENG: 'PRODUCT / ENGINEERING',
  SECURITY: 'SECURITY',
  DEFAULT: 'OTHER',
};

export const AREA_KEY_DESCRIPTION = {
  COMPANY: 'Values · mission · communication · handbook operations',
  PEOPLE: 'HR · hiring · diversity · compensation · learning',
  PRODUCT_ENG: 'Product principles · dev ops · customer support · open source',
  SECURITY: 'Security standards · product security · security ops · threat management',
  DEFAULT: '',
};

export const AREA_KEY_ORDER = [
  AREA_KEY.COMPANY,
  AREA_KEY.PEOPLE,
  AREA_KEY.PRODUCT_ENG,
  AREA_KEY.SECURITY,
];

// HandbookEntry.Status — handbook/models.py:37
export const ENTRY_STATUS = {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  BLANK: 'BLANK',
  ARCHIVED: 'ARCHIVED',
};

// HandbookEntry.ReviewStatus — handbook/models.py:95 (status + reviewed_at 에서 파생)
export const REVIEW_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  HELD: 'HELD',
};

// HandbookReviewSerializer.decision — handbook/serializers.py:237
export const REVIEW_DECISION = {
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  HOLD: 'HOLD',
};

// HandbookEntry.Origin — handbook/models.py:49
export const ENTRY_ORIGIN = {
  SLACK: 'SLACK',
  GITHUB: 'GITHUB',
  FILE: 'FILE',
  ONBOARDING: 'ONBOARDING',
  ESCALATION: 'ESCALATION',
  DIRECT_ENTRY: 'DIRECT_ENTRY',
};

export const ENTRY_ORIGIN_LABEL = {
  SLACK: 'Slack',
  GITHUB: 'GitHub',
  FILE: 'Uploaded file',
  ONBOARDING: 'Day 0 default rule',
  ESCALATION: 'Confirmed by owner',
  DIRECT_ENTRY: 'Written by owner',
  DEFAULT: 'Unknown source',
};

// HandbookEntry.Confidence — handbook/models.py:59
export const CONFIDENCE = { HIGH: 'HIGH', MEDIUM: 'MEDIUM', LOW: 'LOW' };

// HandbookEntry.DriftStatus — handbook/models.py:43
export const DRIFT_STATUS = { CURRENT: 'CURRENT', DRIFTED: 'DRIFTED' };

// HandbookEvidence.Tag — handbook/models.py:155
export const EVIDENCE_TAG = {
  SLACK: 'SLACK',
  GITHUB: 'GITHUB',
  NOTION: 'NOTION',
  FILE: 'FILE',
  OWNER: 'OWNER',
};

export const EVIDENCE_TAG_LABEL = {
  SLACK: 'Slack',
  GITHUB: 'GitHub',
  NOTION: 'Notion',
  FILE: 'file',
  OWNER: 'owner',
  DEFAULT: 'source',
};

// onboarding/services.py:12 DAY0_SOURCE
export const DAY0_SOURCE_LABEL = 'Day 0 기본 규칙';

// Message.Role — qna/models.py:15
export const MESSAGE_ROLE = { USER: 'USER', AI: 'AI' };

// Message.Verdict — qna/models.py:19
export const VERDICT = {
  GROUNDED: 'GROUNDED',
  GROUNDED_BY_CASES: 'GROUNDED_BY_CASES',
  NO_SOURCE: 'NO_SOURCE',
  NEEDS_DECISION: 'NEEDS_DECISION',
  OUT_OF_SCOPE: 'OUT_OF_SCOPE',
};

// qna/services.py:37 NEEDS_OWNER — 대표 확인이 필요한 판정
export const NEEDS_OWNER_VERDICTS = [VERDICT.NO_SOURCE, VERDICT.NEEDS_DECISION];

// qna/services.py:278 — AskResult.resultType
export const ASK_RESULT_TYPE = {
  ANSWERED: 'ANSWERED',
  NEEDS_OWNER: 'NEEDS_OWNER',
};

// Escalation.Status — qna/models.py:57
export const ESCALATION_STATUS = {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  ANSWERED: 'ANSWERED',
  APPROVED: 'APPROVED',
  DISMISSED: 'DISMISSED',
};

export const ESCALATION_STATUS_LABEL = {
  DRAFT: '초안',
  SENT: '답변 대기',
  ANSWERED: '승인 대기',
  APPROVED: '저장됨',
  DISMISSED: '저장 안 함',
  DEFAULT: '알 수 없음',
};

// qna/serializers.py:243 — 보내기 전 덧붙일 수 있는 줄 수
export const MAX_ESCALATION_ADDITIONS = 5;

// companies/serializers.py:66 RecentAnswerSerializer.resolutionType
export const RESOLUTION_TYPE = { SAI: 'SAI', OWNER: 'OWNER' };

// RiskKeyword.Level — policy/models.py:5. 기본값은 CAUTION.
export const RISK_LEVEL = { CAUTION: 'CAUTION', DANGER: 'DANGER' };

export const RISK_LEVEL_LABEL = {
  CAUTION: '주의',
  DANGER: '위험',
  DEFAULT: '주의',
};

// Connection.Kind — sources/models.py:6
export const CONNECTION_KIND = {
  GITHUB: 'GITHUB',
  SLACK: 'SLACK',
  NOTION: 'NOTION',
  LOCAL: 'LOCAL',
};

// Connection.Status — sources/models.py:12
export const CONNECTION_STATUS = { CONNECTED: 'CONNECTED', ERROR: 'ERROR' };

// IngestionJob.Status — sources/models.py:162
export const JOB_STATUS = {
  QUEUED: 'QUEUED',
  RUNNING: 'RUNNING',
  SUCCEEDED: 'SUCCEEDED',
  PARTIAL: 'PARTIAL',
  FAILED: 'FAILED',
};

// IngestionJob.Kind — sources/models.py:171
export const JOB_KIND = { COLLECT: 'COLLECT', PROCESS: 'PROCESS' };

// LocalFileSerializer.get_status — sources/serializers.py:189
export const LOCAL_FILE_STATUS = {
  PROCESSING: 'PROCESSING',
  ERROR: 'ERROR',
  READY: 'READY',
  PENDING_UPLOAD: 'PENDING_UPLOAD',
};

export const LOCAL_FILE_STATUS_LABEL = {
  PROCESSING: '처리 중',
  ERROR: '실패',
  READY: '준비됨',
  PENDING_UPLOAD: '업로드 대기',
  DEFAULT: '—',
};

// sources/serializers.py:23 · sources/local_files.py:9
export const LOCAL_FILE_EXTENSIONS = ['.txt', '.md', '.pdf', '.docx'];
export const LOCAL_FILE_MIME_TYPES = {
  '.txt': ['text/plain'],
  '.md': ['text/markdown', 'text/plain'],
  '.pdf': ['application/pdf'],
  '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};
export const LOCAL_FILE_MAX_SIZE = 20 * 1024 * 1024;

// RawDocument.ClassifiedAs — sources/models.py:94
export const CLASSIFIED_AS = {
  INSTRUCTION: 'INSTRUCTION',
  CONTEXT: 'CONTEXT',
  AMBIGUOUS: 'AMBIGUOUS',
  UNCLASSIFIED: 'UNCLASSIFIED',
};

// Question.Status — onboarding/models.py:7. 목록은 행이 없으면 'PENDING' 을 준다
// (onboarding/services.py:180).
export const ONBOARDING_ANSWER_STATUS = {
  PENDING: 'PENDING',
  ANSWERED: 'ANSWERED',
  SKIPPED: 'SKIPPED',
};

// onboarding/questions.py 의 Spec.category
export const ONBOARDING_CATEGORY = {
  CULTURE: 'CULTURE',
  COMMUNICATION: 'COMMUNICATION',
  DEV_FLOW: 'DEV_FLOW',
  CODE_ACCESS: 'CODE_ACCESS',
  PROJECT: 'PROJECT',
};

// 화면에 띄우는 카테고리 이름과 설명. 질문 문구·선택지는 서버가 준다.
export const ONBOARDING_CATEGORY_LABEL = {
  CULTURE: 'DIRECTION · CULTURE',
  COMMUNICATION: 'COMMUNICATION',
  DEV_FLOW: 'DEV FLOW · ASYNC',
  CODE_ACCESS: 'CODE · ACCESS',
  PROJECT: 'PROJECT',
  DEFAULT: 'OTHER',
};

export const ONBOARDING_CATEGORY_DESCRIPTION = {
  CULTURE: '방향과 문화 · 비전 · 우선순위 · 장애 대응',
  COMMUNICATION: '소통 매체와 리듬 · 스탠드업 · 응답 · 부재',
  DEV_FLOW: '개발 흐름 · 착수 · 완료기준 · 지연보고',
  CODE_ACCESS: '코드와 권한 · 리뷰 · 배포 · 테스트 · 의존성',
  PROJECT: '이 프로젝트에만 적용되는 규칙',
  DEFAULT: '',
};

export const ONBOARDING_CATEGORY_COLOR = {
  CULTURE: '#17171B',
  COMMUNICATION: '#2563EB',
  DEV_FLOW: '#7C8AA6',
  CODE_ACCESS: '#C0392B',
  PROJECT: '#1D4ED8',
  DEFAULT: '#B4B4BC',
};

export const ONBOARDING_CATEGORY_ORDER = [
  ONBOARDING_CATEGORY.CULTURE,
  ONBOARDING_CATEGORY.COMMUNICATION,
  ONBOARDING_CATEGORY.DEV_FLOW,
  ONBOARDING_CATEGORY.CODE_ACCESS,
];

// companies/models.py:12 — 0=시작 전 ~ 4=완료.
// OnboardingStepSerializer 는 1~4 만 받는다(onboarding/serializers.py:52).
export const ONBOARDING_STEP = { MIN: 1, MAX: 4, DONE: 4 };

// config/pagination.py:7
export const DEFAULT_PAGE_LIMIT = 20;
export const MAX_PAGE_LIMIT = 100;

export function lookup(map, key, fallbackKey = 'DEFAULT') {
  if (key != null && Object.prototype.hasOwnProperty.call(map, key)) return map[key];
  return map[fallbackKey];
}

export function zoneOf(location) {
  return lookup(LOCATION_ZONE, location);
}
