import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  right: 32px;
  bottom: 28px;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #17171b;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 20px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 14px 34px -10px rgba(23, 23, 27, 0.45);

  &:hover {
    opacity: 0.9;
  }
`;

export default function FinishedTasksButton({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Finished tasks
    </Button>
  );
}
