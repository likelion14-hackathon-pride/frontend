import { useState } from 'react';
import styled from 'styled-components';

import { RISK_LEVEL } from '../../../../apis/constants';

// 키는 백엔드 RiskKeyword.Level 값 그대로다(policy/models.py:5).
const LEVEL_META = {
  DANGER: {
    label: '위험',
    color: '#DC2626',
    bg: '#FEF2F2',
    hoverBorder: '#F8DADA',
    hoverBg: '#FFFAFA',
  },
  CAUTION: {
    label: '주의',
    color: '#EA6A0A',
    bg: '#FFF7ED',
    hoverBorder: '#FBE1D0',
    hoverBg: '#FFFBF6',
  },
};

const Panel = styled.div`
  flex: 1 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  align-self: stretch;
`;

const TitleWrap = styled.span`
  display: flex;
  min-width: 92.78px;
  padding: 3px 0 2px 0;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  color: #17171b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const InputRow = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const Input = styled.input`
  flex: 1 0 0;
  box-sizing: border-box;
  height: 56px;
  padding: 0 16px;
  border-radius: 11px;
  border: 1px solid #e6e6eb;
  background: #fff;
  color: #17171b;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: #b4b4bc;
  }

  &:focus {
    outline: none;
    border: 0.667px solid #2563eb;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }
`;

const AddButton = styled.button`
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 56px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 11px;
  background: ${({ disabled }) => (disabled ? '#E6E6EB' : '#2E2E36')};
  color: ${({ disabled }) => (disabled ? '#A0A0A8' : '#FFFFFF')};
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const LevelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  align-self: stretch;
`;

const LevelGroupLabelWrap = styled.span`
  display: flex;
  padding-bottom: 1px;
  flex-direction: column;
  align-items: flex-start;
`;

const LevelGroupLabel = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const LevelOption = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
  border: ${({ $active, $color, $hoverBorder }) =>
    $active ? `1px solid ${$color}` : `1px solid #E6E6EB`};
  background: ${({ $active, $bg }) => ($active ? $bg : '#FFF')};

  &:hover {
    border: ${({ $active, $hoverBorder }) => (!$active ? `1.333px solid ${$hoverBorder}` : undefined)};
    background: ${({ $active, $hoverBg }) => (!$active ? $hoverBg : undefined)};
  }
`;

const LevelDot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ $active, $color }) => ($active ? $color : '#D8D8DE')};
`;

const LevelOptionLabelWrap = styled.span`
  display: flex;
  padding: 3px 0 1px 0;
  flex-direction: column;
  align-items: center;
`;

const LevelOptionLabel = styled.span`
  color: ${({ $active, $color }) => ($active ? $color : '#6B6B73')};
  text-align: center;
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Divider = styled.span`
  height: 1px;
  align-self: stretch;
  background: #f0f0f2;
`;

const SuggestSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const SuggestRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  align-self: stretch;
`;

const SuggestLabelWrap = styled.span`
  display: flex;
  padding-bottom: 1px;
  flex-direction: column;
  align-items: flex-start;
`;

const SuggestLabel = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const SuggestHintWrap = styled.span`
  display: flex;
  flex: 1 0 0;
  padding: 2px 0 1px 0;
  flex-direction: column;
  align-items: flex-start;
`;

const SuggestHint = styled.span`
  align-self: stretch;
  color: #b4b4bc;
  font-family: Pretendard;
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ChipRow = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0 7px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  display: flex;
  padding: 11px 14px 9px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1px dashed #dcdce2;
  background: #fff;
  color: #6b6b73;
  text-align: center;
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    border: 1.333px solid #2563eb;
    background: #f5f8ff;
    color: #2563eb;
  }
`;

const SUGGESTED_KEYWORDS = [
  '마이그레이션',
  '롤백',
  '스키마 변경',
  '권한 변경',
  '크론 수정',
  '환경변수',
];

function RiskKeywordForm({ onAddKeyword, showSuggestions = true, pending = false }) {
  const [value, setValue] = useState('');
  // 서버 기본값과 같게 둔다(RiskKeyword.level default=CAUTION).
  const [level, setLevel] = useState(RISK_LEVEL.CAUTION);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || pending) return;
    onAddKeyword(trimmed, level);
    setValue('');
  };

  return (
    <Panel>
      <TitleRow>
        <TitleWrap>
          <Title>추가하기</Title>
        </TitleWrap>
      </TitleRow>

      <InputRow onSubmit={handleSubmit}>
        <Input
          placeholder="예: 마이그레이션"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <AddButton type="submit" disabled={!value.trim() || pending}>
          {pending ? '추가 중…' : '+ 추가'}
        </AddButton>
      </InputRow>

      <LevelRow>
        <LevelGroupLabelWrap>
          <LevelGroupLabel>등급</LevelGroupLabel>
        </LevelGroupLabelWrap>
        {Object.entries(LEVEL_META).map(([key, meta]) => {
          const active = level === key;
          return (
            <LevelOption
              key={key}
              type="button"
              $active={active}
              $color={meta.color}
              $bg={meta.bg}
              $hoverBorder={meta.hoverBorder}
              $hoverBg={meta.hoverBg}
              onClick={() => setLevel(key)}
              aria-pressed={active}
            >
              <LevelDot $active={active} $color={meta.color} />
              <LevelOptionLabelWrap>
                <LevelOptionLabel $active={active} $color={meta.color}>
                  {meta.label}
                </LevelOptionLabel>
              </LevelOptionLabelWrap>
            </LevelOption>
          );
        })}
      </LevelRow>

      {showSuggestions && (
        <>
          <Divider />

          <SuggestSection>
            <SuggestRow>
              <SuggestLabelWrap>
                <SuggestLabel>추천</SuggestLabel>
              </SuggestLabelWrap>
              <SuggestHintWrap>
                <SuggestHint>
                  다른 팀이 자주 등록하는 단어입니다 · 누르면 바로 추가됩니다
                </SuggestHint>
              </SuggestHintWrap>
            </SuggestRow>
            <ChipRow>
              {SUGGESTED_KEYWORDS.map((keyword) => (
                <Chip key={keyword} type="button" onClick={() => onAddKeyword(keyword, level)}>
                  + {keyword}
                </Chip>
              ))}
            </ChipRow>
          </SuggestSection>
        </>
      )}
    </Panel>
  );
}

export default RiskKeywordForm;
