import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 700;
  color: #A0A0A8;
`;

const ChipList = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  font-size: 12.5px;
  font-weight: 700;
  padding: 7px 12px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$active ? 'transparent' : '#EAEAEE')};
  background: ${(props) => (props.$active ? '#17171B' : '#fff')};
  color: ${(props) => (props.$active ? '#fff' : '#8A8A93')};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.05), 0 3px 10px rgba(17, 17, 20, 0.08);
  }
`;

const DEFAULT_SCOPES = [
  { id: 'company', label: 'Company-wide' },
  { id: 'payment-api', label: 'payment-api' },
  { id: 'admin-web', label: 'admin-web' },
];

export default function AskScopeChips({ scopes = DEFAULT_SCOPES, activeId, onSelect }) {
  return (
    <Row>
      <Label>Asking about</Label>
      <ChipList>
        {scopes.map((s) => (
          <Chip key={s.id} $active={activeId === s.id} onClick={() => onSelect?.(s.id)}>
            {s.label}
          </Chip>
        ))}
      </ChipList>
    </Row>
  );
}