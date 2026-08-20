import { useMemo } from 'react';
import styled from 'styled-components';

import { SCOPE_KIND } from '../../apis/constants';
import MemberShell from '../../components/member/layout/MemberShell';
import AskCard from '../../components/member/home/AskCard';
import UnreadInstructionCard from '../../components/member/home/UnreadInstructionCard';
import TodoBoard from '../../components/member/home/TodoBoard';
import SaiResolutionCard from '../../components/member/home/SaiResolution';
import HandbookGrowthCard from '../../components/member/home/HandbookGrowth';
import HandbookSummary from '../../components/member/home/HandbookSummary';
import { InlineError, LoadingState } from '../../components/common/AsyncStates';
import logoMascot from '../../assets/logo-mascot.png';
import { useMemberNavigation } from '../../context/member/MemberContext';
import { formatClock, formatDateTime } from '../../utils/time';

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Greeting = styled.div`
  padding: 2px 2px 0;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const GreetingText = styled.div`
  font-size: clamp(28px, 5vw, 40px);
  font-family: Tahoma;
  font-weight: 700;
  letter-spacing: -1.3px;
  line-height: 1.1;
  color: #17171b;
`;

const GreetingIcon = styled.img`
  width: 62px;
  height: 62px;
  flex: none;
  object-fit: contain;
  transform: rotate(-8deg);
`;

const TopRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 20px;
  align-items: start;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: stretch;
`;

// 서버 시각(로컬 자정 기준)이 아니라 보는 사람의 시계로 인사한다.
function greetingFor(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export default function MemberHomePage() {
  const { profile, home, homeLoading, homeError, reloadHome, goToTasks, scopes } =
    useMemberNavigation();

  const resolution = home?.resolution;
  // 분모가 0이면 비율을 낼 수 없다. 카드가 'No data yet' 을 그리도록 null 을 넘긴다.
  const resolutionPercent =
    resolution && resolution.total > 0
      ? Math.round((resolution.answered / resolution.total) * 100)
      : null;

  const growth = home?.handbook;
  const weekly = growth?.weekly ?? [];
  const weeklyLabels = useMemo(
    () => weekly.map((_, index) => (index === weekly.length - 1 ? 'now' : `W${index + 1}`)),
    [weekly]
  );

  // 핸드북 요약 카드는 지식공간 목록을 쓴다. /home 이 주는 scopes 를 먼저 쓰고,
  // 아직 없으면 컨텍스트가 따로 받아 둔 목록을 쓴다.
  const scopeList = growth?.scopes ?? scopes;
  const companyScopeCount = scopeList
    .filter((scope) => scope.kind === SCOPE_KIND.COMPANY)
    .reduce((sum, scope) => sum + (scope.entryCount ?? 0), 0);
  const projectItems = scopeList
    .filter((scope) => scope.kind === SCOPE_KIND.PROJECT)
    .map((scope) => ({
      id: scope.id,
      label: scope.name,
      meta: scope.description || 'Project',
      count: scope.entryCount ?? 0,
      active: false,
    }));

  const unread = home?.unread;

  return (
    <MemberShell screenTitle="Home">
      <PageContent>
        <Greeting>
          <GreetingText>
            {greetingFor()}
            {profile.name ? `, ${profile.name}` : ''}
          </GreetingText>
          <GreetingIcon src={logoMascot} alt="" />
        </Greeting>

        <InlineError error={homeError} onRetry={reloadHome} />

        {homeLoading && !home ? (
          <LoadingState label="Loading home…" />
        ) : (
          <>
            <TopRow>
              <AskCard />
              {unread?.latest ? (
                <UnreadInstructionCard
                  count={unread.count}
                  from={unread.latest.requestedBy}
                  time={formatClock(unread.latest.occurredAt, { fallback: '' })}
                  message={unread.latest.text || unread.latest.purpose}
                  onClick={goToTasks}
                />
              ) : (
                <UnreadInstructionCard
                  count={unread?.count ?? 0}
                  from={null}
                  time=""
                  message="No unread instructions yet."
                  onClick={goToTasks}
                />
              )}
            </TopRow>

            <MainGrid>
              <TodoBoard />

              <RightColumn>
                <CardRow>
                  <SaiResolutionCard
                    percent={resolutionPercent}
                    resolved={resolution?.answered}
                    total={resolution?.total}
                    dateRange={
                      resolution?.since
                        ? `since ${formatDateTime(resolution.since, { fallback: '' })}`
                        : null
                    }
                  />
                  <HandbookGrowthCard
                    count={growth?.confirmed ?? 0}
                    delta={
                      growth?.addedThisMonth != null ? `+${growth.addedThisMonth} this month` : ''
                    }
                    points={weekly}
                    labels={weeklyLabels}
                  />
                </CardRow>

                <HandbookSummary
                  totalEntries={growth?.confirmed ?? 0}
                  companyRuleCount={companyScopeCount}
                  projects={projectItems}
                />
              </RightColumn>
            </MainGrid>
          </>
        )}
      </PageContent>
    </MemberShell>
  );
}
