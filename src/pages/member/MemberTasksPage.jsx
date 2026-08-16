import { useState } from 'react';
import styled from 'styled-components';
import MemberShell from '../../components/member/layout/MemberShell';
import TasksGreeting from '../../components/member/tasks/TasksGreeting';
import ProjectFilterChips from '../../components/member/tasks/ProjectFilterChips';
import TaskBoard from '../../components/member/tasks/TaskBoard';
import TaskDetailPanel from '../../components/member/tasks/TaskDetailPanel';
import { useMemberNavigation } from '../../context/member/MemberContext';

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PROJECTS = [
  { id: 'payment-api', label: 'payment-api' },
  { id: 'admin-web', label: 'admin-web' },
];

export default function MemberTasksPage() {
  const { goToAsk, columns, handleCtaClick, handleReopen } = useMemberNavigation();
  const [activeProject, setActiveProject] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isPanelWide, setIsPanelWide] = useState(false);

  const filteredColumns =
    activeProject === 'all'
      ? columns
      : columns.map((col) => ({
          ...col,
          cards: col.cards.filter((c) => c.tags?.some((t) => t.label === activeProject)),
        }));

  const totalFiltered = filteredColumns.reduce((sum, c) => sum + c.cards.length, 0);

  function handleCardClick(card, columnId) {
    setSelectedTask({ ...card, columnId });
  }

  return (
    <MemberShell screenTitle="Tasks">
      <PageContent>
        <TasksGreeting onAskClick={goToAsk} />
        <ProjectFilterChips
          projects={PROJECTS}
          activeId={activeProject}
          onSelect={setActiveProject}
        />
        <TaskBoard
          columns={filteredColumns}
          isEmpty={activeProject !== 'all' && totalFiltered === 0}
          emptyLabel={activeProject}
          onEmptyReset={() => setActiveProject('all')}
          onCardClick={handleCardClick}
          onCtaClick={handleCtaClick}
        />
      </PageContent>

      <TaskDetailPanel
        task={selectedTask}
        isWide={isPanelWide}
        onToggleWide={() => setIsPanelWide((v) => !v)}
        onClose={() => setSelectedTask(null)}
        onMoveAction={() => {
          if (selectedTask) {
            if (selectedTask.isDone) {
              handleReopen(selectedTask);
            } else {
              handleCtaClick(selectedTask, selectedTask.columnId);
            }
            setSelectedTask(null);
          }
        }}
      />
    </MemberShell>
  );
}
