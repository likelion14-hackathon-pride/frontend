import { useRef, useState } from 'react';
import styled from 'styled-components';

import * as sourcesApi from '../../../../apis/sources';
import { toApiError } from '../../../../apis/errors';
import githubIcon from '../../../../assets/owner/github.svg';
import fileIcon from '../../../../assets/owner/file_trans.svg';
import { colors, radii } from '../theme';

const TOTAL_STEPS = 5;
const COPY_RESET_MS = 1500;

const STEP_META = [
  { id: 1, title: '깃허브 앱 만들기', who: 'GitHub에서', category: 'github' },
  { id: 2, title: '권한 설정', who: 'GitHub에서', category: 'github' },
  { id: 3, title: '레포지토리에 설치', who: 'GitHub에서', category: 'github' },
  { id: 4, title: '연결 정보 붙여넣기', who: 'SAI에서 입력', category: 'sai' },
  { id: 5, title: '실시간 수신 설정', who: 'GitHub에서', category: 'github' },
];

const STEP1_TABLE_ROWS = [
  ['GitHub App name', '회사명-프로젝트이름'],
  ['Homepage URL', '프로젝트 주소'],
  ['Webhook Active', '잠깐 해제 (5단계에서 다시 켭니다)'],
];

const STEP2_TABLE_ROWS = [
  ['Contents', 'README·문서 읽기'],
  ['Issues', '이슈와 댓글 읽기'],
  ['Pull requests', 'PR과 리뷰 읽기'],
  ['Metadata', '레포 기본 정보 읽기'],
];

const STEP5_EVENTS = [
  'Push',
  'Issues',
  'Issue comment',
  'Pull request',
  'Pull request review comment',
];

// 웹훅 주소와 시크릿은 연결 응답(GitHubConnectionResultSerializer)에 담겨 온다.
// 서버가 알려 주기 전에는 화면에 값을 지어내지 않는다.
const WEBHOOK_URL_FALLBACK = `${(import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '')}/api/github/events/`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(23, 23, 27, 0.45);
  backdrop-filter: blur(6px);
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 800px;
  max-height: 100%;
  flex-direction: column;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 30px 80px -34px rgba(23, 44, 90, 0.4);
  overflow: hidden;
`;

const GITHUB_HEADER_GRADIENT =
  'radial-gradient(88.02% 55.73% at 86% -14%, rgba(23, 23, 27, 0.16) 0%, rgba(23, 23, 27, 0.04) 46%, rgba(23, 23, 27, 0.00) 74%), #FFF';

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 82.667px;
  padding: 20px 26px 20.667px 26px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: ${GITHUB_HEADER_GRADIENT};
`;

const HeaderIconBox = styled.span`
  box-sizing: border-box;
  display: flex;
  width: 42px;
  height: 42px;
  padding: 10px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(20, 30, 60, 0.12);
  overflow: hidden;
`;

const HeaderIcon = styled.img`
  width: 22px;
  height: 22px;
  transform: scale(1.4);
`;

const HeaderTextGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  padding-bottom: 0.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.667px;
`;

const HeaderTitle = styled.p`
  margin: 0;
  color: #111318;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 22.61px */
  letter-spacing: -0.57px;
`;

const HeaderSubtitle = styled.p`
  margin: 0;
  color: #7a818d;
  font-family: Pretendard;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 123%; /* 15.375px */
`;

const StepAndCloseGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 32px;
  flex-shrink: 0;
`;

const ProgressBar = styled.div`
  display: flex;
  width: 66px;
  height: 6px;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  flex-shrink: 0;
`;

const ProgressSegment = styled.span`
  flex-shrink: 0;
  height: 6px;
  border-radius: ${({ $current }) => ($current ? '99px' : '50px')};
  width: ${({ $current }) => ($current ? '18px' : '6px')};
  background: ${({ $current }) => ($current ? '#1B6BFF' : '#D9DEE7')};
`;

const ProgressLabel = styled.span`
  flex-shrink: 0;
  color: #3a414d;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%; /* 15.99px */
`;

const CloseButton = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 32px;
  height: 32px;
  padding: 1px 6px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: rgba(22, 24, 29, 0.05);
  color: #525a66;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 116%; /* 17.4px */
  cursor: pointer;

  &:hover {
    background: rgba(22, 24, 29, 0.1);
  }
`;

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 575.333px;
  padding-right: 15.333px;
  align-items: stretch;
  flex-shrink: 0;
`;

const Sidebar = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 300px;
  flex-shrink: 0;
  padding: 22px 16.667px 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-right: 0.667px solid #eef1f6;
  background: #fbfcfe;
  overflow-y: auto;
`;

const SidebarLabel = styled.p`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  width: 100%;
  height: 23.333px;
  padding: 0 0 10.333px 8px;
  align-items: center;
  color: #a3aab6;
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 116%; /* 13.34px */
  letter-spacing: 0.46px;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const StepItem = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 55px;
  padding: 11px 12px;
  align-items: flex-start;
  gap: 11px;
  border: none;
  border-radius: 13px;
  background: ${({ $variant }) => ($variant === 'current' ? '#EAF1FF' : 'transparent')};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  text-align: left;

  &:hover {
    background: ${({ $variant, $clickable }) =>
      $variant === 'current' ? '#EAF1FF' : $clickable ? '#F2F4F8' : 'transparent'};
  }
`;

const StepNumber = styled.span`
  box-sizing: border-box;
  display: flex;
  height: 22px;
  min-width: 22px;
  padding: 4px 7px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 117%; /* 14.04px */
  background: ${({ $variant }) => ($variant === 'current' ? '#1B6BFF' : '#EDF0F5')};
  color: ${({ $variant }) => ($variant === 'current' ? '#FFFFFF' : '#7A818D')};
`;

const StepTextGroup = styled.span`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  padding-bottom: 0.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.667px;
`;

const StepTitle = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 16.66px */
  letter-spacing: -0.14px;
  color: ${({ $variant }) => ($variant === 'current' ? '#16181D' : '#4B5361')};
`;

const StepWho = styled.span`
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 116%; /* 13.34px */
  color: ${({ $variant, $category }) =>
    $variant !== 'current' ? '#A4ABB6' : $category === 'github' ? '#334155' : '#1552C7'};
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
  padding: 24px;
  gap: 14px;
  overflow-y: auto;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  padding: 5px 12px;
  border-radius: ${radii.pill};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  background: ${({ $type }) => ($type === 'sai' ? '#EAF1FE' : '#F0F0F2')};
  color: ${({ $type }) => ($type === 'sai' ? colors.primaryBlue : '#17171B')};
`;

const ContentHeading = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 800;
  color: ${colors.textPrimary};
`;

const ContentDescription = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 13px;
  color: ${colors.textSecondary};
`;

const FieldRow = styled.div`
  display: flex;
  gap: 12px;
`;

const FieldStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 0 0;
`;

const FieldLabel = styled.label`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

const FieldHint = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  color: ${colors.textMuted};
`;

const TextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 11px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  font-family: Pretendard;
  font-size: 13px;
  color: ${colors.textPrimary};

  &::placeholder {
    color: ${colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primaryBlue};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }
`;

const InstructionBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${radii.md};
  background: ${colors.surfaceMuted};
`;

const InstructionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InstructionNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #fff;
  border: 1px solid ${colors.border};
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 700;
  color: ${colors.textSecondary};
`;

const InstructionText = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  font-family: Pretendard;
  font-size: 13px;
  color: ${colors.textPrimary};
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid ${colors.border};
  font-family: 'IBM Plex Mono';
  font-size: 12px;
  color: ${colors.textPrimary};
  white-space: nowrap;
`;

const ChipLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid ${colors.border};
  font-family: 'IBM Plex Mono';
  font-size: 12px;
  color: ${colors.primaryBlue};
  white-space: nowrap;
  text-decoration: none;
`;

function InstructionSegments({ segments }) {
  return (
    <InstructionText>
      {segments.map((segment, index) =>
        segment.chip ? (
          segment.href ? (
            <ChipLink key={index} href={segment.href} target="_blank" rel="noreferrer">
              {segment.chip} ↗
            </ChipLink>
          ) : (
            <Chip key={index}>{segment.chip}</Chip>
          )
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </InstructionText>
  );
}

function Instruction({ number, segments }) {
  return (
    <InstructionItem>
      <InstructionNumber>{number}</InstructionNumber>
      <InstructionSegments segments={segments} />
    </InstructionItem>
  );
}

const InfoTable = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.border};
  border-radius: ${radii.sm};
  overflow: hidden;
  background: #fff;
  margin-left: 28px;
`;

const InfoTableHeadRow = styled.div`
  display: flex;
  background: #f2f4f8;
`;

const InfoTableRow = styled.div`
  display: flex;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.border};
  }
`;

const InfoTableCell = styled.span`
  box-sizing: border-box;
  flex: ${({ $wide }) => ($wide ? '1.6 0 0' : '1 0 0')};
  padding: 8px 12px;
  font-family: ${({ $mono }) => ($mono ? "'IBM Plex Mono'" : 'Pretendard')};
  font-size: 12px;
  font-weight: ${({ $head }) => ($head ? 700 : 400)};
  color: ${({ $head }) => ($head ? colors.textSecondary : colors.textPrimary)};

  &:not(:last-child) {
    border-right: 1px solid ${colors.border};
  }
`;

function InfoTableComponent({ headers, rows }) {
  return (
    <InfoTable>
      <InfoTableHeadRow>
        <InfoTableCell $head>{headers[0]}</InfoTableCell>
        <InfoTableCell $head $wide>
          {headers[1]}
        </InfoTableCell>
      </InfoTableHeadRow>
      {rows.map(([label, value]) => (
        <InfoTableRow key={label}>
          <InfoTableCell $mono>{label}</InfoTableCell>
          <InfoTableCell $wide>{value}</InfoTableCell>
        </InfoTableRow>
      ))}
    </InfoTable>
  );
}

const WarningBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 14px;
  border-radius: ${radii.md};
  background: #fef3c7;
  color: #92400e;
  font-family: Pretendard;
  font-size: 12.5px;
`;

const WebhookField = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px 10px 28px;
`;

const WebhookLabel = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: ${colors.textMuted};
`;

const WebhookRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WebhookValue = styled.span`
  flex: 1 0 0;
  min-width: 0;
  box-sizing: border-box;
  padding: 9px 12px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.sm};
  background: #fff;
  font-family: 'IBM Plex Mono';
  font-size: 12px;
  color: ${colors.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CopyButton = styled.button`
  flex-shrink: 0;
  padding: 9px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.pill};
  background: #fff;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

const EventChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-left: 28px;
`;

const DropZone = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px dashed ${colors.border};
  border-radius: ${radii.md};
  background: ${colors.surfaceMuted};
`;

const DropZoneIconBox = styled.span`
  display: flex;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  border: 1px solid ${colors.border};

  img {
    width: 16px;
    height: 16px;
  }
`;

const DropZoneTextGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
`;

const DropZoneText = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: ${colors.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DropZoneHint = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  color: ${colors.textMuted};
`;

const FileSelectButton = styled.button`
  flex-shrink: 0;
  padding: 9px 16px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.pill};
  background: #fff;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

const LoadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex: 1 1 auto;
  padding: 40px 0;
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid ${colors.surfaceSubtle};
  border-top-color: ${colors.primaryBlue};
  animation: github-modal-spin 0.8s linear infinite;

  @keyframes github-modal-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 13px;
  color: ${colors.textSecondary};
`;

const Footer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid ${colors.border};
  flex-shrink: 0;
`;

const FooterHint = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  color: ${colors.textMuted};
`;

const FooterButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`;

const GhostButton = styled.button`
  padding: 11px 18px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.surfaceSubtle};
  color: ${colors.textSecondary};
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  padding: 11px 20px;
  border: none;
  border-radius: ${radii.pill};
  background: ${({ disabled }) => (disabled ? colors.surfaceSubtle : colors.primaryBlue)};
  color: ${({ disabled }) => (disabled ? colors.textMuted : '#fff')};
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

function GithubConnectModal({ companyId, onClose, onConnected }) {
  const [step, setStep] = useState(1);
  const [appId, setAppId] = useState('');
  const [installationId, setInstallationId] = useState('');
  const [privateKeyFile, setPrivateKeyFile] = useState(null);
  const [urlCopied, setUrlCopied] = useState(false);
  const [secretCopied, setSecretCopied] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connection, setConnection] = useState(null);
  const [connectError, setConnectError] = useState('');
  const fileInputRef = useRef(null);

  const webhookUrl = connection?.webhookUrl ?? WEBHOOK_URL_FALLBACK;
  const webhookSecret = connection?.webhookSecret ?? '';

  const goTo = (targetStep) => {
    if (targetStep >= step) return;
    setStep(targetStep);
  };

  const handleCopyUrl = () => {
    navigator.clipboard?.writeText(webhookUrl);
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), COPY_RESET_MS);
  };

  const handleCopySecret = () => {
    if (!webhookSecret) return;
    navigator.clipboard?.writeText(webhookSecret);
    setSecretCopied(true);
    setTimeout(() => setSecretCopied(false), COPY_RESET_MS);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) setPrivateKeyFile(file);
  };

  // 4단계에서 실제로 연결한다. 여기서 성공해야 5단계의 웹훅 값이 생긴다.
  const handleConnect = async () => {
    if (connecting) return;
    setConnecting(true);
    setConnectError('');
    try {
      const created = await sourcesApi.connectGithub(companyId, {
        appId: appId.trim(),
        installationId: installationId.trim(),
        privateKeyFile,
      });
      setConnection(created);
      setStep(5);
    } catch (caught) {
      setConnectError(toApiError(caught).message);
    } finally {
      setConnecting(false);
    }
  };

  const canSubmitStep4 =
    appId.trim().length > 0 && installationId.trim().length > 0 && privateKeyFile !== null;

  return (
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <Card>
        <Header>
          <HeaderIconBox>
            <HeaderIcon src={githubIcon} alt="" />
          </HeaderIconBox>
          <HeaderTextGroup>
            <HeaderTitle>깃허브 연결</HeaderTitle>
            <HeaderSubtitle>
              SAi가 레포의 README·Issue·PR을 읽을 수 있도록 연결합니다.
            </HeaderSubtitle>
          </HeaderTextGroup>
          <StepAndCloseGroup>
            <ProgressBar>
              {STEP_META.map((meta) => (
                <ProgressSegment key={meta.id} $current={meta.id === step} />
              ))}
            </ProgressBar>
            <ProgressLabel>
              {step} / {TOTAL_STEPS}
            </ProgressLabel>
            <CloseButton type="button" onClick={onClose} aria-label="닫기">
              ✕
            </CloseButton>
          </StepAndCloseGroup>
        </Header>

        <Body>
          <Sidebar>
            <SidebarLabel>연결 순서</SidebarLabel>
            <StepList>
              {STEP_META.map((meta) => {
                const variant = meta.id === step ? 'current' : 'upcoming';
                const clickable = meta.id < step;
                return (
                  <StepItem
                    key={meta.id}
                    type="button"
                    $variant={variant}
                    $clickable={clickable}
                    disabled={!clickable && variant !== 'current'}
                    onClick={() => goTo(meta.id)}
                  >
                    <StepNumber $variant={variant}>{meta.id}</StepNumber>
                    <StepTextGroup>
                      <StepTitle $variant={variant}>{meta.title}</StepTitle>
                      <StepWho $variant={variant} $category={meta.category}>
                        {meta.who}
                      </StepWho>
                    </StepTextGroup>
                  </StepItem>
                );
              })}
            </StepList>
          </Sidebar>

          <Content>
            {step === 1 && !connecting && (
              <>
                <Badge $type="github">◆ GitHub에서 할 일</Badge>
                <ContentHeading>깃허브 앱 만들기</ContentHeading>
                <ContentDescription>
                  AI가 레포의 README·Issue·PR을 읽을 수 있도록 GitHub App을 만듭니다.
                </ContentDescription>

                <InstructionBox>
                  <Instruction
                    number={1}
                    segments={[
                      { text: 'GitHub App 설정 페이지에 접속해 로그인하세요.' },
                      {
                        chip: 'github.com/settings/apps',
                        href: 'https://github.com/settings/apps',
                      },
                    ]}
                  />
                  <Instruction
                    number={2}
                    segments={[{ chip: 'New GitHub App' }, { text: '을 누르세요.' }]}
                  />
                  <Instruction number={3} segments={[{ text: '아래 내용을 입력하세요.' }]} />
                  <InfoTableComponent headers={['항목', '입력값']} rows={STEP1_TABLE_ROWS} />
                  <Instruction
                    number={4}
                    segments={[{ chip: 'Create GitHub App' }, { text: '을 누르세요.' }]}
                  />
                </InstructionBox>
              </>
            )}

            {step === 2 && (
              <>
                <Badge $type="github">◆ GitHub에서 할 일</Badge>
                <ContentHeading>권한 설정</ContentHeading>
                <ContentDescription>
                  SAi가 레포지토리의 문서와 작업 내용을 읽을 수 있도록 권한을 설정합니다.
                </ContentDescription>

                <InstructionBox>
                  <Instruction
                    number={1}
                    segments={[
                      { text: '생성한 GitHub App의' },
                      { chip: 'Permissions & events' },
                      { text: '메뉴로 이동하세요.' },
                    ]}
                  />
                  <Instruction
                    number={2}
                    segments={[
                      { chip: 'Repository permissions' },
                      { text: '에서 아래 권한을' },
                      { chip: 'Read-only' },
                      { text: '로 설정하세요.' },
                    ]}
                  />
                  <InfoTableComponent headers={['권한', '용도']} rows={STEP2_TABLE_ROWS} />
                  <Instruction
                    number={3}
                    segments={[{ chip: 'Save changes' }, { text: '를 누르세요.' }]}
                  />
                </InstructionBox>

                <WarningBox>
                  ⚠ Metadata는 Read-only가 기본값입니다. 이미 설정되어 있다면 그대로 두세요.
                </WarningBox>
              </>
            )}

            {step === 3 && (
              <>
                <Badge $type="github">◆ GitHub에서 할 일</Badge>
                <ContentHeading>레포지토리에 설치</ContentHeading>
                <ContentDescription>
                  SAi가 사용할 레포지토리에 GitHub App을 설치합니다.
                </ContentDescription>

                <InstructionBox>
                  <Instruction
                    number={1}
                    segments={[
                      { text: 'GitHub App 설정의' },
                      { chip: 'Install App' },
                      { text: '메뉴로 이동하세요.' },
                    ]}
                  />
                  <Instruction
                    number={2}
                    segments={[
                      { text: '연결할 GitHub 계정의' },
                      { chip: 'Install' },
                      { text: '을 누르세요.' },
                    ]}
                  />
                  <Instruction
                    number={3}
                    segments={[{ chip: 'Only select repositories' }, { text: '를 선택하세요.' }]}
                  />
                  <Instruction
                    number={4}
                    segments={[
                      { text: '연결할 레포지토리를 선택하고' },
                      { chip: 'Install' },
                      { text: '을 누르세요.' },
                    ]}
                  />
                </InstructionBox>

                <WarningBox>
                  ⚠ 설치를 마치면 주소창의 마지막 숫자가 4단계에서 필요한 Installation ID입니다.
                </WarningBox>
              </>
            )}

            {step === 4 && (
              <>
                <Badge $type="sai">● SAi에서 입력할 일</Badge>
                <ContentHeading>연결 정보 붙여넣기</ContentHeading>
                <ContentDescription>GitHub App의 연결 정보를 SAi에 입력합니다.</ContentDescription>

                <InstructionBox>
                  <Instruction
                    number={1}
                    segments={[
                      { text: 'GitHub App의' },
                      { chip: 'General' },
                      { text: '화면에서' },
                      { chip: 'App ID' },
                      { text: '를 확인하세요.' },
                    ]}
                  />
                  <Instruction
                    number={2}
                    segments={[
                      { chip: 'Generate a private key' },
                      { text: '를 눌러 Private Key 파일을 받으세요.' },
                    ]}
                  />
                  <Instruction
                    number={3}
                    segments={[
                      { text: 'App 설치 화면 주소의 마지막 숫자인 Installation ID를 확인하세요.' },
                    ]}
                  />
                  <InstructionText
                    style={{ marginLeft: 28, color: colors.textMuted, fontSize: 12 }}
                  >
                    예시: <Chip>github.com/settings/installations/154030202</Chip> → Installation
                    ID: <Chip>154030202</Chip>
                  </InstructionText>
                </InstructionBox>

                <FieldRow>
                  <Field>
                    <FieldLabel>App ID</FieldLabel>
                    <FieldHint>General 화면 상단의 숫자입니다.</FieldHint>
                    <TextInput
                      placeholder="1234567"
                      value={appId}
                      onChange={(event) => setAppId(event.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Installation ID</FieldLabel>
                    <FieldHint>설치 화면 주소의 마지막 숫자입니다.</FieldHint>
                    <TextInput
                      placeholder="154030202"
                      value={installationId}
                      onChange={(event) => setInstallationId(event.target.value)}
                    />
                  </Field>
                </FieldRow>

                <FieldStack>
                  <Field>
                    <FieldLabel>Private Key 파일</FieldLabel>
                    <FieldHint>
                      내려받은 .pem 파일을 골라 주세요. 파일은 암호화되어 저장됩니다.
                    </FieldHint>
                    <DropZone>
                      <DropZoneIconBox>
                        <img src={fileIcon} alt="" />
                      </DropZoneIconBox>
                      <DropZoneTextGroup>
                        <DropZoneText>
                          {privateKeyFile
                            ? privateKeyFile.name
                            : '파일을 선택하거나 여기로 끌어다 놓으세요.'}
                        </DropZoneText>
                        <DropZoneHint>.pem 파일 1개</DropZoneHint>
                      </DropZoneTextGroup>
                      <FileSelectButton type="button" onClick={() => fileInputRef.current?.click()}>
                        파일 선택
                      </FileSelectButton>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pem"
                        hidden
                        onChange={handleFileChange}
                      />
                    </DropZone>
                  </Field>
                </FieldStack>
              </>
            )}

            {step === 5 && !connecting && (
              <>
                <Badge $type="github">◆ GitHub에서 할 일</Badge>
                <ContentHeading>실시간 수신 설정</ContentHeading>
                <ContentDescription>
                  GitHub의 변경 사항을 SAi가 실시간으로 받을 수 있도록 설정합니다.
                </ContentDescription>

                <InstructionBox>
                  <Instruction
                    number={1}
                    segments={[
                      { text: 'GitHub App의' },
                      { chip: 'General' },
                      { text: '화면으로 이동하세요.' },
                    ]}
                  />
                  <Instruction
                    number={2}
                    segments={[{ chip: 'Webhook Active' }, { text: '를 선택하세요.' }]}
                  />
                  <Instruction
                    number={3}
                    segments={[{ text: '아래 Webhook URL과 Webhook Secret을 각각 붙여넣으세요.' }]}
                  />
                  <Instruction
                    number={4}
                    segments={[{ chip: 'Save changes' }, { text: '를 누르세요.' }]}
                  />

                  <WebhookField>
                    <WebhookLabel>WEBHOOK URL</WebhookLabel>
                    <WebhookRow>
                      <WebhookValue>{webhookUrl}</WebhookValue>
                      <CopyButton type="button" onClick={handleCopyUrl}>
                        {urlCopied ? '복사됨 ✓' : '복사'}
                      </CopyButton>
                    </WebhookRow>
                  </WebhookField>

                  <WebhookField>
                    <WebhookLabel>WEBHOOK SECRET</WebhookLabel>
                    <WebhookRow>
                      <WebhookValue>
                        {webhookSecret || '연결이 끝나면 여기에 표시됩니다'}
                      </WebhookValue>
                      <CopyButton
                        type="button"
                        onClick={handleCopySecret}
                        disabled={!webhookSecret}
                      >
                        {secretCopied ? '복사됨 ✓' : '복사'}
                      </CopyButton>
                    </WebhookRow>
                  </WebhookField>

                  <Instruction
                    number={5}
                    segments={[{ chip: 'Permissions & events' }, { text: '로 이동하세요.' }]}
                  />
                  <Instruction number={6} segments={[{ text: '아래 이벤트를 선택하세요.' }]} />
                  <EventChipRow>
                    {STEP5_EVENTS.map((eventName) => (
                      <Chip key={eventName}>{eventName}</Chip>
                    ))}
                  </EventChipRow>
                  <Instruction
                    number={7}
                    segments={[{ chip: 'Save changes' }, { text: '를 누르세요.' }]}
                  />
                </InstructionBox>
              </>
            )}

            {connecting && (
              <LoadingWrap>
                <Spinner />
                <LoadingText>GitHub 레포지토리에 연결하고 있어요...</LoadingText>
              </LoadingWrap>
            )}
          </Content>
        </Body>

        {step === 1 && !connecting && (
          <Footer>
            <FooterHint>깃허브에서 앱을 만든 뒤 다음으로 넘어가세요.</FooterHint>
            <FooterButtons>
              <PrimaryButton type="button" onClick={() => setStep(2)}>
                앱을 만들었어요
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 2 && !connecting && (
          <Footer>
            <FooterHint>Metadata는 Read-only가 기본값입니다.</FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={() => setStep(1)}>
                이전
              </GhostButton>
              <PrimaryButton type="button" onClick={() => setStep(3)}>
                권한을 설정했어요
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 3 && !connecting && (
          <Footer>
            <FooterHint>설치 화면 주소는 4단계에서 필요하니 잊지 마세요.</FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={() => setStep(2)}>
                이전
              </GhostButton>
              <PrimaryButton type="button" onClick={() => setStep(4)}>
                레포에 설치했어요
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 4 && !connecting && (
          <Footer>
            <FooterHint>{connectError || '세 항목을 모두 입력하면 연결할 수 있습니다.'}</FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={() => setStep(3)}>
                이전
              </GhostButton>
              <PrimaryButton type="button" disabled={!canSubmitStep4} onClick={handleConnect}>
                연결하기 →
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 5 && !connecting && (
          <Footer>
            <FooterHint>
              언제든지 연결을 해제할 수 있습니다. 수집할 레포는 설정의 소스 화면에서 고릅니다.
            </FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={onClose}>
                나중에 하기
              </GhostButton>
              <PrimaryButton type="button" onClick={onConnected}>
                연결 완료
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}
      </Card>
    </Overlay>
  );
}

export default GithubConnectModal;
