import styled from 'styled-components';

import * as companiesApi from '../../../../apis/companies';
import { RESOLUTION_TYPE } from '../../../../apis/constants';
import { ErrorState, LoadingState } from '../../../common/AsyncStates';
import { useAsync } from '../../../../hooks/useAsync';
import StatCardsRow from './StatCardsRow';
import AiAnsweredList from './AiAnsweredList';
import PendingApprovalPanel from './PendingApprovalPanel';

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
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`;

function DashboardHomeTab({ companyId, ownerName = '김대표', onNavigateToQuestions }) {
  const dashboard = useAsync(() => companiesApi.fetchOwnerDashboard(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  if (dashboard.loading && !dashboard.data) {
    return (
      <TabContent>
        <LoadingState label="대시보드를 불러오는 중…" />
      </TabContent>
    );
  }

  if (dashboard.error && !dashboard.data) {
    return (
      <TabContent>
        <ErrorState error={dashboard.error} onRetry={dashboard.reload} />
      </TabContent>
    );
  }

  const data = dashboard.data;
  const weekly = data.weeklyQuestions;

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>안녕하세요, {ownerName || '대표'}님</Heading>
        <Subheading>
          이번 주 질문 {weekly.totalCount}건 중{' '}
          <SubheadingStrong>{weekly.saiAnsweredCount}건은 SAi가 답했습니다</SubheadingStrong>
        </Subheading>
      </HeaderTextGroup>

      <StatCardsRow
        resolution={data.resolution}
        answerReuse={data.answerReuse}
        ownerTimeSaved={data.ownerTimeSaved}
        handbook={data.handbook}
      />

      <SplitRow>
        <AiAnsweredList recentAnswers={data.recentAnswers} ownerType={RESOLUTION_TYPE.OWNER} />
        <PendingApprovalPanel
          waitingQuestions={data.waitingQuestions}
          onViewAll={onNavigateToQuestions}
        />
      </SplitRow>
    </TabContent>
  );
}

export default DashboardHomeTab;
