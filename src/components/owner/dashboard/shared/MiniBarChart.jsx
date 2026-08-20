import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: ${({ $height }) => $height}px;
  align-self: stretch;
`;

const Bar = styled.span`
  flex: 1 0 0;
  min-width: 4px;
  border-radius: 3px 3px 1px 1px;
  height: ${({ $pct }) => Math.max($pct, 6)}%;
  background: ${({ $active, $color, $mutedColor }) => ($active ? $color : $mutedColor)};
`;

function MiniBarChart({ values, height = 36, color = '#2563eb', mutedColor = '#dbe4fc' }) {
  const max = Math.max(...values, 1);
  return (
    <Row $height={height}>
      {values.map((v, i) => (
        <Bar
          key={i}
          $pct={(v / max) * 100}
          $active={i === values.length - 1}
          $color={color}
          $mutedColor={mutedColor}
        />
      ))}
    </Row>
  );
}

export default MiniBarChart;
