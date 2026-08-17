import styled from 'styled-components';
import TaskCard from './TaskCard';

const COLUMN_THEME = {
  ready: {
    bg: 'linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%)',
    color: '#fff',
    countBg: 'rgba(255, 255, 255, 0.28)',
    shadow: '0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08)',
  },
  inprogress: {
    bg: '#F7E5D3',
    color: '#8A4708',
    countBg: 'rgba(255, 255, 255, 0.62)',
    shadow: '0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08)',
  },
  waiting: {
    bg: '#FAF0E4',
    color: '#A85B14',
    countBg: 'rgba(255, 255, 255, 0.62)',
    shadow: '0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08)',
  },
  answered: {
    bg: '#FDF7F2',
    color: '#B4600D',
    countBg: 'rgba(255, 255, 255, 0.62)',
    shadow: '0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08)',
  },
  done: {
    bg: '#fff',
    color: '#6B6B73',
    countBg: '#F2F2F4',
    border: '#EAEAEE',
    shadow: '0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08)',
  },
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  min-width: 0;
`;

const ColumnHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  border-radius: 20px;
  background: ${(props) => props.$theme.bg};
  border: 1px solid ${(props) => props.$theme.border || 'transparent'};
  box-shadow: ${(props) => props.$theme.shadow};
`;

const ColumnName = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.$theme.color};
`;

const CountBadge = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.$theme.color};
  background: ${(props) => props.$theme.countBg};
  border-radius: 50%;
`;

export default function TaskColumn({ id, name, cards = [], onCardClick, onCtaClick }) {
  const theme = COLUMN_THEME[id] ?? COLUMN_THEME.done;

  return (
    <Column>
      <ColumnHead $theme={theme}>
        <ColumnName $theme={theme}>{name}</ColumnName>
        <CountBadge $theme={theme}>{cards.length}</CountBadge>
      </ColumnHead>

      {cards.map((c) => (
        <TaskCard
          key={c.id}
          {...c}
          onClick={() => onCardClick?.(c, id)}
          onCtaClick={() => onCtaClick?.(c, id)}
        />
      ))}
    </Column>
  );
}
