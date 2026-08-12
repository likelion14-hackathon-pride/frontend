import styled from 'styled-components';
import { colors } from './theme';

const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #efeff1;
`;

const Text = styled.span`
  font-size: 10.5px;
  font-weight: 600;
  color: #c4c4cc;
  white-space: nowrap;
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const PreviewButton = styled.button`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  padding: 12px 0 14px 0;
  border-radius: 999px;
  border: 1px solid #eaeaee;
  background: #f7f7f8;
  color: #6b6b73;
  text-align: center;
  font-size: 12.5px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export default function GuestSection({ onOwnerPreview, onMemberPreview, t }) {
  return (
    <>
      <DividerRow>
        <Line />
        <Text>{t.guestLink}</Text>
        <Line />
      </DividerRow>
      <PreviewContainer>
        <PreviewButton onClick={onOwnerPreview}>{t.previewOwner}</PreviewButton>
        <PreviewButton onClick={onMemberPreview}>{t.previewMember}</PreviewButton>
      </PreviewContainer>
    </>
  );
}
