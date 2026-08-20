import { useRef, useState } from 'react';
import styled from 'styled-components';

import * as sourcesApi from '../../../../apis/sources';
import {
  CONNECTION_KIND,
  CONNECTION_STATUS,
  LOCAL_FILE_EXTENSIONS,
  LOCAL_FILE_MAX_SIZE,
} from '../../../../apis/constants';
import { toApiError } from '../../../../apis/errors';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import Mascot from '../Mascot';
import SourceCard from './SourceCard';
import SlackConnectModal from './SlackConnectModal';
import GithubConnectModal from './GithubConnectModal';
import { colors } from '../theme';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';
import nextArrowBlack from '../../../../assets/owner/next_arrow_black.svg';

const GithubIconCrop = styled.span`
  display: flex;
  width: 27px;
  height: 27px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  img {
    width: 27px;
    height: 27px;
    transform: scale(1.4);
  }
`;

const HeaderRow = styled.div`
  display: flex;
  padding: 4px 20px 8px 4px;
  align-items: center;
  align-content: center;
  gap: 0 40px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const TextColumnOuter = styled.div`
  display: flex;
  min-width: 440px;
  padding-bottom: 31px;
  justify-content: flex-start;
  align-items: center;
  flex: 1 0 0;
`;

const TextColumn = styled.div`
  display: flex;
  padding-bottom: 0.69px;
  flex-direction: column;
  align-items: flex-start;
`;

const MascotContainer = styled.div`
  display: flex;
  padding-right: 10px;
  align-items: center;
  aspect-ratio: 67 / 62;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  align-self: stretch;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  color: ${colors.textPrimary};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-self: stretch;
`;

const CtaBar = styled.div`
  display: flex;
  padding: 24px 32px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-radius: 22px;
  border: 1px solid #22376a;
  background: linear-gradient(92deg, #101828 0%, #1b2a4a 62%, #22376a 100%);
  box-shadow:
    0 18px 40px -14px rgba(17, 17, 20, 0.42),
    0 1px 0 1px rgba(255, 255, 255, 0.14) inset;
`;

const CtaTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  flex: 1 0 0;
`;

const CtaTitleWrap = styled.div`
  display: flex;
  padding: 3px 0 2px 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CtaTitle = styled.p`
  margin: 0;
  align-self: stretch;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const CtaSubtitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CtaSubtitle = styled.p`
  margin: 0;
  align-self: stretch;
  color: rgba(255, 255, 255, 0.62);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.4px;
`;

const CtaButton = styled.button`
  display: flex;
  padding: 13px 22px;
  align-items: center;
  gap: 9px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: #fff;
`;

const CtaButtonLabel = styled.span`
  display: flex;
  min-width: 109.23px;
  padding: 4px 0 2px 0;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #17171b;
`;

const SOURCE_META = {
  [CONNECTION_KIND.GITHUB]: {
    variant: 'github',
    icon: (
      <GithubIconCrop>
        <img src={githubIcon} alt="" />
      </GithubIconCrop>
    ),
    title: 'GitHub',
    subtitle: 'CI 설정 · README · PR 이력',
    description: '배포 절차, 리뷰 규칙, 브랜치 전략처럼 코드 옆에 이미 적혀 있는 규칙을 읽습니다.',
    buttonLabel: '연결하기',
    connectingLabel: '연결 중…',
    connectedLabel: '연결완료 ✓ ',
  },
  [CONNECTION_KIND.SLACK]: {
    variant: 'slack',
    icon: <img src={slackIcon} alt="" width={27} height={27} />,
    title: 'Slack',
    subtitle: '채널 히스토리 · 실시간',
    description: '대화 속에서 반복되는 결정과 규칙의 패턴을 찾아냅니다.',
    buttonLabel: '연결하기',
    connectingLabel: '연결 중…',
    connectedLabel: '연결완료 ✓ ',
  },
  [CONNECTION_KIND.LOCAL]: {
    variant: 'localFile',
    icon: <img src={localFileIcon} alt="" width={22} height={22} />,
    title: '로컬 파일',
    subtitle: 'md · txt · pdf · docx',
    description:
      '어느 도구에도 올라가 있지 않은 문서를 그대로 올려 주세요. 파일명이 출처로 남습니다.',
    buttonLabel: '업로드하기',
    connectingLabel: '업로드 중…',
    connectedLabel: '업로드 완료 ✓ ',
  },
};

const ORDER = [CONNECTION_KIND.GITHUB, CONNECTION_KIND.SLACK, CONNECTION_KIND.LOCAL];

function extensionOf(fileName) {
  const dot = fileName.lastIndexOf('.');
  return dot === -1 ? '' : fileName.slice(dot).toLowerCase();
}

function SourceConnectStep({ companyId, connections, loading, error, onReload, onCreateDraft }) {
  const [slackModalOpen, setSlackModalOpen] = useState(false);
  const [githubModalOpen, setGithubModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // 연결 여부는 서버 목록이 정한다. 화면이 따로 기억하지 않는다.
  const byKind = new Map(connections.map((connection) => [connection.provider, connection]));
  const connectedCount = connections.filter(
    (connection) => connection.status === CONNECTION_STATUS.CONNECTED
  ).length;

  const handleCardToggle = (kind) => {
    if (kind === CONNECTION_KIND.SLACK) {
      setSlackModalOpen(true);
      return;
    }
    if (kind === CONNECTION_KIND.GITHUB) {
      setGithubModalOpen(true);
      return;
    }
    fileInputRef.current?.click();
  };

  async function handleFileSelected(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    setUploadError(null);

    const extension = extensionOf(file.name);
    if (!LOCAL_FILE_EXTENSIONS.includes(extension)) {
      setUploadError({
        message: `지원하지 않는 파일 형식입니다 (${LOCAL_FILE_EXTENSIONS.join(' · ')})`,
      });
      return;
    }
    if (file.size > LOCAL_FILE_MAX_SIZE) {
      setUploadError({ message: '파일이 너무 큽니다. 20MB 이하만 올릴 수 있습니다.' });
      return;
    }

    setUploading(true);
    try {
      await sourcesApi.uploadAndCollectFile(companyId, file);
      onReload();
    } catch (caught) {
      setUploadError(
        caught?.response || caught?.code
          ? toApiError(caught)
          : { message: '파일을 올리지 못했습니다. 잠시 후 다시 시도해 주세요.' }
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <StepContent>
        <HeaderRow>
          <TextColumnOuter>
            <TextColumn>
              <Heading>팀에서 쓰는 도구를 연결해주세요</Heading>
            </TextColumn>
          </TextColumnOuter>
          <MascotContainer>
            <Mascot pose="default" size={110} />
          </MascotContainer>
        </HeaderRow>

        <InlineError error={uploadError} />

        {loading && connections.length === 0 && <LoadingState label="연결 상태를 확인하는 중…" />}
        {error && connections.length === 0 && <ErrorState error={error} onRetry={onReload} />}

        <CardGrid>
          {ORDER.map((kind) => {
            const meta = SOURCE_META[kind];
            const connection = byKind.get(kind);
            const status = connection
              ? 'connected'
              : kind === CONNECTION_KIND.LOCAL && uploading
                ? 'connecting'
                : 'idle';

            return (
              <SourceCard
                key={kind}
                variant={meta.variant}
                icon={meta.icon}
                title={meta.title}
                subtitle={
                  connection?.displayName
                    ? `${meta.subtitle} · ${connection.displayName}`
                    : meta.subtitle
                }
                description={
                  connection?.status === CONNECTION_STATUS.ERROR && connection.errorMessage
                    ? connection.errorMessage
                    : meta.description
                }
                buttonLabel={meta.buttonLabel}
                connectingLabel={meta.connectingLabel}
                connectedLabel={meta.connectedLabel}
                status={status}
                onToggle={() => handleCardToggle(kind)}
              />
            );
          })}
        </CardGrid>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept={LOCAL_FILE_EXTENSIONS.join(',')}
          onChange={handleFileSelected}
        />

        <CtaBar>
          <CtaTextGroup>
            <CtaTitleWrap>
              <CtaTitle>
                {connectedCount === 0
                  ? '아직 연결된 소스가 없습니다'
                  : `${connectedCount}개 소스가 연결되었습니다`}
              </CtaTitle>
            </CtaTitleWrap>
            <CtaSubtitleWrap>
              <CtaSubtitle>
                다음 단계에서 기본 규칙 질문에 답하면 핸드북이 시작됩니다. 소스는 그 위에 얹히는
                자료입니다. 소스를 연결하지 않아도 다음으로 넘어갈 수 있습니다.
              </CtaSubtitle>
            </CtaSubtitleWrap>
          </CtaTextGroup>
          <CtaButton type="button" onClick={onCreateDraft}>
            <CtaButtonLabel>기본 규칙 정하기</CtaButtonLabel>
            <img src={nextArrowBlack} alt="" />
          </CtaButton>
        </CtaBar>
      </StepContent>

      {slackModalOpen && (
        <SlackConnectModal
          companyId={companyId}
          onClose={() => setSlackModalOpen(false)}
          onConnected={() => {
            setSlackModalOpen(false);
            onReload();
          }}
        />
      )}

      {githubModalOpen && (
        <GithubConnectModal
          companyId={companyId}
          onClose={() => setGithubModalOpen(false)}
          onConnected={() => {
            setGithubModalOpen(false);
            onReload();
          }}
        />
      )}
    </>
  );
}

export default SourceConnectStep;
