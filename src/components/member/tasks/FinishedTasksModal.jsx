import styled from 'styled-components';
import FinishedTaskCard from './FinishedTaskCard';
import { EmptyState } from '../../common/AsyncStates';

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 60;
  background: rgba(23, 23, 27, 0.42);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 760px;
  max-height: 100%;
  overflow-y: auto;
  background: #f7f7f8;
  border-radius: 22px;
  box-shadow: 0 30px 80px rgba(17, 17, 20, 0.35);
  padding: 26px 28px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
`;

const Title = styled.h2`
  flex: 1;
  min-width: 0;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #17171b;
`;

const CloseButton = styled.button`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #eaeaee;
  font-size: 15px;
  color: #6b6b73;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: #d8d8de;
    color: #17171b;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  align-items: start;
`;

export default function FinishedTasksModal({ cards = [], reopeningId, onReopen, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Finished tasks</Title>
          <CloseButton type="button" onClick={onClose}>
            ✕
          </CloseButton>
        </Header>

        {cards.length === 0 ? (
          <EmptyState compact label="No finished tasks yet" />
        ) : (
          <Grid>
            {cards.map((card) => (
              <FinishedTaskCard
                key={card.id}
                {...card}
                reopening={reopeningId === card.id}
                onReopen={() => onReopen(card)}
              />
            ))}
          </Grid>
        )}
      </Modal>
    </Overlay>
  );
}
