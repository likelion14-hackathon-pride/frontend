import styled from 'styled-components';

import { formatClock } from '../../../../utils/time';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 320px;
  min-width: 0;
  height: 290.917px;
  flex-direction: column;
  padding: 20px 20.667px;
  gap: 10px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
`;

const HeadRow = styled.div`
  display: flex;
  width: 100%;
  height: 19.333px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

const Title = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 124%;
  letter-spacing: -0.3px;
`;

const TodayCount = styled.span`
  color: #2563eb;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 55.563px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-top: 0.667px solid #efeff1;
`;

const MainGroup = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

const Time = styled.span`
  flex-shrink: 0;
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

const TextGroup = styled.div`
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  height: 32.896px;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

const QuestionText = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.2px;
  letter-spacing: -0.2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SourceText = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Badge = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  padding: 5.667px 12.875px 5.333px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: #fff6e8;
  color: #9a6212;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const EmptyRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
`;

function AiAnsweredList({ recentAnswers, ownerType }) {
  // 대표가 직접 답한 건 SAI 가 "대신" 답한 게 아니므로 이 목록에서는 뺀다.
  const items = (recentAnswers?.items ?? []).filter((item) => item.resolutionType !== ownerType);

  return (
    <Panel>
      <HeadRow>
        <Title>SAI가 대신 답한 순간</Title>
        <TodayCount>오늘 {items.length}건</TodayCount>
      </HeadRow>
      <List>
        {items.length === 0 ? (
          <EmptyRow>오늘 처리된 질문이 아직 없습니다</EmptyRow>
        ) : (
          items.map((item, index) => (
            <Row key={`${item.resolvedAt}-${index}`}>
              <MainGroup>
                <Time>{formatClock(item.resolvedAt, { fallback: '--:--' })}</Time>
                <TextGroup>
                  <QuestionText>{item.question || '(질문 원문 없음)'}</QuestionText>
                  <SourceText>
                    {item.sourceLabels?.length
                      ? `근거 · ${item.sourceLabels.join(' · ')}`
                      : '근거 없음 → 대표님께 전달'}
                  </SourceText>
                </TextGroup>
              </MainGroup>
              <Badge $tone="instant">즉시 답변</Badge>
            </Row>
          ))
        )}
      </List>
    </Panel>
  );
}

export default AiAnsweredList;
