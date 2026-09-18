import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import MemberShell from '../../components/member/layout/MemberShell';
import TasksGreeting from '../../components/member/tasks/TasksGreeting';
import ProjectFilterChips from '../../components/member/tasks/ProjectFilterChips';
import TaskBoard from '../../components/member/tasks/TaskBoard';
import TaskDetailPanel from '../../components/member/tasks/TaskDetailPanel';
import FinishedTasksButton from '../../components/member/tasks/FinishedTasksButton';
import FinishedTasksModal from '../../components/member/tasks/FinishedTasksModal';
import BoardInfoModal from '../../components/member/tasks/BoardInfoModal';
import { InlineError, LoadingState } from '../../components/common/AsyncStates';
import { useMemberNavigation } from '../../context/member/MemberContext';

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function MemberTasksPage() {
  const {
    goToAsk,
    profile,
    columns,
    finishedCards,
    cardsLoading,
    cardsError,
    reloadCards,
    handleCtaClick,
    handleReopen,
    moveCard,
    movingCardId,
    projectScopes,
    moveError,
    clearMoveError,
  } = useMemberNavigation();

  // 프로젝트 칩은 서버의 PROJECT 지식공간에서 온다. 하드코딩한 목록을 쓰지 않는다.
  const projects = useMemo(
    () => projectScopes.map((scope) => ({ id: scope.id, label: scope.name })),
    [projectScopes]
  );

  const [activeProject, setActiveProject] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPanelWide, setIsPanelWide] = useState(false);
  const [isFinishedOpen, setIsFinishedOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Slack 답변이 반영되면 card.column 이 바뀐다. 이 화면에 머무는 동안엔
  // 12초마다, 그리고 다른 탭/창 갔다가 이 화면으로 돌아왔을 때(focus) 다시 불러온다.
  useEffect(() => {
    const intervalId = setInterval(() => {
      reloadCards();
    }, 12000);

    function handleFocus() {
      reloadCards();
    }
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('focus', handleFocus);
    };
  }, [reloadCards]);

  const filteredColumns = useMemo(
    () =>
      activeProject === 'all'
        ? columns
        : columns.map((col) => ({
            ...col,
            cards: col.cards.filter((card) => card.scopeId === activeProject),
          })),
    [columns, activeProject]
  );

  const totalFiltered = filteredColumns.reduce((sum, col) => sum + col.cards.length, 0);
  const activeProjectLabel =
    projects.find((project) => project.id === activeProject)?.label ?? activeProject;

  // 카드가 어느 보드 그룹(Ready/In progress/Question)에 있었는지가 아니라, 카드 자신의
  // 실제 상태(card.column: READY/IN_PROGRESS/WAITING/ANSWERED)를 기준으로 상세 패널을 그린다.
  function handleCardClick(card) {
    setSelectedCard({ ...card, columnId: card.column });
  }

  // TaskDetailPanel 이 어떤 상태로 옮길지(target) 직접 골라서 넘긴다 — Answered 는
  // In progress/Done 둘 다 될 수 있어서 컬럼 하나에 상태 하나로는 정할 수 없기 때문이다.
  async function handleMoveFromPanel(targetStatus) {
    if (!selectedCard) return;
    const result = await moveCard(selectedCard, targetStatus);
    if (result?.ok) setSelectedCard(null);
  }

  async function handleReopenFinished(card) {
    await handleReopen(card);
  }

  return (
    <MemberShell screenTitle="Tasks">
      <PageContent>
        {/* 아직 아무도 열어 보지 않은 지시 수. 서버의 isRead 를 그대로 센다. */}
        <TasksGreeting
          taskCount={columns.reduce(
            (sum, col) => sum + col.cards.filter((card) => !card.isRead).length,
            0
          )}
          userName={profile.name}
          onAskClick={goToAsk}
        />

        <InlineError error={cardsError} onRetry={reloadCards} />
        <InlineError error={moveError} onRetry={clearMoveError} retryLabel="Dismiss" />

        {projects.length > 0 && (
          <ProjectFilterChips
            projects={projects}
            activeId={activeProject}
            onSelect={setActiveProject}
            onInfoClick={() => setIsInfoOpen(true)}
          />
        )}

        {cardsLoading && columns.every((col) => col.cards.length === 0) ? (
          <LoadingState label="Loading task cards…" />
        ) : (
          <TaskBoard
            columns={filteredColumns}
            isEmpty={activeProject !== 'all' && totalFiltered === 0}
            emptyLabel={activeProjectLabel}
            onEmptyReset={() => setActiveProject('all')}
            onCardClick={handleCardClick}
            onCtaClick={handleCtaClick}
          />
        )}
      </PageContent>

      <TaskDetailPanel
        card={selectedCard}
        isWide={isPanelWide}
        onToggleWide={() => setIsPanelWide((v) => !v)}
        onClose={() => setSelectedCard(null)}
        onMoveAction={handleMoveFromPanel}
      />

      <FinishedTasksButton onClick={() => setIsFinishedOpen(true)} />

      {isFinishedOpen && (
        <FinishedTasksModal
          cards={finishedCards}
          reopeningId={movingCardId}
          onReopen={handleReopenFinished}
          onClose={() => setIsFinishedOpen(false)}
        />
      )}

      {isInfoOpen && <BoardInfoModal onClose={() => setIsInfoOpen(false)} />}
    </MemberShell>
  );
}
