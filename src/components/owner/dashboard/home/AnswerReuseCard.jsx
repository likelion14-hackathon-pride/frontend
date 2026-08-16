import styled from 'styled-components';
import StatCardShell from './StatCardShell';

const TRACK_WIDTH = 285.833;

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

const UnitText = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 128%;
`;

const BarsContainer = styled.div`
  display: flex;
  width: 285.833px;
  height: 103px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const BarItem = styled.div`
  display: flex;
  width: 285.833px;
  height: 27.667px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  flex-shrink: 0;
`;

const LabelRow = styled.div`
  display: flex;
  width: 285.833px;
  height: 14.667px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const LabelText = styled.span`
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

const CountText = styled.span`
  color: #17171b;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
`;

const Track = styled.div`
  display: flex;
  width: 285.833px;
  height: 8px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 999px;
  background: #f0f0f2;
`;

const Bar = styled.div`
  height: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  width: ${({ $width }) => $width}px;
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

function AnswerReuseCard({ value, unit, items }) {
  const maxCount = Math.max(...items.map((item) => item.count));

  return (
    <StatCardShell title="답변 재사용">
      <NumberBlock>
        <ValueText>{value}</ValueText>
        <UnitText>{unit}</UnitText>
      </NumberBlock>

      <BarsContainer>
        {items.map((item, index) => (
          <BarItem key={item.label}>
            <LabelRow>
              <LabelText>{item.label}</LabelText>
              <CountText>{item.count}회</CountText>
            </LabelRow>
            <Track>
              <Bar
                $width={(item.count / maxCount) * TRACK_WIDTH}
                $color={index === 0 ? '#2563EB' : '#93B4FB'}
              />
            </Track>
          </BarItem>
        ))}
      </BarsContainer>

      <Footnote>상위 3개 항목</Footnote>
    </StatCardShell>
  );
}

export default AnswerReuseCard;
