import styled, { keyframes } from 'styled-components';

import { formatShortKo } from '../../../../utils/time';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 320px;
  min-width: 0;
  height: 290.917px;
  flex-direction: column;
  padding: 20px 20.667px;
  gap: 14px;
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
  flex-shrink: 0;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.span`
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 124%;
  letter-spacing: -0.3px;
`;

const Subtitle = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

const Chevron = styled.button`
  flex-shrink: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`;

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 43.698px;
  padding: 7px 9px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
`;

const IconBox = styled.span`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 8.5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
`;

// 시차 패널의 온라인/오프라인 점과 같은 느낌으로, 대표 확인을 기다리는 중임을
// 초록 불이 들어왔다 나갔다 하는 것처럼 계속 깜빡여서 보여준다.
const blink = keyframes`
  0%,
  100% {
    background: #1f7a45;
    box-shadow: 0 0 0 3px rgba(31, 122, 69, 0.25);
  }
  50% {
    background: #d8d8de;
    box-shadow: 0 0 0 0 rgba(31, 122, 69, 0);
  }
`;

const IconShape = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  animation: ${blink} 2.2s ease-in-out infinite;
`;

const TextGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

const QuestionText = styled.span`
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16.2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MetaText = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'IBM Plex Mono';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EmptyRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
`;

// waitingQuestions 는 DRAFT / SENT 상태의 대표 확인 질문이다(companies/dashboard.py).
// 아직 팀원이 보내지 않은 초안(DRAFT)과 보낸 질문(SENT)을 상태로 구분해 보여 준다.
function PendingApprovalPanel({ waitingQuestions, onViewAll }) {
  const items = waitingQuestions?.items ?? [];
  const total = waitingQuestions?.totalCount ?? 0;

  return (
    <Panel>
      <HeadRow>
        <TitleGroup>
          <Title>대표님을 기다리는 질문</Title>
          <Subtitle>핸드북에 근거가 없는 질문 · 전체 {total}건</Subtitle>
        </TitleGroup>
        <Chevron type="button" aria-label="전체 보기" onClick={onViewAll}>
          ›
        </Chevron>
      </HeadRow>

      <List>
        {items.length === 0 ? (
          <EmptyRow>기다리는 질문이 없습니다</EmptyRow>
        ) : (
          items.map((question) => (
            <Row key={question.id}>
              <IconBox>
                <IconShape />
              </IconBox>
              <TextGroup>
                <QuestionText>
                  {question.draftKo || question.question || question.questionEn || '(질문 없음)'}
                </QuestionText>
                <MetaText>
                  {[
                    question.askedByName,
                    question.scopeName || '공통 규칙',
                    formatShortKo(question.createdAt),
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </MetaText>
              </TextGroup>
            </Row>
          ))
        )}
      </List>
    </Panel>
  );
}

export default PendingApprovalPanel;
