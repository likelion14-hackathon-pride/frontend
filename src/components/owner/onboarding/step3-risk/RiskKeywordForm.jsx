import { useState } from 'react';
import styled from 'styled-components';
import { colors, radii } from '../theme';

const Panel = styled.div`
  padding: 24px;
  border-radius: ${radii.lg};
  border: 1px solid ${colors.border};
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

const InputRow = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 12px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  font-size: 14px;

  &::placeholder {
    color: ${colors.textMuted};
  }
`;

const AddButton = styled.button`
  padding: 0 18px;
  border: none;
  border-radius: ${radii.md};
  background: ${({ disabled }) => (disabled ? colors.surfaceSubtle : colors.primaryBlue)};
  color: ${({ disabled }) => (disabled ? colors.textMuted : '#ffffff')};
  font-size: 13px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
`;

const LevelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.border};
`;

const LevelGroupLabel = styled.span`
  font-size: 13px;
  color: ${colors.textMuted};
`;

const LevelOption = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ $active, $color }) => ($active ? $color : colors.textMuted)};
  cursor: pointer;
`;

const SuggestLabel = styled.p`
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

const SuggestHint = styled.p`
  margin: 0 0 12px;
  font-size: 12px;
  color: ${colors.textMuted};
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button`
  padding: 8px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.pill};
  background: ${colors.surfaceMuted};
  font-size: 13px;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

const SUGGESTED_KEYWORDS = ['마이그레이션', '롤백', '스키마 변경', '권한 변경', '크론 수정', '환경변수'];

function RiskKeywordForm({ onAddKeyword }) {
  const [value, setValue] = useState('');
  const [level, setLevel] = useState('warning');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAddKeyword(trimmed, level);
    setValue('');
  };

  return (
    <Panel>
      <Title>추가하기</Title>
      <InputRow onSubmit={handleSubmit}>
        <Input
          placeholder="예: 마이그레이션"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <AddButton type="submit" disabled={!value.trim()}>
          + 추가
        </AddButton>
      </InputRow>

      <LevelRow>
        <LevelGroupLabel>등급</LevelGroupLabel>
        <LevelOption $active={level === 'danger'} $color={colors.danger}>
          <input
            type="radio"
            name="risk-level"
            checked={level === 'danger'}
            onChange={() => setLevel('danger')}
          />
          위험
        </LevelOption>
        <LevelOption $active={level === 'warning'} $color={colors.warning}>
          <input
            type="radio"
            name="risk-level"
            checked={level === 'warning'}
            onChange={() => setLevel('warning')}
          />
          주의
        </LevelOption>
      </LevelRow>

      <SuggestLabel>추천</SuggestLabel>
      <SuggestHint>다른 팀이 자주 등록하는 단어입니다 · 누르면 바로 추가됩니다</SuggestHint>
      <ChipRow>
        {SUGGESTED_KEYWORDS.map((keyword) => (
          <Chip key={keyword} type="button" onClick={() => onAddKeyword(keyword, level)}>
            + {keyword}
          </Chip>
        ))}
      </ChipRow>
    </Panel>
  );
}

export default RiskKeywordForm;
