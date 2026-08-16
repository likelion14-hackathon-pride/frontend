import styled from 'styled-components';
import TaskColumn from './TaskColumn';

const EmptyCard = styled.div`
  max-width: 560px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002e;
  padding: 24px 26px;
`;

const EmptyTitle = styled.div`
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.2px;
`;

const EmptyDesc = styled.div`
  font-size: 14.5px;
  color: #8a8a93;
  line-height: 1.65;
  margin-top: 7px;
`;

const EmptyButton = styled.button`
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 17px;
  border-radius: 11px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(255, 96, 0, 0.18);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  align-items: start;
  overflow-x: auto;
  padding: 4px 4px 30px;
`;

export default function TaskBoard({
  columns = [],
  isEmpty = false,
  emptyLabel = '',
  onEmptyReset,
  onCardClick,
  onCtaClick,
}) {
  if (isEmpty) {
    return (
      <EmptyCard>
        <EmptyTitle>No cards in {emptyLabel}</EmptyTitle>
        <EmptyDesc>
          Cards belong to the project the message arrived in. Nothing has come in for this one
          today.
        </EmptyDesc>
        <EmptyButton onClick={onEmptyReset}>Show all projects</EmptyButton>
      </EmptyCard>
    );
  }

  return (
    <Grid>
      {columns.map((col) => (
        <TaskColumn
          key={col.id}
          id={col.id}
          name={col.name}
          cards={col.cards}
          onCardClick={onCardClick}
          onCtaClick={onCtaClick}
        />
      ))}
    </Grid>
  );
}
