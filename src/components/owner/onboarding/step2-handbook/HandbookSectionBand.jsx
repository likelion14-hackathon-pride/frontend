import styled from 'styled-components';
import { colors, radii } from '../theme';

const TONE = {
  company: { background: colors.navy, color: '#FFFFFF', subtleColor: 'rgba(255, 255, 255, 0.6)' },
  project: { background: colors.primaryBlue, color: '#FFFFFF', subtleColor: 'rgba(255, 255, 255, 0.75)' },
};

const Band = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  border-radius: ${radii.lg};
  background: ${({ $tone }) => TONE[$tone].background};
  color: ${({ $tone }) => TONE[$tone].color};
`;

const Left = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
`;

const Icon = styled.span`
  font-size: 14px;
  flex-shrink: 0;
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;
`;

const Description = styled.span`
  font-size: 12px;
  color: ${({ $tone }) => TONE[$tone].subtleColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Count = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $tone }) => TONE[$tone].subtleColor};
  flex-shrink: 0;
`;

function HandbookSectionBand({ tone, icon, title, description, count }) {
  return (
    <Band $tone={tone}>
      <Left>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Description $tone={tone}>{description}</Description>
      </Left>
      <Count $tone={tone}>{count}</Count>
    </Band>
  );
}

export default HandbookSectionBand;
