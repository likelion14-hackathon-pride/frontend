import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
`;

const Label = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: ${({ $size }) => Math.round($size * 0.24)}px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -0.5px;
`;

function DonutGauge({ value, size = 64, stroke = 8, trackColor = '#eaf1fe', progressColor = '#2563eb' }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <Wrap $size={size}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <Label $size={size}>{value}%</Label>
    </Wrap>
  );
}

export default DonutGauge;
