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
`;

export default function DraftReplyBlock({
  view,
  enText,
  draftKr,
  ownerNote,
  sentLabel,
  onReview,
  onSendAsIs,
  onCancelReview,
  onSend,
}) {
  return (
    <Box>
      <Title>The Korean question is already written for you.</Title>

      {view === 'collapsed' && (
        <>
          <DraftText>{draftKr}</DraftText>
          <ButtonRow>
            <ReviewButton onClick={onReview}>Review it</ReviewButton>
            <SendAsIsButton onClick={onSendAsIs}>Send as is</SendAsIsButton>
          </ButtonRow>
        </>
      )}

      {view === 'reviewing' && (
        <ReviewPanel
          enText={enText}
          krText={draftKr}
          ownerNote={ownerNote}
          onCancel={onCancelReview}
          onSend={onSend}
        />
      )}

      {view === 'sent' && (
        <SentConfirmation label={sentLabel ?? 'Sent to message in #payment-api'} />
      )}
    </Box>
  );
}
