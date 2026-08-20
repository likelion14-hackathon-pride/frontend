import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import * as cardsApi from '../../apis/cards';
import * as qnaApi from '../../apis/qna';
import * as sourcesApi from '../../apis/sources';
import { MESSAGE_ROLE, SCOPE_KIND } from '../../apis/constants';
import { toApiError } from '../../apis/errors';
import MemberShell from '../../components/member/layout/MemberShell';
import AskEmptyState from '../../components/member/ask/AskEmptyState';
import AskScopeChips from '../../components/member/ask/AskScopeChips';
import ChatInputBar from '../../components/member/ask/ChatInputBar';
import ChatBubble from '../../components/member/ask/ChatBubble';
import { InlineError, LoadingState } from '../../components/common/AsyncStates';
import { useAsync } from '../../hooks/useAsync';
import { useMemberNavigation } from '../../context/member/MemberContext';

// Layout 은 이제 폭 제한이 없다 — 화면 전체 폭을 차지해야 스크롤바가 진짜 오른쪽 끝에 붙는다.
const Layout = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow: hidden;
`;

// 스크롤은 이 영역(화면 전체 폭)에서 일어난다.
const ScrollArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// 실제 채팅 내용은 이 안에서만 760px로 가운데 정렬 — 폭은 예전과 동일하다.
const CenteredContent = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 28px;
`;

const Footer = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const COMPANY_SCOPE_ID = 'company'; // 회사 전반. 서버에는 scopeId 를 보내지 않는다.

export default function MemberAskPage() {
  const {
    companyId,
    profile,
    projectScopes,
    pendingQuestion,
    pendingQuestionCardId,
    clearPendingQuestion,
  } = useMemberNavigation();

  const [scopeId, setScopeId] = useState(COMPANY_SCOPE_ID);
  // 검색 범위마다 스레드가 따로 선다. 후속 질문은 같은 스레드로 이어 보낸다.
  const [threadByScope, setThreadByScope] = useState({});
  const [messagesByScope, setMessagesByScope] = useState({});
  const [sending, setSending] = useState(false);
  const [askError, setAskError] = useState(null);
  const handledQuestionRef = useRef(null);
  const listRef = useRef(null);

  // 질문을 슬랙으로 보낼 때 올릴 채널. 수집 대상 채널 목록에서 고른다.
  const channelsQuery = useAsync(() => sourcesApi.fetchChannelSummaries(companyId), [companyId], {
    enabled: Boolean(companyId),
  });
  const channels = channelsQuery.data?.items ?? [];

  const scopes = useMemo(
    () => [
      { id: COMPANY_SCOPE_ID, label: 'Company-wide' },
      ...projectScopes
        .filter((scope) => scope.kind === SCOPE_KIND.PROJECT)
        .map((scope) => ({ id: scope.id, label: scope.name })),
    ],
    [projectScopes]
  );

  const messages = messagesByScope[scopeId] ?? [];

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length]);

  function appendMessage(targetScope, message) {
    setMessagesByScope((prev) => ({
      ...prev,
      [targetScope]: [...(prev[targetScope] ?? []), message],
    }));
  }

  async function handleSend(text, relatedCardId) {
    const question = String(text ?? '').trim();
    if (!question || !companyId || sending) return;

    const targetScope = scopeId;
    setAskError(null);
    setSending(true);
    appendMessage(targetScope, { role: MESSAGE_ROLE.USER, body: question });

    try {
      // 카드에서 넘어온 질문은 카드 전용 엔드포인트로 보낸다.
      // 원문과 목적을 함께 넘겨야 '얼마나 깊게 봐야 하나요' 같은 질문이 허공에 뜨지 않는다.
      const payload = relatedCardId
        ? await cardsApi.askAboutCard(companyId, relatedCardId, question)
        : await qnaApi.ask(companyId, {
            question,
            threadId: threadByScope[targetScope],
            scopeId: targetScope === COMPANY_SCOPE_ID ? undefined : targetScope,
          });

      if (payload.threadId) {
        setThreadByScope((prev) => ({ ...prev, [targetScope]: payload.threadId }));
      }

      appendMessage(targetScope, {
        role: MESSAGE_ROLE.AI,
        // 대표에게 보낼 때 '영어 원문' 자리에 들어갈 질문. 답이 비어 있어도 필요하다.
        question,
        body: payload.answer,
        verdict: payload.verdict,
        resultType: payload.resultType,
        citations: payload.citations ?? [],
        warnings: payload.warnings ?? [],
        draftKo: payload.draftKo,
        messageId: payload.messageId,
        threadId: payload.threadId,
        relatedCardId: relatedCardId ?? null,
      });
    } catch (caught) {
      setAskError(toApiError(caught));
    } finally {
      setSending(false);
    }
  }

  // Tasks 화면에서 넘겨준 질문. 한 번만 처리한다.
  useEffect(() => {
    if (pendingQuestion && handledQuestionRef.current !== pendingQuestion) {
      handledQuestionRef.current = pendingQuestion;
      handleSend(pendingQuestion, pendingQuestionCardId);
      clearPendingQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuestion]);

  const activeScopeLabel = scopes.find((scope) => scope.id === scopeId)?.label ?? 'Company-wide';

  return (
    <MemberShell screenTitle="Ask SAi">
      <Layout>
        <ScrollArea ref={listRef}>
          <CenteredContent>
            {messages.length === 0 ? (
              <AskEmptyState userName={profile.name} onSuggestionClick={(q) => handleSend(q)} />
            ) : (
              <MessageList>
                {messages.map((message, index) => (
                  <ChatBubble
                    key={`${index}-${message.role}-${message.messageId ?? 'local'}`}
                    message={message}
                    channels={channels}
                    onEscalated={() => {}}
                  />
                ))}
                {sending && <LoadingState compact label="SAi is checking the handbook..." />}
              </MessageList>
            )}
          </CenteredContent>
        </ScrollArea>

        <Footer>
          <InlineError error={askError} />
          <AskScopeChips scopes={scopes} activeId={scopeId} onSelect={setScopeId} />
          <ChatInputBar
            scopeLabel={activeScopeLabel}
            disabled={sending}
            onSend={(text) => handleSend(text)}
          />
        </Footer>
      </Layout>
    </MemberShell>
  );
}
