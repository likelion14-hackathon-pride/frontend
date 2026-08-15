export const AI_ANSWERED_QUESTIONS = [
  {
    id: 'ai-1',
    time: '10:12',
    text: '스테이징 배포는 누가 하나요?',
    project: 'admin-web · payment-api',
  },
  {
    id: 'ai-2',
    time: '09:47',
    text: 'PR 리뷰어는 누구로 지정하나요?',
    project: 'payment-api',
  },
  {
    id: 'ai-3',
    time: '09:20',
    text: '연차는 사전 승인이 없어도 되나요?',
    project: 'People Group',
  },
  {
    id: 'ai-4',
    time: '08:55',
    text: '핫픽스는 예외 배포해도 되나요?',
    project: 'admin-web · Security',
  },
];

export const PENDING_OWNER_QUESTIONS = [
  {
    id: 'pending-1',
    text: '이슈 등록 후 브랜치 생성',
    source: 'admin-web · github payment-api/PR #218',
    status: 'unconfirmed',
    time: '방금',
  },
  {
    id: 'pending-2',
    text: 'PR 리뷰어는 누구로 지정하나요?',
    source: 'payment-api',
    status: 'empty',
    time: '08:40',
  },
  {
    id: 'pending-3',
    text: '테스트 작성 범위',
    source: 'payment-api · 정해진 내용 없음',
    status: 'empty',
    time: '어제',
  },
];

export const STAT_SUMMARY = {
  adoptionRate: 82,
  adoptionDelta: '+14%',
  answerCount: 5.3,
  visitCount: 342,
  visitDelta: '+7',
  timeSavedLabel: '6h 20m',
  timeSavedDelta: '+3h 10m',
};

export const VISIT_TREND = [4, 6, 5, 7, 9, 8, 12];
export const TIME_SAVED_TREND = [2, 3, 2.5, 4, 3.5, 5, 6.3];
