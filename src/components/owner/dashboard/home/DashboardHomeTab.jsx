import styled from 'styled-components';
import StatCardsRow from './StatCardsRow';
import AiAnsweredList from './AiAnsweredList';
import PendingApprovalPanel from './PendingApprovalPanel';

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-self: stretch;
`;

const Heading = styled.h1`
  margin: 0;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -0.6px;
`;

const Subheading = styled.p`
  margin: 6px 0 0;
  font-family: Pretendard;
  font-size: 13px;
  color: #6b6b73;
`;

const SplitRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 14px;
  align-self: stretch;
`;

function DashboardHomeTab({ ownerName = '김대표' }) {
  return (
    <TabContent>
      <div>
        <Heading>안녕하세요, {ownerName}님</Heading>
        <Subheading>이번 주 질문 중 79%는 SAI가 대신 답변했습니다</Subheading>
      </div>

      <StatCardsRow />

      <SplitRow>
        <AiAnsweredList />
        <PendingApprovalPanel />
      </SplitRow>
    </TabContent>
  );
}

export default DashboardHomeTab;
