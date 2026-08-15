import { useState } from 'react';
import styled from 'styled-components';
import QuestionStatCards from './QuestionStatCards';
import QuestionList from './QuestionList';
import QuestionApprovalPanel from './QuestionApprovalPanel';
import { INITIAL_QUESTIONS, WEEKLY_ANSWERED_BASE } from './questionData';

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-self: stretch;
`;

const Heading = styled.h1`
  margin: 0;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -0.6px;
`;

const Subheading = styled.p`
  margin: 6px 0 0;
  font-family: Pretendard;
  font-size: 13px;
  color: #6b6b73;
`;

const SplitRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
`;

function QuestionTab() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [selectedId, setSelectedId] = useState(INITIAL_QUESTIONS[0]?.id ?? null);
  const [savedCount, setSavedCount] = useState(0);

  const pending = questions.filter((q) => q.status !== 'saved' && q.status !== 'discarded');
  const selectedQuestion = questions.find((q) => q.id === selectedId) ?? null;

  const updateStatus = (id, status) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
  };

  const handleSaved = (id) => {
    updateStatus(id, 'saved');
    setSavedCount((prev) => prev + 1);
    const next = pending.find((q) => q.id !== id);
    setSelectedId(next ? next.id : id);
  };

  const handleDiscarded = (id) => updateStatus(id, 'discarded');
  const handleUndo = (id) => updateStatus(id, 'pending');
  const handleEditSave = (id, text) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, aiDraftText: text } : q)));
  };

  return (
    <TabContent>
      <div>
        <Heading>질문</Heading>
        <Subheading>AI가 답변한 질문을 검토하고 핸드북 반영 여부를 승인하세요</Subheading>
      </div>

      <QuestionStatCards
        todayWaiting={pending.length}
        approvalWaiting={pending.length}
        weeklyAnswered={WEEKLY_ANSWERED_BASE + savedCount}
      />

      <SplitRow>
        <QuestionList questions={questions} selectedId={selectedId} onSelect={setSelectedId} />
        <QuestionApprovalPanel
          question={selectedQuestion}
          onSaved={handleSaved}
          onDiscarded={handleDiscarded}
          onUndo={handleUndo}
          onEditSave={handleEditSave}
        />
      </SplitRow>
    </TabContent>
  );
}

export default QuestionTab;
