import { useState } from 'react';
import styled from 'styled-components';
import { getGroupLabel } from './handbookTabData';

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
  display: flex;
  height: 21.333px;
  padding: 4px 11.781px 4.333px 9px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
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

function HandbookDetailPanel({ item, onSave, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

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

  return (
    <Panel>
      <TagRow>
        <TierPill>{item.tier === 'company' ? '회사 규칙' : '프로젝트 지식'}</TierPill>
        <GroupText>{getGroupLabel(item.groupKey)}</GroupText>
        {item.day0 && <Day0Text>Day 0 기본 규칙</Day0Text>}
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

      <ButtonRow>
        <OpenSourceButton type="button">원문 열기</OpenSourceButton>
        {editing ? (
          <EditButton type="button" onClick={handleSave}>
            수정 후 저장
          </EditButton>
        ) : (
          <EditButton type="button" onClick={startEdit}>
            수정
          </EditButton>
        )}
        <DeleteButton type="button" onClick={() => onDelete(item.id)}>
          삭제
        </DeleteButton>
        <TimestampText>{item.lastConfirmed ? `최근 확인 ${item.lastConfirmed}` : '확인 이력 없음'}</TimestampText>
      </ButtonRow>
    </Panel>
  );
}

export default HandbookDetailPanel;
