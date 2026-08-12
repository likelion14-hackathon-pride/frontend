import { useState } from 'react';
import styled from 'styled-components';
import { colors } from './theme';
import eyeIcon from '../../../assets/icons/eye.svg';
import eyeOffIcon from '../../../assets/icons/eye-off.svg';

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
  color: #a0a0a8;
  margin: 0;
`;

const EyeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
`;

export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  hint,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputBox>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          id={name}
          name={name}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {isPassword && (
          <EyeButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
            <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" width={14} height={14} />
          </EyeButton>
        )}
      </InputBox>
      {hint && <HintText>{hint}</HintText>}
    </Wrapper>
  );
}
