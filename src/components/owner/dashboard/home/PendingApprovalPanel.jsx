import { useState } from 'react';
import styled from 'styled-components';
import { PENDING_OWNER_QUESTIONS } from './homeData';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1 0 0;
  padding: 20px;
  border-radius: 22px;
  background: linear-gradient(160deg, #10163a 0%, #171d3f 60%, #1c2247 100%);
  box-shadow:
    0 18px 40px -14px rgba(16, 22, 58, 0.5),
    0 1px 0 1px rgba(255, 255, 255, 0.06) inset;
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #ffffff;
`;

const CountPill = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-weight: 700;
`;

const ViewAll = styled.button`
  border: none;
  background: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const CheckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;

  border: 1.5px solid ${({ $done }) => ($done ? '#3d5afe' : 'rgba(255, 255, 255, 0.28)')};
  background: ${({ $done }) => ($done ? '#3d5afe' : 'transparent')};
  color: #ffffff;
  font-size: 11px;
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
  color: ${({ $done }) => ($done ? 'rgba(255, 255, 255, 0.4)' : '#ffffff')};
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SourceText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TimeText = styled.span`
  flex-shrink: 0;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.35);
`;

function PendingApprovalPanel() {
  const [doneIds, setDoneIds] = useState(new Set());

  const toggleDone = (id) => {
    setDoneIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const remaining = PENDING_OWNER_QUESTIONS.length - doneIds.size;

  return (
    <Panel>
      <HeadRow>
        <TitleGroup>
          <Title>대표님 기다리는 질문</Title>
          <CountPill>{remaining}건</CountPill>
        </TitleGroup>
        <ViewAll type="button">전체 보기</ViewAll>
      </HeadRow>
      <List>
        {PENDING_OWNER_QUESTIONS.map((q) => {
          const done = doneIds.has(q.id);
          return (
            <Row key={q.id}>
              <CheckButton
                type="button"
                $done={done}
                onClick={() => toggleDone(q.id)}
                aria-label={done ? '완료 취소' : '완료로 표시'}
              >
                {done ? '✓' : ''}
              </CheckButton>
              <TextGroup>
                <QuestionText $done={done}>{q.text}</QuestionText>
                <SourceText>{q.source}</SourceText>
              </TextGroup>
              <TimeText>{q.time}</TimeText>
            </Row>
          );
        })}
      </List>
    </Panel>
  );
}

export default PendingApprovalPanel;
