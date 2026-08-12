import styled from 'styled-components';
import { colors } from './theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const Option = styled.button`
  flex: 1;
  padding: 14px 0 16px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;

  background: ${({ $active }) => ($active ? '#FFF3E6' : '#FAFAFB')};
  border: 1px solid ${({ $active }) => ($active ? '#F5C48D' : '#EFEFF1')};
  color: ${({ $active }) => ($active ? colors.textPrimary : '#8A8A93')};
`;

export default function RoleSelect({
  value,
  onChange,
  ownerLabel = '대표·관리자',
  memberLabel = '팀원',
}) {
  return (
    <Wrapper>
      <Option type="button" $active={value === 'owner'} onClick={() => onChange('owner')}>
        {ownerLabel}
      </Option>
      <Option type="button" $active={value === 'member'} onClick={() => onChange('member')}>
        {memberLabel}
      </Option>
    </Wrapper>
  );
}
