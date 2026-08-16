import styled from 'styled-components';
import { useZoneTime } from '../../../hooks/member/useZoneTime.js';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(23, 23, 27, 0.42);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 900px;
  max-height: 100%;
  overflow-y: auto;
  background: #f7f7f8;
  border-radius: 22px;
  box-shadow: 0 30px 80px rgba(17, 17, 20, 0.35);
  padding: 26px 28px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin-bottom: 16px;
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #17171b;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #8a8a93;
  font-weight: 400;
  margin-top: 3px;
`;

const CloseButton = styled.button`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #eaeaee;
  font-size: 15px;
  color: #6b6b73;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: #d8d8de;
    color: #17171b;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TimeCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 1px 20px 0 rgba(0, 0, 0, 0.18),
    0 1px 0 0 rgba(255, 96, 0, 0.04);
  padding: 24px 26px;
  align-items: flex-start;
  align-self: stretch;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const TimeLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #a0a0a8;
  letter-spacing: 0.07em;
`;

const TimeValue = styled.div`
  font-size: 31.5px;
  font-weight: 800;
  letter-spacing: -0.8px;
  margin-top: 4px;
  color: ${(props) => (props.$muted ? '#8A8A93' : '#17171B')};
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 44px;
  background: #efeff1;
`;

const NoteBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f7f7f8;
  border-radius: 12px;
  padding: 14px 16px;
`;

const NoteTitle = styled.div`
  font-size: 15.5px;
  font-weight: 700;
  color: #17171b;
`;

const NoteDesc = styled.div`
  font-size: 14.5px;
  font-weight: 400;
  color: #6b6b73;
  line-height: 23.2px;
  margin-top: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
`;

const ListCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 1px 20px 0 rgba(0, 0, 0, 0.18),
    0 1px 0 0 rgba(255, 96, 0, 0.04);
  padding: 22px 24px;
`;

const ListCardTitle = styled.div`
  font-size: 15.5px;
  font-weight: 800;
`;

const ListCardSubtitle = styled.div`
  font-size: 13px;
  color: #a0a0a8;
  margin-top: 4px;
`;

const ListItem = styled.div`
  border-top: 1px solid #f2f2f4;
  padding: 14px 0;
`;

const ListItemTitle = styled.div`
  font-size: 15.5px;
  font-weight: 600;
  line-height: 24.025px;
`;

const ListItemSrc = styled.div`
  font-size: 12px;
  color: #a0a0a8;
  font-weight: 400;
  margin-top: 5px;
`;

const TaskButton = styled.button`
  width: 100%;
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 12px;
  border-radius: 11px;
  margin-top: 14px;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  box-shadow:
    0 6px 16px 0 rgba(255, 96, 0, 0.28),
    0 1px 0 0 rgba(255, 255, 255, 0.25) inset;
  cursor: pointer;
  border: none;
`;

const DEFAULT_CAN_DO = [
  {
    title: 'Pull the failure logs from Sentry and summarise the cause',
    src: 'Source · payment-api/config/sentry.yml · config file',
  },
  {
    title: 'Open the issue and draft the PR against it',
    src: 'Source · CONTRIBUTING.md, line 24 · config file',
  },
  {
    title: 'Set up locally with docker compose up',
    src: 'Source · payment-api/README.md, line 8 · config file',
  },
];

const DEFAULT_MUST_WAIT = [
  {
    title: 'Whether tests are required with the fix',
    src: 'Not established in payment-api · needs 김대표',
  },
  {
    title: 'Whether you may run the deploy yourself',
    src: 'Decision, not a lookup · needs 김대표',
  },
];

export default function TimingModal({
  onClose,
  onGoTaskCard,
  canDo = DEFAULT_CAN_DO,
  mustWait = DEFAULT_MUST_WAIT,
}) {
  const yourTime = useZoneTime('Asia/Ho_Chi_Minh');
  const ownerTime = useZoneTime('Asia/Seoul');

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderText>
            <Title>Timing</Title>
            <Subtitle>Owner hours 09:00–18:00 KST</Subtitle>
          </HeaderText>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        <Body>
          <TimeCard>
            <TimeRow>
              <div>
                <TimeLabel>YOUR TIME · HANOI</TimeLabel>
                <TimeValue>{yourTime}</TimeValue>
              </div>

              <VerticalDivider />

              <div>
                <TimeLabel>OWNER · SEOUL</TimeLabel>
                <TimeValue $muted>{ownerTime}</TimeValue>
              </div>

              <NoteBox>
                <NoteTitle>Outside the Owner's hours (09:00–18:00 KST)</NoteTitle>
                <NoteDesc>
                  If you send now, expect a reply roughly the next working morning in Seoul.
                </NoteDesc>
              </NoteBox>
            </TimeRow>
          </TimeCard>

          <Grid>
            <ListCard>
              <ListCardTitle>You can move on these now</ListCardTitle>
              <ListCardSubtitle>The handbook already answers them.</ListCardSubtitle>
              {canDo.map((item, i) => (
                <ListItem key={i}>
                  <ListItemTitle>{item.title}</ListItemTitle>
                  <ListItemSrc>{item.src}</ListItemSrc>
                </ListItem>
              ))}
            </ListCard>

            <ListCard>
              <ListCardTitle>These need a person</ListCardTitle>
              <ListCardSubtitle>Send now and it waits, or hold it — your call.</ListCardSubtitle>
              {mustWait.map((item, i) => (
                <ListItem key={i}>
                  <ListItemTitle>{item.title}</ListItemTitle>
                  <ListItemSrc>{item.src}</ListItemSrc>
                </ListItem>
              ))}
              <TaskButton onClick={onGoTaskCard}>Open the related task card</TaskButton>
            </ListCard>
          </Grid>
        </Body>
      </Modal>
    </Overlay>
  );
}
