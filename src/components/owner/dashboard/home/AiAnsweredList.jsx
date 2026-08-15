import styled from 'styled-components';
import { AI_ANSWERED_QUESTIONS } from './homeData';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1 0 0;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #17171b;
`;

const TodayLabel = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 600;
  color: #a0a0a8;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 4px;
  border-bottom: 1px solid #f7f8fc;

  &:last-child {
    border-bottom: none;
  }
`;

const Time = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-weight: 600;
  color: #a0a0a8;
  width: 34px;
  flex-shrink: 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 0 0;
  min-width: 0;
`;

const QuestionText = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 600;
  color: #17171b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProjectText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const Badge = styled.span`
  flex-shrink: 0;
  padding: 4px 9px;
  border-radius: 999px;
  background: #eaf1fe;
  color: #1d4ed8;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

function AiAnsweredList() {
  return (
    <Panel>
      <HeadRow>
        <Title>SAI가 대신 답한 질문</Title>
        <TodayLabel>오늘 12건</TodayLabel>
      </HeadRow>
      <List>
        {AI_ANSWERED_QUESTIONS.map((q) => (
          <Row key={q.id}>
            <Time>{q.time}</Time>
            <TextGroup>
              <QuestionText>{q.text}</QuestionText>
              <ProjectText>{q.project}</ProjectText>
            </TextGroup>
            <Badge>답변함</Badge>
          </Row>
        ))}
      </List>
    </Panel>
  );
}

export default AiAnsweredList;
