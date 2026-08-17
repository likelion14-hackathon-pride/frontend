import styled from 'styled-components';

import ReviewPanel from './ReviewPanel';
import SentConfirmation from './SentConfirmation';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
  background: #fef7f0;
  border-radius: 14px;
  padding: 15px 17px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #b4600d;
  line-height: 123%;
`;

const DraftText = styled.div`
  font-size: 14.5px;
  line-height: 1.75;
  font-family: 'IBM Plex Mono', monospace;
  color: #3a3a42;
  background: #fff;
  border-radius: 10px;
  padding: 15px 14px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 7px;
`;

const ReviewButton = styled.button`
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.25) inset,
    0 6px 16px 0 rgba(255, 96, 0, 0.28);

  &:hover {
    box-shadow:
      inset 0 0 0 999px rgba(255, 255, 255, 0.12),
      0 8px 20px rgba(255, 96, 0, 0.32);
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`;

const SendAsIsButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #6b6b73;
  background: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.04);
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`;

const NoChannelNote = styled.div`
  font-size: 12.5px;
  color: #a0a0a8;
  line-height: 1.6;
`;

export default function DraftReplyBlock({
  view,
  enText,
  draftKr,
  channels = [],
  pending = false,
  sentLabel,
  onReview,
  onSendAsIs,
  onCancelReview,
  onSend,
}) {
  // 보낼 채널이 하나도 없으면 보낼 수 없다. 버튼을 눌러도 되는 척하지 않는다.
  const hasChannel = channels.length > 0;

  return (
    <Box>
      <Title>The Korean question is already written for you.</Title>

      {view === 'collapsed' && (
        <>
          <DraftText>{draftKr}</DraftText>
          {hasChannel ? (
            <ButtonRow>
              <ReviewButton type="button" onClick={onReview} disabled={pending}>
                {pending ? '준비 중…' : 'Review it'}
              </ReviewButton>
              <SendAsIsButton type="button" onClick={onSendAsIs} disabled={pending}>
                Send as is
              </SendAsIsButton>
            </ButtonRow>
          ) : (
            <NoChannelNote>
              보낼 슬랙 채널이 아직 없습니다. 대표님이 소스 연결에서 채널을 추가해야 보낼 수
              있습니다.
            </NoChannelNote>
          )}
        </>
      )}

      {view === 'reviewing' && (
        <ReviewPanel
          enText={enText}
          krText={draftKr}
          channels={channels}
          pending={pending}
          onCancel={onCancelReview}
          onSend={onSend}
        />
      )}

      {view === 'sent' && (
        <SentConfirmation
          label={sentLabel || '대표님께 보냈습니다'}
          onClose={onCancelReview}
        />
      )}
    </Box>
  );
}
