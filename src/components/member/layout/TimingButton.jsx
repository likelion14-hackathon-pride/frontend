import styled from 'styled-components';
import { useZoneTime } from '../../../hooks/member/useZoneTime.js';

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: #FFFFFFD9;
  border-radius: 16px;
  box-shadow: 0px 10px 22px 0px #0000001A;
`;

const Button = styled.button`
  display: flex;
  align-items: stretch;
  gap: 14px;
  padding: 9px 15px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #EAEAEE;
  box-shadow: 0 1px 2px rgba(17, 17, 20, 0.04), 0 6px 18px rgba(17, 17, 20, 0.06);
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: #FFC49B;
    box-shadow: 0 8px 22px rgba(17, 17, 20, 0.10);
  }
`;

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: 6px 52px 52px auto;
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
  color: #17171B;
  line-height: 149%;
`;

const StatusText = styled.span`
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 600;
  color: #8A8A93;
  line-height: 123%; 
`;

const TimeText = styled.span`
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 600;
  color: #8A8A93;
  font-family: 'IBM Plex Mono', monospace;
`;

const Divider = styled.div`
  width: 1px;
  background: #E4E4E9;
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
  color: #A0A0A8;
`;

const ReplyTime = styled.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 800;
  color: #17171B;
`;

export default function TimingButton({ onClick }) {
  const seoulTime = useZoneTime('Asia/Seoul');
  const hanoiTime = useZoneTime('Asia/Ho_Chi_Minh');

  return (
    <Wrapper>
      <Button onClick={onClick} title="Timing">
        <StatusGrid>
          <Dot $color="#D1C9C9" />
          <Name>김대표</Name>
          <StatusText>offline</StatusText>
          <TimeText>Seoul {seoulTime}</TimeText>

          <Dot $color="#3BA55C" />
          <Name>You</Name>
          <StatusText>online</StatusText>
          <TimeText>Hanoi {hanoiTime}</TimeText>
        </StatusGrid>

        <Divider />

        <ReplyBlock>
          <ReplyLabel>Reply expected</ReplyLabel>
          <ReplyTime>Tomorrow 11:00</ReplyTime>
        </ReplyBlock>
      </Button>
    </Wrapper>
  );
}