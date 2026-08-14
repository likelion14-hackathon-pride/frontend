import { useState } from 'react';
import styled from 'styled-components';
import { colors, radii } from '../theme';
import { getQuestionStatus } from './handbookData';

const STATUS_META = {
  unconfirmed: { label: '미확인', bg: '#F5F5F7', color: '#A0A0A8' },
  confirmed: { label: '확인', bg: '#E7F6EC', color: '#1F7A45' },
  drafting: { label: '작성 중', bg: '#EAF1FE', color: colors.primaryBlue },
  undecided: { label: '정해진 적 없음', bg: '#F0F0F2', color: '#A0A0A8' },
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 18px;
  border-radius: 16px;
  opacity: ${({ $status }) => ($status === 'undecided' ? 0.55 : 1)};
  transition: opacity 0.15s ease;
`;

const MainLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $status }) =>
    $status === 'confirmed' ? '#1F7A45' : $status === 'drafting' ? colors.primaryBlue : 'transparent'};
  border: 1.5px solid
    ${({ $status }) => ($status === 'confirmed' || $status === 'drafting' ? 'transparent' : colors.border)};
`;

const QuestionText = styled.p`
  margin: 0;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

const ChipGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Chip = styled.button`
  padding: 7px 14px;
  border: none;
  border-radius: ${radii.pill};
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ $active, $tone }) => {
    if (!$active) return colors.surfaceSubtle;
    return $tone === 'undecided' ? '#374151' : colors.primaryBlue;
  }};
  color: ${({ $active }) => ($active ? '#FFFFFF' : colors.textMuted)};
`;

const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: ${radii.pill};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  background: ${({ $status }) => STATUS_META[$status].bg};
  color: ${({ $status }) => STATUS_META[$status].color};
`;

const DraftRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
`;

const DraftInput = styled.input`
  flex-grow: 1;
  padding: 10px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  font-size: 13px;
  color: ${colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${colors.primaryBlue};
  }
`;

const SaveButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: ${radii.pill};
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? colors.surfaceSubtle : colors.primaryBlue)};
  color: ${({ disabled }) => (disabled ? colors.textMuted : '#FFFFFF')};
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-left: 20px;
`;

const SummaryText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${colors.textSecondary};
`;

const EditButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.surfaceSubtle};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textPrimary};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`;

function QuestionRow({ question, answer, onChange }) {
  const status = getQuestionStatus(answer);
  const [draftText, setDraftText] = useState(answer.customText || '');

  const handleSave = () => {
    if (!draftText.trim()) return;
    onChange({ selected: 'custom', customText: draftText.trim(), customSaved: true });
  };

  return (
    <Row $status={status}>
      <MainLine>
        <StatusDot $status={status} />
        <QuestionText>{question.text}</QuestionText>
        <ChipGroup>
          {question.options.map((option, index) => (
            <Chip
              key={option}
              type="button"
              $active={answer.selected === index}
              onClick={() => onChange({ selected: index })}
            >
              {option}
            </Chip>
          ))}
          <Chip
            type="button"
            $active={answer.selected === 'custom'}
            onClick={() => {
              setDraftText(answer.customText || '');
              onChange({ selected: 'custom', customSaved: false });
            }}
          >
            직접 입력
          </Chip>
          <Chip
            type="button"
            $active={answer.selected === 'undecided'}
            $tone="undecided"
            onClick={() => onChange({ selected: 'undecided' })}
          >
            정해진 적 없음
          </Chip>
        </ChipGroup>
        <StatusBadge $status={status}>{STATUS_META[status].label}</StatusBadge>
      </MainLine>

      {status === 'drafting' && (
        <DraftRow>
          <DraftInput
            type="text"
            value={draftText}
            placeholder="실제로 어떻게 하고 있는지 적어 주세요"
            onChange={(event) => setDraftText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleSave();
            }}
          />
          <SaveButton type="button" disabled={!draftText.trim()} onClick={handleSave}>
            저장
          </SaveButton>
        </DraftRow>
      )}

      {status === 'confirmed' && answer.selected === 'custom' && (
        <SummaryRow>
          <SummaryText>{answer.customText}</SummaryText>
          <EditButton
            type="button"
            onClick={() => {
              setDraftText(answer.customText || '');
              onChange({ customSaved: false });
            }}
          >
            수정
          </EditButton>
        </SummaryRow>
      )}
    </Row>
  );
}

export default QuestionRow;
