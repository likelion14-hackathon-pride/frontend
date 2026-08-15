import styled from 'styled-components';
import NavTabs from './NavTabs';
import symbol from '../../../../assets/owner/symbol.svg';
import wordmark from '../../../../assets/owner/wordmark.svg';
import bellIcon from '../../../../assets/owner/bell.svg';

const PRESENCE = [
  { key: 'owner', name: '김대표', status: '오프라인', online: false, city: 'Seoul', time: '21:40' },
  { key: 'minh', name: 'Minh', status: '온라인', online: true, city: 'Hanoi', time: '19:40' },
];

const Bar = styled.header`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 59px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

const LogoContainer = styled.div`
  display: inline-flex;
  padding: 1.5px 24.188px 1.5px 0;
  align-items: center;
  flex-shrink: 0;
`;

const LogoLockup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Symbol = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: url(${symbol}) 50% / contain no-repeat;
`;

const Wordmark = styled.div`
  width: 67px;
  height: 28.86px;
  flex-shrink: 0;
  background: url(${wordmark}) 50% / contain no-repeat;
`;

const RightGroup = styled.div`
  display: flex;
  width: 313.24px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const TimezonePanel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 225.24px;
  height: 54.333px;
  flex-shrink: 0;
  padding: 9.667px 16.667px;
  align-items: center;
  border-radius: 16px;
  border: 0.667px solid #eaeaee;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const PresenceList = styled.div`
  display: flex;
  width: 191.906px;
  flex-direction: column;
  justify-content: space-between;
  gap: 3px;
`;

const PresenceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const NameGroup = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
`;

const Dot = styled.span`
  display: inline-block;
  align-self: center;
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50px;
  background: ${({ $online }) => ($online ? '#1F7A45' : '#D8D8DE')};
`;

const PersonName = styled.span`
  display: inline-block;
  min-width: 44px;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.2px;
`;

const PersonStatus = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`;

const TimeText = styled.span`
  flex-shrink: 0;
  color: #3c3c44;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
`;

const BellButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 10.5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  border: 0.667px solid #eaeaee;
  background: #fff;
  cursor: pointer;
`;

const BellIcon = styled.img`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`;

const Avatar = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 10.667px 12px 10.333px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
`;

function DashboardHeader({ activeTab, onTabChange, userInitial = '김' }) {
  return (
    <Bar>
      <LogoContainer>
        <LogoLockup>
          <Symbol />
          <Wordmark />
        </LogoLockup>
      </LogoContainer>

      <NavTabs activeTab={activeTab} onChange={onTabChange} />

      <RightGroup>
        <TimezonePanel>
          <PresenceList>
            {PRESENCE.map((person) => (
              <PresenceRow key={person.key}>
                <NameGroup>
                  <Dot $online={person.online} />
                  <PersonName>{person.name}</PersonName>
                  <PersonStatus>{person.status}</PersonStatus>
                </NameGroup>
                <TimeText>
                  {person.city} {person.time}
                </TimeText>
              </PresenceRow>
            ))}
          </PresenceList>
        </TimezonePanel>

        <BellButton type="button" aria-label="알림">
          <BellIcon src={bellIcon} alt="" />
        </BellButton>

        <Avatar>{userInitial}</Avatar>
      </RightGroup>
    </Bar>
  );
}

export default DashboardHeader;
