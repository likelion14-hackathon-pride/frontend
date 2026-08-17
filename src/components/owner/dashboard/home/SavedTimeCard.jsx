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

const GraphWrap = styled.div`
  display: flex;
  width: 285.833px;
  padding: 43px 0 2px 0;
  justify-content: center;
  align-items: center;
`;

const GraphBox = styled.div`
  position: relative;
  width: 285.833px;
  height: 58px;
  flex-shrink: 0;
`;

const EndDot = styled.span`
  position: absolute;
  top: -3.5px;
  right: -4.5px;
  width: 9px;
  height: 9px;
  border-radius: 50px;
  border: 2px solid #fff;
  background: #4cb77a;
  box-shadow: 0 0 0 1px rgba(76, 183, 122, 0.45);
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

const WIDTH = 286;
const HEIGHT = 52;

// 주별 절약 분을 꺾은선으로. 값이 전부 같거나 0이어도 선이 가운데에 곧게 그려지도록 한다.
function buildPaths(weeklyTrend) {
  const points = weeklyTrend.map((week) => Number(week.minutes) || 0);
  if (points.length < 2) return null;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = WIDTH / (points.length - 1);

  const coords = points.map((value, index) => {
    const x = index * stepX;
    const y = HEIGHT - 2 - ((value - min) / range) * (HEIGHT - 6);
    return [x, y];
  });

  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ');
  const area = `${line} L${WIDTH} ${HEIGHT} L0 ${HEIGHT} Z`;

  return { line, area, last: coords[coords.length - 1] };
}

function SavedTimeCard({ value, delta, weeklyTrend = [], minutesPerAnswer }) {
  const paths = buildPaths(weeklyTrend);

  return (
    <StatCardShell title="이번 주 절약한 대표 시간">
      <NumberBlock>
        <ValueText>{value}</ValueText>
        <DeltaText>{delta}</DeltaText>
      </NumberBlock>

      <GraphWrap>
        <GraphBox>
          {paths && (
            <>
              <svg
                width={WIDTH}
                height={HEIGHT}
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                fill="none"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                <path d={paths.area} fill="#8FD3A8" fillOpacity="0.16" />
                <path
                  d={paths.line}
                  stroke="#4CB77A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <EndDot style={{ top: paths.last[1] - 4.5, right: -4.5 }} />
            </>
          )}
        </GraphBox>
      </GraphWrap>

      <Footnote>
        최근 {weeklyTrend.length}주 추이
        {minutesPerAnswer ? ` · 답변 1건당 ${minutesPerAnswer}분` : ''}
      </Footnote>
    </StatCardShell>
  );
}

export default SavedTimeCard;
