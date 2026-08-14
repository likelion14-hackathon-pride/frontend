import styled from 'styled-components';
import { colors, radii } from '../theme';

const LEVEL_META = {
  danger: { badge: '!', color: colors.danger, label: '위험' },
  warning: { badge: '⚠', color: colors.warning, label: '주의' },
};

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-left: 3px solid ${({ $color }) => $color};
  background: ${colors.surface};
  border-radius: ${radii.sm};
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: ${({ $color }) => $color};
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
`;

const Label = styled.span`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

const Tag = styled.span`
  padding: 4px 10px;
  border-radius: ${radii.pill};
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-size: 12px;
  font-weight: 700;
`;

const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: ${colors.textMuted};
  font-size: 14px;
  cursor: pointer;
  padding: 4px;
`;

function RiskKeywordItem({ label, level, onRemove }) {
  const meta = LEVEL_META[level];
  const tagBg = level === 'danger' ? colors.dangerBg : colors.warningBg;

  return (
    <Row $color={meta.color}>
      <Badge $color={meta.color}>{meta.badge}</Badge>
      <Label>{label}</Label>
      <Tag $bg={tagBg} $color={meta.color}>
        {meta.label}
      </Tag>
      <RemoveButton type="button" onClick={onRemove} aria-label={`${label} 삭제`}>
        ✕
      </RemoveButton>
    </Row>
  );
}

export default RiskKeywordItem;
