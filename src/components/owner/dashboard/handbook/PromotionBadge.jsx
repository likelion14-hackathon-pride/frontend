import styled from 'styled-components';

import { promotionMetaOf, reviewStateOf } from './handbookPromotion';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
  padding: 4px 9px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1px solid ${({ $border }) => $border};
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 700;
  line-height: 1.25;
  white-space: nowrap;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: currentColor;
`;

const REVIEW_META = {
  approved: { label: '승인됨', color: '#1F7A45', bg: '#F3FAF6' },
  rejected: { label: '거절됨', color: '#B4232D', bg: '#FEF2F3' },
  pending: { label: '승인 대기', color: '#6B6B73', bg: '#F4F4F6' },
  held: { label: '보류', color: '#6B6B73', bg: '#F4F4F6' },
  unknown: { label: '승인 상태 미확인', color: '#6B6B73', bg: '#F4F4F6' },
};

const ReviewBadge = styled.span`
  display: inline-flex;
  min-height: 24px;
  padding: 4px 9px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 700;
  line-height: 1.25;
  white-space: nowrap;
`;

function PromotionBadge({ entry }) {
  const meta = promotionMetaOf(entry);
  return (
    <Badge $bg={meta.bg} $color={meta.color} $border={meta.border}>
      <Dot aria-hidden="true" />
      {meta.label}
    </Badge>
  );
}

export function ApprovalStatusBadge({ entry }) {
  const meta = REVIEW_META[reviewStateOf(entry)] ?? REVIEW_META.unknown;
  return (
    <ReviewBadge $bg={meta.bg} $color={meta.color}>
      {meta.label}
    </ReviewBadge>
  );
}

export default PromotionBadge;
