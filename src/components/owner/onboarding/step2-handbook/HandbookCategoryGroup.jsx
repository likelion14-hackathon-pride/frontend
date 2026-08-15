import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import { EMPTY_ANSWER, getQuestionStatus } from './handbookData';

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 14.667px;
  margin-bottom: 12px;
`;

const CornerCurve = styled.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 0 0 0 7px;
  border-bottom: 1.333px solid #e0e0e6;
  border-left: 1.333px solid #e0e0e6;
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
  letter-spacing: 0.4px;
  color: #3c3c44;
  white-space: nowrap;
`;

const Description = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10.5px;
  font-weight: 400;
  line-height: 121%;
  color: #b4b4bc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DividerLine = styled.span`
  flex: 1 1 auto;
  height: 1px;
  background: #e6e6eb;
  min-width: 16px;
`;

const Fraction = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: #a0a0a8;
  flex-shrink: 0;
  white-space: nowrap;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
`;

function HandbookCategoryGroup({ category, answers, onAnswerChange }) {
  const confirmedCount = category.questions.filter(
    (question) => getQuestionStatus(answers[question.id]) === 'confirmed'
  ).length;

  return (
    <Group>
      <Header>
        <CornerCurve />
        <Square $color={category.dotColor} />
        <Label>{category.label}</Label>
        <Description>{category.description}</Description>
        <DividerLine />
        <Fraction>
          {confirmedCount}/{category.questions.length}
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
