import styled from 'styled-components';
import mascot from '../../../assets/logo-mascot.png';
import chatBubbleIcon from '../../../assets/icons/chat-bubble.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 2px 2px 0;
`;

const GreetingIcon = styled.img`
  width: 62px;
  height: 62px;
  flex: none;
  object-fit: contain;
  transform: rotate(-8deg);
`;

const TextBlock = styled.div`
  min-width: 0;
`;

const Title = styled.div`
  font-size: clamp(28px, 5vw, 40px);
  font-family: Tahoma;
  font-weight: 700;
  letter-spacing: -1.3px;
  line-height: 1.1;
  color: #17171b;
`;

const ChannelName = styled.b`
  color: #17171b;
`;

const AskButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 1px solid #eaeaee;
  border-radius: 16px;
  padding: 16px 20px;
  text-align: left;
  cursor: pointer;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const AskIconBadge = styled.span`
  width: 22px;
  height: 22px;
  flex: none;
  border-radius: 7px;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const AskLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 15.5px;
  font-weight: 600;
  color: #a0a0a8;
  line-height: 125%;
`;

const EnterChip = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 11.5px;
  font-weight: 700;
  color: #b4b4bc;
  font-family: 'IBM Plex Mono';
  border: 1px solid #eaeaee;
  padding: 5px 8px;
  border-radius: 7px;
  background: #f4f4f6;
`;

export default function TasksGreeting({ taskCount = 0, userName, onAskClick }) {
  return (
    <Wrap>
      <Header>
        <GreetingIcon src={mascot} alt="" />
        <TextBlock>
          <Title>
            {taskCount === 0
              ? 'No new tasks yet'
              : `${taskCount} new task${taskCount === 1 ? '' : 's'}`}
            {userName ? `, ${userName}` : ''}
          </Title>
        </TextBlock>
      </Header>

      <AskButton onClick={onAskClick}>
        <AskIconBadge>
          <img src={chatBubbleIcon} alt="" width={12} height={12} />
        </AskIconBadge>
        <AskLabel>Ask SAi about any of these</AskLabel>
        <EnterChip>Enter ↵</EnterChip>
      </AskButton>
    </Wrap>
  );
}
