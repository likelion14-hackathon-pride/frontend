import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MemberShell from '../../components/member/layout/MemberShell';
import AskEmptyState from '../../components/member/ask/AskEmptyState';
import AskScopeChips from '../../components/member/ask/AskScopeChips';
import ChatInputBar from '../../components/member/ask/ChatInputBar';
import ChatBubble from '../../components/member/ask/ChatBubble';
import { useMemberNavigation } from '../../context/member/MemberContext';

const Layout = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow: hidden;
`;

const MessageList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 28px;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EXAMPLE_MESSAGES_BY_SCOPE = {
  company: [],
  'payment-api': [
    { role: 'user', body: 'Where do error logs go in this project?' },
    {
      role: 'ai',
      body: 'Payment failure logs are collected in Sentry, project payment-api. Open an issue first, then a PR that references it.',
      sources: [
        { kr: '결제 실패 로그는 Sentry에서 확인합니다 (payment-api).', line: 'payment-api/README.md, line 12' },
        { kr: '이슈를 먼저 생성한 뒤 관련 PR을 연결합니다.', line: 'CONTRIBUTING.md, line 8' },
      ],
    },
  ],
  'admin-web': [
    { role: 'user', body: 'Do we require a review before merge here?' },
    {
      role: 'ai',
      body: "Nothing is established in admin-web. A rule like this exists in payment-api, but I will not use another project's rule as grounds for an answer here.",
      sources: [],
      enSummary: 'Should the admin-web logs be sent to Sentry the same way as payment-api? Nothing is established for this project, so I am checking before I decide.',
      draftKr: '대표님, admin-web에서도 에러 로그를 payment-api와 동일하게 Sentry로 보내면 될까요? admin-web 쪽은 정해진 내용이 없어 확인드립니다.',
    },
  ],
};

export default function MemberAskPage() {
  const [scope, setScope] = useState('payment-api');
  const [messagesByScope, setMessagesByScope] = useState(EXAMPLE_MESSAGES_BY_SCOPE);
const { pendingQuestion, clearPendingQuestion } = useMemberNavigation();

  const messages = messagesByScope[scope] ?? [];

  function handleSend(text) {
    setMessagesByScope((prev) => ({
      ...prev,
      [scope]: [...(prev[scope] ?? []), { role: 'user', body: text }],
    }));
  }

  useEffect(() => {
    if (pendingQuestion) {
      handleSend(pendingQuestion);
      clearPendingQuestion();
    }
  }, [pendingQuestion]);


  function handleSuggestionClick(question) {
    handleSend(question);
  }

  return (
    <MemberShell screenTitle="Ask SAI">
      <Layout>
        {messages.length === 0 ? (
          <AskEmptyState onSuggestionClick={handleSuggestionClick} />
        ) : (
          <MessageList>
            {messages.map((m, i) => (
              <ChatBubble key={i} message={m} />
            ))}
          </MessageList>
        )}

        <Footer>
          <AskScopeChips activeId={scope} onSelect={setScope} />
          <ChatInputBar scopeLabel={scope} onSend={handleSend} />
        </Footer>
      </Layout>
    </MemberShell>
  );
}