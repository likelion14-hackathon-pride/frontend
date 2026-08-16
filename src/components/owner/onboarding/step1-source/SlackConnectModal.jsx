import { useState } from 'react';
import styled from 'styled-components';
import slackIcon from '../../../../assets/owner/slack.svg';
import eyeIcon from '../../../../assets/icons/eye.svg';
import eyeOffIcon from '../../../../assets/icons/eye-off.svg';
import { colors, radii } from '../theme';

const TOTAL_STEPS = 5;
const LOADING_DELAY_MS = 1400;
const COPY_RESET_MS = 1500;

const STEP_META = [
  { id: 1, title: 'Slack 앱 만들기', who: 'SAI에서 입력', category: 'sai' },
  { id: 2, title: '워크스페이스에 설치', who: 'Slack에서', category: 'slack' },
  { id: 3, title: 'Signing Secret 복사', who: 'Slack에서', category: 'slack' },
  { id: 4, title: '복사한 값 붙여넣기', who: 'SAI에서 입력', category: 'sai' },
  { id: 5, title: '실시간 수신 설정', who: 'Slack에서', category: 'slack' },
];

const STEP1_INSTRUCTIONS = [
  [{ text: 'Slack 앱 관리 페이지에 접속해 로그인하세요.' }, { chip: 'api.slack.com/apps', href: 'https://api.slack.com/apps' }],
  [{ chip: 'Create New App' }, { text: '→' }, { chip: 'From a manifest' }, { text: '→ 워크스페이스를 선택하세요.' }],
  [{ text: '아래 코드를 복사해 붙여넣고' }, { chip: 'Create' }, { text: '를 누르세요.' }],
];

const STEP2_INSTRUCTIONS = [
  [{ chip: 'OAuth & Permissions' }, { text: '메뉴로 이동 →' }, { chip: 'Install to Workspace' }, { text: '→' }, { chip: '허용' }],
  [{ text: '화면 위쪽' }, { chip: 'Bot User OAuth Token' }, { text: '을 복사하세요.' }],
];

const STEP3_INSTRUCTIONS = [
  [{ chip: 'Basic Information' }, { text: '메뉴로 이동 →' }, { chip: 'App Credentials' }],
  [{ chip: 'Signing Secret' }, { text: '의' }, { chip: 'Show' }, { text: '를 눌러 복사하세요.' }],
];

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

const SLACK_HEADER_GRADIENT =
  'radial-gradient(82.52% 46.44% at 92% -16%, rgba(236, 178, 7, 0.24) 0%, rgba(236, 178, 7, 0.00) 62%), radial-gradient(90.77% 53.41% at 60% -14%, rgba(224, 30, 90, 0.16) 0%, rgba(224, 30, 90, 0.00) 66%), radial-gradient(93.52% 58.05% at 20% -10%, rgba(54, 192, 255, 0.20) 0%, rgba(54, 192, 255, 0.00) 70%), #FFF';

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 82.667px;
  padding: 20px 26px 20.667px 26px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: ${SLACK_HEADER_GRADIENT};
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
`;

const HeaderIcon = styled.img`
  width: 22px;
  height: 22px;
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
  background: ${({ $variant }) =>
    $variant === 'current' ? '#1B6BFF' : $variant === 'final' ? '#F2F4F8' : '#EDF0F5'};
  color: ${({ $variant }) =>
    $variant === 'current' ? '#FFFFFF' : $variant === 'final' ? '#C3C9D3' : '#7A818D'};
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
  color: ${({ $variant }) =>
    $variant === 'current' ? '#16181D' : $variant === 'final' ? '#B6BCC6' : '#4B5361'};
`;

const StepWho = styled.span`
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 116%; /* 13.34px */
  color: ${({ $variant, $category }) =>
    $variant !== 'current' ? '#A4ABB6' : $category === 'slack' ? '#7C3AED' : '#1552C7'};
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
  background: ${({ $type }) => ($type === 'sai' ? '#EAF1FE' : '#F3E8FF')};
  color: ${({ $type }) => ($type === 'sai' ? colors.primaryBlue : '#7C3AED')};
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

const PasswordFieldWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const EyeToggle = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;

  img {
    width: 16px;
    height: 16px;
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

const InstructionList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InstructionItem = styled.li`
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

const HintLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  font-family: Pretendard;
  font-size: 12px;
  color: ${colors.textMuted};
`;

const CodeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  overflow: hidden;
`;

const CodeBoxHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid ${colors.border};
  background: ${colors.surfaceMuted};
`;

const CodeBoxLabel = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: ${colors.textMuted};
  text-transform: uppercase;
`;

const CodeCopyButton = styled.button`
  padding: 6px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.pill};
  background: #fff;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

const CodePre = styled.pre`
  margin: 0;
  padding: 16px;
  max-height: 220px;
  overflow: auto;
  background: ${colors.surfaceMuted};
  font-family: 'IBM Plex Mono';
  font-size: 12px;
  line-height: 1.7;
  color: ${colors.textPrimary};
  white-space: pre-wrap;
`;

const ManifestValue = styled.span`
  color: ${colors.primaryBlue};
  font-weight: ${({ $bold }) => ($bold ? 700 : 500)};
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
  animation: slack-modal-spin 0.8s linear infinite;

  @keyframes slack-modal-spin {
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

function getManifestSegments(appName, botDisplayName) {
  return [
    'display_information:\n  name: ',
    { value: appName },
    '\n  description: 한국어 슬랙 대화를 외국인 동료가 이해할 수 있게 정리합니다\nfeatures:\n  bot_user:\n    display_name: ',
    { value: botDisplayName, bold: true },
    '\n    always_online: true\noauth_config:\n  scopes:\n    bot:\n      - channels:read\n      - channels:history\n      - channels:join\n      - groups:read\n      - groups:history\n      - chat:write\n      - users:read\n      - users:read.email\nsettings:\n  org_deploy_enabled: false\n  socket_mode_enabled: false',
  ];
}

function buildManifest(appName, botDisplayName) {
  return getManifestSegments(appName, botDisplayName)
    .map((segment) => (typeof segment === 'string' ? segment : segment.value))
    .join('');
}

function SlackConnectModal({ onClose, onConnected }) {
  const [step, setStep] = useState(1);
  const [appName, setAppName] = useState('SAI');
  const [botDisplayName, setBotDisplayName] = useState('SAI');
  const [manifestCopied, setManifestCopied] = useState(false);
  const [botToken, setBotToken] = useState('');
  const [signingSecret, setSigningSecret] = useState('');
  const [secretVisible, setSecretVisible] = useState(false);

  const goTo = (targetStep) => {
    if (targetStep >= step) return;
    setStep(targetStep);
  };

  const handleCopyManifest = () => {
    navigator.clipboard?.writeText(buildManifest(appName, botDisplayName));
    setManifestCopied(true);
    setTimeout(() => setManifestCopied(false), COPY_RESET_MS);
  };

  const handleConfirmConnect = () => {
    setStep(5);
    setTimeout(() => {
      onConnected();
    }, LOADING_DELAY_MS);
  };

  const canSubmit = botToken.trim().length > 0 && signingSecret.trim().length > 0;

  return (
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <Card>
        <Header>
          <HeaderIconBox>
            <HeaderIcon src={slackIcon} alt="" />
          </HeaderIconBox>
          <HeaderTextGroup>
            <HeaderTitle>Slack 연결</HeaderTitle>
            <HeaderSubtitle>SAI가 대화를 읽을 수 있도록 워크스페이스를 연결합니다.</HeaderSubtitle>
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
                const variant = meta.id === step ? 'current' : meta.id === 5 ? 'final' : 'upcoming';
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
            {step === 1 && (
              <>
                <Badge $type="sai">● SAI에서 입력할 일</Badge>
                <ContentHeading>Slack 앱 만들기</ContentHeading>
                <ContentDescription>이름 2개를 정하면 아래 설정 코드가 자동으로 완성됩니다.</ContentDescription>

                <FieldRow>
                  <Field>
                    <FieldLabel>앱 이름</FieldLabel>
                    <FieldHint>Slack 앱 목록과 설치 화면에 표시되는 이름입니다. 회사에서 알아볼 수 있는 이름으로 지으세요.</FieldHint>
                    <TextInput value={appName} onChange={(event) => setAppName(event.target.value)} />
                  </Field>
                  <Field>
                    <FieldLabel>봇 표시 이름</FieldLabel>
                    <FieldHint>채널에서 이 봇이 말할 때 보이는 이름입니다. 직원들이 보게 되는 이름입니다.</FieldHint>
                    <TextInput value={botDisplayName} onChange={(event) => setBotDisplayName(event.target.value)} />
                  </Field>
                </FieldRow>

                <InstructionList>
                  {STEP1_INSTRUCTIONS.map((segments, index) => (
                    <InstructionItem key={index}>
                      <InstructionNumber>{index + 1}</InstructionNumber>
                      <InstructionSegments segments={segments} />
                    </InstructionItem>
                  ))}
                </InstructionList>

                <CodeBox>
                  <CodeBoxHeader>
                    <CodeBoxLabel>Manifest · YAML</CodeBoxLabel>
                    <CodeCopyButton type="button" onClick={handleCopyManifest}>
                      {manifestCopied ? '복사됨 ✓' : '복사'}
                    </CodeCopyButton>
                  </CodeBoxHeader>
                  <CodePre>
                    {getManifestSegments(appName, botDisplayName).map((segment, index) =>
                      typeof segment === 'string' ? (
                        <span key={index}>{segment}</span>
                      ) : (
                        <ManifestValue key={index} $bold={segment.bold}>
                          {segment.value}
                        </ManifestValue>
                      )
                    )}
                  </CodePre>
                </CodeBox>
              </>
            )}

            {step === 2 && (
              <>
                <Badge $type="slack">◆ Slack에서 할 일</Badge>
                <ContentHeading>워크스페이스에 설치</ContentHeading>
                <ContentDescription>방금 만든 앱을 회사 워크스페이스에 설치하면 토큰이 생깁니다.</ContentDescription>

                <InstructionBox>
                  {STEP2_INSTRUCTIONS.map((segments, index) => (
                    <InstructionItem key={index}>
                      <InstructionNumber>{index + 1}</InstructionNumber>
                      <InstructionSegments segments={segments} />
                    </InstructionItem>
                  ))}
                </InstructionBox>

                <WarningBox>⚠ 설치를 먼저 해야 토큰이 나타납니다. 설치 전에는 이 항목이 보이지 않습니다.</WarningBox>

                <HintLine>
                  <Chip>xoxb-</Chip>
                  <span>로 시작하는 값입니다.</span>
                  <Chip>xoxp-</Chip>
                  <span>로 시작하는 값은 다른 토큰이니 주의하세요.</span>
                </HintLine>
              </>
            )}

            {step === 3 && (
              <>
                <Badge $type="slack">◆ Slack에서 할 일</Badge>
                <ContentHeading>Signing Secret 복사</ContentHeading>
                <ContentDescription>SAI가 Slack에서 온 요청인지 확인할 때 쓰는 값입니다.</ContentDescription>

                <InstructionBox>
                  {STEP3_INSTRUCTIONS.map((segments, index) => (
                    <InstructionItem key={index}>
                      <InstructionNumber>{index + 1}</InstructionNumber>
                      <InstructionSegments segments={segments} />
                    </InstructionItem>
                  ))}
                </InstructionBox>

                <WarningBox>⚠ 2단계와 다른 페이지입니다. 같은 화면에 없습니다.</WarningBox>
              </>
            )}

            {step === 4 && (
              <>
                <Badge $type="sai">● SAI에서 입력할 일</Badge>
                <ContentHeading>복사한 값 붙여넣기</ContentHeading>
                <ContentDescription>2단계와 3단계에서 복사한 값을 각각 넣어 주세요.</ContentDescription>

                <FieldStack>
                  <Field>
                    <FieldLabel>Bot User OAuth Token</FieldLabel>
                    <FieldHint>2단계에서 복사한 값입니다.</FieldHint>
                    <TextInput
                      placeholder="xoxb-..."
                      value={botToken}
                      onChange={(event) => setBotToken(event.target.value)}
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Signing Secret</FieldLabel>
                    <FieldHint>3단계에서 복사한 값입니다.</FieldHint>
                    <PasswordFieldWrap>
                      <TextInput
                        type={secretVisible ? 'text' : 'password'}
                        value={signingSecret}
                        onChange={(event) => setSigningSecret(event.target.value)}
                      />
                      <EyeToggle
                        type="button"
                        onClick={() => setSecretVisible((prev) => !prev)}
                        aria-label={secretVisible ? '숨기기' : '보기'}
                      >
                        <img src={secretVisible ? eyeOffIcon : eyeIcon} alt="" />
                      </EyeToggle>
                    </PasswordFieldWrap>
                  </Field>
                </FieldStack>
              </>
            )}

            {step === 5 && (
              <LoadingWrap>
                <Spinner />
                <LoadingText>Slack 워크스페이스에 연결하고 있어요...</LoadingText>
              </LoadingWrap>
            )}
          </Content>
        </Body>

        {step === 1 && (
          <Footer>
            <FooterHint>Slack에서 앱을 만든 뒤 다시 돌아와서 넘어가주세요.</FooterHint>
            <FooterButtons>
              <PrimaryButton type="button" onClick={() => setStep(2)}>
                앱을 만들었어요
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 2 && (
          <Footer>
            <FooterHint>토큰은 4단계에서 붙여넣습니다.</FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={() => setStep(1)}>
                이전
              </GhostButton>
              <PrimaryButton type="button" onClick={() => setStep(3)}>
                토큰을 복사했어요
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 3 && (
          <Footer>
            <FooterHint>두 값을 모두 복사했으면 다음으로 넘어가세요.</FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={() => setStep(2)}>
                이전
              </GhostButton>
              <PrimaryButton type="button" onClick={() => setStep(4)}>
                Signing Secret을 복사했어요
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}

        {step === 4 && (
          <Footer>
            <FooterHint>두 값을 모두 붙여넣으면 연결할 수 있습니다.</FooterHint>
            <FooterButtons>
              <GhostButton type="button" onClick={() => setStep(3)}>
                이전
              </GhostButton>
              <PrimaryButton type="button" disabled={!canSubmit} onClick={handleConfirmConnect}>
                연결하기
              </PrimaryButton>
            </FooterButtons>
          </Footer>
        )}
      </Card>
    </Overlay>
  );
}

export default SlackConnectModal;
