import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  align-self: stretch;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const Title = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: #6b6b73;
`;

const Number = styled.span`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -1px;
`;

const Unit = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  color: #a0a0a8;
  margin-left: 4px;
`;

const Footnote = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

function QuestionStatCards({ todayWaiting, approvalWaiting, weeklyAnswered }) {
  return (
    <Grid>
      <Card>
        <Title>오늘 답변 대기</Title>
        <div>
          <Number>{todayWaiting}</Number>
          <Unit>건</Unit>
        </div>
        <Footnote>AI 답변 대기 질문</Footnote>
      </Card>
      <Card>
        <Title>승인 대기</Title>
        <div>
          <Number>{approvalWaiting}</Number>
          <Unit>건</Unit>
        </div>
        <Footnote>핸드북 저장 승인 필요</Footnote>
      </Card>
      <Card>
        <Title>이번주 답변</Title>
        <div>
          <Number>{weeklyAnswered}</Number>
          <Unit>건</Unit>
        </div>
        <Footnote>승인 후 핸드북 반영</Footnote>
      </Card>
    </Grid>
  );
}

export default QuestionStatCards;
