import styled from 'styled-components';
import { RECENT_AI_ANSWERED } from './questionData';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 0 0;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #17171b;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Row = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${({ $active }) => ($active ? '#b3caf8' : '#efeff1')};
  background: ${({ $active }) => ($active ? '#eaf1fe' : '#ffffff')};
  cursor: pointer;
  text-align: left;

  &:hover {
    background: ${({ $active }) => ($active ? '#eaf1fe' : '#f7f8fc')};
  }
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
  font-weight: 700;
  color: #17171b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MetaText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const PendingBadge = styled.span`
  flex-shrink: 0;
  padding: 4px 9px;
  border-radius: 999px;
  background: #fdf0e3;
  color: #b5690e;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const DoneBadge = styled.span`
  flex-shrink: 0;
  padding: 4px 9px;
  border-radius: 999px;
  background: #eaf1fe;
  color: #1d4ed8;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const Divider = styled.div`
  height: 1px;
  background: #f0f0f2;
`;

const RecentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
`;

function QuestionList({ questions, selectedId, onSelect }) {
  const pending = questions.filter((q) => q.status !== 'saved' && q.status !== 'discarded');

  return (
    <Panel>
      <SectionTitle>답변 대기 질문</SectionTitle>
      <List>
        {pending.length === 0 ? (
          <MetaText>대기 중인 질문이 없습니다</MetaText>
        ) : (
          pending.map((q) => (
            <Row key={q.id} type="button" $active={q.id === selectedId} onClick={() => onSelect(q.id)}>
              <TextGroup>
                <QuestionText>{q.text}</QuestionText>
                <MetaText>
                  {q.project} · {q.source}
                </MetaText>
              </TextGroup>
              <PendingBadge>답변함</PendingBadge>
            </Row>
          ))
        )}
      </List>

      <Divider />

      <SectionTitle style={{ fontSize: 13 }}>최근 SAI 답변</SectionTitle>
      <List>
        {RECENT_AI_ANSWERED.map((r) => (
          <RecentRow key={r.id}>
            <TextGroup>
              <QuestionText>{r.text}</QuestionText>
              <MetaText>{r.time}</MetaText>
            </TextGroup>
            <DoneBadge>처리함</DoneBadge>
          </RecentRow>
        ))}
      </List>
    </Panel>
  );
}

export default QuestionList;
