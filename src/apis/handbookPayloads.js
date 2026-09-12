export function buildBulkReviewPayload(entryIds, decision = 'APPROVE') {
  return { entryIds, decision };
}
