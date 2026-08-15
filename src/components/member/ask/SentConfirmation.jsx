import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  background: #fff;
  border: 1px solid #E4F0E7;
  border-radius: 12px;
  padding: 13px 15px;
`;

const CheckIcon = styled.span`
  width: 19px;
  height: 19px;
  flex: none;
  border-radius: 6px;
  background: #3BA55C;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 700;
  color: #2E7D46;
`;

const CloseButton = styled.button`
  flex: none;
  font-size: 12.5px;
  font-weight: 700;
  color: #8A8A93;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    color: #17171B;
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