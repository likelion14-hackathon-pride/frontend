import { useState } from 'react';
import styled from 'styled-components';

import * as qnaApi from '../../../apis/qna';
import { ASK_RESULT_TYPE, MESSAGE_ROLE, RISK_LEVEL, VERDICT } from '../../../apis/constants';
import { useMutation } from '../../../hooks/useAsync';
import { InlineError } from '../../common/AsyncStates';
import { useMemberNavigation } from '../../../context/member/MemberContext';
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

const WarningBox = styled.div`
  display: flex;
  gap: 9px;
  margin-top: 10px;
  padding: 11px 13px;
  border-radius: 12px;
  background: ${({ $danger }) => ($danger ? '#FEF2F3' : '#FFF8E3')};
  border: 1px solid ${({ $danger }) => ($danger ? '#F6CACD' : '#F5E2AE')};
  color: ${({ $danger }) => ($danger ? '#96131C' : '#7A5A05')};
  font-size: 13px;
  line-height: 1.6;
`;

const WarningKeyword = styled.strong`
  flex: none;
`;

const OutOfScope = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: #a0a0a8;
  line-height: 1.6;
`;

// verdict 별로 답이 없는 이유가 다르다. 빈 말풍선을 띄우지 않도록 문장을 정해 둔다.
const EMPTY_ANSWER_TEXT = {
  [VERDICT.NO_SOURCE]: '핸드북에 근거가 없어 답하지 않았습니다.',
  [VERDICT.NEEDS_DECISION]: '규칙이 아니라 판단이 필요한 질문입니다.',
  [VERDICT.OUT_OF_SCOPE]: '이 팀의 규칙과 관계없는 질문으로 보입니다.',
  DEFAULT: '답을 만들지 못했습니다.',
};

export default function ChatBubble({ message, channels = [] }) {
  const { companyId, reloadCards } = useMemberNavigation();
  const [view, setView] = useState('collapsed'); // 'collapsed' | 'reviewing' | 'sent'
  const [escalation, setEscalation] = useState(null);
  const [sentLabel, setSentLabel] = useState('');

  const create = useMutation(() =>
    qnaApi.createEscalation(companyId, {
      // messageId 가 있으면 서버가 그 메시지에서 질문과 초안을 그대로 가져온다.
      messageId: message.messageId,
      questionEn: message.messageId ? undefined : message.question,
      draftKo: message.draftKo,
    })
  );
  const send = useMutation(({ escalationId, itemId, extraEn }) =>
    qnaApi.sendEscalation(companyId, escalationId, { itemId, extraEn })
  );

  if (message.role === MESSAGE_ROLE.USER) {
    return <UserBubble>{message.body}</UserBubble>;
  }

  const citations = message.citations ?? [];
  const warnings = message.warnings ?? [];
  const needsOwner = message.resultType === ASK_RESULT_TYPE.NEEDS_OWNER;
  const bodyText =
    message.body ||
    EMPTY_ANSWER_TEXT[message.verdict] ||
    EMPTY_ANSWER_TEXT.DEFAULT;

  // 근거는 규칙(entryId)일 수도, 과거 대화(chunkId)일 수도 있다. 화면은 한 가지로만 그린다.
  const sources = citations.map((citation) => ({
    kr: citation.title ?? '(제목 없음)',
    line: [citation.scopeName, citation.permalink ? '원문 보기' : null]
      .filter(Boolean)
      .join(' · '),
    href: citation.permalink,
  }));

  async function ensureEscalation() {
    if (escalation) return escalation;
    const result = await create.mutate();
    if (!result.ok) return null;
    setEscalation(result.data);
    return result.data;
  }

  async function handleReview() {
    const created = await ensureEscalation();
    if (created) setView('reviewing');
  }

  async function handleSend(extraEn = [], itemId) {
    const created = await ensureEscalation();
    if (!created) return;

    const targetItemId = itemId ?? channels[0]?.id;
    if (!targetItemId) return;

    const result = await send.mutate({
      escalationId: created.id,
      itemId: targetItemId,
      extraEn,
    });
    if (!result.ok) return;

    const channelName = channels.find((channel) => channel.id === targetItemId)?.label ?? '슬랙';
    setSentLabel(`${channelName} 채널로 보냈습니다`);
    setEscalation(result.data);
    setView('sent');
    // 카드에서 올라온 질문이면 보드의 열이 바뀐다.
    reloadCards();
  }

  return (
    <AiRow>
      <AiAvatar src={saiSpeaking} alt="" />
      <AiContent>
        <AiBody>{bodyText}</AiBody>

        {warnings.map((warning) => (
          <WarningBox key={warning.keyword} $danger={warning.level === RISK_LEVEL.DANGER}>
            <WarningKeyword>{warning.keyword}</WarningKeyword>
            <span>{warning.note || '대표님께 먼저 확인하세요.'}</span>
          </WarningBox>
        ))}

        {sources.length > 0 && <SourceDetails sources={sources} />}

        {message.verdict === VERDICT.OUT_OF_SCOPE && (
          <OutOfScope>회사 규칙과 무관한 질문이라 대표님께 보내지 않았습니다.</OutOfScope>
        )}

        <InlineError error={create.error || send.error} />

        {needsOwner && message.draftKo && (
          <DraftReplyBlock
            view={view}
            enText={message.question ?? message.body}
            draftKr={escalation?.draftKo ?? message.draftKo}
            channels={channels}
            pending={create.pending || send.pending}
            sentLabel={sentLabel}
            onReview={handleReview}
            onSendAsIs={() => handleSend([])}
            onCancelReview={() => setView('collapsed')}
            onSend={handleSend}
          />
        )}
      </AiContent>
    </AiRow>
  );
}
