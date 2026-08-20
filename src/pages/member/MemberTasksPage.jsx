import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import MemberShell from '../../components/member/layout/MemberShell';
import TasksGreeting from '../../components/member/tasks/TasksGreeting';
import ProjectFilterChips from '../../components/member/tasks/ProjectFilterChips';
import TaskBoard from '../../components/member/tasks/TaskBoard';
import TaskDetailPanel from '../../components/member/tasks/TaskDetailPanel';
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
    cardsLoading,
    cardsError,
    reloadCards,
    handleCtaClick,
    handleReopen,
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

  function handleCardClick(card, columnId) {
    setSelectedCard({ ...card, columnId });
  }

  async function handleMoveFromPanel() {
    if (!selectedCard) return;
    const result =
      selectedCard.column === 'DONE'
        ? await handleReopen(selectedCard)
        : await handleCtaClick(selectedCard, selectedCard.columnId ?? selectedCard.column);
    if (result?.ok) setSelectedCard(null);
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
    </MemberShell>
  );
}
