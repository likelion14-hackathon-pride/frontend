import styled from "styled-components";
import { colors } from "./theme";

const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #EFEFF1;
`;

const Text = styled.span`
  font-size: 10.5px;
  font-weight: 600;
  color: #C4C4CC;
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
  border: 1px solid #EAEAEE;
  background: #F7F7F8;
  color: #6B6B73;
  text-align: center;
  font-size: 12.5px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;


export default function GuestSection({ onOwnerPreview, onMemberPreview }) {
  return (
    <>
      <DividerRow>
        <Line />
        <Text>로그인 없이 둘러보기</Text>
        <Line />
      </DividerRow>
      <PreviewContainer>
        <PreviewButton onClick={onOwnerPreview}>대표 화면</PreviewButton>
        <PreviewButton onClick={onMemberPreview}>팀원 화면</PreviewButton>
      </PreviewContainer>
    </>
  );
}