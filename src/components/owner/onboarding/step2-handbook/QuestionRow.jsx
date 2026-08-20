import { useState } from 'react';
import styled from 'styled-components';
import ChevronIcon from './ChevronIcon';
import { getQuestionStatus, getAnswerPreviewText } from './handbookData';

const STATUS_META = {
  unconfirmed: { label: '미확인', bg: '#F5F5F7', color: '#A0A0A8' },
  confirmed: { label: '확인', bg: 'rgba(31, 122, 69, 0.10)', color: '#1F7A45' },
  drafting: { label: '작성 중', bg: '#EAF1FE', color: '#1D4ED8' },
  skip: { label: '넘어감', bg: '#F5F5F7', color: '#A0A0A8' },
};

const RING_COLOR = {
  confirmed: 'rgba(31, 122, 69, 0.45)',
  drafting: 'rgba(37, 99, 235, 0.45)',
  skip: 'rgba(23, 23, 27, 0.07)',
  unconfirmed: 'rgba(23, 23, 27, 0.07)',
};

const elevatedShadow = (status) =>
  `0 6px 16px -12px rgba(23, 44, 90, 0.18), 0 0 0 0.5px ${RING_COLOR[status]} inset`;

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: ${({ $status }) => elevatedShadow($status)};
  opacity: ${({ $status }) => ($status === 'skip' ? 0.55 : 1)};
  transition:
    opacity 0.15s ease,
    box-shadow 0.15s ease;
`;

const Header = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 12px;
  padding: 0 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  flex-shrink: 0;
  background: ${({ $status }) =>
    $status === 'confirmed' ? '#1F7A45' : $status === 'drafting' ? '#2563EB' : '#D9DEE7'};
`;

const QuestionText = styled.span`
  flex-shrink: 0;
  max-width: 52%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 145%;
  color: #17171b;
`;

const RightGroup = styled.span`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const AnswerPreview = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 400;
  line-height: 128%;
  color: #6b6b73;
`;

const StatusBadge = styled.span`
  flex-shrink: 0;
  padding: 4.667px 11px 4.333px 10px;
  border-radius: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10.5px;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
  background: ${({ $status }) => STATUS_META[$status].bg};
  color: ${({ $status }) => STATUS_META[$status].color};
`;

const Chevron = styled(ChevronIcon)`
  flex-shrink: 0;
  color: #b4b4bc;
  transform: rotate(${({ $expanded }) => ($expanded ? '180deg' : '0deg')});
  transition: transform 0.15s ease;
`;

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 0 18px 14px 18px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OptionCard = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 45.333px;
  padding: 12.667px 14.667px;
  border-radius: 13px;
  border: 0.667px solid ${({ $active }) => ($active ? 'rgba(37, 99, 235, 0.50)' : '#EFEFF1')};
  background: ${({ $active }) => ($active ? '#F5F8FF' : '#FFFFFF')};
  box-shadow: ${({ $active }) => ($active ? '0 10px 24px -14px rgba(37, 99, 235, 0.35)' : 'none')};
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.45);
  }
`;

const OptionIndex = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  background: ${({ $active }) => ($active ? '#2563EB' : '#f0f0f2')};
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#a0a0a8')};
`;

const OptionText = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: #17171b;
`;

const ActionRow = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 31.333px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const NoOptionHint = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  flex-shrink: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 160%;
  color: #b4b4bc;
`;

const ActionButton = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  height: 29.333px;
  padding: 7.667px 17.052px 6.667px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
  background: ${({ $active, $kind }) => ($active ? ($kind === 'skip' ? '#17171B' : '#EAF1FE') : '#F0F0F2')};
  color: ${({ $active, $kind }) => ($active ? ($kind === 'skip' ? '#FFFFFF' : '#1D4ED8') : '#6B6B73')};
`;

const DraftRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DraftInput = styled.input`
  flex-grow: 1;
  height: 44px;
  box-sizing: border-box;
  padding: 0 16px;
  border: 0.667px solid #e5e7eb;
  border-radius: 14px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  color: #17171b;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

const SaveButton = styled.button`
  box-sizing: border-box;
  height: 40.667px;
  padding: 12.667px 20px 13px 18px;
  border: none;
  border-radius: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#F0F0F2' : '#2563EB')};
  color: ${({ disabled }) => (disabled ? '#B4B4BC' : '#FFFFFF')};
`;

const SummaryRow = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  padding: 0 16px;
  gap: 10px;
  border-radius: 12px;
  border: 0.667px solid #efeff1;
  background: #fafafb;
`;

const SummaryDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50px;
  flex-shrink: 0;
  background: #1f7a45;
`;

const SummaryText = styled.p`
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  color: #6b6b73;
`;

const EditButton = styled.button`
  padding: 6.667px 13px 6px 12px;
  border: none;
  border-radius: 999px;
  background: #f0f0f2;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #6b6b73;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`;

function QuestionRow({ question, answer, saving = false, onChange }) {
  const status = getQuestionStatus(answer);
  const previewText = getAnswerPreviewText(question, answer);
  const [expanded, setExpanded] = useState(false);
  const [draftText, setDraftText] = useState(answer.customText || '');
  const hasOptions = question.options && question.options.length > 0;
  const isDrafting = answer.selected === 'custom' && !answer.customSaved;
  const isCustomSaved = answer.selected === 'custom' && answer.customSaved;

  const handleSelectOption = (index) => {
    onChange({ selected: index });
    setExpanded(false);
  };

  const handleStartCustom = () => {
    setDraftText(answer.customText || '');
    onChange({ selected: 'custom', customSaved: false });
  };

  const handleSkip = () => {
    onChange({ selected: 'skip' });
    setExpanded(false);
  };

  const handleSave = () => {
    if (!draftText.trim()) return;
    onChange({ selected: 'custom', customText: draftText.trim(), customSaved: true });
    setExpanded(false);
  };

  const handleEdit = () => {
    setDraftText(answer.customText || '');
    onChange({ customSaved: false });
    setExpanded(true);
  };

  return (
    <Row $status={status} $expanded={expanded}>
      <Header type="button" onClick={() => setExpanded((prev) => !prev)}>
        <StatusDot $status={status} />
        <QuestionText>{question.text}</QuestionText>
        <RightGroup>
          {!expanded && previewText && <AnswerPreview>{previewText}</AnswerPreview>}
          <StatusBadge $status={status}>
            {saving ? '저장 중…' : STATUS_META[status].label}
          </StatusBadge>
          <Chevron $expanded={expanded} />
        </RightGroup>
      </Header>

      {expanded && (
        <Body>
          {hasOptions && (
            <OptionList>
              {question.options.map((option, index) => (
                <OptionCard
                  key={option}
                  type="button"
                  $active={answer.selected === index}
                  onClick={() => handleSelectOption(index)}
                >
                  <OptionIndex $active={answer.selected === index}>{index + 1}</OptionIndex>
                  <OptionText $active={answer.selected === index}>{option}</OptionText>
                </OptionCard>
              ))}
            </OptionList>
          )}

          {isCustomSaved ? (
            <SummaryRow>
              <SummaryDot />
              <SummaryText>{answer.customText}</SummaryText>
              <EditButton type="button" onClick={handleEdit}>
                수정
              </EditButton>
            </SummaryRow>
          ) : (
            <>
              <ActionRow>
                <ActionButton
                  type="button"
                  $kind="input"
                  $active={answer.selected === 'custom'}
                  onClick={handleStartCustom}
                >
                  직접 입력
                </ActionButton>
                <ActionButton
                  type="button"
                  $kind="skip"
                  $active={answer.selected === 'skip'}
                  onClick={handleSkip}
                >
                  넘어가기
                </ActionButton>
                {!hasOptions && <NoOptionHint>선지 없이 직접 입력하는 문항입니다</NoOptionHint>}
              </ActionRow>

              {isDrafting && (
                <DraftRow>
                  <DraftInput
                    type="text"
                    autoFocus
                    value={draftText}
                    placeholder={question.placeholder || '실제로 어떻게 하고 있는지 적어 주세요'}
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
            </>
          )}
        </Body>
      )}
    </Row>
  );
}

export default QuestionRow;
