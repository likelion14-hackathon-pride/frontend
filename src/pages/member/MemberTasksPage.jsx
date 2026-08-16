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

// 버튼 클릭 시 다음 컬럼 매핑
const CTA_NEXT_COLUMN = {
  ready: 'inprogress',
  inprogress: 'done',
  answered: 'done',
};

export default function MemberTasksPage() {
  const { goToAsk, goToHandbook, profile } = useMemberNavigation();
  const [activeProject, setActiveProject] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isPanelWide, setIsPanelWide] = useState(false);

  const [columns, setColumns] = useState([
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
          draggable: true,
          ctaLabel: "I'll take this on",
          type: 'main',
          when: 'Today',
          purpose: 'Find out why payment webhook retries are failing for #payment-api.',
          output: 'Root cause + short summary',
          deadline: 'Today 18:00',
          steps: [
            {
              title: 'Check the webhook retry logs in Sentry',
              src: 'payment-api/config/sentry.yml',
              onClick: () => goToHandbook('project/payment-api'),
            },
            {
              title: 'Confirm the timeout threshold',
              src: 'CONTRIBUTING.md, line 24',
              onClick: () => goToHandbook('project/payment-api'),
            },
          ],
          resolved: false,
          moveHint: 'Move this to In progress once you start.',
        },
      ],
    },
    { id: 'inprogress', name: 'In progress', cards: [] },
    { id: 'waiting', name: 'Waiting', cards: [] },
    {
      id: 'answered',
      name: 'Answered',
      cards: [
        {
          id: 7,
          title: 'Answer from 김대표 · scope confirmed',
          tags: [{ label: 'reply arrived', type: 'positive' }],
          people: ['김'],
          type: 'message',
          kicker: '김대표 ANSWERED',
          kickerColor: '#3BA55C',
          en: 'Write tests for core payment logic only. UI tests are not required yet.',
          body: '핵심 로직만 테스트 붙여주세요. UI는 아직 안 해도 됩니다.',
          entryTag: 'reply received',
          entryTagTheme: 'positive',
          entryProject: 'payment-api',
          entryTitle: 'payment-api는 핵심 로직만 테스트 작성',
          entryAction: 'Open the related handbook page',
          onToHandbook: () => goToHandbook('project/payment-api'),
        },
      ],
    },
    {
      id: 'done',
      name: 'Done',
      cards: [
        {
          id: 5,
          title: 'Root cause write-up',
          tags: [{ label: 'payment-api', type: 'neutral' }],
          people: ['M'],
          draggable: false,
          type: 'main',
          when: 'Yesterday',
          purpose: 'Summarize why the payment webhook retries were failing.',
          output: 'Root cause + short summary',
          deadline: 'Aug 15 18:00',
          steps: [],
          resolved: true,
          isDone: true,
          undoLabel: 'Move back to In progress',
        },
      ],
    },
  ]);

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

  function moveCard(cardId, fromColumnId, toColumnId) {
    setColumns((prev) => {
      const fromCol = prev.find((c) => c.id === fromColumnId);
      const card = fromCol?.cards.find((c) => c.id === cardId);
      if (!card) return prev;

      const movedCard = { ...card, isDone: toColumnId === 'done' };

      return prev.map((col) => {
        if (col.id === fromColumnId) {
          return { ...col, cards: col.cards.filter((c) => c.id !== cardId) };
        }
        if (col.id === toColumnId) {
          return { ...col, cards: [...col.cards, movedCard] };
        }
        return col;
      });
    });
  }

  function handleCtaClick(card, columnId) {
    const nextColumnId = CTA_NEXT_COLUMN[columnId];
    if (nextColumnId) {
      moveCard(card.id, columnId, nextColumnId);
    }
  }

  return (
    <MemberShell screenTitle="Tasks">
      <PageContent>
        <TasksGreeting userName={profile.name} onAskClick={goToAsk} />
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
            handleCtaClick(selectedTask, selectedTask.columnId);
            setSelectedTask(null);
          }
        }}
      />
    </MemberShell>
  );
}
