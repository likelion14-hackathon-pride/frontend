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
  color: #a0a0a8;
`;

const ChipList = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  font-size: 13.5px;
  font-weight: 700;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.15s;

  border: 1px solid ${(props) => (props.$active ? 'transparent' : '#FFD9BC')};
  background: ${(props) =>
    props.$active
      ? props.$isCompany
        ? 'linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%)'
        : '#FFE3CE'
      : '#fff'};
  color: ${(props) => (props.$active ? (props.$isCompany ? '#fff' : '#B4520A') : '#8A6A55')};
  box-shadow: ${(props) =>
    props.$active
      ? props.$isCompany
        ? '0 3px 16px rgba(255, 96, 0, 0.45)'
        : '0 3px 12px rgba(255, 138, 61, 0.34)'
      : 'none'};

  &:hover {
    box-shadow: ${(props) =>
      props.$active
        ? props.$isCompany
          ? '0 3px 16px rgba(255, 96, 0, 0.45)'
          : '0 3px 12px rgba(255, 138, 61, 0.34)'
        : 'inset 0 0 0 999px rgba(23, 23, 27, 0.05), 0 3px 10px rgba(17, 17, 20, 0.08)'};
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
          <Chip
            key={s.id}
            $active={activeId === s.id}
            $isCompany={s.id === 'company'}
            onClick={() => onSelect?.(s.id)}
          >
            {s.label}
          </Chip>
        ))}
      </ChipList>
    </Row>
  );
}
