import styled from 'styled-components';

import { formatMinutes, formatSignedMinutes } from '../../../../utils/time';
import AdoptionRateCard from './AdoptionRateCard';
import AnswerReuseCard from './AnswerReuseCard';
import SavedTimeCard from './SavedTimeCard';
import HandbookGrowthCard from './HandbookGrowthCard';

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 250.333px;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`;

// 월별 누적 건수를 막대 높이(px)로 바꾼다. 가장 큰 달을 기준으로 비례.
const MAX_BAR_HEIGHT = 70;
function toBars(monthlyTrend = []) {
  const max = Math.max(...monthlyTrend.map((item) => item.count), 1);
  return monthlyTrend.map((item) => ({
    label: `${Number(item.month.slice(5, 7))}월`,
    height: Math.max(4, Math.round((item.count / max) * MAX_BAR_HEIGHT)),
    count: item.count,
  }));
}

function StatCardsRow({ resolution, answerReuse, ownerTimeSaved, handbook }) {
  return (
    <Row>
      <AdoptionRateCard
        value={resolution.saiRate}
        // 이번 주 SAI 해결 비율. 지난주와의 차이는 서버가 주지 않으므로 대표 처리 건수를 함께 보여 준다.
        delta={`대표 ${resolution.ownerRate}%`}
        aiCount={resolution.saiCount}
        ownerCount={resolution.ownerCount}
      />

      <AnswerReuseCard
        value={`${answerReuse.averageCount}회`}
        unit="답변 1건당"
        items={answerReuse.topEntries.map((entry) => ({
          label: entry.title,
          count: entry.reuseCount,
        }))}
      />

      <SavedTimeCard
        value={formatMinutes(ownerTimeSaved.minutes)}
        delta={formatSignedMinutes(ownerTimeSaved.changeMinutes)}
        weeklyTrend={ownerTimeSaved.weeklyTrend}
        minutesPerAnswer={ownerTimeSaved.minutesPerAnswer}
      />

      <HandbookGrowthCard
        value={handbook.totalCount}
        delta={`이번 주 +${handbook.thisWeekCount}`}
        months={toBars(handbook.monthlyTrend)}
        footnote={
          handbook.lastConfirmedAt ? '누적 확정 규칙 수' : '아직 확정된 규칙이 없습니다'
        }
      />
    </Row>
  );
}

export default StatCardsRow;
