import styled from 'styled-components';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import chatBubbleIcon from '../../../assets/icons/chat-bubble.svg';
import searchIcon from '../../../assets/icons/search.svg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  min-width: 0;
  border: 0.1px dotted #FF8A3D;
  border-radius: 18px;
  box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08);
  padding: 18px 20px;
  background-color: #FF8A3D33;
`;

const MainButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1px 6px;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
`;

const IconBadge = styled.span`
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  border-radius: 11px;
  background: linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08);

`;

const TextBlock = styled.span`
  flex: 1;
  min-width: 0;
  line-height: 1.35;
`;

const Title = styled.span`
  display: block;
  font-size: 16.5px;
  font-weight: 700;
  color: #17171B;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 13.5px;
  color: rgba(23, 23, 27, 0.72);
  margin-top: 3px;
  font-weight: 400;
`;

const SearchButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 14px;
  padding: 12px 14px;
  text-align: left;
  box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08);
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(120, 50, 0, 0.16);
  }
`;

const SearchPlaceholder = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  color: #A8A8B0;
`;

const EnterChip = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 11.5px;
  font-weight: 700;
  color: #8A8A93;
  background: #F4F4F6;
  padding: 4px 6.74px 5px 8px;
  border-radius: 7px;
  font-family: 'IBM Plex Mono', monospace;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
`;

const Chip = styled.button`
  font-size: 13.5px;
  font-weight: 600;
  color: #7A3B12;
  background: rgba(255, 255, 255, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.55);
  padding: 8px 13px;
  border-radius: 20px;
  cursor: pointer;
`;

const QUICK_QUESTIONS = [
  'How fast am I expected to reply?',
  "What is company's goal?",
  'Who runs the deploy?',
];

export default function AskCard() {
  const { goToAsk } = useMemberNavigation();

  return (
    <Card>
      <MainButton onClick={goToAsk}>
        <IconBadge>
          <img src={chatBubbleIcon} alt="" width={17} height={17} />
        </IconBadge>
        <TextBlock>
          <Title>Ask instead of waiting</Title>
          <Subtitle>SAI knows your team's rules — it turns the ask into a clear next step for you</Subtitle>
        </TextBlock>
      </MainButton>

      <SearchButton onClick={goToAsk}>
        <img src={searchIcon} alt="" width={16} height={16} />
        <SearchPlaceholder>Search your team's rules — "Do I need tests for this?"</SearchPlaceholder>
        <EnterChip>Enter ↵</EnterChip>
      </SearchButton>

      <ChipRow>
        {QUICK_QUESTIONS.map((q) => (
          <Chip key={q} onClick={goToAsk}>{q}</Chip>
        ))}
      </ChipRow>
    </Card>
  );
}