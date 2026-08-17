import styled from 'styled-components';

import { ROLE } from '../../../../apis/constants';
import { useZoneTime } from '../../../../hooks/member/useZoneTime';
import NavTabs from './NavTabs';
import symbol from '../../../../assets/owner/symbol.svg';
import wordmark from '../../../../assets/owner/wordmark.svg';
import bellIcon from '../../../../assets/owner/bell.svg';

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
  border: none;
  cursor: pointer;
`;

function cityOf(timezone) {
  if (!timezone) return '';
  return timezone.split('/').pop().replace(/_/g, ' ');
}

// 구성원 목록에서 앞의 두 명만 보여 준다. 현재 접속 여부는 서버가 알려 주지 않으므로
// '온라인/오프라인' 대신 각자의 현재 시각과 담당 역할을 보여 준다.
function PresencePerson({ member }) {
  const timezone = member?.user?.timezone;
  const time = useZoneTime(timezone);

  return (
    <PresenceRow>
      <NameGroup>
        <Dot $online={member?.role === ROLE.OWNER} />
        <PersonName>{member?.user?.name || '이름 없음'}</PersonName>
      </NameGroup>
      <TimeText>
        {cityOf(timezone)} {time}
      </TimeText>
    </PresenceRow>
  );
}

function DashboardHeader({ activeTab, onTabChange, members = [], userName, onLogout }) {
  const userInitial = userName?.trim()?.charAt(0)?.toUpperCase() ?? '?';
  const shown = members.slice(0, 2);

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
            {shown.length === 0 ? (
              <PresenceRow>
                <NameGroup>
                  <PersonStatus>구성원 정보를 불러오는 중…</PersonStatus>
                </NameGroup>
              </PresenceRow>
            ) : (
              shown.map((member) => <PresencePerson key={member.id} member={member} />)
            )}
          </PresenceList>
        </TimezonePanel>

        <BellButton type="button" aria-label="알림">
          <BellIcon src={bellIcon} alt="" />
        </BellButton>

        <Avatar as="button" type="button" onClick={onLogout} title="로그아웃">
          {userInitial}
        </Avatar>
      </RightGroup>
    </Bar>
  );
}

export default DashboardHeader;
