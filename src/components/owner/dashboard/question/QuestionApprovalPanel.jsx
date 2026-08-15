import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 380px;
  flex-shrink: 0;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #17171b;
`;

const Badge = styled.span`
  padding: 4px 9px;
  border-radius: 999px;
  background: #f0f0f2;
  color: #6b6b73;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const QuestionText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  color: #17171b;
  line-height: 1.4;
`;

const DraftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px;
  border-radius: 12px;
  background: #f7f8fc;
  border: 1px solid #f0f0f2;
`;

const DraftLabel = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 10px;
  font-weight: 700;
  color: #a0a0a8;
`;

const DraftText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 12.5px;
  line-height: 1.5;
  color: #17171b;
`;

const EditTextarea = styled.textarea`
  resize: none;
  min-height: 70px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #dbe4fc;
  font-family: Pretendard;
  font-size: 12.5px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PrimaryButton = styled.button`
  flex: 1 0 0;
  height: 38px;
  border-radius: 999px;
  border: none;
  background: ${({ disabled }) => (disabled ? '#dbe4fc' : '#2563eb')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
`;

const GhostButton = styled.button`
  height: 38px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid #efeff1;
  background: #fff;
  color: #6b6b73;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
`;

const StatusBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px;
  border-radius: 12px;
  background: ${({ $tone }) => ($tone === 'success' ? '#EAF6EE' : '#F0F0F2')};
`;

const StatusTitle = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: ${({ $tone }) => ($tone === 'success' ? '#1F7A45' : '#6b6b73')};
`;

const StatusHint = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  color: #a0a0a8;
`;

const EmptyPanel = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #a0a0a8;
  font-family: Pretendard;
  font-size: 12.5px;
  text-align: center;
`;

const SAVE_DELAY_MS = 450;

function QuestionApprovalPanel({ question, onSaved, onDiscarded, onUndo, onEditSave }) {
  const [mode, setMode] = useState('view');
  const [draftText, setDraftText] = useState('');

  useEffect(() => {
    setMode('view');
  }, [question?.id]);

  if (!question) {
    return (
      <Panel>
        <EmptyPanel>왼쪽에서 질문을 선택하면 승인 카드가 표시됩니다</EmptyPanel>
      </Panel>
    );
  }

  if (question.status === 'saved') {
    return (
      <Panel>
        <HeadRow>
          <Title>승인 완료</Title>
        </HeadRow>
        <StatusBanner $tone="success">
          <StatusTitle>핸드북에 저장되었습니다.</StatusTitle>
          <StatusHint>다음부터 같은 질문은 AI가 직접 답합니다.</StatusHint>
        </StatusBanner>
        <QuestionText style={{ fontSize: 13, color: '#6b6b73', fontWeight: 600 }}>{question.text}</QuestionText>
      </Panel>
    );
  }

  if (question.status === 'discarded') {
    return (
      <Panel>
        <HeadRow>
          <Title>저장 안 함</Title>
        </HeadRow>
        <StatusBanner>
          <StatusTitle style={{ color: '#6b6b73' }}>저장하지 않았습니다.</StatusTitle>
          <StatusHint>답변은 스레드에 남았지만 핸드북에는 반영되지 않습니다.</StatusHint>
        </StatusBanner>
        <GhostButton type="button" onClick={() => onUndo(question.id)}>
          실행 취소
        </GhostButton>
      </Panel>
    );
  }

  const startEdit = () => {
    setDraftText(question.aiDraftText);
    setMode('editing');
  };

  const handleApprove = () => {
    setMode('saving');
    setTimeout(() => {
      onSaved(question.id);
    }, SAVE_DELAY_MS);
  };

  const handleEditSave = () => {
    onEditSave(question.id, draftText.trim());
    setMode('saving');
    setTimeout(() => {
      onSaved(question.id);
    }, SAVE_DELAY_MS);
  };

  return (
    <Panel>
      <HeadRow>
        <Title>승인 대기</Title>
        <Badge>{question.project}</Badge>
      </HeadRow>
      <MetaRow>
        <span>{question.source}</span>
        <span>·</span>
        <span>{question.receivedAt}</span>
      </MetaRow>

      <QuestionText>{question.text}</QuestionText>

      {mode === 'editing' ? (
        <EditTextarea autoFocus value={draftText} onChange={(e) => setDraftText(e.target.value)} />
      ) : (
        <DraftBox>
          <DraftLabel>AI 초안 답변</DraftLabel>
          <DraftText>{question.aiDraftText}</DraftText>
        </DraftBox>
      )}

      {mode === 'saving' ? (
        <StatusBanner>
          <StatusTitle style={{ color: '#6b6b73' }}>핸드북에 저장 중…</StatusTitle>
        </StatusBanner>
      ) : mode === 'editing' ? (
        <ButtonRow>
          <PrimaryButton type="button" onClick={handleEditSave} disabled={draftText.trim().length === 0}>
            수정 후 저장
          </PrimaryButton>
          <GhostButton type="button" onClick={() => setMode('view')}>
            되돌리기
          </GhostButton>
        </ButtonRow>
      ) : (
        <ButtonRow>
          <PrimaryButton type="button" onClick={handleApprove}>
            승인 후 저장
          </PrimaryButton>
          <GhostButton type="button" onClick={startEdit}>
            수정
          </GhostButton>
          <GhostButton type="button" onClick={() => onDiscarded(question.id)}>
            저장 안 함
          </GhostButton>
        </ButtonRow>
      )}
    </Panel>
  );
}

export default QuestionApprovalPanel;
