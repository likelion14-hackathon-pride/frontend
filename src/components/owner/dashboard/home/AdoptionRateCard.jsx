import styled from 'styled-components';
import StatCardShell from './StatCardShell';
import DonutGauge from '../shared/DonutGauge';

const GraphContainer = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  align-self: center;
  filter: drop-shadow(0 8px 20px rgba(37, 99, 235, 0.18));
`;

const CenterLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const ValueText = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 39.9px;
  letter-spacing: -1.6px;
`;

const LegendRow = styled.div`
  display: inline-flex;
  height: 16px;
  align-items: flex-start;
  justify-content: center;
  align-self: center;
  gap: 14px;
`;

const LegendItem = styled.div`
  display: flex;
  height: 16px;
  padding: 0.667px 0 1.333px 0;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
`;

const LegendSwatch = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 2px;
  background: ${({ $color }) => $color};
`;

const LegendLabel = styled.span`
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
  white-space: nowrap;
`;

function AdoptionRateCard({ value, aiCount, ownerCount }) {
  return (
    <StatCardShell title="SAi 해결">
      <GraphContainer>
        <DonutGauge
          value={value}
          size={130}
          stroke={11.818}
          trackColor="#EFEFF1"
          progressColor="#2563EB"
          rounded
        >
          <CenterLabel>
            <ValueText>{value}%</ValueText>
          </CenterLabel>
        </DonutGauge>
      </GraphContainer>

      <LegendRow>
        <LegendItem>
          <LegendSwatch $color="#2563EB" />
          <LegendLabel>SAi {aiCount}건</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSwatch $color="#E6E6EB" />
          <LegendLabel>대표 {ownerCount}건</LegendLabel>
        </LegendItem>
      </LegendRow>
    </StatCardShell>
  );
}

export default AdoptionRateCard;
