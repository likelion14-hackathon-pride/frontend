import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { REVIEW_DECISION } from '../../../../apis/constants';
import { formatShortKo } from '../../../../utils/time';
import { getGroupLabel } from './handbookTabData';
import { canIndividuallyReview, isApprovedEntry } from './handbookPromotion';
import PromotionBadge, { ApprovalStatusBadge } from './PromotionBadge';
import PromotionDetails from './PromotionDetails';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 22.667px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 3px 8px -2px rgba(23, 44, 90, 0.08),
    0 14px 34px -14px rgba(23, 44, 90, 0.22);
  min-height: 260px;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const TierPill = styled.span`
  display: inline-flex;
  height: 21.333px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 7px;
  background: ${({ $tone }) => ($tone === 'project' ? '#2563EB' : '#17171b')};
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.2px;
  white-space: nowrap;
`;

const GroupText = styled.span`
  color: #3c3c44;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  white-space: nowrap;
`;

const Day0Text = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 133%;
  white-space: nowrap;
`;

const TitleText = styled.h3`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.5px;
`;

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 16.667px 8.667px 14.26px 16.667px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10.333px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #fafafb;
  border: ${({ $dashed }) => ($dashed ? '0.667px dashed #E6E6EB' : '0.667px solid #EFEFF1')};
`;

const BoxLabel = styled.span`
  color: ${({ $tone }) => ($tone === 'en' ? '#2563EB' : '#A0A0A8')};
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
  letter-spacing: 0.8px;
`;

const BoxText = styled.p`
  margin: 0;
  color: ${({ $tone }) => ($tone === 'en' ? '#3A3A42' : '#6B6B73')};
  font-family: 'Plus Jakarta Sans';
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.6px;
`;

const EditTextarea = styled.textarea`
  resize: none;
  min-height: 60px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-top: auto;
  flex-wrap: wrap;
`;

const OpenSourceButton = styled.button`
  display: flex;
  height: 36.667px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 11px;
  background: #17171b;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const EditButton = styled.button`
  display: flex;
  height: 36.667px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 11px;
  background: #f4f4f6;
  cursor: pointer;
  color: #3c3c44;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  width: 57px;
  height: 36.667px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 11px;
  background: #fef2f2;
  cursor: pointer;
  color: #dc2626;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid #b4232d;
    outline-offset: 2px;
  }
`;

const ReviewButton = styled.button`
  display: flex;
  min-width: 62px;
  height: 36.667px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 11px;
  background: ${({ $reject }) => ($reject ? '#FEF2F2' : '#17171B')};
  color: ${({ $reject }) => ($reject ? '#B4232D' : '#FFFFFF')};
  cursor: pointer;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({ $reject }) => ($reject ? '#B4232D' : '#2563EB')};
    outline-offset: 2px;
  }
`;

const TimestampText = styled.span`
  margin-left: auto;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
  white-space: nowrap;
`;

const EmptyPanel = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  text-align: center;
  width: 100%;
`;

function HandbookDetailPanel({ item, pending = false, onSave, onDelete, onReview, onOpenSimilar }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  // 수정 중 다른 문항으로 넘어가면 수정 상태를 유지하지 않고 바로 그 문항을 보여준다.
  useEffect(() => {
    setEditing(false);
  }, [item?.id]);

  if (!item) {
    return (
      <Panel>
        <EmptyPanel>왼쪽 목록에서 항목을 선택하면 상세 내용이 여기에 표시됩니다</EmptyPanel>
      </Panel>
    );
  }

  const startEdit = () => {
    setDraft(item.text);
    setEditing(true);
  };

  const handleSave = () => {
    onSave(item.id, draft.trim());
    setEditing(false);
  };

  const reviewable = canIndividuallyReview(item.raw);
  const approved = isApprovedEntry(item.raw);

  return (
    <Panel>
      <TagRow>
        <TierPill $tone={item.tier}>
          {item.tier === 'company' ? '회사 규칙' : '프로젝트 지식'}
        </TierPill>
        <GroupText>{item.groupLabel || getGroupLabel(item.groupKey)}</GroupText>
        {item.day0 && <Day0Text>Day 0 기본 규칙</Day0Text>}
        <PromotionBadge entry={item.raw} />
        <ApprovalStatusBadge entry={item.raw} />
      </TagRow>

      {editing ? (
        <EditTextarea autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} />
      ) : (
        <TitleText>{item.text}</TitleText>
      )}

      {item.enText && (
        <Box $dashed={false}>
          <BoxLabel $tone="en">EN · 팀원 표시 언어</BoxLabel>
          <BoxText $tone="en">{item.enText}</BoxText>
        </Box>
      )}

      {item.koSource && (
        <Box $dashed>
          <BoxLabel>KO · 출처 원문</BoxLabel>
          <BoxText>{item.koSource}</BoxText>
        </Box>
      )}

      <PromotionDetails entry={item.raw} onOpenSimilar={onOpenSimilar} />

      <ButtonRow>
        {/* 원문 링크는 근거가 있을 때만 있다. 없으면 눌러도 갈 곳이 없으므로 감춘다. */}
        {item.sourceHref && (
          <OpenSourceButton as="a" href={item.sourceHref} target="_blank" rel="noreferrer">
            원문 열기
          </OpenSourceButton>
        )}
        {editing ? (
          <EditButton type="button" onClick={handleSave} disabled={pending}>
            {pending ? '저장 중…' : '수정 후 저장'}
          </EditButton>
        ) : (
          <EditButton type="button" onClick={startEdit} disabled={pending}>
            수정
          </EditButton>
        )}
        {reviewable ? (
          <>
            <ReviewButton
              type="button"
              onClick={() => onReview(item.id, REVIEW_DECISION.REJECT)}
              disabled={pending}
              $reject
            >
              거절
            </ReviewButton>
            <ReviewButton
              type="button"
              onClick={() => onReview(item.id, REVIEW_DECISION.APPROVE)}
              disabled={pending || item.status === 'empty'}
            >
              승인
            </ReviewButton>
          </>
        ) : (
          approved && (
            <DeleteButton type="button" onClick={() => onDelete(item.id)} disabled={pending}>
              삭제
            </DeleteButton>
          )
        )}
        <TimestampText>
          {item.lastConfirmed ? `최근 확인 ${formatShortKo(item.lastConfirmed)}` : '확인 이력 없음'}
        </TimestampText>
      </ButtonRow>
    </Panel>
  );
}

export default HandbookDetailPanel;
