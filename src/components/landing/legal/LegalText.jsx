import styled from 'styled-components';
import { colors } from '../theme';

// 개인정보처리방침 / 이용약관 본문에서 공통으로 쓰는 타이포 프리미티브.
export const Meta = styled.p`
  margin: 0 0 20px;
  font-size: 13px;
  color: ${colors.muted};
`;

export const Lead = styled.p`
  margin: 0 0 28px;
  font-size: 14.5px;
  line-height: 1.75;
  color: ${colors.body};
`;

export const Section = styled.section`
  margin-top: 28px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const H2 = styled.h2`
  margin: 0 0 10px;
  font-size: 16.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${colors.ink};
`;

export const H3 = styled.h3`
  margin: 16px 0 6px;
  font-size: 14.5px;
  font-weight: 700;
  color: ${colors.ink};

  &:first-child {
    margin-top: 0;
  }
`;

export const P = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  line-height: 1.75;
  color: ${colors.body};
`;

export const Ul = styled.ul`
  margin: 0 0 10px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Ol = styled.ol`
  margin: 0 0 10px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Li = styled.li`
  font-size: 14px;
  line-height: 1.7;
  color: ${colors.body};

  strong {
    color: ${colors.ink};
  }
`;
