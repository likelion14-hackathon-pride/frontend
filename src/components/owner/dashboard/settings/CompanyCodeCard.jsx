import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const Title = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #17171b;
`;

const Hint = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 11.5px;
  color: #a0a0a8;
`;

const CodeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 14px;
  background: #f7f8fc;
  border: 1px solid #f0f0f2;
`;

const CodeValue = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #17171b;
`;

const CopyButton = styled.button`
  height: 34px;
  padding: 0 16px;
  border: none;
  border-radius: 999px;
  background: ${({ $copied }) => ($copied ? 'rgba(31, 122, 69, 0.14)' : '#17171b')};
  color: ${({ $copied }) => ($copied ? '#1f7a45' : '#ffffff')};
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
`;

const COPIED_RESET_MS = 2000;

function CompanyCodeCard({ companyCode, onCopyCode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyCode();
    setCopied(true);
    setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  return (
    <Card>
      <Title>회사 코드</Title>
      <Hint>팀원이 회원가입 시 이 코드를 입력하면 자동으로 회사에 합류합니다</Hint>
      <CodeRow>
        <CodeValue>{companyCode}</CodeValue>
        <CopyButton type="button" $copied={copied} onClick={handleCopy}>
          {copied ? '복사됨 ✓' : '코드 복사'}
        </CopyButton>
      </CodeRow>
    </Card>
  );
}

export default CompanyCodeCard;
