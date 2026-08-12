import styled from 'styled-components';
import { colors } from './theme';

// 시작 버튼
export const StartButton = styled.button`
  width: 100%;
  padding: 15px 20px 17px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(97deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  box-shadow:
    0 6px 16px 0 rgba(255, 96, 0, 0.28),
    0 1px 0 0 rgba(255, 255, 255, 0.25) inset;
  color: #fff;
  font-size: 14.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 10px 26px 0 rgba(255, 96, 0, 0.36);
  }
`;
