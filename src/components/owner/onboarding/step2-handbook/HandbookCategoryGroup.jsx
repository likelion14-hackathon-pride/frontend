import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import { colors } from '../theme';
import { EMPTY_ANSWER, getQuestionStatus } from './handbookData';

const Group = styled.div`
  padding: 4px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 16px 4px 8px;
  border-bottom: 1px solid ${colors.border};
`;

const Square = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const Label = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${colors.textPrimary};
`;

const Description = styled.span`
  font-size: 11px;
  color: ${colors.textMuted};
  flex-grow: 1;
`;

const Fraction = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textMuted};
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 0 16px;
`;

function HandbookCategoryGroup({ category, answers, onAnswerChange }) {
  const confirmedCount = category.questions.filter(
    (question) => getQuestionStatus(answers[question.id]) === 'confirmed'
  ).length;

  return (
    <Group>
      <Header>
        <Square $color={category.dotColor} />
        <Label>{category.label}</Label>
        <Description>{category.description}</Description>
        <Fraction>
          {confirmedCount} / {category.questions.length}
        </Fraction>
      </Header>
      <ItemList>
        {category.questions.map((question) => (
          <QuestionRow
            key={question.id}
            question={question}
            answer={answers[question.id] ?? EMPTY_ANSWER}
            onChange={(patch) => onAnswerChange(question.id, patch)}
          />
        ))}
      </ItemList>
    </Group>
  );
}

export default HandbookCategoryGroup;
