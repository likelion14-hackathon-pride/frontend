import { useState } from 'react';
import styled from 'styled-components';
import SourceDetails from './SourceDetails';
import DraftReplyBlock from './DraftReplyBlock';
import saiSpeaking from '../../../assets/SAI-speaking.png';

const UserBubble = styled.div`
  align-self: flex-end;
  max-width: 82%;
  background: #fff;
  border: 1px solid #ededf0;
  color: #17171b;
  font-size: 16px;
  line-height: 1.6;
  padding: 12px 16px;
  border-radius: 18px;
  box-shadow:
    0 8px 20px -10px rgba(17, 17, 20, 0.1),
    0 1px 2px 0 rgba(17, 17, 20, 0.04);
`;

const AiRow = styled.div`
  display: flex;
  gap: 16px;
`;

const AiAvatar = styled.img`
  width: 56px;
  height: 63px;
  flex: none;
  object-fit: contain;
`;

const AiContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const AiBody = styled.div`
  font-size: 16.5px;
  line-height: 1.75;
  color: #17171b;
`;

export default function ChatBubble({ message }) {
  const [draftView, setDraftView] = useState('collapsed'); // 'collapsed' | 'reviewing' | 'sent'

  if (message.role === 'user') {
    return <UserBubble>{message.body}</UserBubble>;
  }

  const hasSources = message.sources?.length > 0;

  return (
    <AiRow>
      <AiAvatar src={saiSpeaking} alt="" />
      <AiContent>
        <AiBody>{message.body}</AiBody>

        {hasSources && <SourceDetails sources={message.sources} />}

        {!hasSources && (
          <DraftReplyBlock
            view={draftView}
            enText={message.enSummary}
            draftKr={message.draftKr}
            ownerNote={
              message.ownerNote ?? 'Owner offline · a reply lands next working morning in Seoul'
            }
            sentLabel={message.sentLabel}
            onReview={() => setDraftView('reviewing')}
            onSendAsIs={() => setDraftView('sent')}
            onCancelReview={() => setDraftView('collapsed')}
            onSend={() => setDraftView('sent')}
          />
        )}
      </AiContent>
    </AiRow>
  );
}
