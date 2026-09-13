import test from 'node:test';
import assert from 'node:assert/strict';

import { buildBulkReviewPayload } from '../src/apis/handbookPayloads.js';
import { PROMOTION_TYPE, REVIEW_DECISION, REVIEW_STATUS } from '../src/apis/constants.js';
import {
  bulkSkipReasonLabel,
  bulkReviewSummary,
  canIndividuallyReview,
  isApprovedEntry,
  isBulkSelectable,
  isPendingReviewEntry,
  matchesPromotionFilter,
  promotionMetaOf,
  promotionReasonRows,
  reviewStateOf,
  reviewStatusMetaOf,
  safeBulkEntryIds,
  similarityLabel,
} from '../src/components/owner/dashboard/handbook/handbookPromotion.js';
import {
  approvedEntriesParams,
  refetchHandbookData,
  reviewInboxParams,
} from '../src/components/owner/dashboard/handbook/handbookQueries.js';
import { shouldShowApprovalForStatus } from '../src/components/owner/dashboard/question/questionData.js';

const pendingEntry = (extra = {}) => ({
  id: 12,
  status: 'DRAFT',
  reviewStatus: REVIEW_STATUS.PENDING,
  promotionType: PROMOTION_TYPE.PENDING_REVIEW,
  ...extra,
});

test('자동 승격 항목은 개별 검토와 일괄 선택 대상이 아니다', () => {
  const entry = pendingEntry({ promotionType: PROMOTION_TYPE.AUTO_PROMOTED });
  assert.equal(canIndividuallyReview(entry), false);
  assert.equal(isBulkSelectable(entry), false);
});

test('APPROVED + PENDING_REVIEW는 승인됨이며 경로 배지가 검토 대기로 보이지 않는다', () => {
  const entry = pendingEntry({
    status: 'CONFIRMED',
    reviewStatus: REVIEW_STATUS.APPROVED,
  });
  assert.equal(reviewStateOf(entry), 'approved');
  assert.equal(reviewStatusMetaOf(entry).label, '승인됨');
  assert.equal(promotionMetaOf(entry).label, '일괄 검토 경유');
});

test('APPROVED + PENDING_REVIEW는 검토 대기 목록 대상이 아니다', () => {
  const entry = pendingEntry({ reviewStatus: REVIEW_STATUS.APPROVED });
  assert.equal(isPendingReviewEntry(entry), false);
  assert.equal(isBulkSelectable(entry), false);
});

test('PENDING + PENDING_REVIEW는 일괄 검토 대상이다', () => {
  const entry = pendingEntry();
  assert.equal(isPendingReviewEntry(entry), true);
  assert.equal(isBulkSelectable(entry), true);
  assert.equal(promotionMetaOf(entry).label, '일괄 검토 대상');
});

test('PENDING + MANUAL_REQUIRED는 개별 검토 대상으로만 표시한다', () => {
  const entry = pendingEntry({ promotionType: PROMOTION_TYPE.MANUAL_REQUIRED });
  assert.equal(canIndividuallyReview(entry), true);
  assert.equal(isBulkSelectable(entry), false);
  assert.equal(promotionMetaOf(entry).label, '개별 검토 필요');
});

test('AUTO_PROMOTED는 isAutoPromoted가 true일 때만 자동 승격 완료로 표시한다', () => {
  const completed = pendingEntry({
    reviewStatus: REVIEW_STATUS.APPROVED,
    promotionType: PROMOTION_TYPE.AUTO_PROMOTED,
    isAutoPromoted: true,
  });
  assert.equal(promotionMetaOf(completed).label, '자동 승격');
  assert.equal(promotionMetaOf({ ...completed, isAutoPromoted: false }).label, '자동 승격 분류');
});

test('검토 대기 조회 parameter는 reviewStatus=PENDING을 사용한다', () => {
  const params = reviewInboxParams();
  assert.equal(params.reviewStatus, REVIEW_STATUS.PENDING);
  assert.equal('promotionType' in params, false);
});

test('검토 대기 항목만 일괄 선택되고 개별 검토 필요 항목은 제외된다', () => {
  const selectable = pendingEntry({ id: 12 });
  const manual = pendingEntry({ id: 13, promotionType: PROMOTION_TYPE.MANUAL_REQUIRED });
  const approvedManual = pendingEntry({
    id: 14,
    status: 'CONFIRMED',
    reviewStatus: REVIEW_STATUS.APPROVED,
    promotionType: PROMOTION_TYPE.MANUAL_REQUIRED,
  });

  assert.equal(isBulkSelectable(selectable), true);
  assert.equal(isBulkSelectable(manual), false);
  assert.equal(isApprovedEntry(selectable), false);
  assert.equal(isApprovedEntry(manual), false);
  assert.equal(isApprovedEntry(approvedManual), true);
  assert.equal(canIndividuallyReview(manual), true);
  assert.equal(canIndividuallyReview(approvedManual), false);
  assert.deepEqual(
    safeBulkEntryIds(
      [selectable, manual, approvedManual].map((raw) => ({ id: raw.id, raw })),
      [12, 13, 14]
    ),
    [12]
  );
});

test('일괄 승인과 거절 payload에 decision이 포함된다', () => {
  assert.deepEqual(buildBulkReviewPayload([12, 13], REVIEW_DECISION.APPROVE), {
    entryIds: [12, 13],
    decision: 'APPROVE',
  });
  assert.deepEqual(buildBulkReviewPayload([12, 13], REVIEW_DECISION.REJECT), {
    entryIds: [12, 13],
    decision: 'REJECT',
  });
});

test('부분 성공 제외 사유와 알 수 없는 원본 코드를 보존한다', () => {
  assert.match(bulkSkipReasonLabel('individual_review_required'), /개별 검토/);
  assert.match(bulkSkipReasonLabel('future_reason'), /future_reason/);
});

test('일괄 처리의 results, 처리 수와 건너뜀 수를 함께 요약한다', () => {
  const result = bulkReviewSummary({
    results: [{ entryId: 12 }, { entryId: 13 }],
    skipped: [{ entryId: 13, reason: 'individual_review_required' }],
    processedCount: 1,
    approvedCount: 1,
    rejectedCount: 0,
  });
  assert.equal(result.requestCount, 2);
  assert.equal(result.processedCount, 1);
  assert.equal(result.approvedCount, 1);
  assert.equal(result.skipped.length, 1);
});

test('승인·거절 후 핸드북 목록, 검토 대기 목록과 카운트 소스를 모두 갱신한다', async () => {
  const calls = [];
  await refetchHandbookData(
    { reload: async () => calls.push('entries') },
    { reload: async () => calls.push('inbox') },
    { reload: async () => calls.push('scopes') }
  );
  assert.deepEqual(calls.sort(), ['entries', 'inbox', 'scopes']);
});

test('Q&A는 APPROVED에서 승인 화면을 열지 않고 ANSWERED에서만 연다', () => {
  assert.equal(shouldShowApprovalForStatus('APPROVED'), false);
  assert.equal(shouldShowApprovalForStatus('ANSWERED'), true);
  assert.equal(shouldShowApprovalForStatus('SENT'), false);
});

test('nullable 자동 승격 필드와 알 수 없는 값은 렌더링 helper에서 안전하게 처리한다', () => {
  const legacy = pendingEntry({ promotionType: undefined });
  const unknown = pendingEntry({ promotionType: 'FUTURE_TYPE' });

  assert.equal(isBulkSelectable(legacy), false);
  assert.equal(matchesPromotionFilter(unknown, 'ALL'), true);
  assert.equal(matchesPromotionFilter(unknown, PROMOTION_TYPE.PENDING_REVIEW), false);
  assert.equal(promotionMetaOf(legacy).label, '확인 대기');
  assert.equal(similarityLabel(null), '확인되지 않음');
  assert.deepEqual(promotionReasonRows({ codes: 'not-an-array', signals: null }), []);
  assert.match(promotionReasonRows({ codes: ['future_code'] })[0].label, /future_code/);
});

test('기존 목록 query와 status fallback은 기존 핸드북 호환성을 유지한다', () => {
  assert.deepEqual(approvedEntriesParams(), { reviewStatus: REVIEW_STATUS.APPROVED });
  assert.equal(reviewStateOf({ status: 'CONFIRMED' }), 'approved');
  assert.equal(reviewStateOf({ status: 'ARCHIVED' }), 'rejected');
});
