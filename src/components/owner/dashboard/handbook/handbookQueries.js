import { ENTRY_ORIGIN, REVIEW_STATUS } from '../../../../apis/constants.js';
import { PROMOTION_FILTER_ALL } from './handbookPromotion.js';

export function approvedEntriesParams(activePromotion = PROMOTION_FILTER_ALL) {
  return {
    reviewStatus: REVIEW_STATUS.APPROVED,
    ...(activePromotion === PROMOTION_FILTER_ALL ? {} : { promotionType: activePromotion }),
  };
}

export function reviewInboxParams() {
  return {
    reviewStatus: REVIEW_STATUS.PENDING,
    origin: [ENTRY_ORIGIN.SLACK, ENTRY_ORIGIN.GITHUB, ENTRY_ORIGIN.FILE].join(','),
  };
}

// 이 화면은 전역 query cache를 사용하지 않으므로 mutation 뒤 각 useAsync를 명시적으로 갱신한다.
export function refetchHandbookData(...queries) {
  return Promise.all(queries.map((query) => query.reload()));
}
