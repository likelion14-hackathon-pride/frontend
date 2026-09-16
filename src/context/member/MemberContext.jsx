import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as cardsApi from '../../apis/cards';
import * as handbookApi from '../../apis/handbook';
import {
  ALLOWED_MOVES,
  CARD_COLUMN,
  CARD_STATUS,
  JOB_ROLE_LABEL,
  LOCATION_ZONE,
  SCOPE_KIND,
  WORK_LOCATION_LABEL,
  lookup,
} from '../../apis/constants';
import { toApiError } from '../../apis/errors';
import { useAuth } from '../AuthContext';
import { useAsync } from '../../hooks/useAsync';

const MemberContext = createContext(null);

// 매 렌더마다 새 배열을 만들면 useMemo 가 매번 다시 돈다. 빈 값은 하나를 돌려 쓴다.
const EMPTY = [];

// 보드는 3개 그룹만 그린다: Ready / In progress / Question.
// Question 안에는 WAITING(보낸 질문)과 ANSWERED(답 온 질문)가 같이 들어가고 배지로만 나뉜다.
// DONE은 보드에 두지 않고 Finished tasks 목록으로 따로 뺀다.
const BOARD_GROUP = {
  [CARD_COLUMN.READY]: 'READY',
  [CARD_COLUMN.IN_PROGRESS]: 'IN_PROGRESS',
  [CARD_COLUMN.WAITING]: 'QUESTION',
  [CARD_COLUMN.ANSWERED]: 'QUESTION',
};

const BOARD_GROUP_ORDER = ['READY', 'IN_PROGRESS', 'QUESTION'];

const BOARD_GROUP_LABEL = {
  READY: 'Ready',
  IN_PROGRESS: 'In progress',
  QUESTION: 'Question',
  DEFAULT: 'Other',
};

// Question 그룹 안에서만 붙는 상태 배지. 실제 상태는 여전히 card.column(WAITING/ANSWERED)이 갖고 있다.
// 색은 태그(TAG_THEME)와 같은 warn/positive를 그대로 쓰고, 태그와 헷갈리지 않게
// 모양(TaskCard의 StatusBadge - 아웃라인 스타일)만 다르게 한다.
const QUESTION_BADGE = {
  [CARD_COLUMN.WAITING]: { label: 'waiting', type: 'warn' },
  [CARD_COLUMN.ANSWERED]: { label: 'answered', type: 'positive' },
};

function toBoardCard(card, statusBadge) {
  const tags = [];
  if (card.scopeName) tags.push({ label: card.scopeName, type: 'neutral' });
  if (card.deadlineTextEn || card.deadlineText) {
    tags.push({ label: card.deadlineTextEn || card.deadlineText, type: 'warn' });
  }
  if ((card.duplicateCount ?? 1) > 1) {
    tags.push({ label: `repeated ${card.duplicateCount}×`, type: 'meta' });
  }
  // openQuestionCount/answeredQuestionCount 은 Question 컬럼의 statusBadge(waiting/answered)와
  // 같은 내용을 중복해서 보여주므로 태그로는 더 넣지 않는다.

  const people = [];
  if (card.assigneeName) people.push(card.assigneeName.trim().charAt(0).toUpperCase());
  if (card.requestedBy) people.push(card.requestedBy.trim().charAt(0).toUpperCase());

  return {
    ...card,
    title: card.purposeEn || card.purpose || '(제목 없음)',
    tags,
    people,
    source: [card.sourceLabel, card.requestedBy].filter(Boolean).join(' · ') || null,
    slackHref: card.permalink || undefined,
    statusBadge: statusBadge ?? null,
  };
}

// 카드를 보드 3그룹 + Finished 목록으로 나눈다. 서버가 모르는 column 값을 보내도
// 카드를 잃지 않도록 Ready 밑에 붙인다.
function buildBoard(cards) {
  const buckets = new Map(BOARD_GROUP_ORDER.map((id) => [id, []]));
  const finished = [];

  cards.forEach((card) => {
    const columnId = card.column ?? CARD_COLUMN.READY;

    if (columnId === CARD_COLUMN.DONE) {
      finished.push(toBoardCard(card));
      return;
    }

    const groupId = BOARD_GROUP[columnId] ?? 'READY';
    if (!buckets.has(groupId)) buckets.set(groupId, []);
    buckets.get(groupId).push(toBoardCard(card, QUESTION_BADGE[columnId]));
  });

  const columns = Array.from(buckets.entries()).map(([id, list]) => ({
    id,
    name: lookup(BOARD_GROUP_LABEL, id),
    cards: list,
  }));

  return { columns, finished };
}

export function MemberProvider({ children }) {
  const navigate = useNavigate();
  const { companyId, user, applyMe } = useAuth();

  const [pendingQuestion, setPendingQuestion] = useState(null);
  const [pendingQuestionCardId, setPendingQuestionCardId] = useState(null);
  const [movingCardId, setMovingCardId] = useState(null);
  const [moveError, setMoveError] = useState(null);

  const enabled = Boolean(companyId);

  const cardsQuery = useAsync(() => cardsApi.fetchAllCards(companyId), [companyId], {
    enabled,
    initialData: null,
  });

  const scopesQuery = useAsync(() => handbookApi.fetchScopes(companyId), [companyId], {
    enabled,
    initialData: null,
  });

  // 홈 요약과 시차는 여러 화면(사이드바 · 상단바 · 홈 · 모달)이 같이 쓴다.
  // 화면마다 부르면 같은 요청이 서너 번 나가므로 한 곳에서 받아 나눠 쓴다.
  const homeQuery = useAsync(() => cardsApi.fetchHome(companyId), [companyId], {
    enabled,
    initialData: null,
  });

  const timingQuery = useAsync(() => cardsApi.fetchTiming(companyId), [companyId], {
    enabled,
    initialData: null,
  });

  const cards = cardsQuery.data ?? EMPTY;
  const board = useMemo(() => buildBoard(cards), [cards]);
  const columns = board.columns;
  const finishedCards = board.finished;

  const scopes = scopesQuery.data?.items ?? EMPTY;
  const projectScopes = useMemo(
    () => scopes.filter((scope) => scope.kind === SCOPE_KIND.PROJECT),
    [scopes]
  );
  const companyScopes = useMemo(
    () => scopes.filter((scope) => scope.kind === SCOPE_KIND.COMPANY),
    [scopes]
  );

  const goToHandbook = useCallback(
    (path = 'company') => navigate(`/member/handbook/${path}`),
    [navigate]
  );

  // 카드 이동. 어느 열에서 어떤 status 로 갈 수 있는지는 서버 규칙(ALLOWED_MOVES)을 그대로 따른다.
  const moveCard = useCallback(
    async (card, targetStatus) => {
      if (!companyId || !card) return { ok: false };
      const allowed = lookup(ALLOWED_MOVES, card.column);
      if (!allowed.includes(targetStatus)) {
        const error = { message: '지금 상태에서는 옮길 수 없습니다.' };
        setMoveError(error);
        return { ok: false, error };
      }

      setMovingCardId(card.id);
      setMoveError(null);
      try {
        await cardsApi.updateCard(companyId, card.id, { status: targetStatus });
        await cardsQuery.reload();
        return { ok: true };
      } catch (caught) {
        const error = toApiError(caught);
        setMoveError(error);
        return { ok: false, error };
      } finally {
        setMovingCardId(null);
      }
    },
    [companyId, cardsQuery]
  );

  const nextStatusFor = useCallback((columnId) => {
    if (columnId === CARD_COLUMN.READY) return CARD_STATUS.IN_PROGRESS;
    if (columnId === CARD_COLUMN.IN_PROGRESS) return CARD_STATUS.DONE;
    if (columnId === CARD_COLUMN.ANSWERED) return CARD_STATUS.DONE;
    if (columnId === CARD_COLUMN.WAITING) return CARD_STATUS.IN_PROGRESS;
    if (columnId === CARD_COLUMN.DONE) return CARD_STATUS.IN_PROGRESS; // 되돌리기
    return null;
  }, []);

  const handleCtaClick = useCallback(
    (card, columnId) => {
      const target = nextStatusFor(columnId ?? card?.column);
      if (!target) return undefined;
      return moveCard(card, target);
    },
    [moveCard, nextStatusFor]
  );

  const handleReopen = useCallback((card) => moveCard(card, CARD_STATUS.IN_PROGRESS), [moveCard]);

  const profile = useMemo(
    () => ({
      name: user?.name ?? '',
      email: user?.email ?? '',
      location: user?.location ?? null,
      locationLabel: lookup(WORK_LOCATION_LABEL, user?.location),
      role: user?.role ?? null,
      roleLabel: lookup(JOB_ROLE_LABEL, user?.role),
      // 서버가 준 타임존이 먼저다. 없으면 위치에서 유추하고, 그것도 없으면 기본값.
      timezone: user?.timezone ?? lookup(LOCATION_ZONE, user?.location),
      locale: user?.locale ?? 'en',
    }),
    [user]
  );

  const value = useMemo(
    () => ({
      companyId,
      profile,
      applyMe,

      goToHome: () => navigate('/member/home'),
      goToAsk: () => navigate('/member/ask'),
      goToTasks: () => navigate('/member/tasks'),
      goToHandbook,
      goToAskWithQuestion: (text, cardId) => {
        setPendingQuestion(text);
        setPendingQuestionCardId(cardId ?? null);
        navigate('/member/ask');
      },
      pendingQuestion,
      pendingQuestionCardId,
      clearPendingQuestion: () => {
        setPendingQuestion(null);
        setPendingQuestionCardId(null);
      },

      cards,
      columns,
      finishedCards,
      cardsLoading: cardsQuery.loading,
      cardsError: cardsQuery.error,
      reloadCards: cardsQuery.reload,
      movingCardId,
      moveError,
      clearMoveError: () => setMoveError(null),
      moveCard,
      handleCtaClick,
      handleReopen,
      nextStatusFor,

      scopes,
      projectScopes,
      companyScopes,
      scopesLoading: scopesQuery.loading,
      scopesError: scopesQuery.error,
      reloadScopes: scopesQuery.reload,

      home: homeQuery.data,
      homeLoading: homeQuery.loading,
      homeError: homeQuery.error,
      reloadHome: homeQuery.reload,

      timing: timingQuery.data,
      timingLoading: timingQuery.loading,
      timingError: timingQuery.error,
      reloadTiming: timingQuery.reload,
    }),
    [
      companyId,
      profile,
      applyMe,
      navigate,
      goToHandbook,
      pendingQuestion,
      pendingQuestionCardId,
      cards,
      columns,
      finishedCards,
      cardsQuery.loading,
      cardsQuery.error,
      cardsQuery.reload,
      movingCardId,
      moveError,
      moveCard,
      handleCtaClick,
      handleReopen,
      nextStatusFor,
      scopes,
      projectScopes,
      companyScopes,
      scopesQuery.loading,
      scopesQuery.error,
      scopesQuery.reload,
      homeQuery.data,
      homeQuery.loading,
      homeQuery.error,
      homeQuery.reload,
      timingQuery.data,
      timingQuery.loading,
      timingQuery.error,
      timingQuery.reload,
    ]
  );

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>;
}

export function useMemberNavigation() {
  const ctx = useContext(MemberContext);
  if (!ctx) throw new Error('useMemberNavigation must be used within MemberProvider');
  return ctx;
}
