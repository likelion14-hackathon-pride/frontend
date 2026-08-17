// 백엔드 URL은 전부 이 파일에만 적는다. 다른 파일에서 주소를 문자열로 조립하지 않는다.
// 출처는 config/urls.py 와 각 앱의 urls.py.
//
// /api/slack/events/ 와 /api/github/events/ 는 서버-서버 웹훅이라 여기 없다.

const co = (companyId) => `/api/companies/${companyId}`;

export const ENDPOINTS = {
  health: '/health/',
  auth: {
    signupOwner: '/api/auth/signup/owner',
    signupMember: '/api/auth/signup/member',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    tokenRefresh: '/api/auth/token/refresh/',
    tokenVerify: '/api/auth/token/verify/',
  },
  me: '/api/me',
  company: {
    detail: (companyId) => `${co(companyId)}`,
    dashboard: (companyId) => `${co(companyId)}/dashboard`,
    members: (companyId) => `${co(companyId)}/members`,
    settings: (companyId) => `${co(companyId)}/settings`,
    profileOptions: (companyId) => `${co(companyId)}/profile-options`,
  },
  onboarding: {
    root: (companyId) => `${co(companyId)}/onboarding`,
    complete: (companyId) => `${co(companyId)}/onboarding/complete`,
    question: (companyId, templateKey) =>
      `${co(companyId)}/onboarding/questions/${templateKey}`,
  },
  riskKeywords: {
    list: (companyId) => `${co(companyId)}/risk-keywords`,
    detail: (companyId, keywordId) => `${co(companyId)}/risk-keywords/${keywordId}`,
  },
  handbook: {
    scopes: (companyId) => `${co(companyId)}/handbook/scopes`,
    entries: (companyId) => `${co(companyId)}/handbook/entries`,
    reviewAll: (companyId) => `${co(companyId)}/handbook/entries/review-all`,
    entry: (companyId, entryId) => `${co(companyId)}/handbook/entries/${entryId}`,
    entryEvidence: (companyId, entryId) =>
      `${co(companyId)}/handbook/entries/${entryId}/evidence`,
    entryReview: (companyId, entryId) =>
      `${co(companyId)}/handbook/entries/${entryId}/review`,
  },
  sources: {
    channels: (companyId) => `${co(companyId)}/channels`,
    channelMessages: (companyId, itemId) => `${co(companyId)}/channels/${itemId}/messages`,
    connections: (companyId) => `${co(companyId)}/source-connections`,
    connection: (companyId, connectionId) =>
      `${co(companyId)}/source-connections/${connectionId}`,
    files: (companyId) => `${co(companyId)}/source-files`,
    file: (companyId, itemId) => `${co(companyId)}/source-files/${itemId}`,
    connectionChannels: (companyId, connectionId) =>
      `${co(companyId)}/source-connections/${connectionId}/channels`,
    connectionChannelsAvailable: (companyId, connectionId) =>
      `${co(companyId)}/source-connections/${connectionId}/channels/available`,
    connectionChannel: (companyId, connectionId, itemId) =>
      `${co(companyId)}/source-connections/${connectionId}/channels/${itemId}`,
    connectionRepositories: (companyId, connectionId) =>
      `${co(companyId)}/source-connections/${connectionId}/repositories`,
    connectionRepositoriesAvailable: (companyId, connectionId) =>
      `${co(companyId)}/source-connections/${connectionId}/repositories/available`,
    connectionRepository: (companyId, connectionId, itemId) =>
      `${co(companyId)}/source-connections/${connectionId}/repositories/${itemId}`,
    ingestionJobs: (companyId) => `${co(companyId)}/ingestion-jobs`,
    ingestionJob: (companyId, jobId) => `${co(companyId)}/ingestion-jobs/${jobId}`,
  },
  qna: {
    ask: (companyId) => `${co(companyId)}/ask`,
    threadMessages: (companyId, threadId) =>
      `${co(companyId)}/qna/threads/${threadId}/messages`,
    questions: (companyId) => `${co(companyId)}/questions`,
    question: (companyId, escalationId) => `${co(companyId)}/questions/${escalationId}`,
    questionSend: (companyId, escalationId) =>
      `${co(companyId)}/questions/${escalationId}/send`,
    questionCheckAnswer: (companyId, escalationId) =>
      `${co(companyId)}/questions/${escalationId}/check-answer`,
    questionApprove: (companyId, escalationId) =>
      `${co(companyId)}/questions/${escalationId}/approve`,
    questionDismiss: (companyId, escalationId) =>
      `${co(companyId)}/questions/${escalationId}/dismiss`,
    questionAcknowledge: (companyId, escalationId) =>
      `${co(companyId)}/questions/${escalationId}/acknowledge`,
  },
  cards: {
    home: (companyId) => `${co(companyId)}/home`,
    list: (companyId) => `${co(companyId)}/cards`,
    detail: (companyId, cardId) => `${co(companyId)}/cards/${cardId}`,
    ask: (companyId, cardId) => `${co(companyId)}/cards/${cardId}/ask`,
    tasks: (companyId) => `${co(companyId)}/tasks`,
    task: (companyId, taskId) => `${co(companyId)}/tasks/${taskId}`,
    timing: (companyId) => `${co(companyId)}/timing`,
  },
};

export default ENDPOINTS;
