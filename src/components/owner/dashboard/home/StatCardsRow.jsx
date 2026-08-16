import styled from 'styled-components';
import StatCardShell from './StatCardShell';
import AdoptionRateCard from './AdoptionRateCard';
import MiniBarChart from '../shared/MiniBarChart';
import MiniLineChart from '../shared/MiniLineChart';
import { STAT_SUMMARY, VISIT_TREND, TIME_SAVED_TREND } from './homeData';

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 250.333px;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  gap: 10px;
`;

const NumberRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const Number = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: 32px;
  font-weight: 700;
  color: #17171b;
  letter-spacing: -1px;
  line-height: 1;
`;

const Unit = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-weight: 600;
  color: #a0a0a8;
`;

const Delta = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-weight: 700;
  color: #1f7a45;
`;

const Footnote = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  color: #a0a0a8;
`;

const ProgressStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
    <Row>
      <AdoptionRateCard
        value={STAT_SUMMARY.adoptionRate}
        delta={STAT_SUMMARY.adoptionDelta}
        aiCount={STAT_SUMMARY.aiAnsweredCount}
        ownerCount={STAT_SUMMARY.ownerAnsweredCount}
      />

      <StatCardShell title="답변 신뢰도">
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
          <Footnote>팀원 확인 · 대표 확인 완료</Footnote>
        </Body>
      </StatCardShell>

      <StatCardShell title="이번 주 절약된 대응 시간">
        <Body>
          <NumberRow>
            <Number>{STAT_SUMMARY.timeSavedLabel}</Number>
            <Delta>{STAT_SUMMARY.timeSavedDelta}</Delta>
          </NumberRow>
          <MiniLineChart values={TIME_SAVED_TREND} width={200} height={64} />
          <Footnote>SAI가 대신 응답한 시간 합계</Footnote>
        </Body>
      </StatCardShell>

      <StatCardShell title="방문 빈도">
        <Body>
          <NumberRow>
            <Number>{STAT_SUMMARY.visitCount}</Number>
            <Delta>{STAT_SUMMARY.visitDelta}</Delta>
          </NumberRow>
          <MiniBarChart values={VISIT_TREND} height={64} />
          <Footnote>이번 주 핸드북 방문수</Footnote>
        </Body>
      </StatCardShell>
    </Row>
  );
}

export default StatCardsRow;
