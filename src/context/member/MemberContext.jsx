import { createContext, useContext, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MemberContext = createContext(null);

const DEFAULT_PROFILE = {
  name: 'Minh',
  locationId: 'hanoi',
  role: 'Backend',
};

// Ready → In progress → Done / Answered → Done 매핑
const CTA_NEXT_COLUMN = {
  ready: 'inprogress',
  inprogress: 'done',
  answered: 'done',
};

function buildInitialColumns(goToHandbook) {
  return [
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
    {
      id: 'inprogress',
      name: 'In progress',
      cards: [
        {
          id: 2,
          title: 'Admin table sort bug',
          tags: [{ label: 'admin-web', type: 'neutral' }],
          people: ['지'],
          source: '#admin-web · 지민 · 어제 17:02',
          draggable: true,
          type: 'main',
          when: 'Today',
          purpose:
            'Fix the sort order on the admin users table — newest signups should show first.',
          output: 'Fixed sort + short PR description',
          deadline: 'Tomorrow 12:00',
          steps: [
            {
              title: 'Check how sort order is set in the table config',
              src: 'admin-web/components/UserTable.jsx, line 42',
              onClick: () => goToHandbook('project/admin-web'),
            },
          ],
          resolved: false,
        },
      ],
    },
    {
      id: 'waiting',
      name: 'Waiting',
      cards: [
        {
          id: 8,
          title: 'Two questions sent in Korean',
          tags: [
            { label: 'payment-api', type: 'neutral' },
            { label: 'sent via SAI', type: 'warn' },
          ],
          people: ['김', 'M'],
          source: '#payment-api · 나 (via SAI) · 09:48',
          draggable: false,
          type: 'main',
          when: 'Today',
          purpose: 'Find out why payment webhook retries are failing for #payment-api.',
          output: 'Root cause + short summary',
          deadline: 'Today 18:00',
          steps: [],
          resolved: false,
          kicker: 'SENT VIA SAI · AWAITING REPLY',
          kickerColor: '#FF8A3D',
          en: 'Do we need tests for the retry logic, or is a root cause summary enough?',
          body: '재시도 로직에 대한 테스트도 필요한가요, 아니면 원인 요약만으로 충분한가요?',
        },
      ],
    },
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
          previousColumnId: 'inprogress',
        },
      ],
    },
  ];
}

export function MemberProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [profile, setProfile] = useState(() => ({
    ...DEFAULT_PROFILE,
    ...(location.state?.profile ?? {}),
  }));

  const [pendingQuestion, setPendingQuestion] = useState(null);
  const [pendingQuestionTaskId, setPendingQuestionTaskId] = useState(null);

  const goToHandbook = (path = 'company') => navigate(`/member/handbook/${path}`);

  const [columns, setColumns] = useState(() => buildInitialColumns(goToHandbook));

  function moveCard(cardId, fromColumnId, toColumnId) {
    setColumns((prev) => {
      const fromCol = prev.find((c) => c.id === fromColumnId);
      const card = fromCol?.cards.find((c) => c.id === cardId);
      if (!card) return prev;

      const movedCard = {
        ...card,
        isDone: toColumnId === 'done',
        previousColumnId: toColumnId === 'done' ? fromColumnId : card.previousColumnId,
      };

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

  // Done 카드의 Reopen: done으로 넘어가기 직전에 있던 컬럼으로 되돌림
  function handleReopen(card) {
    const backTo = card.previousColumnId ?? 'inprogress';
    moveCard(card.id, 'done', backTo);
  }

  // Ask SAI에서 답을 못 찾아 한국어 초안을 보낸 경우 → 관련 task를 waiting으로 자동 이동
  function moveTaskToWaiting(taskId, draft) {
    if (!taskId) return;
    setColumns((prev) => {
      const fromCol = prev.find((col) => col.cards.some((c) => c.id === taskId));
      if (!fromCol || fromCol.id === 'waiting') return prev;
      const card = fromCol.cards.find((c) => c.id === taskId);

      const movedCard = {
        ...card,
        kicker: 'SENT VIA SAI · AWAITING REPLY',
        kickerColor: '#FF8A3D',
        en: draft?.en ?? card.en,
        body: draft?.kr ?? card.body,
      };

      return prev.map((col) => {
        if (col.id === fromCol.id) {
          return { ...col, cards: col.cards.filter((c) => c.id !== taskId) };
        }
        if (col.id === 'waiting') {
          return { ...col, cards: [...col.cards, movedCard] };
        }
        return col;
      });
    });
  }

  const value = useMemo(
    () => ({
      goToHome: () => navigate('/member/home'),
      goToAsk: () => navigate('/member/ask'),
      goToAskWithQuestion: (text, taskId) => {
        setPendingQuestion(text);
        setPendingQuestionTaskId(taskId ?? null);
        navigate('/member/ask');
      },
      goToTasks: () => navigate('/member/tasks'),
      goToHandbook,
      profile,
      setProfile,
      pendingQuestion,
      pendingQuestionTaskId,
      clearPendingQuestion: () => {
        setPendingQuestion(null);
        setPendingQuestionTaskId(null);
      },
      columns,
      handleCtaClick,
      handleReopen,
      moveTaskToWaiting,
    }),
    [navigate, profile, pendingQuestion, pendingQuestionTaskId, columns]
  );

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>;
}

export function useMemberNavigation() {
  const ctx = useContext(MemberContext);
  if (!ctx) throw new Error('useMemberNavigation must be used within MemberProvider');
  return ctx;
}
