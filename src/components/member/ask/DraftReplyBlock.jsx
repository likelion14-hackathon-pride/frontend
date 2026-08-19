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

export default function DraftReplyBlock({
  view,
  enText,
  draftKr,
  channels = [],
  pending = false,
  sentLabel,
  onSend,
}) {
  return (
    <Box>
      <Title>The Korean question is already written for you.</Title>

      {view === 'reviewing' && (
        <ReviewPanel
          enText={enText}
          krText={draftKr}
          channels={channels}
          pending={pending}
          onSend={onSend}
        />
      )}

      {view === 'sent' && (
        <SentConfirmation label={sentLabel ?? 'Sent to message in #payment-api'} />
      )}
    </Box>
  );
}
