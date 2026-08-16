import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  width: 100%;
  height: 125.333px;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
  height: 125.333px;
  flex-shrink: 0;
  padding: 20px;
  border-radius: 20px;
  border: 0.667px solid #efeff1;
  background: ${({ $tinted }) => ($tinted ? '#EEF3FF' : '#FFFFFF')};
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const Title = styled.span`
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;
`;

const Number = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -1.2px;
`;

const Footnote = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

function QuestionStatCards({ waitingCount, waitingFootnote, approvalCount, approvalFootnote, weeklySaved, weeklySavedFootnote }) {
  return (
    <Grid>
      <Card>
        <Title>대표 답변 대기</Title>
        <Number>{waitingCount}건</Number>
        <Footnote>{waitingFootnote}</Footnote>
      </Card>
      <Card $tinted>
        <Title>승인 대기</Title>
        <Number>{approvalCount}건</Number>
        <Footnote>{approvalFootnote}</Footnote>
      </Card>
      <Card>
        <Title>이번 주 저장</Title>
        <Number>{weeklySaved}건</Number>
        <Footnote>{weeklySavedFootnote}</Footnote>
      </Card>
    </Grid>
  );
}

export default QuestionStatCards;
