import { useState } from 'react';
import styled from 'styled-components';
import QuestionStatCards from './QuestionStatCards';
import QuestionList from './QuestionList';
import QuestionApprovalPanel from './QuestionApprovalPanel';
import { INITIAL_QUESTIONS, QUESTION_STATS } from './questionData';

const TabContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
`;

const HeaderTextGroup = styled.div`
  display: inline-flex;
  padding-bottom: 1.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7.792px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.8px;
  letter-spacing: -1.2px;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%;
`;

const SplitRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

function QuestionTab() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [selectedId, setSelectedId] = useState(INITIAL_QUESTIONS[2]?.id ?? INITIAL_QUESTIONS[0]?.id ?? null);
  const [savedCount, setSavedCount] = useState(0);

  const selectedQuestion = questions.find((q) => q.id === selectedId) ?? null;

  const updateQuestion = (id, patch) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));
  };

  const handleSendReply = (id, replyText) => {
    updateQuestion(id, {
      status: 'pending_approval',
      ownerReply: replyText,
      relativeTime: '방금',
      suggestion: {
        tag: '프로젝트',
        title: replyText,
        en: '',
        source: '방금 작성',
      },
    });
  };

  const handleApprove = (id) => {
    updateQuestion(id, { status: 'saved' });
    setSavedCount((prev) => prev + 1);
  };

  const handleDiscard = (id) => updateQuestion(id, { status: 'discarded' });
  const handleUndo = (id) => updateQuestion(id, { status: 'pending_approval' });
  const handleEditSuggestion = (id, title) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, suggestion: { ...q.suggestion, title } } : q))
    );
  };

  const waitingCount = questions.filter((q) => q.status === 'waiting').length;
  const approvalCount = questions.filter((q) => q.status === 'pending_approval').length;

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>질문</Heading>
        <Subheading>
          AI가 답하지 못한 질문은 대표님 답변을 거쳐 핸드북 항목이 됩니다. 저장 단위는 질문-답변 1쌍당 항목 1개입니다
        </Subheading>
      </HeaderTextGroup>

      <QuestionStatCards
        waitingCount={waitingCount}
        waitingFootnote={QUESTION_STATS.waitingFootnote}
        approvalCount={approvalCount}
        approvalFootnote={QUESTION_STATS.approvalFootnote}
        weeklySaved={QUESTION_STATS.weeklySaved + savedCount}
        weeklySavedFootnote={QUESTION_STATS.weeklySavedFootnote}
      />

      <SplitRow>
        <QuestionList questions={questions} selectedId={selectedId} onSelect={setSelectedId} />
        <QuestionApprovalPanel
          question={selectedQuestion}
          onSendReply={handleSendReply}
          onApprove={handleApprove}
          onDiscard={handleDiscard}
          onUndo={handleUndo}
          onEditSuggestion={handleEditSuggestion}
        />
      </SplitRow>
    </TabContent>
  );
}

export default QuestionTab;
