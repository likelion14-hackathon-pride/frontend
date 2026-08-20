import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as cardsApi from '../../apis/cards';
import * as handbookApi from '../../apis/handbook';
import {
  ALLOWED_MOVES,
  CARD_COLUMN,
  CARD_COLUMN_LABEL,
  CARD_COLUMN_ORDER,
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

function toBoardCard(card) {
  const tags = [];
  if (card.scopeName) tags.push({ label: card.scopeName, type: 'neutral' });
  if (card.deadlineTextEn || card.deadlineText) {
    tags.push({ label: card.deadlineTextEn || card.deadlineText, type: 'warn' });
  }
  if ((card.duplicateCount ?? 1) > 1) {
    tags.push({ label: `repeated ${card.duplicateCount}×`, type: 'meta' });
  }
  if (card.openQuestionCount > 0) tags.push({ label: 'waiting on owner', type: 'warn' });
  if (card.answeredQuestionCount > 0) tags.push({ label: 'reply arrived', type: 'positive' });

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
  };
}

// 열 묶기. 서버가 모르는 column 값을 보내도 카드를 잃지 않도록 뒤에 따로 붙인다.
function buildColumns(cards) {
  const buckets = new Map(CARD_COLUMN_ORDER.map((id) => [id, []]));

  cards.forEach((card) => {
    const columnId = card.column ?? CARD_COLUMN.READY;
    if (!buckets.has(columnId)) buckets.set(columnId, []);
    buckets.get(columnId).push(toBoardCard(card));
  });

  return Array.from(buckets.entries()).map(([id, list]) => ({
    id,
    name: lookup(CARD_COLUMN_LABEL, id),
    cards: list,
  }));
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
  const columns = useMemo(() => buildColumns(cards), [cards]);

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
