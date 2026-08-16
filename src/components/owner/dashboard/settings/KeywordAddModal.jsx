import styled from 'styled-components';
import RiskKeywordForm from '../../onboarding/step3-risk/RiskKeywordForm';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(23, 23, 27, 0.45);
  backdrop-filter: blur(6px);
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 480px;
  flex-direction: column;
  gap: 16px;
  padding: 22px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 30px 80px -34px rgba(23, 44, 90, 0.4);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.2px;
`;

const CloseButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  border-radius: 999px;
  background: #f4f4f6;
  color: #6b6b73;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #e6e6eb;
  }
`;

function KeywordAddModal({ onAddKeyword, onClose }) {
  const handleAdd = (label, level) => {
    onAddKeyword(label, level);
    onClose();
  };

  return (
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <Card>
        <HeadRow>
          <Title>키워드 추가</Title>
          <CloseButton type="button" onClick={onClose} aria-label="닫기">
            ✕
          </CloseButton>
        </HeadRow>
        <RiskKeywordForm onAddKeyword={handleAdd} showSuggestions={false} />
      </Card>
    </Overlay>
  );
}

export default KeywordAddModal;
