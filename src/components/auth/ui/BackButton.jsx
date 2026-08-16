import styled from 'styled-components';
import { colors } from './theme';

const StyledBackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid ${colors.inputborder};
  background: #fff;
  color: ${colors.textThird};
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${colors.bglightgrey};
  }
`;

export default function BackButton({ onClick, children = '이전' }) {
  return (
    <StyledBackButton type="button" onClick={onClick}>
      <span aria-hidden="true">‹</span>
      {children}
    </StyledBackButton>
  );
}
