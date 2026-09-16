import {
  AUTO_PROMOTION_METHOD,
  ENTRY_STATUS,
  PROMOTION_TYPE,
  REVIEW_DECISION,
  REVIEW_STATUS,
} from '../../../../apis/constants.js';

export const PROMOTION_FILTER_ALL = 'ALL';

export const PROMOTION_FILTERS = [
  { value: PROMOTION_FILTER_ALL, label: '전체' },
  { value: PROMOTION_TYPE.AUTO_PROMOTED, label: '자동 승격' },
  { value: PROMOTION_TYPE.PENDING_REVIEW, label: '일괄 검토' },
  { value: PROMOTION_TYPE.MANUAL_REQUIRED, label: '개별 검토' },
];

const GREEN_META = { color: '#1F7A45', bg: '#EAF6EF', border: '#CBE8D6' };
const BLUE_META = { color: '#1D4ED8', bg: '#EEF3FF', border: '#D5E1FC' };
const AMBER_META = { color: '#9A6212', bg: '#FFF6E8', border: '#F0DFC0' };
const NEUTRAL_META = { color: '#6B6B73', bg: '#F4F4F6', border: '#E2E2E7' };

const REVIEW_META = {
  approved: { label: '승인됨', color: '#1F7A45', bg: '#F3FAF6' },
  rejected: { label: '거절됨', color: '#B4232D', bg: '#FEF2F3' },
  pending: { label: '검토 대기', color: '#6B6B73', bg: '#F4F4F6' },
  held: { label: '보류됨', color: '#6B6B73', bg: '#F4F4F6' },
  unknown: { label: '승인 상태 미확인', color: '#6B6B73', bg: '#F4F4F6' },
};

const REASON_LABELS = {
  already_reviewed_by_owner: 'Owner가 이미 검토한 항목',
  empty_rule: '규칙 내용이 비어 있음',
  evidence_missing: '확인할 근거가 없음',
  source_invalid: '근거 출처를 확인할 수 없음',
  scope_unconfirmed: '적용 범위가 확정되지 않음',
  risk_keyword_detected: '위험 키워드가 감지됨',
  company_wide_rule: '회사 전체에 적용되는 규칙',
  owner_not_verified: 'Owner 답변 여부를 확인할 수 없음',
  answer_needs_review: 'Owner 답변에 추가 검토가 필요함',
  ai_inference_possible: 'AI 추론이 포함되었을 가능성',
  insufficient_evidence: '자동 승격에 필요한 근거가 부족함',
  no_recent_evidence: '최근 근거가 없음',
  similarity_check_failed: '유사 규칙 검사를 완료하지 못함',
  similarity_check_unavailable: '유사 규칙 검사를 사용할 수 없음',
  duplicate_candidate: '기존 규칙과 중복될 가능성',
  possible_conflict: '기존 규칙과 충돌할 가능성',
  policy_conditions_satisfied: '자동 승격 정책 조건을 충족함',
};

const SKIP_REASON_LABELS = {
  individual_review_required: '개별 검토가 필요한 항목입니다.',
  already_approved: '이미 승인된 항목입니다.',
  already_rejected: '이미 거절된 항목입니다.',
  blank_entry: '내용이 없는 규칙입니다.',
  duplicate_request: '같은 항목이 요청에 중복되었습니다.',
  not_found: '항목을 찾을 수 없습니다.',
};

export function reviewStateOf(entry) {
  if (!entry) return 'unknown';

  // reviewStatus가 현재 승인 상태의 기준이다. status는 구형 응답의 호환용 fallback이다.
  switch (entry.reviewStatus) {
    case REVIEW_STATUS.APPROVED:
      return 'approved';
    case REVIEW_STATUS.REJECTED:
      return 'rejected';
    case REVIEW_STATUS.HELD:
      return 'held';
    case REVIEW_STATUS.PENDING:
      return 'pending';
    default:
      break;
  }

  if (entry.status === ENTRY_STATUS.CONFIRMED) return 'approved';
  if (entry.status === ENTRY_STATUS.ARCHIVED) return 'rejected';
  if (entry.status === ENTRY_STATUS.DRAFT || entry.status === ENTRY_STATUS.BLANK) return 'pending';
  return 'unknown';
}

export function reviewStatusMetaOf(entry) {
  return REVIEW_META[reviewStateOf(entry)] ?? REVIEW_META.unknown;
}

export function isPendingReviewEntry(entry) {
  return reviewStateOf(entry) === 'pending';
}

export function isApprovedEntry(entry) {
  return reviewStateOf(entry) === 'approved';
}

export function canIndividuallyReview(entry) {
  return (
    reviewStateOf(entry) === 'pending' && entry?.promotionType !== PROMOTION_TYPE.AUTO_PROMOTED
  );
}

export function isBulkSelectable(entry) {
  return (
    isPendingReviewEntry(entry) && entry?.promotionType === PROMOTION_TYPE.PENDING_REVIEW
  );
}

export function safeBulkEntryIds(items, selectedIds) {
  const selected = new Set(selectedIds);
  return items
    .filter((item) => selected.has(item.id) && isBulkSelectable(item.raw ?? item))
    .map((item) => item.id);
}

export function isBulkDecision(decision) {
  return decision === REVIEW_DECISION.APPROVE || decision === REVIEW_DECISION.REJECT;
}

export function matchesPromotionFilter(entry, filter) {
  return filter === PROMOTION_FILTER_ALL || entry?.promotionType === filter;
}

export function promotionMetaOf(entry) {
  const pending = isPendingReviewEntry(entry);
  if (entry?.promotionType === PROMOTION_TYPE.AUTO_PROMOTED) {
    return entry.isAutoPromoted === true
      ? { label: '자동 승격', ...GREEN_META }
      : { label: '자동 승격 분류', ...NEUTRAL_META };
  }
  if (entry?.promotionType === PROMOTION_TYPE.PENDING_REVIEW) {
    return { label: pending ? '일괄 검토 대상' : '일괄 검토', ...BLUE_META };
  }
  if (entry?.promotionType === PROMOTION_TYPE.MANUAL_REQUIRED) {
    return { label: pending ? '개별 검토 필요' : '개별 검토', ...AMBER_META };
  }

  const state = reviewStateOf(entry);
  if (state === 'approved') {
    return { label: '확인됨', ...GREEN_META };
  }
  if (state === 'rejected') {
    return { label: '거절됨', color: '#B4232D', bg: '#FEF2F3', border: '#F6CACD' };
  }
  if (state === 'pending' || state === 'held') {
    return { label: state === 'held' ? '보류됨' : '확인 대기', ...NEUTRAL_META };
  }
  return { label: '상태 미확인', ...NEUTRAL_META };
}

export function bulkReviewSummary(result) {
  const results = Array.isArray(result?.results) ? result.results : [];
  const skipped = Array.isArray(result?.skipped) ? result.skipped : [];
  const processedCount = Number.isFinite(result?.processedCount) ? result.processedCount : 0;
  return {
    results,
    skipped,
    requestCount: results.length || processedCount + skipped.length,
    processedCount,
    approvedCount: Number.isFinite(result?.approvedCount) ? result.approvedCount : 0,
    rejectedCount: Number.isFinite(result?.rejectedCount) ? result.rejectedCount : 0,
  };
}

export function autoPromotionMethodLabel(method) {
  if (method === AUTO_PROMOTION_METHOD.OWNER_DECISION) return 'Owner 답변으로 자동 승격';
  if (method === AUTO_PROMOTION_METHOD.REPEATED_EVIDENCE) return '반복 근거로 자동 승격';
  return method ? `자동 승격 (${method})` : '자동 승격 정책에 따라 확정';
}

export function promotionReasonRows(reason) {
  const codes = Array.isArray(reason?.codes) ? reason.codes : [];
  return codes
    .filter((code) => typeof code === 'string' && code.length > 0)
    .map((code, index) => ({
      key: `${code}-${index}`,
      code,
      label: REASON_LABELS[code] ?? `추가 검토 사유 (${code})`,
    }));
}

export function knownSignalRows(signals) {
  if (!signals || typeof signals !== 'object' || Array.isArray(signals)) return [];

  const rows = [];
  const addBoolean = (key, yes, no) => {
    if (typeof signals[key] === 'boolean') rows.push(signals[key] ? yes : no);
  };
  addBoolean('scopeConfirmed', '적용 범위 확인됨', '적용 범위 미확정');
  addBoolean('hasRecentEvidence', '최근 근거 있음', '최근 근거 없음');
  addBoolean('ownerVerified', 'Owner 답변 확인됨', 'Owner 답변 미확인');
  addBoolean('answerNeedsReview', '답변 추가 검토 필요', '답변 추가 검토 불필요');

  if (Number.isFinite(signals.minimumEvidence)) {
    rows.push(`자동 승격 최소 근거 ${signals.minimumEvidence}건`);
  }
  if (Number.isFinite(signals.recentDays)) {
    rows.push(`최근 ${signals.recentDays}일 근거 기준`);
  }
  if (Array.isArray(signals.invalidSources) && signals.invalidSources.length > 0) {
    rows.push(`확인할 수 없는 출처 ${signals.invalidSources.length}건`);
  }
  return rows;
}

export function bulkSkipReasonLabel(reason) {
  if (SKIP_REASON_LABELS[reason]) return SKIP_REASON_LABELS[reason];
  return reason ? `처리하지 못했습니다. (${reason})` : '처리하지 못했습니다.';
}

export function similarityLabel(score) {
  if (!Number.isFinite(score)) return '확인되지 않음';
  const percent = score <= 1 ? score * 100 : score;
  return `${Math.round(percent)}%`;
}
