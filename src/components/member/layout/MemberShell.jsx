import { useState } from 'react';
import styled from 'styled-components';
import MemberTopBar from './MemberTopBar';
import TimingModal from './TimingModal';
import MemberNav from '../nav/MemberNav';
import MemberHomeSummary from '../home/MemberHomeSummary';
import logoMascot from '../../../assets/logo-mascot.png';
import logoWordmark from '../../../assets/logo-wordmark.png';
import { useMemberNavigation } from '../../../context/member/MemberContext';

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 34px;
  justify-content: center;
  align-items: center;
  background:
  radial-gradient(900px 700px at 88% 4%, rgba(239,147,91,.32) 0%, rgba(239,147,91,0) 62%),
  radial-gradient(760px 620px at 4% 96%, rgba(235,112,37,.40) 0%, rgba(239,147,91,.20) 45%, rgba(239,147,91,0) 72%),
  linear-gradient(140deg, #FBE8DC 0%, #FEF4EE 46%, #FAE2D3 100%);
`;

const Shell = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  align-self: stretch;
  max-height: 1024px;
  overflow: hidden;
  border-radius: 24px;
  background:
  radial-gradient(900px 520px at 78% -8%, rgba(239,147,91,.10) 0%, rgba(239,147,91,0) 62%),
  radial-gradient(700px 480px at 6% 108%, rgba(235,112,37,.14) 0%, rgba(239,147,91,.06) 46%, rgba(239,147,91,0) 72%),
  #F7F7F8;
  box-shadow: 0 2px 6px rgba(0,0,0,.06), 0 30px 80px -34px rgba(0,0,0,.30);
`;

const Sidebar = styled.aside` 
  flex: none;
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 16px;
  border-right: 1px solid #EFEFF1;
  background: #fff;
  background-image: linear-gradient(180deg, rgba(255,96,0,.06) 0%, rgba(255,255,255,0) 34%);
`;

const Logo = styled.div`
  width: 232px;
  height: 141px;
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
`;

const MascotImg = styled.img`
  width: 51px;
  height: 51px;
  object-fit: contain;
  flex: none;
`;

const WordmarkImg = styled.img`
  width: 60px;
  height: 26px;
  object-fit: contain;
`;

const Nav = styled.nav`  
  flex: 1;
`;

const UserCard = styled.div` 
  margin-top: auto;
`;

const Main = styled.main`  
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(255, 96, 0, 0.05) 0%, rgba(255, 138, 61, 0.02) 26%, rgba(255, 255, 255, 0) 60%);
`;

const Content = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 18px 32px 60px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default function MemberShell({ screenTitle, children }) {
  const [isTzOpen, setIsTzOpen] = useState(false);
  const { profile } = useMemberNavigation();

  return (
    <Page>
      <Shell>
        <Sidebar>
          <Logo>
            <MascotImg src={logoMascot} alt="SAI" />
            <WordmarkImg src={logoWordmark} alt="SAI" />
          </Logo>
          <Nav>
            <MemberNav />
          </Nav>
          <UserCard>
            <MemberHomeSummary
              slackMessages={37}
              turnedIntoTasks={4}
              waitingAnswer={1}
              user={profile}
            />
          </UserCard>
        </Sidebar>
  
        <Main>
          <MemberTopBar screenTitle={screenTitle} onOpenTiming={() => setIsTzOpen(true)} />
          <Content>{children}</Content>
        </Main>
  
        {isTzOpen && <TimingModal onClose={() => setIsTzOpen(false)} />}
      </Shell>
    </Page>
  );
}