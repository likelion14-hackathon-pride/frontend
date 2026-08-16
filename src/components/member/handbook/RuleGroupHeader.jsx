import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 2px;
  flex-wrap: wrap;
`;

const CornerIcon = styled.span`
  flex: none;
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -9px;
    width: 16px;
    height: 16px;
    border-left: 1px solid #dcdce2;
    border-bottom: 1px solid #dcdce2;
    border-radius: 0 0 0 5px;
  }
`;

const Dot = styled.span`
  flex: none;
  width: 9px;
  height: 9px;
  border-radius: 3px;
  background: #ff6000;
`;

const Name = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #17171b;
  line-height: 127%;
`;

const Meta = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 13.5px;
  color: #a0a0a8;
`;

const Line = styled.span`
  flex: 1;
  min-width: 12px;
  height: 1px;
  background: #e6e6eb;
`;

const Count = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 12px;
  color: #c0c0c8;
  font-weight: 600;
  font-family: 'IBM Plex Mono', monospace;
`;

export default function RuleGroupHeader({ name, meta, count }) {
  return (
    <Row>
      <CornerIcon />
      <Dot />
      <Name>{name}</Name>
      {meta && <Meta>{meta}</Meta>}
      <Line />
      <Count>{count}</Count>
    </Row>
  );
}
