import styled from 'styled-components';
import StatCardsRow from './StatCardsRow';
import AiAnsweredList from './AiAnsweredList';
import PendingApprovalPanel from './PendingApprovalPanel';
import { STAT_SUMMARY } from './homeData';

const TabContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const HeaderTextGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1.3px;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

const SubheadingStrong = styled.strong`
  color: #17171b;
  font-weight: 700;
`;

const SplitRow = styled.div`
  display: flex;
  width: 100%;
  height: 290.917px;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`;

function DashboardHomeTab({ ownerName = '김대표' }) {
  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>안녕하세요, {ownerName}님</Heading>
        <Subheading>
          이번 주 질문 {STAT_SUMMARY.totalQuestions}건 중{' '}
          <SubheadingStrong>
            {STAT_SUMMARY.aiAnsweredCount}건은 SAI가 답했습니다
          </SubheadingStrong>
        </Subheading>
      </HeaderTextGroup>

      <StatCardsRow />

      <SplitRow>
        <AiAnsweredList />
        <PendingApprovalPanel />
      </SplitRow>
    </TabContent>
  );
}

export default DashboardHomeTab;
