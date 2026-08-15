import styled from 'styled-components';
import NavTabs from './NavTabs';
import symbol from '../../../../assets/owner/symbol.svg';
import wordmark from '../../../../assets/owner/wordmark.svg';

const Bar = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
  align-self: stretch;
  padding-bottom: 18px;
  border-bottom: 1px solid #f0f0f2;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoSymbol = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: url(${symbol}) 50% / contain no-repeat;
`;

const LogoWordmark = styled.div`
  width: 50px;
  height: 21.5px;
  flex-shrink: 0;
  aspect-ratio: 65 / 28;
  background: url(${wordmark}) 50% / contain no-repeat;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  justify-self: end;
`;

const ClockGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
`;

const OwnerName = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: #17171b;
`;

const ClockRow = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-weight: 500;
  color: #a0a0a8;

  strong {
    color: #6b6b73;
    font-weight: 700;
  }
`;

const IconButton = styled.button`
  display: flex;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid #efeff1;
  background: #fff;
  cursor: pointer;
  color: #6b6b73;
  font-size: 14px;

  &:hover {
    background: #f7f8fc;
  }
`;

const Avatar = styled.div`
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: #111827;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
`;

function DashboardHeader({ activeTab, onTabChange, ownerName = '김대표', userInitial = '김' }) {
  return (
    <Bar>
      <Logo>
        <LogoSymbol />
        <LogoWordmark />
      </Logo>

      <NavWrapper>
        <NavTabs activeTab={activeTab} onChange={onTabChange} />
      </NavWrapper>

      <RightGroup>
        <ClockGroup>
          <OwnerName>{ownerName}</OwnerName>
          <ClockRow>
            <strong>Seoul</strong> 21:40 · Mon
          </ClockRow>
          <ClockRow>
            <strong>Home</strong> 19:40 · Sun
          </ClockRow>
        </ClockGroup>
        <IconButton type="button" aria-label="설정">
          ⚙
        </IconButton>
        <Avatar>{userInitial}</Avatar>
      </RightGroup>
    </Bar>
  );
}

export default DashboardHeader;
