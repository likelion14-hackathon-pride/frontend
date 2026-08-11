import styled from "styled-components";
import { colors } from "./theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 11.5px;
  font-weight: 600;
  color: ${colors.textThird};
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid ${colors.inputborder};
  background: ${colors.bglightgrey};

  &:focus-within {
    border-color: ${colors.textLight};
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: ${colors.textPrimary};

  &::placeholder {
    color: ${colors.textLight};
  }
`;

const HintText = styled.p`
  font-size: 11.5px;
  font-weight: 400;
  color: #A0A0A8;
  margin: 0;
`;



export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  hint,
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputBox>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputBox>
      {hint && <HintText>{hint}</HintText>}
    </Wrapper>
  );
}