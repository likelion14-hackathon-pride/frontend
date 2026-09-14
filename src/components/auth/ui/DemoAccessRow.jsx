import styled from 'styled-components';
import { colors } from './theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background: ${colors.inputborder};
`;

const DividerLabel = styled.span`
  font-size: 11.5px;
  font-weight: 500;
  color: ${colors.textLight};
  white-space: nowrap;
`;

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const DemoButton = styled.button`
  flex: 1;
  padding: 13px 0 15px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  background: ${colors.bglightgrey};
  border: 1px solid ${colors.inputborder};
  color: ${colors.textSecondary};
  transition:
    background 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background: #f2f2f4;
    border-color: #dcdce2;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export default function DemoAccessRow({
  label,
  ownerLabel,
  memberLabel,
  onSelectOwner,
  onSelectMember,
  disabled = false,
}) {
  return (
    <Wrapper>
      <DividerRow>
        <DividerLine />
        <DividerLabel>{label}</DividerLabel>
        <DividerLine />
      </DividerRow>
      <ButtonRow>
        <DemoButton type="button" onClick={onSelectOwner} disabled={disabled}>
          {ownerLabel}
        </DemoButton>
        <DemoButton type="button" onClick={onSelectMember} disabled={disabled}>
          {memberLabel}
        </DemoButton>
      </ButtonRow>
    </Wrapper>
  );
}
