import styled from 'styled-components';
import DonutGauge from '../shared/DonutGauge';
import MiniBarChart from '../shared/MiniBarChart';
import MiniLineChart from '../shared/MiniLineChart';
import { STAT_SUMMARY, VISIT_TREND, TIME_SAVED_TREND } from './homeData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  align-self: stretch;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const NumberBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NumberRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const Number = styled.span`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -1px;
  line-height: 1;
`;

const Unit = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  color: #a0a0a8;
`;

const Delta = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-weight: 700;
  color: #1f7a45;
`;

const Footnote = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const ProgressStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 0 0;
  margin-left: 14px;
`;

const ProgressTrack = styled.div`
  height: 6px;
  border-radius: 999px;
  background: #f0f0f2;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  border-radius: 999px;
  background: ${({ $color }) => $color};
`;

function StatCardsRow() {
  return (
    <Grid>
      <Card>
        <Title>SAI 채택률</Title>
        <Body>
          <DonutGauge value={STAT_SUMMARY.adoptionRate} size={58} stroke={7} />
          <NumberBlock>
            <Delta>{STAT_SUMMARY.adoptionDelta}</Delta>
            <Footnote>지난주 대비 상승</Footnote>
          </NumberBlock>
        </Body>
        <Footnote>SAI 자동 답변 · 이용 팀원 수</Footnote>
      </Card>

      <Card>
        <Title>답변 신뢰도</Title>
        <Body>
          <NumberRow>
            <Number>{STAT_SUMMARY.answerCount}</Number>
            <Unit>회 / 팀원</Unit>
          </NumberRow>
          <ProgressStack>
            <ProgressTrack>
              <ProgressFill $pct={68} $color="#2563eb" />
            </ProgressTrack>
            <ProgressTrack>
              <ProgressFill $pct={42} $color="#a0a0a8" />
            </ProgressTrack>
          </ProgressStack>
        </Body>
        <Footnote>팀원 확인 · 대표 확인 완료</Footnote>
      </Card>

      <Card>
        <Title>이번 주 절약된 대응 시간</Title>
        <Body>
          <NumberBlock>
            <Number style={{ fontSize: 22 }}>{STAT_SUMMARY.timeSavedLabel}</Number>
            <Delta>{STAT_SUMMARY.timeSavedDelta}</Delta>
          </NumberBlock>
          <MiniLineChart values={TIME_SAVED_TREND} width={110} height={34} />
        </Body>
        <Footnote>SAI가 대신 응답한 시간 합계</Footnote>
      </Card>

      <Card>
        <Title>방문 빈도</Title>
        <Body>
          <NumberBlock>
            <NumberRow>
              <Number>{STAT_SUMMARY.visitCount}</Number>
            </NumberRow>
            <Delta>{STAT_SUMMARY.visitDelta}</Delta>
          </NumberBlock>
          <MiniBarChart values={VISIT_TREND} height={34} />
        </Body>
        <Footnote>이번 주 핸드북 방문수</Footnote>
      </Card>
    </Grid>
  );
}

export default StatCardsRow;
