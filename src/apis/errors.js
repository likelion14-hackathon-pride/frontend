// 서버 에러는 한 가지 모양으로만 온다 (config/exceptions.py).
//
//   {"error": {"code": "scope_not_found", "field": "scopeId", "message": "scope not found"}}
//
// field 가 있으면 그 입력 칸 밑에, null 이면 배너로 띄운다.
// 상태 코드는 봉투에 없고 응답 상태줄에만 있다.

// config/errors.py 의 코드 카탈로그. 화면이 분기하는 것만 옮겨 적었다.
export const ERROR_CODE = {
  SERVER_ERROR: 'server_error',
  RATE_LIMITED: 'rate_limited',
  AI_UNAVAILABLE: 'ai_unavailable',
  STORAGE_UNAVAILABLE: 'storage_unavailable',
  INVALID_PARAMETER: 'invalid_parameter',
  INVALID_LIMIT: 'invalid_limit',
  INVALID_CURSOR: 'invalid_cursor',
  UNKNOWN_TIMEZONE: 'unknown_timezone',

  INVALID_CREDENTIALS: 'invalid_credentials',
  COMPANY_CODE_NOT_FOUND: 'company_code_not_found',
  EMAIL_TAKEN: 'email_taken',
  WEAK_PASSWORD: 'weak_password',
  PROFILE_FIELD_REQUIRED: 'profile_field_required',

  WORKING_HOURS_IDENTICAL: 'working_hours_identical',
  KEYWORD_TAKEN: 'keyword_taken',

  SCOPE_NOT_FOUND: 'scope_not_found',
  SCOPE_KIND_NOT_ALLOWED: 'scope_kind_not_allowed',
  SCOPE_NAME_BLANK: 'scope_name_blank',
  SCOPE_NAME_TAKEN: 'scope_name_taken',
  PROJECT_SCOPE_REQUIRED: 'project_scope_required',
  SCOPE_UNAVAILABLE: 'scope_unavailable',

  ENTRY_NOT_CONFIRMED: 'entry_not_confirmed',
  CANNOT_APPROVE_BLANK: 'cannot_approve_blank',

  INVALID_STATUS_MOVE: 'invalid_status_move',
  CARD_FIELD_REQUIRED: 'card_field_required',
  TASK_FIELD_REQUIRED: 'task_field_required',
  NOT_A_MEMBER: 'not_a_member',

  ESCALATION_SOURCE_REQUIRED: 'escalation_source_required',
  CONFLICTING_SOURCE: 'conflicting_source',
  QUESTION_TEXT_MISSING: 'question_text_missing',
  DRAFT_REQUIRED: 'draft_required',
  ALREADY_ESCALATED: 'already_escalated',
  ALREADY_SENT: 'already_sent',
  NOT_SENT_YET: 'not_sent_yet',
  ALREADY_APPROVED: 'already_approved',
  NO_ANSWER_YET: 'no_answer_yet',
  NO_ANSWER_TO_PROMOTE: 'no_answer_to_promote',
  NO_SCOPE_AVAILABLE: 'no_scope_available',

  UNKNOWN_QUESTION: 'unknown_question',
  ANSWER_REQUIRED: 'answer_required',

  GITHUB_INSTALLATION_TAKEN: 'github_installation_taken',
  SLACK_WORKSPACE_TAKEN: 'slack_workspace_taken',
  NO_INGESTION_TARGET: 'no_ingestion_target',
  INVALID_BOT_TOKEN: 'invalid_bot_token',
  INVALID_APP_ID: 'invalid_app_id',
  INVALID_INSTALLATION_ID: 'invalid_installation_id',
  INVALID_PRIVATE_KEY: 'invalid_private_key',
  PRIVATE_KEY_TOO_LARGE: 'private_key_too_large',
  INVALID_FILE_NAME: 'invalid_file_name',
  UNSUPPORTED_FILE_TYPE: 'unsupported_file_type',
  MIME_TYPE_MISMATCH: 'mime_type_mismatch',

  // DRF 기본 코드 중 화면이 분기하는 것
  NOT_FOUND: 'not_found',
  PERMISSION_DENIED: 'permission_denied',
  NOT_AUTHENTICATED: 'not_authenticated',

  // 서버에 닿지 못했을 때 프론트가 붙이는 코드. 서버 코드와 겹치지 않도록 접두사를 둔다.
  NETWORK_ERROR: 'client_network_error',
  UNKNOWN: 'client_unknown_error',
};

// code 별 한국어 문구. 서버 message 는 영어라 화면에는 이쪽을 우선 쓴다.
// 여기 없는 코드는 서버 message 를 그대로 보여 준다.
const MESSAGE_BY_CODE = {
  [ERROR_CODE.NETWORK_ERROR]: '서버에 연결하지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요.',
  [ERROR_CODE.SERVER_ERROR]: '서버에서 문제가 생겼습니다. 잠시 후 다시 시도해 주세요.',
  [ERROR_CODE.RATE_LIMITED]: '요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요.',
  [ERROR_CODE.AI_UNAVAILABLE]: '지금은 답변을 만들 수 없습니다. 잠시 후 다시 시도해 주세요.',
  [ERROR_CODE.STORAGE_UNAVAILABLE]: '파일 저장소에 연결하지 못했습니다.',

  [ERROR_CODE.INVALID_CREDENTIALS]: '이메일 또는 비밀번호가 올바르지 않습니다.',
  [ERROR_CODE.COMPANY_CODE_NOT_FOUND]: '이 코드에 해당하는 회사가 없습니다.',
  [ERROR_CODE.EMAIL_TAKEN]: '이미 가입된 이메일입니다.',
  [ERROR_CODE.WEAK_PASSWORD]: '비밀번호가 너무 약합니다. 8자 이상으로, 숫자만으로는 만들 수 없습니다.',
  [ERROR_CODE.PROFILE_FIELD_REQUIRED]: '근무 위치, 담당 역할, 화면 언어 중 하나는 보내야 합니다.',

  [ERROR_CODE.WORKING_HOURS_IDENTICAL]: '근무 시작과 종료 시각이 같을 수 없습니다.',
  [ERROR_CODE.KEYWORD_TAKEN]: '이미 등록된 키워드입니다.',

  [ERROR_CODE.SCOPE_NOT_FOUND]: '지식공간을 찾을 수 없습니다.',
  [ERROR_CODE.SCOPE_KIND_NOT_ALLOWED]: '프로젝트 지식공간만 만들 수 있습니다.',
  [ERROR_CODE.SCOPE_NAME_BLANK]: '이름을 입력해 주세요.',
  [ERROR_CODE.SCOPE_NAME_TAKEN]: '같은 이름의 지식공간이 이미 있습니다.',
  [ERROR_CODE.PROJECT_SCOPE_REQUIRED]: '프로젝트를 먼저 선택해 주세요.',
  [ERROR_CODE.SCOPE_UNAVAILABLE]: '서버에 기본 지식공간이 준비되지 않았습니다.',

  [ERROR_CODE.ENTRY_NOT_CONFIRMED]: '확정된 항목만 삭제할 수 있습니다.',
  [ERROR_CODE.CANNOT_APPROVE_BLANK]: '내용이 없는 항목은 승인할 수 없습니다.',

  [ERROR_CODE.INVALID_STATUS_MOVE]: '지금 상태에서는 옮길 수 없습니다.',
  [ERROR_CODE.NOT_A_MEMBER]: '이 회사의 구성원이 아닙니다.',

  [ERROR_CODE.ALREADY_ESCALATED]: '이미 대표 확인으로 올린 질문입니다.',
  [ERROR_CODE.ALREADY_SENT]: '이미 보낸 질문입니다.',
  [ERROR_CODE.NOT_SENT_YET]: '아직 슬랙으로 보내지 않았습니다.',
  [ERROR_CODE.ALREADY_APPROVED]: '이미 규칙으로 저장된 질문입니다.',
  [ERROR_CODE.NO_ANSWER_YET]: '아직 답이 오지 않았습니다.',
  [ERROR_CODE.NO_ANSWER_TO_PROMOTE]: '저장할 답변이 없습니다.',
  [ERROR_CODE.NO_SCOPE_AVAILABLE]: '규칙을 넣을 지식공간이 없습니다.',
  [ERROR_CODE.DRAFT_REQUIRED]: '한국어 초안이 필요합니다.',
  [ERROR_CODE.QUESTION_TEXT_MISSING]: '질문 내용을 찾지 못했습니다.',
  [ERROR_CODE.ESCALATION_SOURCE_REQUIRED]: '질문 출처가 없습니다.',
  [ERROR_CODE.CONFLICTING_SOURCE]: '메시지와 미정 항목을 함께 보낼 수 없습니다.',

  [ERROR_CODE.UNKNOWN_QUESTION]: '알 수 없는 질문입니다.',
  [ERROR_CODE.ANSWER_REQUIRED]: '답변을 입력하거나 넘어가기를 선택해 주세요.',

  [ERROR_CODE.NO_INGESTION_TARGET]: '수집할 대상이 없습니다.',
  [ERROR_CODE.INVALID_BOT_TOKEN]: 'Bot Token 이 올바르지 않습니다. xoxb- 로 시작해야 합니다.',
  [ERROR_CODE.INVALID_APP_ID]: 'App ID 는 숫자여야 합니다.',
  [ERROR_CODE.INVALID_INSTALLATION_ID]: 'Installation ID 는 숫자여야 합니다.',
  [ERROR_CODE.INVALID_PRIVATE_KEY]: 'PEM 형식의 Private Key 파일이 아닙니다.',
  [ERROR_CODE.PRIVATE_KEY_TOO_LARGE]: 'Private Key 파일이 너무 큽니다.',
  [ERROR_CODE.INVALID_FILE_NAME]: '파일 이름이 올바르지 않습니다.',
  [ERROR_CODE.UNSUPPORTED_FILE_TYPE]: '지원하지 않는 파일 형식입니다. (txt · md · pdf · docx)',
  [ERROR_CODE.MIME_TYPE_MISMATCH]: '파일 확장자와 형식이 맞지 않습니다.',
  [ERROR_CODE.SLACK_WORKSPACE_TAKEN]: '이미 다른 회사에 연결된 워크스페이스입니다.',
  [ERROR_CODE.GITHUB_INSTALLATION_TAKEN]: '이미 다른 회사에 연결된 GitHub 설치입니다.',

  [ERROR_CODE.NOT_FOUND]: '찾을 수 없습니다.',
  [ERROR_CODE.PERMISSION_DENIED]: '이 작업을 할 권한이 없습니다.',
  [ERROR_CODE.NOT_AUTHENTICATED]: '로그인이 필요합니다.',
};

// 화면이 다루는 에러 하나. axios 오류를 이 모양으로만 바꿔서 위로 올린다.
export class ApiError extends Error {
  constructor({ code, field, message, status, retryAfter }) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.field = field ?? null;
    this.status = status ?? null;
    this.retryAfter = retryAfter ?? null;
  }

  get isNetwork() {
    return this.code === ERROR_CODE.NETWORK_ERROR;
  }

  // 세션이 끊긴 것. 이때만 로그아웃한다. 5xx·네트워크 오류로는 세션을 버리지 않는다.
  get isUnauthenticated() {
    return this.status === 401;
  }

  get isForbidden() {
    return this.status === 403;
  }
}

// axios 오류 → ApiError.
// 서버가 봉투를 못 보낸 경우(프록시 502, HTML 오류 페이지 등)도 여기서 흡수한다.
export function toApiError(error) {
  if (error instanceof ApiError) return error;

  const response = error?.response;

  // 응답 자체가 없다 = 네트워크가 끊겼거나 CORS 로 막혔거나 타임아웃.
  // 세션과는 무관하다.
  if (!response) {
    return new ApiError({
      code: ERROR_CODE.NETWORK_ERROR,
      field: null,
      message: MESSAGE_BY_CODE[ERROR_CODE.NETWORK_ERROR],
      status: null,
    });
  }

  const envelope = response.data?.error;
  const code = envelope?.code ?? fallbackCodeFor(response.status);
  const retryAfterHeader = response.headers?.['retry-after'];

  return new ApiError({
    code,
    field: envelope?.field ?? null,
    message: MESSAGE_BY_CODE[code] ?? envelope?.message ?? fallbackMessageFor(response.status),
    status: response.status,
    retryAfter: retryAfterHeader ? Number(retryAfterHeader) : null,
  });
}

function fallbackCodeFor(status) {
  if (status === 401) return ERROR_CODE.NOT_AUTHENTICATED;
  if (status === 403) return ERROR_CODE.PERMISSION_DENIED;
  if (status === 404) return ERROR_CODE.NOT_FOUND;
  if (status === 429) return ERROR_CODE.RATE_LIMITED;
  if (status >= 500) return ERROR_CODE.SERVER_ERROR;
  return ERROR_CODE.UNKNOWN;
}

function fallbackMessageFor(status) {
  if (status >= 500) return MESSAGE_BY_CODE[ERROR_CODE.SERVER_ERROR];
  return '요청을 처리하지 못했습니다.';
}

// 화면에 띄울 문장. 어디서든 이 함수만 부르면 된다.
export function messageOf(error, fallback = '요청을 처리하지 못했습니다.') {
  if (!error) return fallback;
  if (error instanceof ApiError) return error.message || fallback;
  return error.message || fallback;
}

