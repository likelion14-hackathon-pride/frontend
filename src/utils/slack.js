// slackThreadRef 는 '{채널id}:{ts}' 형태다(qna/escalation.py:make_thread_ref).
export function parseThreadRef(threadRef) {
  const [channelId, ts] = String(threadRef ?? '').split(':');
  return channelId && ts ? { channelId, ts } : null;
}

// 슬랙 웹 클라이언트의 스레드 주소. 데스크톱 앱이 깔려 있으면 앱으로 넘어간다.
// 워크스페이스 도메인(workspace_url)은 API 가 내려주지 않으므로 팀 id 로 만든다.
export function slackThreadUrl(workspaceId, threadRef) {
  const parsed = parseThreadRef(threadRef);
  if (!workspaceId || !parsed) return null;

  const { channelId, ts } = parsed;
  return `https://app.slack.com/client/${workspaceId}/${channelId}/thread/${channelId}-${ts}`;
}
