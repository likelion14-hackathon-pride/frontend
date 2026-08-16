export const AI_ANSWERED_QUESTIONS = [
  {
    id: 'ai-1',
    time: '10:12',
    text: '스테이징 배포는 누가 하나요?',
    sourceLine: '근거 · Slack #dev-general · 07.22',
    badge: 'instant',
  },
  {
    id: 'ai-2',
    time: '09:47',
    text: 'PR 리뷰어는 누구로 지정하나요?',
    sourceLine: '근거 · 핸드북 · payment-api',
    badge: 'instant',
  },
  {
    id: 'ai-3',
    time: '09:20',
    text: '연차는 사전 승인이 필요한가요?',
    sourceLine: '근거 · 사내 위키 · People',
    badge: 'instant',
  },
  {
    id: 'ai-4',
    time: '08:55',
    text: '장비 반납 절차가 어떻게 되나요?',
    sourceLine: '근거 · 핸드북 · People',
    badge: 'instant',
  },
];

export const PENDING_OWNER_QUESTIONS = [
  {
    id: 'pending-1',
    text: '테스트 작성 범위',
    meta: 'payment-api · 08.07 09:20',
    variant: 'active',
  },
  {
    id: 'pending-2',
    text: 'PR 리뷰어 지정 규칙',
    meta: 'payment-api · 08.07 10:30',
    variant: 'active',
  },
  {
    id: 'pending-3',
    text: '스테이징 배포 주체',
    meta: 'admin-web · 08.06 13:00',
    variant: 'active',
  },
  {
    id: 'pending-4',
    text: '장애 시 에스컬레이션',
    meta: '공통 규칙 · 08.06 14:45',
    variant: 'muted',
  },
];

export const STAT_SUMMARY = {
  totalQuestions: 96,
  aiAnsweredCount: 79,
  ownerAnsweredCount: 17,
  adoptionRate: 82,
  answerReuseValue: '5.3회',
  answerReuseUnit: '답변 1건당',
  timeSavedLabel: '6h 20m',
  timeSavedDelta: '+1h 10m',
  handbookTotal: 342,
  handbookWeeklyDelta: '이번 주 +7',
  handbookUnconfirmedFootnote: '미확인 18건',
};

export const TOP_REUSED_ANSWERS = [
  { label: '배포 실행 주체', count: 12 },
  { label: 'PR 리뷰어 지정', count: 8 },
  { label: '장비 반납 절차', count: 5 },
];

export const HANDBOOK_MONTHLY_TREND = [
  { label: '3월', height: 20 },
  { label: '4월', height: 30 },
  { label: '5월', height: 42 },
  { label: '6월', height: 54 },
  { label: '7월', height: 63 },
  { label: '8월', height: 70 },
];
