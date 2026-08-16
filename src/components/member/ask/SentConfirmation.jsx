import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  background: #fff;
  border: 1px solid #e4f0e7;
  border-radius: 12px;
  padding: 13px 15px;
`;

const CheckIcon = styled.span`
  width: 19px;
  height: 19px;
  flex: none;
  border-radius: 6px;
  background: #3ba55c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 700;
  color: #2e7d46;
`;

const CloseButton = styled.button`
  flex: none;
  font-size: 12.5px;
  font-weight: 700;
  color: #8a8a93;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    color: #17171b;
  }
`;

export default function SentConfirmation({ label, onClose }) {
  return (
    <Box>
      <CheckIcon>
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="1.9">
          <path d="M2 5.2l2 2L8 3" />
        </svg>
      </CheckIcon>
      <Label>{label}</Label>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Box>
  );
}
