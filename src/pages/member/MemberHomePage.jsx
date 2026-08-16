import styled from 'styled-components';
import MemberShell from '../../components/member/layout/MemberShell';
import AskCard from '../../components/member/home/AskCard';
import UnreadInstructionCard from '../../components/member/home/UnreadInstructionCard';
import TodoBoard from '../../components/member/home/TodoBoard';
import SaiResolutionCard from '../../components/member/home/SaiResolution';
import HandbookGrowthCard from '../../components/member/home/HandbookGrowth';
import HandbookSummary from '../../components/member/home/HandbookSummary';
import logoMascot from '../../assets/logo-mascot.png';
import { useMemberNavigation } from '../../context/member/MemberContext';

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

export default function MemberHomePage() {
  const { profile } = useMemberNavigation();

  return (
    <MemberShell screenTitle="Home">
      <PageContent>
        <Greeting>
          <GreetingText>Good Morning, {profile.name}</GreetingText>
          <GreetingIcon src={logoMascot} alt="" />
        </Greeting>

        <TopRow>
          <AskCard />
          <UnreadInstructionCard
            count={1}
            from="김대표"
            time="09:47"
            message="결제 쪽 이거 좀 봐주세요"
            onClick={() => {
              /* TODO: 메시지 상세로 이동 */
            }}
          />
        </TopRow>

        <MainGrid>
          <TodoBoard
            initialTasks={[
              { id: 1, title: 'Investigate payment failure root cause' },
              { id: 2, title: 'Investigate payment failure root cause' },
              { id: 3, title: 'Investigate payment failure root cause' },
              { id: 4, title: 'Investigate payment failure root cause' },
            ]}
          />

          <RightColumn>
            <CardRow>
              <SaiResolutionCard percent={85} resolved={17} total={20} dateRange="Aug 1 – Aug 6" />
              <HandbookGrowthCard
                count={12}
                delta="+6 this month"
                points={[6, 8, 9, 12]}
                labels={['W1', 'W2', 'W3', 'now']}
              />
            </CardRow>

            <HandbookSummary />
          </RightColumn>
        </MainGrid>
      </PageContent>
    </MemberShell>
  );
}
