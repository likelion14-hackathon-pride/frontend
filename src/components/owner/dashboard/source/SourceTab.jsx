import { useRef, useState } from 'react';
import styled from 'styled-components';

import * as sourcesApi from '../../../../apis/sources';
import {
  CONNECTION_KIND,
  LOCAL_FILE_EXTENSIONS,
  LOCAL_FILE_MAX_SIZE,
  LOCAL_FILE_MIME_TYPES,
  LOCAL_FILE_STATUS_LABEL,
  lookup,
} from '../../../../apis/constants';
import { toApiError } from '../../../../apis/errors';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import { useAsync, useMutation } from '../../../../hooks/useAsync';
import { formatRelativeKo } from '../../../../utils/time';
import SourceBoxCard from './SourceBoxCard';
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

function SourceTab({ companyId }) {
  const [actionError, setActionError] = useState(null);
  const fileInputRef = useRef(null);

  const connectionsQuery = useAsync(
    () => sourcesApi.fetchConnections(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );

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
  const filesQuery = useAsync(
    () => sourcesApi.fetchLocalFiles(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  const addRepository = useMutation((externalId) =>
    sourcesApi.addRepository(companyId, github.id, externalId)
  );
  const addChannel = useMutation((externalId) =>
    sourcesApi.addChannel(companyId, slack.id, externalId)
  );

  async function handleUploadFile(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setActionError(null);

    const extension = extensionOf(file.name);
    if (!LOCAL_FILE_EXTENSIONS.includes(extension)) {
      setActionError({ message: `지원하지 않는 파일 형식입니다 (${LOCAL_FILE_EXTENSIONS.join(' · ')})` });
      return;
    }
    if (file.size > LOCAL_FILE_MAX_SIZE) {
      setActionError({ message: '파일이 너무 큽니다. 20MB 이하만 올릴 수 있습니다.' });
      return;
    }
    const mimeType = LOCAL_FILE_MIME_TYPES[extension].includes(file.type)
      ? file.type
      : LOCAL_FILE_MIME_TYPES[extension][0];

    try {
      const created = await sourcesApi.createLocalFileUpload(companyId, {
        fileName: file.name,
        mimeType,
        size: file.size,
      });
      const response = await fetch(created.uploadTarget, {
        method: 'PUT',
        headers: { 'Content-Type': mimeType },
        body: file,
      });
      if (!response.ok) throw new Error('upload failed');
      filesQuery.reload();
      connectionsQuery.reload();
    } catch (caught) {
      setActionError(
        caught?.response ? toApiError(caught) : { message: '파일을 올리지 못했습니다.' }
      );
    }
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
    },
  };

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>소스</Heading>
        <Subheading>팀이 이미 쓰는 도구에서 핸드북이 자동으로 모입니다</Subheading>
      </HeaderTextGroup>

      <InlineError error={actionError || addRepository.error || addChannel.error} />

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
    </TabContent>
  );
}

export default SourceTab;
