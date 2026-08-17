import styled from 'styled-components';
import { useState } from 'react';

import ProfileSettingModal from './ProfileSettingModal';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import { zoneOffsetLabel } from '../../../utils/time';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  padding: 14px 15px;
  border-radius: 14px;
  border: 1px solid rgba(255, 96, 0, 0.14);
  background: linear-gradient(135deg, rgba(255, 96, 0, 0.08), rgba(255, 138, 61, 0.03));
`;

const SummaryTitle = styled.div`
  font-size: 11.5px;
  font-weight: 700;
  color: #e35b00;
  letter-spacing: 1.035px;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  font-size: 14px;
  color: #6b6b73;
  font-weight: 600;
`;

const HighlightValue = styled.strong`
  color: #e35b00;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border-radius: 12px;
  background: #f7f7f8;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  flex: none;
  border-radius: 50%;
  background: #e4e4e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.5px;
  font-weight: 700;
  color: #6b6b73;
`;

const UserText = styled.div`
  flex: 1;
  min-width: 0;
  line-height: 1.3;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #17171b;
`;

const UserMeta = styled.div`
  font-size: 11.5px;
  color: #a0a0a8;
`;

// 값이 아직 안 왔을 때는 0 이 아니라 자리표시자를 보여 준다.
// 0 을 먼저 그리면 "오늘 아무것도 없다"는 사실과 "아직 못 받았다"가 구분되지 않는다.
const show = (value) => (value == null ? '–' : value);

export default function MemberHomeSummary({ slackMessages, turnedIntoTasks, waitingAnswer, user }) {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const initial = user?.name?.[0]?.toUpperCase() ?? '?';
  const { profile } = useMemberNavigation();
  const zoneLabel = zoneOffsetLabel(user?.timezone ?? profile.timezone);

  return (
    <Wrap>
      <SummaryCard>
        <SummaryTitle>SAI READ FOR YOU TODAY</SummaryTitle>
        <Row>
          <span>Slack messages</span>
          <strong>{show(slackMessages)}</strong>
        </Row>
        <Row>
          <span>Turned into tasks</span>
          <strong>{show(turnedIntoTasks)}</strong>
        </Row>
        <Row>
          <span>Waiting the answered</span>
          <HighlightValue>{show(waitingAnswer)}</HighlightValue>
        </Row>
      </SummaryCard>

      <UserRow as="button" onClick={() => setIsSettingOpen(true)}>
        <Avatar>{initial}</Avatar>
        <UserText>
          <UserName>{user?.name || '이름 없음'}</UserName>
          <UserMeta>
            {user?.locationLabel ?? '—'}
            {zoneLabel ? ` (${zoneLabel})` : ''}
          </UserMeta>
        </UserText>
      </UserRow>

      {isSettingOpen && <ProfileSettingModal onClose={() => setIsSettingOpen(false)} />}
    </Wrap>
  );
}
