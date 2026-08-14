import styled from 'styled-components';
import { colors, radii } from '../theme';

const Card = styled.div`
  padding: 24px;
  border-radius: ${radii.lg};
  background: ${({ $tint }) => $tint};
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${colors.textSecondary};
`;

const IconRow = styled.div`
  display: flex;
  gap: 6px;
`;

const IconChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: ${colors.surface};
`;

const Value = styled.p`
  margin: 20px 0 0;
  font-size: 32px;
  font-weight: 800;
  color: ${colors.textPrimary};

  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
  }
`;

const Description = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: ${colors.textMuted};
`;

function StatCard({ title, icons, value, unit, description, tint = colors.surfaceMuted }) {
  return (
    <Card $tint={tint}>
      <Head>
        <Title>{title}</Title>
        <IconRow>
          {icons.map((icon, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <IconChip key={index}>{icon}</IconChip>
          ))}
        </IconRow>
      </Head>
      <Value>
        {value}
        {unit && <span>{unit}</span>}
      </Value>
      <Description>{description}</Description>
    </Card>
  );
}

export default StatCard;
