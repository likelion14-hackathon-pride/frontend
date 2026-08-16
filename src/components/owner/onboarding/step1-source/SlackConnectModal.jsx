import { useState } from 'react';
import styled from 'styled-components';

const TOTAL_STEPS = 5;
const CONNECT_DELAY_MS = 1400;
const COPY_RESET_MS = 1800;

const DEFAULT_APP_NAME = 'SAI';
const DEFAULT_BOT_NAME = 'SAI';
const DEFAULT_APP_DESC = '한국어 슬랙 대화를 외국인 동료가 이해할 수 있게 정리합니다';
const REQUEST_URL = 'https://app.sai.so/api/slack/events';
const DEFAULT_ERROR_MESSAGE = '토큰이 올바르지 않습니다. 다시 복사해 주세요.';

const RAIL_META = [
  { id: 1, title: '슬랙에 SAI 추가하기', place: 'Slack에서', category: 'slack' },
  { id: 2, title: '워크스페이스에 설치', place: 'Slack에서', category: 'slack' },
  { id: 3, title: 'Signing Secret 복사', place: 'Slack에서', category: 'slack' },
  { id: 4, title: '복사한 값 붙여넣기', place: 'SAI에서', category: 'sai' },
  { id: 5, title: '실시간 수신 설정', place: 'Slack에서', category: 'slack' },
];

const PERMISSION_ROWS = [
  { scope: 'channels:read, groups:read', usage: '채널 목록 보기' },
  { scope: 'channels:history, groups:history', usage: '대화 읽기' },
  { scope: 'channels:join', usage: '공개 채널에 자동으로 참여' },
  { scope: 'chat:write', usage: '확인 질문 보내기' },
  { scope: 'users:read, users:read.email', usage: '담당자 연결' },
];

const DEFAULT_CHANNELS = [
  { name: 'general', members: '전체', private: false, on: true },
  { name: 'product', members: '12명', private: false, on: true },
  { name: 'dev-backend', members: '7명', private: false, on: false },
  { name: 'leads-only', members: '4명', private: true, on: false },
];

function quote(value) {
  return `"${String(value).replace(/"/g, '\\"')}"`;
}

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
  max-width: 1060px;
  max-height: calc(100vh - 64px);
  flex-direction: column;
  border-radius: 30px;
  background: #fff;
  box-shadow:
    0 32px 80px -24px rgba(20, 30, 60, 0.32),
    0 2px 6px rgba(20, 30, 60, 0.06);
  overflow: hidden;
`;

const Header = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 20px 26px 18px;
  border-bottom: 1px solid #eef1f6;
  background: linear-gradient(96deg, #f2f7ff 0%, #f7f4fd 46%, #fdf3f2 100%);
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const HeaderIconBox = styled.div`
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 12px -4px rgba(20, 30, 60, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-4deg);
`;

const HeaderTextGroup = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

const HeaderTitle = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.8px;
  color: #111318;
`;

const StepAndCloseGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 32px;
`;

const DotBar = styled.div`
  display: flex;
  width: 66px;
  height: 7px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

const Dot = styled.span`
  flex-shrink: 0;
  height: 7px;
  border-radius: 99px;
  transition: all 0.15s ease;
  width: ${({ $current }) => ($current ? '20px' : '7px')};
  background: ${({ $current, $done }) => ($current ? '#1B6BFF' : $done ? '#9CC1FF' : '#D9DEE7')};
`;

const StepLabel = styled.span`
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  color: #3a414d;
  font-variant-numeric: tabular-nums;
`;

const CloseButton = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: rgba(22, 24, 29, 0.05);
  color: #525a66;
  font-family: Pretendard;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: rgba(22, 24, 29, 0.1);
  }
`;

const Banner = styled.div`
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: inset 0 0 0 1px rgba(27, 107, 255, 0.16);
`;

const BannerIcon = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 8px;
  background: #eaf1ff;
  color: #1552c7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
`;

const BannerText = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #1746b8;
  letter-spacing: -0.2px;
`;

const Body = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Sidebar = styled.div`
  box-sizing: border-box;
  flex: 1 1 244px;
  min-width: 244px;
  max-width: 304px;
  align-self: stretch;
  padding: 22px 16px 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #fafbfe;
  border-right: 1px solid #eef1f6;
  overflow-y: auto;
`;

const SidebarLabel = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 0 0 10px 8px;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.4px;
  color: #a3aab6;
`;

const StepItem = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 11px;
  padding: 11px 12px;
  border: none;
  border-radius: 16px;
  text-align: left;
  cursor: ${({ $locked }) => ($locked ? 'not-allowed' : 'pointer')};
  background: ${({ $current }) => ($current ? '#EAF1FF' : 'transparent')};

  &:hover {
    background: ${({ $current, $locked }) => ($current ? '#EAF1FF' : $locked ? 'transparent' : '#F2F4F8')};
  }
`;

const StepNumber = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-top: 1px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 800;
  background: ${({ $variant }) =>
    $variant === 'current' ? '#1B6BFF' : $variant === 'locked' ? '#F2F4F8' : '#EDF0F5'};
  color: ${({ $variant }) =>
    $variant === 'current' ? '#FFFFFF' : $variant === 'locked' ? '#C3C9D3' : '#7A818D'};
  box-shadow: ${({ $variant }) => ($variant === 'current' ? '0 4px 10px -4px rgba(27, 107, 255, 0.9)' : 'none')};
`;

const StepTextGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

const StepTitle = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.14px;
  color: ${({ $variant }) => ($variant === 'current' ? '#16181D' : $variant === 'locked' ? '#B6BCC6' : '#4B5361')};
`;

const StepPlace = styled.span`
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  color: ${({ $variant, $category }) =>
    $variant !== 'current' ? '#A4ABB6' : $category === 'slack' ? '#8B5A8E' : '#1552C7'};
`;

const Content = styled.div`
  box-sizing: border-box;
  flex: 1 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 26px 30px 34px;
  overflow-y: auto;
`;

const Badge = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 999px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: -0.1px;
  background: ${({ $type }) => ($type === 'sai' ? '#EAF1FF' : '#F4EDF8')};
  color: ${({ $type }) => ($type === 'sai' ? '#1552C7' : '#5C1D5E')};
`;

const ContentHeading = styled.h2`
  margin: 14px 0 8px;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.6px;
  color: #111318;
`;

const ContentDescription = styled.p`
  margin: 0 0 20px;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 500;
  color: #5c6472;
`;

const InstructionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  border-radius: 20px;
  background: #f6f8fc;
`;

const InstructionRow = styled.div`
  display: flex;
  gap: 11px;
  align-items: flex-start;
`;

const InstructionNumber = styled.span`
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 30, 60, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 800;
  color: #3a414d;
`;

const InstructionText = styled.div`
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 500;
  color: #111318;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 30, 60, 0.1);
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 12.5px;
  font-weight: 800;
  color: #111318;
  white-space: nowrap;
`;

const ChipLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 30, 60, 0.1);
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  color: #1b6bff;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 1.5px #1b6bff;
  }
`;

const ArrowText = styled.span`
  color: #a4abb6;
`;

function Segments({ children }) {
  return <InstructionText>{children}</InstructionText>;
}

const CodeBox = styled.div`
  margin-top: 14px;
  position: relative;
  border-radius: 20px;
  background: #fbfcfe;
  box-shadow: inset 0 0 0 1px #e6eaf1;
  overflow: hidden;
`;

const CodeBoxHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px 10px 16px;
  border-bottom: 1px solid #eef1f6;
`;

const CodeBoxLabel = styled.span`
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.4px;
  color: #8a919c;
`;

const CodeBoxActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CopiedLabel = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  color: #0f9a6a;
`;

const CodeCopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border: none;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 0 1px #dde2ea;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: #2b3038;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 1.5px #1b6bff;
    color: #1b6bff;
  }
`;

const CodePre = styled.pre`
  margin: 0;
  padding: 16px 18px;
  overflow-x: auto;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 12.5px;
  line-height: 1.75;
  color: #2b3038;
  white-space: pre;
`;

const ManifestValue = styled.span`
  color: #1552c7;
  font-weight: 700;
`;

const NamesToggle = styled.button`
  margin-top: 10px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  background: transparent;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  color: #1b6bff;
  cursor: pointer;

  &:hover {
    background: #f2f6ff;
  }
`;

const NamesPanel = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 18px;
  border-radius: 20px;
  background: #f4f8ff;
`;

const Field = styled.div`
  flex: 1 1 210px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FieldFull = styled(Field)`
  flex: 1 1 100%;
`;

const FieldLabel = styled.label`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #111318;
`;

const FieldHint = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  line-height: 1.55;
  font-weight: 500;
  color: #7b8494;
`;

const TextInput = styled.input`
  box-sizing: border-box;
  margin-top: 2px;
  width: 100%;
  padding: 11px 13px;
  border: none;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0 0 0 ${({ $bad }) => ($bad ? '1.5px' : '1px')}
    ${({ $bad }) => ($bad ? '#E4737C' : '#DDE2EA')};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  color: #111318;
  outline: none;

  &::placeholder {
    color: #a3aab6;
    font-weight: 500;
  }

  &:focus {
    box-shadow: 0 0 0 2px #1b6bff;
  }
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  margin-top: 2px;
  width: 100%;
  resize: vertical;
  padding: 11px 13px;
  border: none;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0 0 0 1px #dde2ea;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  color: #111318;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #1b6bff;
  }
`;

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const CounterHint = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ $over }) => ($over ? '#D62A34' : '#9AA2AE')};
`;

const CounterValue = styled.span`
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: #9aa2ae;
  font-variant-numeric: tabular-nums;
`;

const Accordion = styled.div`
  margin-top: ${({ $first }) => ($first ? '12px' : '10px')};
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 0 0 1px #e6eaf1;
  overflow: hidden;
`;

const AccordionTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 16px;
  border: none;
  background: #fff;
  text-align: left;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #2b3038;
  cursor: pointer;

  &:hover {
    background: #f7f9fc;
  }
`;

const AccordionChevron = styled.span`
  color: #8a919c;
  font-size: 11px;
`;

const AccordionBody = styled.div`
  padding: 4px 16px 16px;
  background: #fff;
`;

const PermissionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: 1px 14px;
  font-size: 13px;
`;

const PermissionHeadCell = styled.div`
  padding: 8px 0;
  font-family: Pretendard;
  font-weight: 800;
  color: #8a919c;
  font-size: 11.5px;
  letter-spacing: 0.4px;
`;

const PermissionScope = styled.div`
  padding: 9px 0;
  border-top: 1px solid #f0f3f8;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-weight: 700;
  font-size: 12px;
  color: #2b3038;
`;

const PermissionUsage = styled.div`
  padding: 9px 0;
  border-top: 1px solid #f0f3f8;
  font-family: Pretendard;
  font-weight: 500;
  color: #525a66;
`;

const AccordionParagraph = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 13.5px;
  line-height: 1.7;
  font-weight: 500;
  color: #4b5361;

  & + & {
    margin-top: 12px;
  }
`;

const WarningBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 11px;
  padding: 15px 16px;
  border-radius: 18px;
  background: #fff8e3;
  box-shadow: inset 0 0 0 1px #f5e2ae;
`;

const WarningIcon = styled.span`
  flex-shrink: 0;
  font-size: 15px;
`;

const WarningText = styled.div`
  font-family: Pretendard;
  font-size: 13.5px;
  line-height: 1.7;
  font-weight: 600;
  color: #7a5a05;
`;

const HintLine = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-family: Pretendard;
  font-size: 13px;
  line-height: 1.8;
  font-weight: 500;
  color: #7b8494;
`;

const MonoChip = styled.span`
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-weight: 700;
  font-size: 11.5px;
  background: #f2f5fa;
  border-radius: 7px;
  padding: 5px 7px;
  color: #2b3038;
`;

const ExtraParagraph = styled.p`
  margin: 8px 0 0;
  font-family: Pretendard;
  font-size: 13px;
  line-height: 1.8;
  font-weight: 500;
  color: #7b8494;
`;

const FieldStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldErrorText = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 600;
  color: #d62a34;
`;

const PasswordFieldWrap = styled.div`
  margin-top: 2px;
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 46px 12px 14px;
  border: none;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 0 0 1px #dde2ea;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 14px;
  color: #111318;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #1b6bff;
  }
`;

const EyeToggle = styled.button`
  position: absolute;
  right: 6px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #7a818d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #f2f5fa;
  }
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 15px 16px;
  border-radius: 18px;
  background: #f4f8ff;
`;

const Spinner = styled.span`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #c3d7fd;
  border-top-color: #1b6bff;
  display: inline-block;
  animation: sai-slack-spin 0.7s linear infinite;

  @keyframes sai-slack-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StatusTitle = styled.span`
  font-family: Pretendard;
  font-size: 13.5px;
  font-weight: 700;
  color: #1552c7;
`;

const StatusHint = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 500;
  color: #8a919c;
`;

const SuccessRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: #eefbf4;
  box-shadow: inset 0 0 0 1px #bcead3;
`;

const SuccessIcon = styled.span`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #0f9a6a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
`;

const SuccessText = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 600;
  color: #0b5e43;

  strong {
    font-weight: 800;
  }
`;

const ErrorRow = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: #fef2f3;
  box-shadow: inset 0 0 0 1px #f6cacd;
`;

const ErrorIcon = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d62a34;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
`;

const ErrorTextGroup = styled.div`
  min-width: 0;
`;

const ErrorTitle = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 600;
  color: #96131c;
`;

const ErrorHint = styled.div`
  margin-top: 5px;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 500;
  color: #b0616a;
`;

const InfoBox = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 16px 18px;
  border-radius: 20px;
  background: #f6f8fc;
`;

const InfoLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 500;
  color: #111318;
`;

const VerifiedChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-weight: 800;
  font-size: 12.5px;
  background: #eefbf4;
  box-shadow: inset 0 0 0 1px #bcead3;
  color: #0b5e43;
  border-radius: 8px;
  padding: 6px 8px;
  white-space: nowrap;
`;

const ChannelsWrap = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 26px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ChannelRow = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 15px 16px;
  border-radius: 18px;
  border: none;
  text-align: left;
  cursor: pointer;
  background: ${({ $on }) => ($on ? '#F4F8FF' : '#FFFFFF')};
  box-shadow: 0 0 0 ${({ $on }) => ($on ? '1.5px' : '1px')}
    ${({ $on }) => ($on ? '#9CC1FF' : '#E6EAF1')};
`;

const ChannelCheck = styled.span`
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: #fff;
  background: ${({ $on }) => ($on ? '#1B6BFF' : '#FFFFFF')};
  box-shadow: 0 0 0 1px ${({ $on }) => ($on ? '#1B6BFF' : '#D5DBE4')};
`;

const ChannelTextGroup = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: left;
`;

const ChannelNameRow = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #111318;
`;

const ChannelGlyph = styled.span`
  color: #a4abb6;
`;

const ChannelPrivateHint = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 500;
  color: #828a96;
`;

const ChannelMembers = styled.span`
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 600;
  color: #a4abb6;
`;

const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #eef1f6;
  background: #fff;
`;

const FooterNote = styled.div`
  flex: 1 1 200px;
  min-width: 0;
  font-family: Pretendard;
  font-size: 12.5px;
  line-height: 1.6;
  font-weight: 500;
  color: #828a96;
`;

const FooterButtons = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GhostButton = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 14px;
  background: #f2f4f8;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #2b3038;
  cursor: pointer;

  &:hover {
    background: #e8ebf2;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border: none;
  border-radius: 15px;
  background: #1b6bff;
  font-family: Pretendard;
  font-size: 14.5px;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 8px 18px -8px rgba(27, 107, 255, 0.9);
  cursor: pointer;

  &:hover {
    background: #1552c7;
  }
`;

const PrimaryButtonDisabled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border: none;
  border-radius: 15px;
  background: #e6e9ef;
  font-family: Pretendard;
  font-size: 14.5px;
  font-weight: 800;
  color: #a4abb6;
  cursor: not-allowed;
`;

function SlackConnectModal({ onClose, onConnected }) {
  const [screen, setScreen] = useState('modal');
  const [current, setCurrent] = useState(1);
  const [done, setDone] = useState({});
  const [appName, setAppName] = useState('');
  const [botName, setBotName] = useState('');
  const [appDesc, setAppDesc] = useState('');
  const [namesOpen, setNamesOpen] = useState(false);
  const [permOpen, setPermOpen] = useState(false);
  const [existingOpen, setExistingOpen] = useState(false);
  const [token, setToken] = useState('');
  const [secret, setSecret] = useState('');
  const [secretVisible, setSecretVisible] = useState(false);
  const [conn, setConn] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState('');
  const [channels, setChannels] = useState(DEFAULT_CHANNELS);

  const resolvedName = (appName || DEFAULT_APP_NAME).trim() || DEFAULT_APP_NAME;
  const resolvedBot = (botName || DEFAULT_BOT_NAME).trim() || DEFAULT_BOT_NAME;
  const resolvedDesc = (appDesc || DEFAULT_APP_DESC).trim() || DEFAULT_APP_DESC;

  const yaml = `display_information:
  name: ${quote(resolvedName)}
  description: ${quote(resolvedDesc)}
features:
  bot_user:
    display_name: ${quote(resolvedBot)}
    always_online: true
oauth_config:
  scopes:
    bot:
      - channels:read
      - channels:history
      - channels:join
      - groups:read
      - groups:history
      - chat:write
      - users:read
      - users:read.email
settings:
  org_deploy_enabled: false
  socket_mode_enabled: false`;

  const handleCopy = (key, text) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), COPY_RESET_MS);
  };

  const goTo = (n) => {
    if (n === 5 && conn !== 'success') return;
    setCurrent(n);
  };

  const complete = (n, next) => {
    setDone((prev) => ({ ...prev, [n]: true }));
    setCurrent(next);
  };

  const tokenBad = token.length > 0 && !token.startsWith('xoxb-');

  const handleConnect = () => {
    if (conn === 'loading') return;
    setConn('loading');
    setErrorMsg('');
    setTimeout(() => {
      if (/fail|error/i.test(token)) {
        setConn('error');
        setErrorMsg(DEFAULT_ERROR_MESSAGE);
      } else {
        setConn('success');
        setDone((prev) => ({ ...prev, 4: true }));
      }
    }, CONNECT_DELAY_MS);
  };

  const toggleChannel = (index) => {
    setChannels((prev) => prev.map((c, i) => (i === index ? { ...c, on: !c.on } : c)));
  };

  const handleFinishChannels = () => {
    onConnected();
  };

  const descOver = appDesc.length > 140;

  let footerNote = '';
  let primaryLabel = '다음';
  let primaryAction = () => {};
  let primaryEnabled = true;
  let showSkip = false;

  if (screen === 'channels') {
    primaryLabel = '선택한 채널 연결';
    primaryAction = handleFinishChannels;
    footerNote = '연결 이후에도 설정에서 채널을 추가하거나 뺄 수 있습니다.';
  } else if (current === 1) {
    primaryLabel = '슬랙에 추가했어요';
    primaryAction = () => complete(1, 2);
    footerNote = '슬랙에서 앱을 추가한 뒤 다음으로 넘어가세요.';
  } else if (current === 2) {
    primaryLabel = '토큰을 복사했어요';
    primaryAction = () => complete(2, 3);
    footerNote = '복사한 토큰은 4단계에서 붙여넣습니다.';
  } else if (current === 3) {
    primaryLabel = 'Signing Secret을 복사했어요';
    primaryAction = () => complete(3, 4);
    footerNote = '두 값을 모두 복사했으면 다음으로 넘어가세요.';
  } else if (current === 4) {
    if (conn === 'success') {
      primaryLabel = '실시간 수신 설정하기';
      primaryAction = () => goTo(5);
      footerNote = '마지막 단계입니다.';
    } else if (conn === 'loading') {
      primaryLabel = '슬랙을 확인하는 중…';
      primaryEnabled = false;
      footerNote = '창을 닫지 말고 기다려 주세요.';
    } else {
      primaryLabel = conn === 'error' ? '다시 연결하기' : '연결하기';
      primaryAction = handleConnect;
      primaryEnabled = token.trim() !== '' && secret.trim() !== '' && !tokenBad;
      footerNote = primaryEnabled
        ? 'SAI가 슬랙과 값이 맞는지 확인합니다.'
        : '두 값을 모두 붙여넣으면 연결할 수 있습니다.';
    }
  } else if (current === 5) {
    primaryLabel = '완료';
    primaryAction = () => {
      setDone((prev) => ({ ...prev, 5: true }));
      setScreen('channels');
    };
    showSkip = true;
    footerNote =
      '건너뛰어도 지금까지의 대화는 가져옵니다. 다만 앞으로 새로 올라오는 메시지는 자동으로 수집되지 않습니다.';
  }

  const canGoBack = screen === 'modal' && current > 1 && conn !== 'loading';

  return (
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <Card>
        <Header>
          <HeaderRow>
            <HeaderIconBox>
              <svg width="24" height="24" viewBox="0 0 122.8 122.8" aria-label="Slack">
                <path
                  d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zM32.3 77.6c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                  fill="#E01E5A"
                />
                <path
                  d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zM45.2 32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                  fill="#36C5F0"
                />
                <path
                  d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zM90.5 45.2c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                  fill="#2EB67D"
                />
                <path
                  d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zM77.6 90.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                  fill="#ECB22E"
                />
              </svg>
            </HeaderIconBox>
            <HeaderTextGroup>
              <HeaderTitle>Slack 연결하기</HeaderTitle>
            </HeaderTextGroup>
            <StepAndCloseGroup>
              <DotBar>
                {RAIL_META.map((meta) => (
                  <Dot key={meta.id} $current={meta.id === current} $done={!!done[meta.id]} />
                ))}
              </DotBar>
              <StepLabel>
                {current} / {TOTAL_STEPS}
              </StepLabel>
              <CloseButton type="button" onClick={onClose} aria-label="닫기">
                ✕
              </CloseButton>
            </StepAndCloseGroup>
          </HeaderRow>

          <Banner>
            <BannerIcon>◆</BannerIcon>
            <BannerText>
              이미 사용 중인 슬랙을 연결합니다. 지금까지 쌓인 대화도 함께 가져옵니다.
            </BannerText>
          </Banner>
        </Header>

        {screen === 'modal' ? (
          <Body>
            <Sidebar>
              <SidebarLabel>연결 순서</SidebarLabel>
              {RAIL_META.map((meta) => {
                const isCurrent = meta.id === current;
                const isLocked = meta.id === 5 && conn !== 'success' && !isCurrent;
                const variant = isCurrent ? 'current' : isLocked ? 'locked' : 'todo';

                return (
                  <StepItem
                    key={meta.id}
                    type="button"
                    $current={isCurrent}
                    $locked={isLocked}
                    onClick={() => !isLocked && goTo(meta.id)}
                  >
                    <StepNumber $variant={variant}>{meta.id}</StepNumber>
                    <StepTextGroup>
                      <StepTitle $variant={variant}>{meta.title}</StepTitle>
                      <StepPlace $variant={variant} $category={meta.category}>
                        {meta.place}
                      </StepPlace>
                    </StepTextGroup>
                  </StepItem>
                );
              })}
            </Sidebar>

            <Content>
              {current === 1 && (
                <>
                  <Badge $type="slack">◆ Slack에서 할 일</Badge>
                  <ContentHeading>슬랙에 SAI 추가하기</ContentHeading>
                  <ContentDescription>
                    슬랙이 외부 서비스에 대화를 열어주려면 연결용 앱을 하나 등록해야 합니다. 새
                    워크스페이스를 만드는 것이 아니며, 기존 채널과 대화는 그대로 유지됩니다.
                  </ContentDescription>

                  <InstructionBox>
                    <InstructionRow>
                      <InstructionNumber>1</InstructionNumber>
                      <Segments>
                        <span>슬랙 앱 관리 페이지에 접속해 로그인하세요.</span>
                        <ChipLink
                          href="https://api.slack.com/apps"
                          target="_blank"
                          rel="noreferrer"
                        >
                          api.slack.com/apps ↗
                        </ChipLink>
                      </Segments>
                    </InstructionRow>
                    <InstructionRow>
                      <InstructionNumber>2</InstructionNumber>
                      <Segments>
                        <Chip>Create New App</Chip>
                        <ArrowText>→</ArrowText>
                        <Chip>From a manifest</Chip>
                        <ArrowText>→</ArrowText>
                        <span>워크스페이스를 선택하세요.</span>
                      </Segments>
                    </InstructionRow>
                    <InstructionRow>
                      <InstructionNumber>3</InstructionNumber>
                      <Segments>
                        <span>아래 코드를 복사해 붙여넣고</span>
                        <Chip>Create</Chip>
                        <span>를 누르세요.</span>
                      </Segments>
                    </InstructionRow>
                  </InstructionBox>

                  <CodeBox>
                    <CodeBoxHeader>
                      <CodeBoxLabel>MANIFEST · YAML</CodeBoxLabel>
                      <CodeBoxActions>
                        {copied === 'yaml' && <CopiedLabel>복사했습니다</CopiedLabel>}
                        <CodeCopyButton type="button" onClick={() => handleCopy('yaml', yaml)}>
                          복사
                        </CodeCopyButton>
                      </CodeBoxActions>
                    </CodeBoxHeader>
                    <CodePre>
                      {'display_information:\n  name: '}
                      <ManifestValue>{quote(resolvedName)}</ManifestValue>
                      {'\n  description: '}
                      <ManifestValue>{quote(resolvedDesc)}</ManifestValue>
                      {'\nfeatures:\n  bot_user:\n    display_name: '}
                      <ManifestValue>{quote(resolvedBot)}</ManifestValue>
                      {
                        '\n    always_online: true\noauth_config:\n  scopes:\n    bot:\n      - channels:read\n      - channels:history\n      - channels:join\n      - groups:read\n      - groups:history\n      - chat:write\n      - users:read\n      - users:read.email\nsettings:\n  org_deploy_enabled: false\n  socket_mode_enabled: false'
                      }
                    </CodePre>
                  </CodeBox>

                  <NamesToggle type="button" onClick={() => setNamesOpen((prev) => !prev)}>
                    {namesOpen ? '▴ 이름과 설명 접기' : '▾ 슬랙에서 보일 이름과 설명 바꾸기'}
                  </NamesToggle>

                  {namesOpen && (
                    <NamesPanel>
                      <Field>
                        <FieldLabel>앱 이름</FieldLabel>
                        <FieldHint>슬랙 설정 화면과 앱 목록에 표시되는 이름입니다.</FieldHint>
                        <TextInput
                          value={appName}
                          placeholder={DEFAULT_APP_NAME}
                          onChange={(event) => setAppName(event.target.value)}
                        />
                      </Field>
                      <Field>
                        <FieldLabel>봇 표시 이름</FieldLabel>
                        <FieldHint>채널에서 직원들에게 보이는 이름입니다.</FieldHint>
                        <TextInput
                          value={botName}
                          placeholder={DEFAULT_BOT_NAME}
                          onChange={(event) => setBotName(event.target.value)}
                        />
                      </Field>
                      <FieldFull>
                        <FieldLabel>앱 설명</FieldLabel>
                        <FieldHint>
                          직원이 슬랙에서 이 앱을 눌렀을 때 보이는 한 줄 소개입니다. 무엇을 하는
                          앱인지 알 수 있게 적어 주세요.
                        </FieldHint>
                        <TextArea
                          value={appDesc}
                          rows={2}
                          placeholder={DEFAULT_APP_DESC}
                          onChange={(event) => setAppDesc(event.target.value.slice(0, 160))}
                        />
                        <CounterRow>
                          {descOver ? (
                            <CounterHint $over>140자를 넘을 수 없습니다.</CounterHint>
                          ) : (
                            <CounterHint>비워 두면 기본 문구가 그대로 들어갑니다.</CounterHint>
                          )}
                          <CounterValue>{appDesc.length} / 140</CounterValue>
                        </CounterRow>
                      </FieldFull>
                    </NamesPanel>
                  )}

                  <Accordion $first>
                    <AccordionTrigger type="button" onClick={() => setPermOpen((prev) => !prev)}>
                      <span>이 권한들은 무엇인가요?</span>
                      <AccordionChevron>{permOpen ? '▲' : '▼'}</AccordionChevron>
                    </AccordionTrigger>
                    {permOpen && (
                      <AccordionBody>
                        <PermissionGrid>
                          <PermissionHeadCell>권한</PermissionHeadCell>
                          <PermissionHeadCell>용도</PermissionHeadCell>
                          {PERMISSION_ROWS.map((row) => (
                            <>
                              <PermissionScope key={`${row.scope}-scope`}>
                                {row.scope}
                              </PermissionScope>
                              <PermissionUsage key={`${row.scope}-usage`}>
                                {row.usage}
                              </PermissionUsage>
                            </>
                          ))}
                        </PermissionGrid>
                      </AccordionBody>
                    )}
                  </Accordion>

                  <Accordion>
                    <AccordionTrigger
                      type="button"
                      onClick={() => setExistingOpen((prev) => !prev)}
                    >
                      <span>이미 슬랙 앱이 있나요?</span>
                      <AccordionChevron>{existingOpen ? '▲' : '▼'}</AccordionChevron>
                    </AccordionTrigger>
                    {existingOpen && (
                      <AccordionBody>
                        <AccordionParagraph>
                          새로 추가해도 기존 대화는 그대로 가져옵니다. 대화 기록은 슬랙 앱이 아니라
                          워크스페이스에 저장되기 때문입니다.
                        </AccordionParagraph>
                        <AccordionParagraph>
                          그래도 기존 앱을 쓰려면 위 권한 8개를 추가하고 앱을 재설치한 뒤 토큰을
                          입력하세요. 단, 그 앱이 이미 다른 서비스로 이벤트를 보내고 있다면 함께 쓸
                          수 없습니다. 슬랙은 앱마다 이벤트 주소를 하나만 허용합니다.
                        </AccordionParagraph>
                      </AccordionBody>
                    )}
                  </Accordion>
                </>
              )}

              {current === 2 && (
                <>
                  <Badge $type="slack">◆ Slack에서 할 일</Badge>
                  <ContentHeading>워크스페이스에 설치</ContentHeading>
                  <ContentDescription>
                    방금 추가한 앱을 현재 워크스페이스에 설치하면 토큰이 나타납니다.
                  </ContentDescription>

                  <InstructionBox>
                    <InstructionRow>
                      <InstructionNumber>1</InstructionNumber>
                      <Segments>
                        <Chip>OAuth &amp; Permissions</Chip>
                        <span>메뉴로 이동</span>
                        <ArrowText>→</ArrowText>
                        <Chip>Install to Workspace</Chip>
                        <ArrowText>→</ArrowText>
                        <Chip>허용</Chip>
                      </Segments>
                    </InstructionRow>
                    <InstructionRow>
                      <InstructionNumber>2</InstructionNumber>
                      <Segments>
                        <span>화면 위쪽</span>
                        <Chip>Bot User OAuth Token</Chip>
                        <span>을 복사하세요.</span>
                      </Segments>
                    </InstructionRow>
                  </InstructionBox>

                  <WarningBox>
                    <WarningIcon>💡</WarningIcon>
                    <WarningText>
                      설치를 먼저 해야 토큰이 나타납니다. 설치 전에는 이 항목이 보이지 않습니다.
                    </WarningText>
                  </WarningBox>

                  <HintLine>
                    <MonoChip>xoxb-</MonoChip>
                    <span>로 시작하는 값입니다.</span>
                    <MonoChip>xoxp-</MonoChip>
                    <span>로 시작하는 값은 다른 토큰이니 주의하세요.</span>
                  </HintLine>
                  <ExtraParagraph>
                    설치 시 관리자 승인이 필요하다는 안내가 뜨면, 워크스페이스 관리자에게 승인을
                    요청해야 합니다.
                  </ExtraParagraph>
                </>
              )}

              {current === 3 && (
                <>
                  <Badge $type="slack">◆ Slack에서 할 일</Badge>
                  <ContentHeading>Signing Secret 복사</ContentHeading>
                  <ContentDescription>
                    SAI가 슬랙에서 온 요청인지 확인할 때 쓰는 값입니다.
                  </ContentDescription>

                  <InstructionBox>
                    <InstructionRow>
                      <InstructionNumber>1</InstructionNumber>
                      <Segments>
                        <Chip>Basic Information</Chip>
                        <span>메뉴로 이동</span>
                        <ArrowText>→</ArrowText>
                        <Chip>App Credentials</Chip>
                      </Segments>
                    </InstructionRow>
                    <InstructionRow>
                      <InstructionNumber>2</InstructionNumber>
                      <Segments>
                        <Chip>Signing Secret</Chip>
                        <span>의</span>
                        <Chip>Show</Chip>
                        <span>를 눌러 복사하세요.</span>
                      </Segments>
                    </InstructionRow>
                  </InstructionBox>

                  <WarningBox>
                    <WarningIcon>⚠</WarningIcon>
                    <WarningText>2단계와 다른 페이지입니다. 같은 화면에 없습니다.</WarningText>
                  </WarningBox>
                </>
              )}

              {current === 4 && (
                <>
                  <Badge $type="sai">● SAI에서 할 일</Badge>
                  <ContentHeading>복사한 값 붙여넣기</ContentHeading>
                  <ContentDescription>
                    2단계와 3단계에서 복사한 값을 각각 넣어 주세요.
                  </ContentDescription>

                  <FieldStack>
                    <Field style={{ flexBasis: 'auto' }}>
                      <FieldLabel>Bot User OAuth Token</FieldLabel>
                      <FieldHint>2단계에서 복사한 값입니다.</FieldHint>
                      <TextInput
                        $bad={tokenBad}
                        placeholder="xoxb-..."
                        spellCheck={false}
                        value={token}
                        onChange={(event) => setToken(event.target.value)}
                      />
                      {tokenBad && (
                        <FieldErrorText>
                          Bot Token이 아닙니다. xoxb- 로 시작하는 값인지 확인해 주세요.
                        </FieldErrorText>
                      )}
                    </Field>

                    <Field style={{ flexBasis: 'auto' }}>
                      <FieldLabel>Signing Secret</FieldLabel>
                      <FieldHint>3단계에서 복사한 값입니다.</FieldHint>
                      <PasswordFieldWrap>
                        <PasswordInput
                          type={secretVisible ? 'text' : 'password'}
                          spellCheck={false}
                          value={secret}
                          onChange={(event) => setSecret(event.target.value)}
                        />
                        <EyeToggle
                          type="button"
                          onClick={() => setSecretVisible((prev) => !prev)}
                          aria-label={secretVisible ? '값 숨기기' : '값 보기'}
                        >
                          {secretVisible ? '🙈' : '👁'}
                        </EyeToggle>
                      </PasswordFieldWrap>
                    </Field>

                    {conn === 'loading' && (
                      <StatusRow>
                        <Spinner />
                        <StatusTitle>슬랙을 확인하는 중…</StatusTitle>
                        <StatusHint>몇 초 걸립니다</StatusHint>
                      </StatusRow>
                    )}

                    {conn === 'success' && (
                      <SuccessRow>
                        <SuccessIcon>✓</SuccessIcon>
                        <SuccessText>
                          <strong>워크스페이스</strong>에 연결되었습니다
                        </SuccessText>
                      </SuccessRow>
                    )}

                    {conn === 'error' && (
                      <ErrorRow>
                        <ErrorIcon>!</ErrorIcon>
                        <ErrorTextGroup>
                          <ErrorTitle>{errorMsg || DEFAULT_ERROR_MESSAGE}</ErrorTitle>
                          <ErrorHint>
                            입력한 값이 일치하지 않았습니다. 고친 뒤 다시 시도하세요.
                          </ErrorHint>
                        </ErrorTextGroup>
                      </ErrorRow>
                    )}
                  </FieldStack>
                </>
              )}

              {current === 5 && (
                <>
                  <Badge $type="slack">◆ Slack에서 할 일</Badge>
                  <ContentHeading>실시간 수신 설정</ContentHeading>
                  <ContentDescription>
                    앞으로 새로 올라오는 메시지를 SAI가 바로 받도록 주소를 등록합니다.
                  </ContentDescription>

                  <InstructionBox>
                    <InstructionRow>
                      <InstructionNumber>1</InstructionNumber>
                      <Segments>
                        <Chip>Event Subscriptions</Chip>
                        <span>메뉴로 이동</span>
                        <ArrowText>→</ArrowText>
                        <Chip>Enable Events</Chip>
                        <span>를 켜세요.</span>
                      </Segments>
                    </InstructionRow>
                    <InstructionRow>
                      <InstructionNumber>2</InstructionNumber>
                      <Segments>
                        <Chip>Request URL</Chip>
                        <span>에 아래 주소를 붙여넣으세요.</span>
                      </Segments>
                    </InstructionRow>
                  </InstructionBox>

                  <CodeBox>
                    <CodeBoxHeader>
                      <CodeBoxLabel>REQUEST URL</CodeBoxLabel>
                      <CodeBoxActions>
                        {copied === 'url' && <CopiedLabel>복사했습니다</CopiedLabel>}
                        <CodeCopyButton
                          type="button"
                          onClick={() => handleCopy('url', REQUEST_URL)}
                        >
                          복사
                        </CodeCopyButton>
                      </CodeBoxActions>
                    </CodeBoxHeader>
                    <CodePre style={{ padding: '15px 18px', fontSize: 13, lineHeight: 1.5 }}>
                      {REQUEST_URL}
                    </CodePre>
                  </CodeBox>

                  <InfoBox>
                    <InfoLine>
                      <span>오른쪽에</span>
                      <VerifiedChip>Verified ✓</VerifiedChip>
                      <span>가 뜨면 성공입니다.</span>
                    </InfoLine>
                    <InfoLine>
                      <span>아래</span>
                      <Chip>Subscribe to bot events</Chip>
                      <span>에서</span>
                      <Chip>message.channels</Chip>
                      <span>와</span>
                      <Chip>message.groups</Chip>
                      <span>를 추가하고</span>
                      <Chip>Save Changes</Chip>
                      <span>를 누르세요.</span>
                    </InfoLine>
                  </InfoBox>
                </>
              )}
            </Content>
          </Body>
        ) : (
          <ChannelsWrap>
            <Badge $type="sai">● SAI에서 할 일</Badge>
            <ContentHeading style={{ margin: '14px 0 0' }}>수집 채널 선택</ContentHeading>
            <ContentDescription style={{ margin: '8px 0 0' }}>
              채널마다 최근 대화를 가져옵니다. 슬랙 무료 플랜은 90일 이전 기록을 제공하지 않습니다.
            </ContentDescription>
            <ChannelList>
              {channels.map((channel, index) => (
                <ChannelRow
                  key={channel.name}
                  type="button"
                  $on={channel.on}
                  onClick={() => toggleChannel(index)}
                >
                  <ChannelCheck $on={channel.on}>{channel.on ? '✓' : ''}</ChannelCheck>
                  <ChannelTextGroup>
                    <ChannelNameRow>
                      <ChannelGlyph>{channel.private ? '🔒' : '#'}</ChannelGlyph>
                      {channel.name}
                    </ChannelNameRow>
                    {channel.private && (
                      <ChannelPrivateHint>
                        <span>슬랙에서</span>
                        <MonoChip>/invite @{resolvedBot}</MonoChip>
                        <span>을 입력해 초대해 주세요.</span>
                      </ChannelPrivateHint>
                    )}
                  </ChannelTextGroup>
                  <ChannelMembers>{channel.members}</ChannelMembers>
                </ChannelRow>
              ))}
            </ChannelList>
          </ChannelsWrap>
        )}

        <Footer>
          <FooterNote>{footerNote}</FooterNote>
          <FooterButtons>
            {canGoBack && (
              <GhostButton type="button" onClick={() => setCurrent((prev) => prev - 1)}>
                이전
              </GhostButton>
            )}
            {showSkip && (
              <GhostButton type="button" onClick={() => setScreen('channels')}>
                나중에 하기
              </GhostButton>
            )}
            {primaryEnabled ? (
              <PrimaryButton type="button" onClick={primaryAction}>
                {primaryLabel}
              </PrimaryButton>
            ) : (
              <PrimaryButtonDisabled type="button" disabled>
                {conn === 'loading' && (
                  <Spinner
                    style={{
                      width: 14,
                      height: 14,
                      borderColor: '#CBD2DD',
                      borderTopColor: '#7A818D',
                    }}
                  />
                )}
                {primaryLabel}
              </PrimaryButtonDisabled>
            )}
          </FooterButtons>
        </Footer>
      </Card>
    </Overlay>
  );
}

export default SlackConnectModal;
