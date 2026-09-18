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

const InfoButton = styled.button`
  flex: none;
  margin-left: auto;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: none;
  color: #b4b4bc;
  cursor: pointer;

  &:hover {
    color: #6b6b73;
  }
`;

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 8.2V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9" cy="5.6" r="0.95" fill="currentColor" />
    </svg>
  );
}

export default function ProjectFilterChips({ projects = [], activeId = 'all', onSelect, onInfoClick }) {
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
      {onInfoClick && (
        <InfoButton type="button" onClick={onInfoClick} aria-label="Board info">
          <InfoIcon />
        </InfoButton>
      )}
    </Row>
  );
}
