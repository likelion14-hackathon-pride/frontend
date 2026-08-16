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

function SavedTimeCard({ value, delta }) {
  return (
    <StatCardShell title="이번 주 절약한 대표 시간">
      <NumberBlock>
        <ValueText>{value}</ValueText>
        <DeltaText>{delta}</DeltaText>
      </NumberBlock>

      <GraphWrap>
        <GraphBox>
          <svg
            width="286"
            height="53"
            viewBox="0 0 286 53"
            fill="none"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <path
              d="M0 26.5L57.1667 20.7L114.333 15.7L171.5 10.8L228.667 9.1L285.833 0V52.2H0V26.5Z"
              fill="#8FD3A8"
              fillOpacity="0.16"
            />
          </svg>
          <svg
            width="286"
            height="29"
            viewBox="0 0 286 29"
            fill="none"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <path
              d="M0 27.5001L57.1667 21.7001L114.333 16.7001L171.5 11.8001L228.667 10.1001L285.833 1.00012"
              stroke="#4CB77A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <EndDot />
        </GraphBox>
      </GraphWrap>

      <Footnote>최근 6주 추이</Footnote>
    </StatCardShell>
  );
}

export default SavedTimeCard;
