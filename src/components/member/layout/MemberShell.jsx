import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MemberTopBar from './MemberTopBar';
import TimingModal from './TimingModal';
import MemberNav from '../nav/MemberNav';
import MemberHomeSummary from '../home/MemberHomeSummary';
import logoMascot from '../../../assets/logo-mascot.png';
import logoWordmark from '../../../assets/logo-wordmark.png';
import { useMemberNavigation } from '../../../context/member/MemberContext';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 1024;
const SIDE_PADDING = 34; // Page 좌우 padding과 반드시 같은 값
const TOP_BOTTOM_PADDING = 24; // Page 상하 padding과 반드시 같은 값

function computeScale() {
  const availableWidth = window.innerWidth - SIDE_PADDING * 2;
  const availableHeight = window.innerHeight - TOP_BOTTOM_PADDING * 2;
  const widthScale = availableWidth / DESIGN_WIDTH;
  const heightScale = availableHeight / DESIGN_HEIGHT;
  return Math.min(1, widthScale, heightScale);
}

const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(
      77.78% 62.5% at 88% 4%,
      rgba(255, 96, 0, 0.42) 0%,
      rgba(255, 138, 61, 0.2) 46%,
      rgba(255, 138, 61, 0) 74%
    ),
    radial-gradient(
      68.89% 52.78% at 4% 96%,
      rgba(255, 138, 61, 0.34) 0%,
      rgba(255, 138, 61, 0) 70%
    ),
    linear-gradient(127deg, #ffe7d4 0%, #fff2e8 46%, #ffdcc2 100%);
`;

const Page = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: ${TOP_BOTTOM_PADDING}px ${SIDE_PADDING}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Shell을 scale()로 줄이면 실제 차지하는 자리(footprint)는 원래 크기 그대로라서,
// 줄어든 실제 크기만큼만 공간을 차지하도록 감싸는 바깥 박스
const StageOuter = styled.div`
  position: relative;
  flex: none;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

const Shell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: ${DESIGN_WIDTH}px;
  height: ${DESIGN_HEIGHT}px;
  transform: scale(${(props) => props.$scale});
  transform-origin: top left;
  overflow: hidden;
  border-radius: 24px;
  background:
    radial-gradient(900px 520px at 78% -8%, rgba(239, 147, 91, 0.1) 0%, rgba(239, 147, 91, 0) 62%),
    radial-gradient(
      700px 480px at 6% 108%,
      rgba(235, 112, 37, 0.14) 0%,
      rgba(239, 147, 91, 0.06) 46%,
      rgba(239, 147, 91, 0) 72%
    ),
    #f7f7f8;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.06),
    0 30px 80px -34px rgba(0, 0, 0, 0.3);
`;

const Sidebar = styled.aside`
  flex: none;
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 16px;
  border-right: 1px solid #efeff1;
  background: #fff;
  background-image: linear-gradient(180deg, rgba(255, 96, 0, 0.06) 0%, rgba(255, 255, 255, 0) 34%);
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
  background: linear-gradient(
    180deg,
    rgba(255, 96, 0, 0.05) 0%,
    rgba(255, 138, 61, 0.02) 26%,
    rgba(255, 255, 255, 0) 60%
  );
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
  const [scale, setScale] = useState(computeScale);
  const { profile, goToTasks } = useMemberNavigation();

  useEffect(() => {
    function updateScale() {
      setScale(computeScale());
    }
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const scaledWidth = DESIGN_WIDTH * scale;
  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <Page>
      <PageBackground />

      <StageOuter $width={scaledWidth} $height={scaledHeight}>
        <Shell $scale={scale}>
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
        </Shell>
      </StageOuter>

      {isTzOpen && (
        <TimingModal
          scale={scale}
          onClose={() => setIsTzOpen(false)}
          onGoTaskCard={() => {
            setIsTzOpen(false);
            goToTasks();
          }}
        />
      )}
    </Page>
  );
}
