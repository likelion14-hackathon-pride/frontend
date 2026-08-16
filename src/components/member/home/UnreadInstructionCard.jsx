import styled from 'styled-components';

const Card = styled.button`
  flex: none;
  max-width: 238px;
  background: #ff6000;
  border-radius: 18px;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  text-align: left;
  border: none;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(255, 96, 0, 0.25);
  }
`;

const LabelRow = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  flex: none;
  border-radius: 50%;
  background: #fff;
`;

const Label = styled.span`
  font-size: 11px;
  font-weight: 800;
  line-height: 127%;
  letter-spacing: 0.99px;
  color: rgba(255, 255, 255, 0.9);
`;

const CountRow = styled.span`
  display: flex;
  align-items: baseline;
  gap: 7px;
`;

const Count = styled.span`
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -1.4px;
  line-height: 1;
  color: #fff;
`;

const From = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.78);
  line-height: 128%;
`;

const MessagePreview = styled.span`
  font-size: 13.5px;
  color: #fff;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: 400;
  overflow: hidden;
`;

const ReadLink = styled.span`
  font-size: 12.5px;
  font-weight: 700;
  color: #fff;
  line-height: 123%;
`;

export default function UnreadInstructionCard({
  count = 1,
  from = '김대표',
  time = '09:47',
  message,
  onClick,
}) {
  return (
    <Card onClick={onClick}>
      <LabelRow>
        <Dot />
        <Label>UNREAD INSTRUCTION</Label>
      </LabelRow>

      <CountRow>
        <Count>{count}</Count>
        <From>
          from {from} · {time}
        </From>
      </CountRow>

      <MessagePreview>{message}</MessagePreview>

      <ReadLink>Read it →</ReadLink>
    </Card>
  );
}
