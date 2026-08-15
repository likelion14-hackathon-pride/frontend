import { useState } from 'react';
import styled from 'styled-components';
import { getGroupLabel } from './handbookTabData';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid #efeff1;
  background: #ffffff;
  min-height: 220px;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TierTag = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: ${({ $tier }) => ($tier === 'company' ? '#17171b' : '#2563eb')};
  color: #fff;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const GroupTag = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: #f0f0f2;
  color: #6b6b73;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const Day0Tag = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: #eaf1fe;
  color: #1d4ed8;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const TitleText = styled.h3`
  margin: 0;
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -0.4px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 14px;
  background: ${({ $tone }) => ($tone === 'en' ? '#f5f8ff' : '#f7f8fc')};
  border: 1px solid ${({ $tone }) => ($tone === 'en' ? '#dbe4fc' : '#f0f0f2')};
`;

const BoxLabel = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: ${({ $tone }) => ($tone === 'en' ? '#1d4ed8' : '#a0a0a8')};
`;

const BoxText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 13px;
  line-height: 1.5;
  color: #17171b;
`;

const EditTextarea = styled.textarea`
  resize: none;
  min-height: 60px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: Pretendard;
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const GhostButton = styled.button`
  height: 34px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid #efeff1;
  background: #ffffff;
  color: #17171b;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
`;

const PrimaryButton = styled.button`
  height: 34px;
  padding: 0 16px;
  border-radius: 999px;
  border: none;
  background: #17171b;
  color: #ffffff;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
`;

const TimestampText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const EmptyPanel = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  color: #a0a0a8;
  font-family: Pretendard;
  font-size: 12.5px;
  text-align: center;
`;

function HandbookDetailPanel({ item, onSave }) {
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
        <TierTag $tier={item.tier}>{item.tier === 'company' ? '회사 규칙' : '프로젝트 지식'}</TierTag>
        <GroupTag>{getGroupLabel(item.groupKey)}</GroupTag>
        {item.day0 && <Day0Tag>Day 0 기본 규칙</Day0Tag>}
      </TagRow>

      {editing ? (
        <EditTextarea autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} />
      ) : (
        <TitleText>{item.text}</TitleText>
      )}

      {item.enText && (
        <Box $tone="en">
          <BoxLabel $tone="en">EN · 팀원 표시 언어</BoxLabel>
          <BoxText>{item.enText}</BoxText>
        </Box>
      )}

      {item.koSource && (
        <Box>
          <BoxLabel>KO · 출처 원문</BoxLabel>
          <BoxText>{item.koSource}</BoxText>
        </Box>
      )}

      <ButtonRow>
        <ActionGroup>
          <GhostButton type="button">원문 열기</GhostButton>
          {editing ? (
            <>
              <PrimaryButton type="button" onClick={handleSave}>
                수정 후 저장
              </PrimaryButton>
              <GhostButton type="button" onClick={() => setEditing(false)}>
                되돌리기
              </GhostButton>
            </>
          ) : (
            <GhostButton type="button" onClick={startEdit}>
              수정
            </GhostButton>
          )}
        </ActionGroup>
        <TimestampText>{item.lastConfirmed ? `최근 확인 ${item.lastConfirmed}` : '확인 이력 없음'}</TimestampText>
      </ButtonRow>
    </Panel>
  );
}

export default HandbookDetailPanel;
