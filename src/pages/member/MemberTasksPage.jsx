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

const COLUMNS = [
  {
    id: 'ready',
    name: 'Ready',
    cards: [
      {
        id: 1,
        title: 'Payment failure logs',
        tags: [
          { label: 'payment-api', type: 'neutral' },
          { label: 'due today', type: 'warn' },
        ],
        people: ['김', 'M'],
        source: '#payment-api · 김대표 · 09:41',
        slackHref: undefined,
        type: 'main',
        when: 'Today',
        purpose: 'Find out why payment webhook retries are failing for #payment-api.',
        output: 'Root cause + short summary',
        deadline: 'Today 18:00',
        steps: [
          { title: 'Check the webhook retry logs in Sentry', src: 'payment-api/config/sentry.yml' },
          { title: 'Confirm the timeout threshold', src: 'CONTRIBUTING.md, line 24' },
        ],
        resolved: false,
        moveHint: 'Move this to In progress once you start.',
      },
    ],
  },
  { id: 'inprogress', name: 'In progress', cards: [] },
  { id: 'waiting', name: 'Waiting', cards: [] },
  { id: 'answered', name: 'Answered', cards: [] },
  { id: 'done', name: 'Done', cards: [] },
];

export default function MemberTasksPage() {
  const { goToAsk } = useMemberNavigation();
  const [activeProject, setActiveProject] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isPanelWide, setIsPanelWide] = useState(false);

  function handleCardClick(card, columnId) {
    setSelectedTask({ ...card, columnId });
  }

  return (
    <MemberShell screenTitle="Tasks">
      <PageContent>
        <TasksGreeting onAskClick={goToAsk} />
        <ProjectFilterChips projects={PROJECTS} activeId={activeProject} onSelect={setActiveProject} />
        <TaskBoard
          columns={COLUMNS}
          onCardClick={handleCardClick}
        />
      </PageContent>

      <TaskDetailPanel
        task={selectedTask}
        isWide={isPanelWide}
        onToggleWide={() => setIsPanelWide((v) => !v)}
        onClose={() => setSelectedTask(null)}
        onMoveAction={() => {/* TODO: 다음 컬럼으로 이동 */}}
      />
    </MemberShell>
  );
}