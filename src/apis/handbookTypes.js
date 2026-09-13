/** @typedef {'DRAFT'|'CONFIRMED'|'ARCHIVED'|'BLANK'} HandbookEntryStatus */
/** @typedef {'PENDING'|'APPROVED'|'REJECTED'|'HELD'} HandbookReviewStatus */
/** @typedef {'AUTO_PROMOTED'|'PENDING_REVIEW'|'MANUAL_REQUIRED'} HandbookPromotionType */

/**
 * 현재 백엔드 HandbookEntrySerializer 응답이다.
 * confirmedAt은 모델에는 있지만 serializer 응답 필드에는 포함되지 않는다.
 *
 * @typedef {Object} HandbookEntry
 * @property {number} id
 * @property {number} companyId
 * @property {string} title
 * @property {string|null} titleEn
 * @property {number} scopeId
 * @property {'COMPANY'|'PROJECT'} scopeKind
 * @property {string} scopeName
 * @property {string|null} areaKey
 * @property {string|null} ruleEn
 * @property {string|null} originalKo
 * @property {HandbookEntryStatus} status
 * @property {HandbookReviewStatus} reviewStatus
 * @property {string|null} reviewedAt
 * @property {HandbookPromotionType} promotionType
 * @property {boolean} isAutoPromoted
 * @property {string|null} autoPromotionMethod
 * @property {Record<string, unknown>} promotionReason
 * @property {number} evidenceCount
 * @property {Array<Record<string, unknown>>} riskKeywords
 * @property {boolean} hasConflict
 * @property {boolean} hasSimilarRule
 * @property {number|null} similarEntryId
 * @property {number|null} similarityScore
 * @property {string|null} autoPromotedAt
 * @property {string|null} promotionPolicyVersion
 * @property {'HIGH'|'MEDIUM'|'LOW'} confidence
 * @property {number} questionCount
 * @property {string} sourceType
 * @property {Record<string, unknown>|null} source
 * @property {string|null} translatedAt
 * @property {string|null} embeddedAt
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} HandbookEntryListResponse
 * @property {HandbookEntry[]} items
 * @property {string|null} nextCursor
 */

/**
 * @typedef {Object} HandbookBulkReviewResponse
 * @property {'APPROVE'|'REJECT'} decision
 * @property {number} processedCount
 * @property {number} approvedCount
 * @property {number} rejectedCount
 * @property {Array<Record<string, unknown>>} results
 * @property {Array<{entryId:number, reason:string}>} skipped
 */

export {};
