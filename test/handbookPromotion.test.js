import test from 'node:test';
import assert from 'node:assert/strict';

import { buildBulkReviewPayload } from '../src/apis/handbookPayloads.js';
import { PROMOTION_TYPE, REVIEW_DECISION, REVIEW_STATUS } from '../src/apis/constants.js';
import {
  bulkSkipReasonLabel,
  canIndividuallyReview,
  isApprovedEntry,
  isBulkSelectable,
  matchesPromotionFilter,
  promotionMetaOf,
  promotionReasonRows,
  safeBulkEntryIds,
} from '../src/components/owner/dashboard/handbook/handbookPromotion.js';
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

test('Q&A는 APPROVED에서 승인 화면을 열지 않고 ANSWERED에서만 연다', () => {
  assert.equal(shouldShowApprovalForStatus('APPROVED'), false);
  assert.equal(shouldShowApprovalForStatus('ANSWERED'), true);
  assert.equal(shouldShowApprovalForStatus('SENT'), false);
});

test('신규 필드 누락과 알 수 없는 값은 안전한 기존 상태 표시로 처리한다', () => {
  const legacy = pendingEntry({ promotionType: undefined });
  const unknown = pendingEntry({ promotionType: 'FUTURE_TYPE' });

  assert.equal(isBulkSelectable(legacy), true);
  assert.equal(matchesPromotionFilter(unknown, 'ALL'), true);
  assert.equal(matchesPromotionFilter(unknown, PROMOTION_TYPE.PENDING_REVIEW), false);
  assert.equal(promotionMetaOf(legacy).label, '확인 대기');
  assert.deepEqual(promotionReasonRows({ codes: 'not-an-array', signals: null }), []);
  assert.match(promotionReasonRows({ codes: ['future_code'] })[0].label, /future_code/);
});
