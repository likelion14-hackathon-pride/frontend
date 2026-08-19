import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as sourcesApi from '../../../../apis/sources';
import * as handbookApi from '../../../../apis/handbook';
import {
  CONNECTION_KIND,
  LOCAL_FILE_EXTENSIONS,
  LOCAL_FILE_MAX_SIZE,
  LOCAL_FILE_STATUS,
  LOCAL_FILE_STATUS_LABEL,
  SCOPE_KIND,
  lookup,
} from '../../../../apis/constants';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import { useAsync, useMutation } from '../../../../hooks/useAsync';
import { formatRelativeKo } from '../../../../utils/time';
import SourceBoxCard from './SourceBoxCard';
import CollectScopeModal from './CollectScopeModal';
import { SOURCE_CONFIG, SOURCE_ORDER, formatBytes } from './sourceTabData';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';

const TabContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
`;

const HeaderTextGroup = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7.792px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.8px;
  letter-spacing: -1.2px;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%;
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const GithubIconCrop = styled.span`
  display: flex;
  width: 27.79px;
  height: 27.79px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 27.79px;
    height: 27.79px;
    transform: scale(1.4);
  }
`;

const ICONS = {
  [CONNECTION_KIND.GITHUB]: (
    <GithubIconCrop>
      <img src={githubIcon} alt="" />
    </GithubIconCrop>
  ),
  [CONNECTION_KIND.SLACK]: <img src={slackIcon} alt="" width={27.79} height={27.79} />,
  [CONNECTION_KIND.LOCAL]: <img src={localFileIcon} alt="" width={22} height={22} />,
};

function extensionOf(fileName) {
  const dot = fileName.lastIndexOf('.');
  return dot === -1 ? '' : fileName.slice(dot).toLowerCase();
}

// 업로드가 끝나도 파일은 곧바로 READY 가 되지 않는다. 워커가 텍스트를 뽑는 동안
// PENDING_UPLOAD·PROCESSING 에 머무는데, 끝났다고 알려 주는 신호가 없어서 다시 부른다.
const FILE_POLL_INTERVAL = 3000;

// 올리다 만 파일은 PENDING_UPLOAD 에서 영영 내려오지 않는다(sources/serializers.py:214).
// 그런 행이 하나라도 있으면 타이머가 끝나지 않으므로 5분에서 끊는다.
const FILE_POLL_MAX_ATTEMPTS = 100;

const FILE_IN_FLIGHT_STATUSES = [LOCAL_FILE_STATUS.PENDING_UPLOAD, LOCAL_FILE_STATUS.PROCESSING];

function SourceTab({ companyId }) {
  const [actionError, setActionError] = useState(null);
  const [collectTarget, setCollectTarget] = useState(null);
  const [uploadTargetFile, setUploadTargetFile] = useState(null);
  const fileInputRef = useRef(null);

  const connectionsQuery = useAsync(() => sourcesApi.fetchConnections(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  // 수집 대상 선택창에 "프로젝트" 목록을 보여주려고 부른다. 회사 규칙 4개 영역은
  // AI 가 알아서 분류하므로 여기서는 프로젝트만 고르면 된다.
  const scopesQuery = useAsync(() => handbookApi.fetchScopes(companyId), [companyId], {
    enabled: Boolean(companyId),
  });
  const projects = (scopesQuery.data?.items ?? [])
    .filter((scope) => scope.kind === SCOPE_KIND.PROJECT)
    .map((scope) => ({ key: scope.id, label: scope.name }));

  const connections = connectionsQuery.data?.items ?? [];
  const byKind = new Map(connections.map((connection) => [connection.provider, connection]));
  const github = byKind.get(CONNECTION_KIND.GITHUB);
  const slack = byKind.get(CONNECTION_KIND.SLACK);

  // 연결이 있을 때만 하위 목록을 부른다. 없으면 404 가 난다.
  const reposQuery = useAsync(
    () => sourcesApi.fetchRepositories(companyId, github.id),
    [companyId, github?.id],
    { enabled: Boolean(companyId && github?.id) }
  );
  const availableReposQuery = useAsync(
    () => sourcesApi.fetchAvailableRepositories(companyId, github.id),
    [companyId, github?.id],
    { enabled: Boolean(companyId && github?.id) }
  );
  const channelsQuery = useAsync(
    () => sourcesApi.fetchConnectionChannels(companyId, slack.id),
    [companyId, slack?.id],
    { enabled: Boolean(companyId && slack?.id) }
  );
  const availableChannelsQuery = useAsync(
    () => sourcesApi.fetchAvailableChannels(companyId, slack.id),
    [companyId, slack?.id],
    { enabled: Boolean(companyId && slack?.id) }
  );
  const filesQuery = useAsync(() => sourcesApi.fetchLocalFiles(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  const addRepository = useMutation((externalId) =>
    sourcesApi.addRepository(companyId, github.id, externalId)
  );
  const addChannel = useMutation((externalId) =>
    sourcesApi.addChannel(companyId, slack.id, externalId)
  );

  // 로컬 파일은 수집 요청 한 번에 scopeId 를 같이 보낸다(scopeId 없으면 회사 규칙으로 보고
  // 서버가 영역을 스스로 분류한다). 레포·채널은 먼저 지식공간을 박아 두고 수집을 건다.
  const collectItem = useMutation(async ({ kind, item, scopeId }) => {
    if (kind === CONNECTION_KIND.LOCAL) {
      return sourcesApi.collectFile(companyId, item.id, scopeId);
    }
    if (scopeId) {
      if (kind === CONNECTION_KIND.GITHUB) {
        await sourcesApi.setRepositoryScope(companyId, github.id, item.id, scopeId);
      } else if (kind === CONNECTION_KIND.SLACK) {
        await sourcesApi.setChannelScope(companyId, slack.id, item.id, scopeId);
      }
    }
    return sourcesApi.startIngestion(companyId, { provider: kind, itemIds: [item.id] });
  });

  const uploadFile = useMutation(({ file, scopeId }) =>
    sourcesApi.uploadAndCollectFile(companyId, file, scopeId)
  );

  const handleCollect = async (scopeId) => {
    if (uploadTargetFile) {
      const result = await uploadFile.mutate({ file: uploadTargetFile, scopeId });
      if (result.ok) {
        setUploadTargetFile(null);
        filesQuery.reload();
        connectionsQuery.reload();
      }
      return;
    }

    if (!collectTarget) return;
    const result = await collectItem.mutate({ ...collectTarget, scopeId });
    if (result.ok) {
      setCollectTarget(null);
      reposQuery.reload();
      channelsQuery.reload();
      filesQuery.reload();
      connectionsQuery.reload();
    }
  };

  // 처리 중인 파일이 남아 있는 동안만 목록을 다시 부른다. 개수가 줄면 타이머를
  // 새로 걸어 남은 파일에 다시 5분을 준다.
  const pendingFileCount = (filesQuery.data?.items ?? []).filter((item) =>
    FILE_IN_FLIGHT_STATUSES.includes(item.status)
  ).length;

  const { reload: reloadFiles } = filesQuery;
  const { reload: reloadConnections } = connectionsQuery;

  useEffect(() => {
    if (pendingFileCount === 0) return undefined;

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      if (attempts > FILE_POLL_MAX_ATTEMPTS) {
        clearInterval(timer);
        return;
      }
      reloadFiles();
      // 추출이 끝나면 연결 카드의 수집 건수와 동기화 시각도 같이 움직인다.
      reloadConnections();
    }, FILE_POLL_INTERVAL);

    return () => clearInterval(timer);
  }, [pendingFileCount, reloadFiles, reloadConnections]);

  async function handleUploadFile(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setActionError(null);

    const extension = extensionOf(file.name);
    if (!LOCAL_FILE_EXTENSIONS.includes(extension)) {
      setActionError({
        message: `지원하지 않는 파일 형식입니다 (${LOCAL_FILE_EXTENSIONS.join(' · ')})`,
      });
      return;
    }
    if (file.size > LOCAL_FILE_MAX_SIZE) {
      setActionError({ message: '파일이 너무 큽니다. 20MB 이하만 올릴 수 있습니다.' });
      return;
    }
    setCollectTarget(null);
    setUploadTargetFile(file);
  }

  if (connectionsQuery.loading && !connectionsQuery.data) {
    return (
      <TabContent>
        <LoadingState label="소스 연결을 불러오는 중…" />
      </TabContent>
    );
  }

  if (connectionsQuery.error && !connectionsQuery.data) {
    return (
      <TabContent>
        <ErrorState error={connectionsQuery.error} onRetry={connectionsQuery.reload} />
      </TabContent>
    );
  }

  const dataFor = {
    [CONNECTION_KIND.GITHUB]: {
      connection: github,
      items: (reposQuery.data?.items ?? []).map((item) => ({
        id: item.id,
        name: item.label,
        meta: item.itemCount ? `${item.itemCount}건` : '수집 전',
      })),
      available: (availableReposQuery.data?.items ?? []).map((item) => ({
        value: item.externalId,
        label: item.label,
      })),
      onAdd: async (externalId) => {
        const result = await addRepository.mutate(externalId);
        if (result.ok) {
          reposQuery.reload();
          availableReposQuery.reload();
          connectionsQuery.reload();
        }
      },
      onCollectItem: (item) => setCollectTarget({ kind: CONNECTION_KIND.GITHUB, item }),
    },
    [CONNECTION_KIND.SLACK]: {
      connection: slack,
      items: (channelsQuery.data?.items ?? []).map((item) => ({
        id: item.id,
        name: item.label,
        meta: item.itemCount ? `${item.itemCount}건` : '수집 전',
      })),
      available: (availableChannelsQuery.data?.items ?? []).map((item) => ({
        value: item.externalId,
        label: `${item.isPrivate ? '🔒' : '#'} ${item.label}`,
      })),
      onAdd: async (externalId) => {
        const result = await addChannel.mutate(externalId);
        if (result.ok) {
          channelsQuery.reload();
          availableChannelsQuery.reload();
          connectionsQuery.reload();
        }
      },
      onCollectItem: (item) => setCollectTarget({ kind: CONNECTION_KIND.SLACK, item }),
    },
    [CONNECTION_KIND.LOCAL]: {
      connection: byKind.get(CONNECTION_KIND.LOCAL),
      items: (filesQuery.data?.items ?? []).map((item) => ({
        id: item.id,
        name: item.fileName,
        meta: [formatBytes(item.size), lookup(LOCAL_FILE_STATUS_LABEL, item.status)]
          .filter(Boolean)
          .join(' · '),
      })),
      available: null, // 파일은 목록에서 고르는 것이 아니라 올린다.
      onAdd: () => fileInputRef.current?.click(),
      onCollectItem: (item) => setCollectTarget({ kind: CONNECTION_KIND.LOCAL, item }),
    },
  };

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>소스</Heading>
        <Subheading>팀이 이미 쓰는 도구에서 핸드북이 자동으로 모입니다</Subheading>
      </HeaderTextGroup>

      <InlineError
        error={
          actionError || addRepository.error || addChannel.error || collectItem.error || uploadFile.error
        }
      />

      <Grid>
        {SOURCE_ORDER.map((kind) => {
          const config = SOURCE_CONFIG[kind];
          const source = dataFor[kind];

          return (
            <SourceBoxCard
              key={kind}
              icon={ICONS[kind]}
              config={config}
              connected={Boolean(source.connection)}
              items={source.items}
              availableOptions={source.available}
              extractedCount={source.connection?.extractedCount ?? 0}
              lastSync={
                source.connection?.lastSyncedAt
                  ? `${formatRelativeKo(source.connection.lastSyncedAt)} 동기화`
                  : '아직 수집한 적 없음'
              }
              onAddItem={source.onAdd}
              onCollectItem={source.onCollectItem}
            />
          );
        })}
      </Grid>

      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept={LOCAL_FILE_EXTENSIONS.join(',')}
        onChange={handleUploadFile}
      />

      {(collectTarget || uploadTargetFile) && (
        <CollectScopeModal
          itemName={uploadTargetFile?.name ?? collectTarget.item.name}
          projects={projects}
          pending={uploadFile.pending || collectItem.pending}
          onCollect={handleCollect}
          onClose={() => {
            setCollectTarget(null);
            setUploadTargetFile(null);
          }}
        />
      )}
    </TabContent>
  );
}

export default SourceTab;
