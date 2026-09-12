import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { REVIEW_DECISION } from '../../../../apis/constants';
import ScrollArea from '../../../common/ScrollArea';
import { getGroupLabel } from './handbookTabData';
import { bulkSkipReasonLabel, canIndividuallyReview, isBulkSelectable } from './handbookPromotion';
import PromotionBadge, { ApprovalStatusBadge } from './PromotionBadge';
import PromotionDetails from './PromotionDetails';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 16.667px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 16px;
  border: 0.667px solid #f3e4c6;
  background: #fffdf7;
`;

const HeadRow = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const WaitingTag = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 5.667px 14.063px 5.333px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #9a6212;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const Description = styled.p`
  margin: 0;
  flex: 1 1 380px;
  min-width: 0;
  color: #9a6212;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
  overflow-wrap: anywhere;
`;

const CloseButton = styled.button`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.667px solid #eadfc6;
  background: #fff;
  cursor: pointer;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;

  &:focus-visible {
    outline: 2px solid #9a6212;
    outline-offset: 2px;
  }
`;

const BulkBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  background: #fff8e8;
  flex-wrap: wrap;
`;

const CheckLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6c470f;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
`;

const CheckInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const SelectionCount = styled.span`
  color: #7a5a05;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  margin-right: auto;
`;

const BulkButton = styled.button`
  height: 31.333px;
  padding: 8px 14px;
  border: none;
  border-radius: 10px;
  background: ${({ $reject }) => ($reject ? '#FEF2F2' : '#17171B')};
  color: ${({ $reject }) => ($reject ? '#B4232D' : '#FFFFFF')};
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const ResultBanner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 7px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #edf8f1;
  color: #195f38;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  line-height: 1.5;
`;

const ResultTitle = styled.strong`
  font-size: 12px;
`;

const SkipList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 0;
  padding-left: 18px;
  color: #52645a;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

const CardBox = styled.article`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  border-radius: 12px;
  border: 0.667px solid #f0e7d6;
  background: #fff;
  opacity: ${({ $processing }) => ($processing ? 0.55 : 1)};
  transition: opacity 0.15s ease;
`;

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: 0;
  padding: 12.667px 14.667px;
  align-items: center;
  gap: 12px;
`;

const ReviewOnly = styled.span`
  flex-shrink: 0;
  padding: 4px 7px;
  border-radius: 7px;
  background: #fff6e8;
  color: #8a5a15;
  font-family: 'Plus Jakarta Sans';
  font-size: 9.5px;
  font-weight: 700;
`;

const TextGroup = styled.button`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 3px;
    border-radius: 6px;
  }
`;

const ItemText = styled.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.9px;
  letter-spacing: -0.3px;
`;

const SourceText = styled.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.7px;
`;

const ActionButton = styled.button`
  width: 51px;
  height: 31.333px;
  padding: 8px 14px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: ${({ $reject }) => ($reject ? '#FEF2F2' : '#17171B')};
  color: ${({ $reject }) => ($reject ? '#B4232D' : '#FFFFFF')};
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const Expanded = styled.div`
  display: flex;
  width: calc(100% - 29.334px);
  min-width: 0;
  flex-direction: column;
  gap: 12px;
  margin: 0 14.667px 14.667px;
  padding: 14px 16px;
  border-radius: 11px;
  background: #fafafb;
`;

const QuoteText = styled.p`
  margin: 0;
  color: #3a3a42;
  font-family: 'IBM Plex Mono';
  font-size: 12.5px;
  line-height: 1.7;
  overflow-wrap: anywhere;
`;

const SourceLine = styled.a`
  align-self: flex-start;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const EmptyRow = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  border: 0.667px solid #f0e7d6;
  background: #fff;
  color: #1f7a45;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 600;
`;

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.25 2.25L9.75 9.75M9.75 2.25L2.25 9.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ConfirmInboxPanel({
  items,
  pending = false,
  bulkResult,
  onReview,
  onBulkReview,
  onOpenSimilar,
  onClose,
}) {
  const [expandedId, setExpandedId] = useState(null);
  const [processingId, setProcessingId] = useState(null);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const bulkSubmittingRef = useRef(false);
  const selectAllRef = useRef(null);

  const selectableItems = useMemo(
    () => items.filter((item) => isBulkSelectable(item.raw)),
    [items]
  );
  const selectedCount = selectableItems.filter((item) => selectedIds.has(item.id)).length;
  const allSelected = selectableItems.length > 0 && selectedCount === selectableItems.length;

  useEffect(() => {
    const selectableIds = new Set(selectableItems.map((item) => item.id));
    setSelectedIds((previous) => {
      const next = new Set([...previous].filter((id) => selectableIds.has(id)));
      if (next.size === previous.size && [...next].every((id) => previous.has(id))) return previous;
      return next;
    });
  }, [selectableItems]);

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = selectedCount > 0 && !allSelected;
    }
  }, [allSelected, selectedCount]);

  const toggleSelected = (id) => {
    setSelectedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelectedIds(allSelected ? new Set() : new Set(selectableItems.map((item) => item.id)));
  };

  const handleReview = async (id, decision) => {
    setProcessingId(id);
    try {
      await onReview(id, decision);
    } finally {
      setProcessingId(null);
    }
  };

  const handleBulkReview = async (decision) => {
    if (bulkSubmittingRef.current || selectedCount === 0) return;
    bulkSubmittingRef.current = true;
    try {
      const result = await onBulkReview([...selectedIds], decision);
      if (result?.ok) setSelectedIds(new Set());
    } finally {
      bulkSubmittingRef.current = false;
    }
  };

  const skipped = Array.isArray(bulkResult?.skipped) ? bulkResult.skipped : [];
  const itemById = new Map(items.map((item) => [item.id, item]));

  return (
    <Panel>
      <HeadRow>
        <WaitingTag>검토 대기</WaitingTag>
        <Description>
          검토 대기 항목은 선택해 한 번에 처리할 수 있습니다. 개별 검토 필요 항목은 내용을 펼쳐 판단
          정보를 확인한 뒤 하나씩 승인하거나 거절하세요.
        </Description>
        <CloseButton type="button" onClick={onClose} aria-label="검토 보관함 닫기">
          <CloseIcon />
        </CloseButton>
      </HeadRow>

      <BulkBar>
        <CheckLabel>
          <CheckInput
            ref={selectAllRef}
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            disabled={selectableItems.length === 0 || pending}
          />
          검토 대기 전체 선택
        </CheckLabel>
        <SelectionCount>{selectedCount}개 선택</SelectionCount>
        <BulkButton
          type="button"
          $reject
          onClick={() => handleBulkReview(REVIEW_DECISION.REJECT)}
          disabled={selectedCount === 0 || pending}
        >
          {pending ? '처리 중…' : '선택 거절'}
        </BulkButton>
        <BulkButton
          type="button"
          onClick={() => handleBulkReview(REVIEW_DECISION.APPROVE)}
          disabled={selectedCount === 0 || pending}
        >
          {pending ? '처리 중…' : '선택 승인'}
        </BulkButton>
      </BulkBar>

      {bulkResult && (
        <ResultBanner role="status" aria-live="polite">
          <ResultTitle>
            {bulkResult.decision === REVIEW_DECISION.REJECT
              ? `거절 완료 · 거절 ${bulkResult.rejectedCount ?? bulkResult.processedCount ?? 0}개`
              : `승인 완료 · 승인 ${bulkResult.approvedCount ?? bulkResult.processedCount ?? 0}개`}{' '}
            · 제외 {skipped.length}개
          </ResultTitle>
          {skipped.length > 0 && (
            <SkipList>
              {skipped.map((item, index) => (
                <li key={`${item.entryId}-${item.reason}-${index}`}>
                  {itemById.get(item.entryId)?.text || `항목 #${item.entryId}`} —{' '}
                  {bulkSkipReasonLabel(item.reason)}
                </li>
              ))}
            </SkipList>
          )}
        </ResultBanner>
      )}

      {items.length === 0 ? (
        <EmptyRow>검토할 항목이 없습니다</EmptyRow>
      ) : (
        <ScrollArea accentColor="#9A6212">
          <List>
            {items.map((item) => {
              const isProcessing = processingId === item.id;
              const expanded = expandedId === item.id;
              const reviewable = canIndividuallyReview(item.raw);
              const bulkSelectable = isBulkSelectable(item.raw);
              return (
                <CardBox key={item.id} $processing={isProcessing}>
                  <Row>
                    {bulkSelectable ? (
                      <CheckInput
                        type="checkbox"
                        checked={selectedIds.has(item.id)}
                        onChange={() => toggleSelected(item.id)}
                        disabled={isProcessing || pending}
                        aria-label={`${item.text || '내용 없는 항목'} 선택`}
                      />
                    ) : (
                      <ReviewOnly>{reviewable ? '개별 검토' : '검토 불가'}</ReviewOnly>
                    )}
                    <TextGroup
                      type="button"
                      onClick={() => setExpandedId(expanded ? null : item.id)}
                      aria-expanded={expanded}
                    >
                      <ItemText>{item.text || '(내용 없음)'}</ItemText>
                      <SourceText>
                        {item.groupLabel || getGroupLabel(item.groupKey)} · {item.sourceLabel}
                      </SourceText>
                    </TextGroup>
                    <PromotionBadge entry={item.raw} />
                    <ApprovalStatusBadge entry={item.raw} />
                    {reviewable && (
                      <>
                        <ActionButton
                          type="button"
                          $reject
                          onClick={() => handleReview(item.id, REVIEW_DECISION.REJECT)}
                          disabled={isProcessing || pending}
                        >
                          거절
                        </ActionButton>
                        <ActionButton
                          type="button"
                          onClick={() => handleReview(item.id, REVIEW_DECISION.APPROVE)}
                          disabled={isProcessing || pending || item.status === 'empty'}
                        >
                          승인
                        </ActionButton>
                      </>
                    )}
                  </Row>

                  {expanded && (
                    <Expanded>
                      {item.koSource && <QuoteText>{item.koSource}</QuoteText>}
                      {item.sourceHref && (
                        <SourceLine href={item.sourceHref} target="_blank" rel="noreferrer">
                          원문 열기
                        </SourceLine>
                      )}
                      <PromotionDetails entry={item.raw} onOpenSimilar={onOpenSimilar} />
                    </Expanded>
                  )}
                </CardBox>
              );
            })}
          </List>
        </ScrollArea>
      )}
    </Panel>
  );
}

export default ConfirmInboxPanel;
