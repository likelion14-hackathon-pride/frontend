import styled from 'styled-components';
import mascot from '../../../assets/logo-mascot.png';

const Wrap = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  text-align: center;
  padding-bottom: 30px;
`;

const Icon = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  transform: rotate(-8deg);
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -1.1px;
  font-family: Tahoma;
  line-height: 1.15;
  text-align: center;
  color: #17171b;
`;

const Subtitle = styled.div`
  font-size: 14.5px;
  color: #8a8a93;
  margin-top: 9px;
  line-height: 1.6;
  text-align: center;
`;

const SuggestionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  justify-content: center;
  max-width: 520px;
`;

const SuggestionChip = styled.button`
  font-size: 13.5px;
  font-weight: 600;
  color: #3c3c44;
  background: #fff;
  border: 0.667px solid #eaeaee;
  padding: 9px 14px;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(17, 17, 20, 0.04);
  cursor: pointer;

  &:hover {
    border-color: #ffc49b;
    box-shadow: 0 6px 16px rgba(17, 17, 20, 0.08);
  }
`;

const DEFAULT_SUGGESTIONS = [
  'How fast am I expected to reply?',
  'Do I need tests for this?',
  'Where do error logs go?',
];

export default function AskEmptyState({
  userName = 'Minh',
  suggestions = DEFAULT_SUGGESTIONS,
  onSuggestionClick,
}) {
  return (
    <Wrap>
      <Icon src={mascot} alt="" />
      <div>
        <Title>Ask me anything, {userName}</Title>
        <Subtitle>
          Your team's Slack, GitHub and handbook are already read.
          <br />
          No waiting for 김대표.
        </Subtitle>
      </div>

      <SuggestionRow>
        {suggestions.map((q) => (
          <SuggestionChip key={q} onClick={() => onSuggestionClick?.(q)}>
            {q}
          </SuggestionChip>
        ))}
      </SuggestionRow>
    </Wrap>
  );
}
