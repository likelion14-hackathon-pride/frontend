import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 320px;
  min-width: 0;
  min-height: 320px;
  height: 100%;
  flex-direction: column;
  gap: 18px;
  padding: 24px 22.667px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const SectionTitle = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%;
  letter-spacing: -0.4px;
`;

const WorkHoursRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 0;
`;

const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const RangeText = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
`;

const HintText = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
`;

const Toggle = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  width: 42px;
  height: 24px;
  padding: 3px;
  align-items: center;
  justify-content: ${({ $on }) => ($on ? 'flex-end' : 'flex-start')};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: ${({ $on }) => ($on ? '#2563EB' : '#E6E6EB')};
  transition: background 0.15s ease;
`;

const ToggleKnob = styled.span`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(17, 17, 20, 0.22);
`;

const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background: #efeff1;
`;

const CodeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CodeBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 0;
  height: 52.667px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  border: 0.667px solid #e6e6eb;
  background: #f4f4f6;
`;

const CodeValue = styled.span`
  color: #17171b;
  font-family: Roboto, 'Plus Jakarta Sans', sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 144%;
  letter-spacing: 3px;
`;

const CopyButton = styled.button`
  display: flex;
  flex-shrink: 0;
  height: 52.667px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  border: ${({ $copied }) => ($copied ? '0.5px solid #1F7A45' : '0.667px solid transparent')};
  background: ${({ $copied }) => ($copied ? 'rgba(31, 122, 69, 0.50)' : '#2563EB')};
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  white-space: nowrap;
`;

const COPIED_RESET_MS = 2000;

function WorkHoursCompanyCodeCard({
  workHoursEnabled,
  onToggleWorkHours,
  hours,
  companyCode,
  onCopyCode,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyCode();
    setCopied(true);
    setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  return (
    <Card>
      <SectionTitle>근무 시간</SectionTitle>
      <WorkHoursRow>
        <TextStack>
          <RangeText>
            근무 시간 {hours.start}–{hours.end} ({hours.timezone})
          </RangeText>
          <HintText>이 시간 밖 질문에는 대기 안내가 표시됩니다</HintText>
        </TextStack>
        <Toggle
          type="button"
          $on={workHoursEnabled}
          onClick={onToggleWorkHours}
          aria-pressed={workHoursEnabled}
          aria-label="근무 시간 적용 토글"
        >
          <ToggleKnob />
        </Toggle>
      </WorkHoursRow>

      <DividerLine />

      <SectionTitle>회사 코드</SectionTitle>
      <CodeRow>
        <CodeBlock>
          <CodeValue>{companyCode}</CodeValue>
        </CodeBlock>
        <CopyButton type="button" $copied={copied} onClick={handleCopy}>
          {copied ? '복사됨 ✓' : '코드 복사'}
        </CopyButton>
      </CodeRow>
    </Card>
  );
}

export default WorkHoursCompanyCodeCard;
