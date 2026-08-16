import { useState } from 'react';
import styled from 'styled-components';
import Mascot from '../Mascot';
import SourceCard from './SourceCard';
import SlackConnectModal from './SlackConnectModal';
import GithubConnectModal from './GithubConnectModal';
import { colors } from '../theme';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';
import nextArrowTrans from '../../../../assets/owner/next_arrow_trans.svg';
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

const Subheading = styled.p`
  margin: 12px 0 0;
  font-size: 15px;
  color: ${colors.textSecondary};

  strong {
    color: ${colors.textPrimary};
  }
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? 'rgba(255, 255, 255, 0.14)' : '#FFF')};
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
  color: ${({ $disabled }) => ($disabled ? '#FFFFFF' : '#17171B')};
`;

const SOURCES = [
  {
    key: 'github',
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
  {
    key: 'slack',
    variant: 'slack',
    icon: <img src={slackIcon} alt="" width={27} height={27} />,
    title: 'Slack',
    subtitle: '채널 히스토리 · 실시간',
    description: '대화 속에서 반복되는 결정과 규칙의 패턴을 찾아냅니다.',
    buttonLabel: '연결하기',
    connectingLabel: '연결 중…',
    connectedLabel: '연결완료 ✓ ',
  },
  {
    key: 'localFile',
    variant: 'localFile',
    icon: <img src={localFileIcon} alt="" width={22} height={22} />,
    title: '로컬 파일',
    subtitle: 'md · txt · pdf 등',
    description:
      '어느 도구에도 올라가 있지 않은 문서를 그대로 올려 주세요. 파일명이 출처로 남습니다.',
    buttonLabel: '업로드하기',
    connectingLabel: '업로드 중…',
    connectedLabel: '업로드 완료 ✓ ',
  },
];

const CONNECT_DELAY_MS = 900;

function SourceConnectStep({ connectedSources, onToggleSource, onCreateDraft }) {
  const [connectingKeys, setConnectingKeys] = useState(new Set());
  const [slackModalOpen, setSlackModalOpen] = useState(false);
  const [githubModalOpen, setGithubModalOpen] = useState(false);
  const connectedCount = connectedSources.size;

  const handleConnect = (key) => {
    if (connectedSources.has(key)) {
      onToggleSource(key);
      return;
    }
    if (connectingKeys.has(key)) return;

    setConnectingKeys((prev) => new Set(prev).add(key));
    setTimeout(() => {
      setConnectingKeys((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
      onToggleSource(key);
    }, CONNECT_DELAY_MS);
  };

  const handleCardToggle = (key) => {
    if (key === 'slack' && !connectedSources.has(key)) {
      setSlackModalOpen(true);
      return;
    }
    if (key === 'github' && !connectedSources.has(key)) {
      setGithubModalOpen(true);
      return;
    }
    handleConnect(key);
  };

  const handleSlackConnected = () => {
    setSlackModalOpen(false);
    onToggleSource('slack');
  };

  const handleGithubConnected = () => {
    setGithubModalOpen(false);
    onToggleSource('github');
  };

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

        <CardGrid>
          {SOURCES.map((source) => {
            const status = connectedSources.has(source.key)
              ? 'connected'
              : connectingKeys.has(source.key)
                ? 'connecting'
                : 'idle';

            return (
              <SourceCard
                key={source.key}
                variant={source.variant}
                icon={source.icon}
                title={source.title}
                subtitle={source.subtitle}
                description={source.description}
                buttonLabel={source.buttonLabel}
                connectingLabel={source.connectingLabel}
                connectedLabel={source.connectedLabel}
                status={status}
                onToggle={() => handleCardToggle(source.key)}
              />
            );
          })}
        </CardGrid>

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
                자료입니다.
              </CtaSubtitle>
            </CtaSubtitleWrap>
          </CtaTextGroup>
          <CtaButton type="button" disabled={connectedCount === 0} onClick={onCreateDraft}>
            <CtaButtonLabel $disabled={connectedCount === 0}>기본 규칙 정하기</CtaButtonLabel>
            <img src={connectedCount === 0 ? nextArrowTrans : nextArrowBlack} alt="" />
          </CtaButton>
        </CtaBar>
      </StepContent>

      {slackModalOpen && (
        <SlackConnectModal
          onClose={() => setSlackModalOpen(false)}
          onConnected={handleSlackConnected}
        />
      )}

      {githubModalOpen && (
        <GithubConnectModal
          onClose={() => setGithubModalOpen(false)}
          onConnected={handleGithubConnected}
        />
      )}
    </>
  );
}

export default SourceConnectStep;
