import styled from 'styled-components';
import StatCardShell from './StatCardShell';

const NumberBlock = styled.div`
  display: flex;
  width: 285.833px;
  height: 40px;
  align-items: baseline;
  gap: 10px;
`;

const ValueText = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -1.6px;
`;

const DeltaText = styled.span`
  color: #1f7a45;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
`;

const BarsRow = styled.div`
  display: flex;
  width: 285.833px;
  padding: 14.333px 0 0 0;
  justify-content: center;
  align-items: flex-end;
  gap: 7px;
`;

const MonthColumn = styled.div`
  display: flex;
  width: 41.8px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

const Bar = styled.div`
  width: 41.8px;
  height: ${({ $height }) => $height}px;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${({ $current }) => ($current ? '#2563EB' : '#C7D9FE')};
`;

const MonthLabel = styled.span`
  width: 24.667px;
  color: #a0a0a8;
  text-align: center;
  font-family: 'IBM Plex Mono';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

const Footnote = styled.span`
  width: 293.833px;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
  margin-top: auto;
`;

function HandbookGrowthCard({ value, delta, months = [], footnote }) {
  return (
    <StatCardShell title="쌓인 핸드북">
      <NumberBlock>
        <ValueText>{value}</ValueText>
        <DeltaText>{delta}</DeltaText>
      </NumberBlock>

      <BarsRow>
        {months.map((month, index) => (
          <MonthColumn key={`${month.label}-${index}`}>
            <Bar $height={month.height} $current={index === months.length - 1} />
            <MonthLabel>{month.label}</MonthLabel>
          </MonthColumn>
        ))}
      </BarsRow>

      <Footnote>{footnote}</Footnote>
    </StatCardShell>
  );
}

export default HandbookGrowthCard;
