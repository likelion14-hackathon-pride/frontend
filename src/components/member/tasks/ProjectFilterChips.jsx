import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Label = styled.span`
  flex: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.96px;
  color: #b4b4bc;
  margin-right: 2px;
`;

const Chip = styled.button`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 13px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$active ? 'transparent' : '#EAEAEE')};
  background: ${(props) => (props.$active ? '#17171B' : '#fff')};
  color: ${(props) => (props.$active ? '#fff' : '#6B6B73')};
  box-shadow: none;
  cursor: pointer;
`;

export default function ProjectFilterChips({ projects = [], activeId = 'all', onSelect }) {
  return (
    <Row>
      <Label>PROJECT</Label>
      <Chip $active={activeId === 'all'} onClick={() => onSelect?.('all')}>
        All
      </Chip>
      {projects.map((p) => (
        <Chip key={p.id} $active={activeId === p.id} onClick={() => onSelect?.(p.id)}>
          #{p.label}
        </Chip>
      ))}
    </Row>
  );
}