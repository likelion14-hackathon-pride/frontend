import { useState } from 'react';
import styled from 'styled-components';
import { PENDING_OWNER_QUESTIONS } from './homeData';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 660.333px;
  height: 290.917px;
  flex-shrink: 0;
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

const IconShape = styled.span`
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1.333px solid rgba(255, 255, 255, 0.7);
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

const CheckButton = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background: ${({ $resolved }) => ($resolved ? 'rgba(255, 255, 255, 0.14)' : '#2563EB')};
  opacity: ${({ $resolved }) => ($resolved ? 0.55 : 1)};
`;

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5.2L4 7.2L8 3" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

function PendingApprovalPanel() {
  const [resolvedIds, setResolvedIds] = useState(
    () => new Set(PENDING_OWNER_QUESTIONS.filter((q) => q.variant === 'muted').map((q) => q.id))
  );

  const toggleResolved = (id) => {
    setResolvedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Panel>
      <HeadRow>
        <TitleGroup>
          <Title>대표님을 기다리는 질문</Title>
          <Subtitle>핸드북에 근거가 없는 질문</Subtitle>
        </TitleGroup>
        <Chevron type="button" aria-label="전체 보기">
          ›
        </Chevron>
      </HeadRow>

      <List>
        {PENDING_OWNER_QUESTIONS.map((q) => {
          const resolved = resolvedIds.has(q.id);
          return (
            <Row key={q.id}>
              <IconBox>
                <IconShape />
              </IconBox>
              <TextGroup>
                <QuestionText>{q.text}</QuestionText>
                <MetaText>{q.meta}</MetaText>
              </TextGroup>
              <CheckButton
                type="button"
                $resolved={resolved}
                onClick={() => toggleResolved(q.id)}
                aria-label={resolved ? '미확인으로 표시' : '확인함으로 표시'}
              >
                <CheckIcon />
              </CheckButton>
            </Row>
          );
        })}
      </List>
    </Panel>
  );
}

export default PendingApprovalPanel;
