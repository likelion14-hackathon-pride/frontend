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
  { value: PROMOTION_TYPE.PENDING_REVIEW, label: '검토 대기' },
  { value: PROMOTION_TYPE.MANUAL_REQUIRED, label: '개별 검토 필요' },
];

const PROMOTION_META = {
  [PROMOTION_TYPE.AUTO_PROMOTED]: {
    label: '자동 승격',
    color: '#1F7A45',
    bg: '#EAF6EF',
    border: '#CBE8D6',
  },
  [PROMOTION_TYPE.PENDING_REVIEW]: {
    label: '검토 대기',
    color: '#1D4ED8',
    bg: '#EEF3FF',
    border: '#D5E1FC',
  },
  [PROMOTION_TYPE.MANUAL_REQUIRED]: {
    label: '개별 검토 필요',
    color: '#9A6212',
    bg: '#FFF6E8',
    border: '#F0DFC0',
  },
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
  if (entry.status === ENTRY_STATUS.CONFIRMED || entry.reviewStatus === REVIEW_STATUS.APPROVED) {
    return 'approved';
  }
  if (entry.status === ENTRY_STATUS.ARCHIVED || entry.reviewStatus === REVIEW_STATUS.REJECTED) {
    return 'rejected';
  }
  if (entry.reviewStatus === REVIEW_STATUS.HELD) return 'held';
  if (
    entry.reviewStatus === REVIEW_STATUS.PENDING ||
    entry.status === ENTRY_STATUS.DRAFT ||
    entry.status === ENTRY_STATUS.BLANK
  ) {
    return 'pending';
  }
  return 'unknown';
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
  if (!canIndividuallyReview(entry)) return false;
  // 신규 필드가 없는 기존 초안은 예전처럼 일괄 검토할 수 있게 둔다.
  return entry?.promotionType == null || entry.promotionType === PROMOTION_TYPE.PENDING_REVIEW;
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
  const known = PROMOTION_META[entry?.promotionType];
  if (known) return known;

  const state = reviewStateOf(entry);
  if (state === 'approved') {
    return { label: '확인됨', color: '#1F7A45', bg: '#EAF6EF', border: '#CBE8D6' };
  }
  if (state === 'rejected') {
    return { label: '거절됨', color: '#B4232D', bg: '#FEF2F3', border: '#F6CACD' };
  }
  if (state === 'pending' || state === 'held') {
    return {
      label: state === 'held' ? '보류' : '확인 대기',
      color: '#6B6B73',
      bg: '#F4F4F6',
      border: '#E2E2E7',
    };
  }
  return { label: '상태 미확인', color: '#6B6B73', bg: '#F4F4F6', border: '#E2E2E7' };
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
