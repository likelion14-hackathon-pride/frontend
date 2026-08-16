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
  font-weight: 700;
  letter-spacing: -1.3px;
  line-height: 1.1;
  color: #17171B;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #8A8A93;
  margin-top: 8px;
  line-height: 1.5;
`;

const ChannelName = styled.b`
  color: #17171B;
`;

const AskButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 1px solid #EAEAEE;
  border-radius: 16px;
  padding: 16px 20px;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const AskIconBadge = styled.span`
  width: 22px;
  height: 22px;
  flex: none;
  border-radius: 7px;
  background: linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%);
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
  color: #A0A0A8;
  line-height: 125%; 
`;

const EnterChip = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 11.5px;
  font-weight: 700;
  color: #B4B4BC;
  font-family: "IBM Plex Mono";
  border: 1px solid #EAEAEE;
  padding: 5px 8px;
  border-radius: 7px;
  background: #F4F4F6;
`;

export default function TasksGreeting({
  taskCount = 4,
  userName = 'Minh',
  date = 'August 6',
  channels = ['payment-api', 'admin-web'],
  onAskClick,
}) {
  return (
    <Wrap>
      <Header>
        <GreetingIcon src={mascot} alt="" />
        <TextBlock>
          <Title>{taskCount} new tasks, {userName}</Title>
          <Subtitle>
            {date} · read from{' '}
            {channels.map((ch, i) => (
              <span key={ch}>
                <ChannelName>#{ch}</ChannelName>
                {i < channels.length - 2 ? ', ' : i === channels.length - 2 ? ' and ' : ''}
              </span>
            ))}
            , interpreted for you
          </Subtitle>
        </TextBlock>
      </Header>

      <AskButton onClick={onAskClick}>
        <AskIconBadge>
          <img src={chatBubbleIcon} alt="" width={12} height={12} />
        </AskIconBadge>
        <AskLabel>Ask SAI about any of these</AskLabel>
        <EnterChip>Enter ↵</EnterChip>
      </AskButton>
    </Wrap>
  );
}