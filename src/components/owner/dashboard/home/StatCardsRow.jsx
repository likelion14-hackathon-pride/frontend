import styled from 'styled-components';
import AdoptionRateCard from './AdoptionRateCard';
import AnswerReuseCard from './AnswerReuseCard';
import SavedTimeCard from './SavedTimeCard';
import HandbookGrowthCard from './HandbookGrowthCard';
import { STAT_SUMMARY, TOP_REUSED_ANSWERS, HANDBOOK_MONTHLY_TREND } from './homeData';

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
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

      <AnswerReuseCard
        value={STAT_SUMMARY.answerReuseValue}
        unit={STAT_SUMMARY.answerReuseUnit}
        items={TOP_REUSED_ANSWERS}
      />

      <SavedTimeCard value={STAT_SUMMARY.timeSavedLabel} delta={STAT_SUMMARY.timeSavedDelta} />

      <HandbookGrowthCard
        value={STAT_SUMMARY.handbookTotal}
        delta={STAT_SUMMARY.handbookWeeklyDelta}
        months={HANDBOOK_MONTHLY_TREND}
        footnote={STAT_SUMMARY.handbookUnconfirmedFootnote}
      />
    </Row>
  );
}

export default StatCardsRow;
