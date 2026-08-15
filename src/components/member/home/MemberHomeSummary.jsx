import styled from 'styled-components';


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
  color: #E35B00;
  letter-spacing: 1.035px;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

const HighlightValue = styled.strong`
  color: #E35B00;
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border-radius: 12px;
  background: #F7F7F8;
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  flex: none;
  border-radius: 50%;
  background: #E4E4E8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.5px;
  font-weight: 700;
  color: #6B6B73;
`;

const UserText = styled.div`
  flex: 1;
  min-width: 0;
  line-height: 1.3;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #17171B;
`;

const UserMeta = styled.div`
  font-size: 11.5px;
  color: #A0A0A8;
`;

export default function MemberHomeSummary({ slackMessages, turnedIntoTasks, waitingAnswer, user }) {
  const initial = user?.name?.[0]?.toUpperCase() ?? '?';

  return (
    <Wrap>
      <SummaryCard>
        <SummaryTitle>SAI READ FOR YOU TODAY</SummaryTitle>
        <Row>
          <span>Slack messages</span>
          <strong>{slackMessages}</strong>
        </Row>
        <Row>
          <span>Turned into tasks</span>
          <strong>{turnedIntoTasks}</strong>
        </Row>
        <Row>
          <span>Waiting the answered</span>
          <HighlightValue>{waitingAnswer}</HighlightValue>
        </Row>
      </SummaryCard>

      <UserRow>
        <Avatar>{initial}</Avatar>
        <UserText>
          <UserName>{user?.name}</UserName>
          <UserMeta>{user?.role} · {user?.timezone}</UserMeta>
        </UserText>
      </UserRow>
    </Wrap>
  );
}