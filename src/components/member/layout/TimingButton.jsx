import styled from 'styled-components';

import { WORK_STATE, WORK_STATE_LABEL, lookup } from '../../../apis/constants';
import { useZoneTime } from '../../../hooks/member/useZoneTime.js';
import { formatDateTime } from '../../../utils/time';
import { useMemberNavigation } from '../../../context/member/MemberContext';

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: #ffffffd9;
  border-radius: 16px;
  box-shadow: 0px 10px 22px 0px #0000001a;
`;

const Button = styled.button`
  display: flex;
  align-items: stretch;
  gap: 14px;
  padding: 9px 15px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #eaeaee;
  box-shadow:
    0 1px 2px rgba(17, 17, 20, 0.04),
    0 6px 18px rgba(17, 17, 20, 0.06);
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: #ffc49b;
    box-shadow: 0 8px 22px rgba(17, 17, 20, 0.1);
  }
`;

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: 6px auto auto auto;
  align-items: center;
  gap: 5px 8px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

const Name = styled.span`
  white-space: nowrap;
  font-size: 13px;
  font-weight: 700;
  color: #17171b;
  line-height: 149%;
`;

const StatusText = styled.span`
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 600;
  color: #8a8a93;
  line-height: 123%;
`;

const TimeText = styled.span`
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 600;
  color: #8a8a93;
  font-family: 'IBM Plex Mono', monospace;
`;

const Divider = styled.div`
  width: 1px;
  background: #e4e4e9;
`;

const ReplyBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  line-height: 1.3;
`;

const ReplyLabel = styled.span`
  white-space: nowrap;
  font-size: 11.5px;
  color: #a0a0a8;
`;

const ReplyTime = styled.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 800;
  color: #17171b;
`;

// state 는 근무시간 기준이지 접속 여부가 아니다(cards/views.py TimingView 설명).
const STATE_DOT = {
  [WORK_STATE.WORKING]: '#3BA55C',
  [WORK_STATE.OFF_HOURS]: '#D1C9C9',
  [WORK_STATE.UNKNOWN]: '#D1C9C9',
  DEFAULT: '#D1C9C9',
};

function cityOf(timezone) {
  if (!timezone) return '';
  return timezone.split('/').pop().replace(/_/g, ' ');
}

function PersonRow({ person, fallbackName }) {
  const time = useZoneTime(person?.timezone);
  return (
    <>
      <Dot $color={lookup(STATE_DOT, person?.state)} />
      <Name>{person?.name || fallbackName}</Name>
      <StatusText>{lookup(WORK_STATE_LABEL, person?.state)}</StatusText>
      <TimeText>
        {cityOf(person?.timezone)} {time}
      </TimeText>
    </>
  );
}

export default function TimingButton({ onClick }) {
  const { timing, timingLoading, timingError, profile } = useMemberNavigation();

  const you = timing?.you ?? { name: profile.name, timezone: profile.timezone, state: null };
  const owner = timing?.owner ?? null;

  const replyText = (() => {
    if (timingError) return '확인 불가';
    if (!timing) return timingLoading ? '…' : '—';
    return formatDateTime(timing.replyExpected?.at, {
      fallback: '—',
      timeZone: profile.timezone,
    });
  })();

  return (
    <Wrapper>
      <Button onClick={onClick} title="Timing">
        <StatusGrid>
          <PersonRow person={owner} fallbackName="대표" />
          <PersonRow person={you} fallbackName={profile.name || 'You'} />
        </StatusGrid>

        <Divider />

        <ReplyBlock>
          <ReplyLabel>Reply expected</ReplyLabel>
          <ReplyTime>{replyText}</ReplyTime>
        </ReplyBlock>
      </Button>
    </Wrapper>
  );
}
