import { useEffect } from 'react';
import styled from 'styled-components';
import { colors, fonts } from './theme';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(23, 23, 27, 0.42);
  backdrop-filter: blur(2px);
`;

const Card = styled.div`
  width: 100%;
  max-width: 640px;
  max-height: min(720px, 100%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 30px 80px rgba(17, 17, 20, 0.35);
  font-family: ${fonts.body};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 22px 24px;
  border-bottom: 1px solid ${colors.line};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${colors.ink};
`;

const CloseButton = styled.button`
  display: flex;
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  background: ${colors.paper};
  color: ${colors.body};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f1ece5;
  }
`;

const Body = styled.div`
  overflow-y: auto;
  padding: 24px;
`;

export default function LegalModal({ open, title, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Overlay role="presentation" onClick={onClose}>
      <Card role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <CloseButton type="button" aria-label="닫기" onClick={onClose}>
            ×
          </CloseButton>
        </Header>
        <Body>{children}</Body>
      </Card>
    </Overlay>
  );
}
