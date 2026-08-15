export const INITIAL_QUESTIONS = [
  {
    id: 'q-1',
    text: 'payment-api PR 리뷰어는 누구로 지정하나요?',
    project: 'payment-api',
    source: 'Slack #payment-api',
    receivedAt: '08.07 11:02',
    aiDraftText: 'Assign 지훈 as the reviewer on payment-api pull requests. If unavailable, tag the CEO instead.',
    koDraftText: '경력직 지훈님을 리뷰어로 넣어주세요. 지훈님 부재 시엔 대표님을 태그해주세요.',
    status: 'pending',
  },
  {
    id: 'q-2',
    text: '장애 시 메세스 답변려는 순서가 있나요?',
    project: 'admin-web',
    source: 'Slack #dev-general',
    receivedAt: '08.07 09:40',
    aiDraftText: 'Escalate P0 incidents to the CEO first, then notify the on-call engineer in #dev-general.',
    koDraftText: 'P0 장애는 대표님께 먼저 알리고, 그다음 #dev-general에 온콜 담당자를 태그해주세요.',
    status: 'pending',
  },
];

export const RECENT_AI_ANSWERED = [
  { id: 'ra-1', text: '연차는 언제부터 적용해야 하나요?', time: '08.07 10:20' },
  { id: 'ra-2', text: 'PR 리뷰어는 누구로 지정하나요?', time: '08.06 18:02' },
  { id: 'ra-3', text: '결제 실패 안내는 어떻게 하나요?', time: '08.06 15:47' },
];

export const WEEKLY_ANSWERED_BASE = 7;
