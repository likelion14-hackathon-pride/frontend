import { useState } from 'react';
import styled from 'styled-components';

const InputBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #E6E6EA;
  border-radius: 18px;
  padding: 8px 8px 8px 18px;
  box-shadow: 0 10px 30px 0 rgba(17, 17, 20, 0.05), 0 1px 2px 0 rgba(17, 17, 20, 0.04);
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  font-size: 16.5px;
  padding: 10px 0;
  border: none;
  background: transparent;
  outline: none;
`;

const SendButton = styled.button`
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%);
  color: #fff;
  font-size: 17.5px;
  font-weight: 700;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 14px rgba(255, 96, 0, 0.30);

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const FooterText = styled.div`
  font-size: 12.5px;
  color: #B4B4BC;
  text-align: center;
`;


export default function ChatInputBar({ scopeLabel = 'payment-api', value, onChange, onSend }) {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;

  function handleChange(e) {
    if (isControlled) onChange?.(e.target.value);
    else setInternalValue(e.target.value);
  }

  function handleSend() {
    if (!inputValue.trim()) return;
    onSend?.(inputValue);
    if (!isControlled) setInternalValue('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSend();
  }

  return (
    <>
      <InputBarWrap>
        <InputRow>
          <Input
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask SAI anything about this team"
          />
          <SendButton onClick={handleSend} disabled={!inputValue.trim()}>↑</SendButton>
        </InputRow>
  
        <FooterText>
          Answers come from this team's handbook only · {scopeLabel}
        </FooterText>
      </InputBarWrap>
    </>
  );
}