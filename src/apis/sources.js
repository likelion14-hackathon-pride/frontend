import { api } from './axiosInstance';
import { ENDPOINTS } from './endpoints';
import { CONNECTION_KIND } from './constants';

// 팀원도 볼 수 있는 것은 채널 목록과 채널 메시지뿐이다. 나머지는 대표 전용이다.

export function fetchChannelSummaries(companyId, { scopeId } = {}) {
  return api.get(ENDPOINTS.sources.channels(companyId), { params: { scopeId } });
}

export function fetchChannelMessages(companyId, itemId, { cursor, limit } = {}) {
  return api.get(ENDPOINTS.sources.channelMessages(companyId, itemId), {
    params: { cursor, limit },
  });
}

export function fetchConnections(companyId) {
  return api.get(ENDPOINTS.sources.connections(companyId));
}

// 소스 연결은 multipart/form-data 로 받는다.
export function connectSlack(companyId, { botToken, signingSecret }) {
  const form = new FormData();
  form.append('provider', CONNECTION_KIND.SLACK);
  form.append('botToken', botToken);
  form.append('signingSecret', signingSecret);
  return api.post(ENDPOINTS.sources.connections(companyId), form);
}

// 응답에 webhookUrl / webhookSecret 이 함께 온다. 연결 안내 마지막 단계가 이 값을 쓴다.
export function connectGithub(companyId, { appId, installationId, privateKeyFile }) {
  const form = new FormData();
  form.append('provider', CONNECTION_KIND.GITHUB);
  form.append('appId', appId);
  form.append('installationId', installationId);
  form.append('privateKey', privateKeyFile);
  return api.post(ENDPOINTS.sources.connections(companyId), form);
}

// 모아 둔 원문과 규칙, 카드는 그대로 남고 새 수집만 멈춘다.
export function disconnect(companyId, connectionId) {
  return api.delete(ENDPOINTS.sources.connection(companyId, connectionId));
}

export function fetchConnectionChannels(companyId, connectionId) {
  return api.get(ENDPOINTS.sources.connectionChannels(companyId, connectionId));
}

// 아직 수집 대상으로 등록되지 않은 워크스페이스 채널.
export function fetchAvailableChannels(companyId, connectionId) {
  return api.get(ENDPOINTS.sources.connectionChannelsAvailable(companyId, connectionId));
}

// 봇이 아직 참여하지 않은 공개 채널이면 봇이 스스로 참여한다.
export function addChannel(companyId, connectionId, externalId) {
  return api.post(ENDPOINTS.sources.connectionChannels(companyId, connectionId), { externalId });
}

export function setChannelScope(companyId, connectionId, itemId, scopeId) {
  return api.patch(ENDPOINTS.sources.connectionChannel(companyId, connectionId, itemId), {
    scopeId,
  });
}

export function removeChannel(companyId, connectionId, itemId) {
  return api.delete(ENDPOINTS.sources.connectionChannel(companyId, connectionId, itemId));
}

export function fetchRepositories(companyId, connectionId) {
  return api.get(ENDPOINTS.sources.connectionRepositories(companyId, connectionId));
}

export function fetchAvailableRepositories(companyId, connectionId) {
  return api.get(ENDPOINTS.sources.connectionRepositoriesAvailable(companyId, connectionId));
}

export function addRepository(companyId, connectionId, externalId) {
  return api.post(ENDPOINTS.sources.connectionRepositories(companyId, connectionId), {
    externalId,
  });
}

export function setRepositoryScope(companyId, connectionId, itemId, scopeId) {
  return api.patch(ENDPOINTS.sources.connectionRepository(companyId, connectionId, itemId), {
    scopeId,
  });
}

export function removeRepository(companyId, connectionId, itemId) {
  return api.delete(ENDPOINTS.sources.connectionRepository(companyId, connectionId, itemId));
}

export function fetchLocalFiles(companyId, { cursor, limit } = {}) {
  return api.get(ENDPOINTS.sources.files(companyId), { params: { cursor, limit } });
}

// uploadTarget 은 S3 에 직접 올리는 15분짜리 URL 이다. 우리 서버가 아니므로
// axios 인스턴스를 태우지 않고 fetch 로 PUT 한다.
export function createLocalFileUpload(companyId, { fileName, mimeType, size }) {
  return api.post(ENDPOINTS.sources.files(companyId), { fileName, mimeType, size });
}

export function deleteLocalFile(companyId, itemId) {
  return api.delete(ENDPOINTS.sources.file(companyId, itemId));
}

export function fetchIngestionJobs(companyId, { status, cursor, limit } = {}) {
  return api.get(ENDPOINTS.sources.ingestionJobs(companyId), {
    params: { status, cursor, limit },
  });
}

// 큐에 쌓고 즉시 202 로 응답한다. 진행률은 fetchIngestionJob 으로 확인한다.
export function startIngestion(companyId, { provider, itemIds } = {}) {
  const body = {};
  if (provider) body.provider = provider;
  if (itemIds?.length) body.itemIds = itemIds;
  return api.post(ENDPOINTS.sources.ingestionJobs(companyId), body);
}

export function fetchIngestionJob(companyId, jobId) {
  return api.get(ENDPOINTS.sources.ingestionJob(companyId, jobId));
}

// 로컬 파일은 채널/레포처럼 미리 scopeId 를 박아 두지 않고, 수집을 걸 때 함께 넘긴다.
// scopeId 가 없으면(회사 규칙) 서버가 내용을 보고 스스로 영역을 분류한다.
export function collectFile(companyId, itemId, scopeId) {
  return api.post(ENDPOINTS.sources.ingestionJobs(companyId), {
    provider: CONNECTION_KIND.LOCAL,
    itemIds: [itemId],
    scopeId: scopeId ?? null,
  });
}
