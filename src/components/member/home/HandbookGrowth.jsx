import styled from 'styled-components';
import growthIcon from '../../../assets/icons/growth.svg';
import growthGraphIcon from '../../../assets/icons/growthgraph.svg';

const Card = styled.div`
  flex: none;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E;
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 15px 20px;
  border-bottom: 1px solid #F2F2F4;
`;

const HeaderTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 800;
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 12px 20px 14px;
  display: flex;
  flex-direction: column;
`;

const NumberRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const Number = styled.span`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 1;
`;

const Delta = styled.span`
  font-size: 12.5px;
  font-weight: 700;
  color: #3BA55C;
  white-space: nowrap;
`;

const Description = styled.div`
  font-size: 12px;
  color: #8A8A93;
  margin-top: 5px;
  line-height: 1.5;
`;

const ChartWrap = styled.svg`
  width: 100%;
  flex: 1;
  min-height: 0;
  margin-top: 10px;
  overflow: visible;
`;

const AxisRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const AxisLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${(props) => (props.$active ? '#17171B' : '#B4B4BC')};
`;

function buildPath(points, width = 260, height = 96, padding = 6) {
  if (points.length === 0) return { linePath: '', areaPath: '', coords: [] };

  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (points.length - 1 || 1);

  const coords = points.map((p, i) => {
    const x = padding + i * stepX;
    const y = height - padding - ((p - min) / range) * (height - padding * 2);
    return [x, y];
  });

  const linePath = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ');
  const areaPath = `${linePath} L${coords[coords.length - 1][0]} ${height} L${coords[0][0]} ${height} Z`;

  return { linePath, areaPath, coords };
}

export default function HandbookGrowthCard({
  count,
  delta,
  dateRange,
  points = [],
  labels = [],
}) {
  const { linePath, areaPath, coords } = buildPath(points);

  return (
    <Card>
      <Header>
        <img src={growthIcon} alt="" width={15} height={15} />
        <HeaderTitle>Handbook growth</HeaderTitle>
      </Header>

      <Body>
        <NumberRow>
          <Number>{count}</Number>
          <Delta>{delta}</Delta>
        </NumberRow>

        <Description>Answers to your questions become team rules.</Description>

        {coords.length > 0 && (
          <ChartWrap viewBox="0 0 260 96" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hbGrow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6000" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FF6000" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#hbGrow)" />
            <path d={linePath} fill="none" stroke="#FF6000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {coords.map(([x, y], i) => {
              const isLast = i === coords.length - 1;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={isLast ? 4.5 : 3.2}
                  fill={isLast ? '#FF6000' : '#fff'}
                  stroke={isLast ? '#fff' : '#FFC49B'}
                  strokeWidth={isLast ? 2.5 : 2}
                />
              );
            })}
          </ChartWrap>
        )}

        {labels.length > 0 && (
          <AxisRow>
            {labels.map((label, i) => (
              <AxisLabel key={label} $active={i === labels.length - 1}>{label}</AxisLabel>
            ))}
          </AxisRow>
        )}
      </Body>
    </Card>
  );
}