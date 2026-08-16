import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 320px;
  min-width: 0;
  min-height: 388.823px;
  flex-direction: column;
  padding: 24px 20.667px;
  gap: 16px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 5.667px 14px 5.333px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const ProjectText = styled.span`
  color: #3c3c44;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  white-space: nowrap;
`;

const RelativeTime = styled.span`
  flex-shrink: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 121%;
`;

const MessageRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
`;

const AvatarPill = styled.span`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #dde7fd;
`;

const AvatarLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
  white-space: nowrap;
`;

const OwnerAvatar = styled.span`
  display: flex;
  height: 28px;
  width: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-weight: 700;
  line-height: 127%;
`;

const Bubble = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  padding: 12px 18px 12px 14px;
  align-items: center;
  border-radius: ${({ $reverse }) => ($reverse ? '14px 4px 14px 14px' : '4px 14px 14px 14px')};
  background: ${({ $reverse }) => ($reverse ? '#17171B' : '#FAFAFB')};
`;

const BubbleText = styled.p`
  margin: 0;
  color: ${({ $reverse }) => ($reverse ? '#FFFFFF' : '#3A3A42')};
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const SuggestionBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 0.667px dashed #d8d8de;
  background: #fafafb;
`;

const SuggestionHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SuggestionLabel = styled.span`
  color: #2563eb;
  font-family: 'Plus Jakarta Sans';
  font-size: 9.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

const ProjectTag = styled.span`
  display: flex;
  height: 21.333px;
  padding: 4px 12px 4.333px 9px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: #eef3ff;
  color: #1d4ed8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
`;

const SuggestionTitle = styled.p`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 14.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 20.3px;
  letter-spacing: -0.3px;
`;

const SuggestionEn = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
`;

const SuggestionSource = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 133%;
`;

const EditTextarea = styled.textarea`
  resize: none;
  min-height: 60px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  margin-top: auto;
`;

const ApproveButton = styled.button`
  display: flex;
  flex: 1 0 0;
  height: 40.667px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? '#DBE4FC' : '#2563EB')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
`;

const GhostButton = styled.button`
  display: flex;
  height: 40.667px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: #f4f4f6;
  cursor: pointer;
  color: ${({ $muted }) => ($muted ? '#A0A0A8' : '#3C3C44')};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  white-space: nowrap;
`;

const AiNotAnsweredBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 14px;
  background: #FFF8EC;
`;

const AiNotAnsweredTitle = styled.span`
  color: #9A6212;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%;
`;

const AiNotAnsweredBody = styled.p`
  margin: 0;
  color: #9A6212;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;

const SlackButton = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  background: #2563EB;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.2px;
  transition: background 0.15s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const ComposeBox = styled.textarea`
  resize: none;
  min-height: 80px;
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: 0.667px solid #efeff1;
  background: #fafafb;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  outline: none;

  &::placeholder {
    color: #a0a0a8;
  }

  &:focus {
    border-color: #2563eb;
    background: #fff;
  }
`;

const SendButton = styled.button`
  display: flex;
  width: 100%;
  height: 40.667px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border: none;
  border-radius: 12px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#DBE4FC' : '#2563EB')};
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
`;

const StatusBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  border-radius: 14px;
  background: #eaf6ef;
`;

const StatusBannerTitle = styled.span`
  color: #1f7a45;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
`;

const StatusBannerHint = styled.span`
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
`;

const SavingBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 14px;
  background: #f4f4f6;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
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
`;

const STATUS_META = {
  waiting: { label: '답변 대기', bg: '#FFF6E8', color: '#9A6212' },
  pending_approval: { label: '승인 대기', bg: '#EEF3FF', color: '#1D4ED8' },
  saved: { label: '저장됨', bg: '#EAF6EF', color: '#1F7A45' },
  discarded: { label: '저장 안 함', bg: '#F4F4F6', color: '#6B6B73' },
};

const SAVE_DELAY_MS = 450;

function QuestionApprovalPanel({
  question,
  onSendReply,
  onApprove,
  onDiscard,
  onUndo,
  onEditSuggestion,
}) {
  const [mode, setMode] = useState('view');
  const [draftTitle, setDraftTitle] = useState('');
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    setMode('view');
    setReplyText('');
  }, [question?.id]);

  if (!question) {
    return (
      <Panel>
        <EmptyPanel>왼쪽에서 질문을 선택하면 상세 내용이 표시됩니다</EmptyPanel>
      </Panel>
    );
  }

  const meta = STATUS_META[question.status];
  const headerLabel = question.queueNumber ? `${question.queueNumber} · ${meta.label}` : meta.label;

  const startEdit = () => {
    setDraftTitle(question.suggestion?.title ?? '');
    setMode('editing');
  };

  const handleApprove = () => {
    setMode('saving');
    setTimeout(() => onApprove(question.id), SAVE_DELAY_MS);
  };

  const handleEditSave = () => {
    onEditSuggestion(question.id, draftTitle.trim());
    setMode('saving');
    setTimeout(() => onApprove(question.id), SAVE_DELAY_MS);
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    onSendReply(question.id, replyText.trim());
  };

  return (
    <Panel>
      <HeaderRow>
        <HeaderLeft>
          <StatusBadge $bg={meta.bg} $color={meta.color}>
            {headerLabel}
          </StatusBadge>
          <ProjectText>{question.project}</ProjectText>
        </HeaderLeft>
        {question.relativeTime && <RelativeTime>{question.relativeTime}</RelativeTime>}
      </HeaderRow>

      <MessageRow>
        <AvatarPill>
          <AvatarLabel>{question.employee}</AvatarLabel>
        </AvatarPill>
        <Bubble>
          <BubbleText>{question.text}</BubbleText>
        </Bubble>
      </MessageRow>

      {question.ownerReply && (
        <MessageRow $reverse>
          <OwnerAvatar>김</OwnerAvatar>
          <Bubble $reverse>
            <BubbleText $reverse>{question.ownerReply}</BubbleText>
          </Bubble>
        </MessageRow>
      )}

      {question.status === 'waiting' && (
        <>
          <AiNotAnsweredBox>
            <AiNotAnsweredTitle>AI가 답하지 않았습니다</AiNotAnsweredTitle>
            <AiNotAnsweredBody>
              핸드북에 관련 근거가 없어 추측하지 않았습니다. 팀원이 대표님께 확인 질문을 보냈습니다.
            </AiNotAnsweredBody>
          </AiNotAnsweredBox>
          <SlackButton type="button" onClick={() => onSendReply && onSendReply(question.id, '')}>
            슬랙 스레드에서 답하기
          </SlackButton>
        </>
      )}

      {question.status === 'saved' && (
        <StatusBanner>
          <StatusBannerTitle>핸드북에 저장되었습니다.</StatusBannerTitle>
          <StatusBannerHint>다음부터 같은 질문은 SAI가 직접 답합니다.</StatusBannerHint>
        </StatusBanner>
      )}

      {question.status === 'discarded' && (
        <>
          <StatusBanner style={{ background: '#F4F4F6' }}>
            <StatusBannerTitle style={{ color: '#6B6B73' }}>저장하지 않았습니다.</StatusBannerTitle>
            <StatusBannerHint>답변은 남았지만 핸드북에는 반영되지 않습니다.</StatusBannerHint>
          </StatusBanner>
          <GhostButton type="button" onClick={() => onUndo(question.id)}>
            실행 취소
          </GhostButton>
        </>
      )}

      {question.status === 'pending_approval' && question.suggestion && (
        <>
          <SuggestionBox>
            <SuggestionHeadRow>
              <SuggestionLabel>저장 제안 · 항목 1개</SuggestionLabel>
              <ProjectTag>{question.suggestion.tag}</ProjectTag>
            </SuggestionHeadRow>
            {mode === 'editing' ? (
              <EditTextarea
                autoFocus
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
              />
            ) : (
              <SuggestionTitle>{question.suggestion.title}</SuggestionTitle>
            )}
            <SuggestionEn>{question.suggestion.en}</SuggestionEn>
            <SuggestionSource>출처 {question.suggestion.source}</SuggestionSource>
          </SuggestionBox>

          {mode === 'saving' ? (
            <SavingBanner>핸드북에 저장 중…</SavingBanner>
          ) : mode === 'editing' ? (
            <ButtonsRow>
              <ApproveButton
                type="button"
                onClick={handleEditSave}
                disabled={draftTitle.trim().length === 0}
              >
                수정 후 저장
              </ApproveButton>
              <GhostButton type="button" onClick={() => setMode('view')}>
                되돌리기
              </GhostButton>
            </ButtonsRow>
          ) : (
            <ButtonsRow>
              <ApproveButton type="button" onClick={handleApprove}>
                승인 후 저장
              </ApproveButton>
              <GhostButton type="button" onClick={startEdit}>
                수정
              </GhostButton>
              <GhostButton type="button" $muted onClick={() => onDiscard(question.id)}>
                저장 안 함
              </GhostButton>
            </ButtonsRow>
          )}
        </>
      )}
    </Panel>
  );
}

export default QuestionApprovalPanel;
