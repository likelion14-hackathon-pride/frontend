import styled from "styled-components";
import { colors } from "./theme";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    border-radius: 999px;
    padding: 3px;
    background: #F2F2F4;
`;

const Option = styled.button`
  flex: 1;
  padding: 12px 0;
  border-radius: 999px;       
  border: none;
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 700;

  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? colors.textPrimary : "#8A8A93")};
`;



export default function ModeToggle({ value, onChange }) {
  return (
    <Wrapper>
      <Option type="button" $active={value === "signup"} onClick={() => onChange("signup")}>
        회원가입
      </Option>
      <Option type="button" $active={value === "login"} onClick={() => onChange("login")}>
        로그인
      </Option>
    </Wrapper>
  );
}