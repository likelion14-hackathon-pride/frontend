import { useState } from 'react';
import styled from 'styled-components';

import { MAX_ESCALATION_ADDITIONS } from '../../../apis/constants';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  border: 0.66px solid #ffd9bc;
  border-radius: 12px;
  opacity: 0.915;
  padding: 14px 15px;
  box-shadow:
    0 16px 34px -16px rgba(255, 96, 0, 0.2),
    0 3px 8px -2px rgba(0, 0, 0, 0.05);
`;

const HeaderLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 11.5px;
  font-weight: 700;
  line-height: 128%;
  color: #b4600d;
  letter-spacing: 0.805px;
`;

const EnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fafafb;
  border: 1px solid #efeff1;
  border-radius: 10px;
  padding: 12px 13px;
`;

const EnLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: #b4b4bc;
`;

const EnText = styled.div`
  font-size: 14.5px;
  line-height: 1.65;
  color: #17171b;
`;

const AddedRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding-top: 9px;
  border-top: 1px dashed #e6e6eb;
`;

const AddedTag = styled.span`
  flex: none;
  margin-top: 2px;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #b4600d;
  background: #fdf1e4;
  padding: 3px 7px;
  border-radius: 5px;
`;

const AddedText = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: #17171b;
`;

const RemoveButton = styled.button`
  flex: none;
  font-size: 13px;
  color: #c0c0c8;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0 2px;

  &:hover {
    color: #17171b;
  }
`;

const AddInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const AddInput = styled.input`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  color: #17171b;
  background: #fff;
  border: 1px solid #ededf0;
  border-radius: 9px;
  padding: 9px 11px;
  outline: none;
`;

const AddButton = styled.button`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  opacity: 0.35;
  background: #17171b;
  padding: 9px 14px;
  border-radius: 9px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.14);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const KrHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const KrLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: #c97a22;
`;

const KrByline = styled.span`
  flex: none;
  font-size: 11.5px;
  font-weight: 700;
  color: #b4b4bc;
`;

const KrText = styled.div`
  font-size: 14.5px;
  line-height: 1.8;
  font-family: 'IBM Plex Mono', monospace;
  color: #26262c;
  background: #fafafb;
  border: 1px solid #efeff1;
  border-radius: 10px;
  padding: 16px 13px;
  white-space: pre-line;
`;

const AddedNote = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  font-size: 12.5px;
  background: #fff8f1;
  border: 1px dashed #ffd9bc;
  border-radius: 9px;
  padding: 9px 11px;
`;

const AddedNoteDot = styled.span`
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff8a3d;
`;

const AddedNoteText = styled.span`
  flex: 1;
  min-width: 0;
  color: #8a4708;
  line-height: 1.5;
`;

const Hint = styled.div`
  font-size: 12px;
  color: #a0a0a8;
  line-height: 1.6;
`;

const ChannelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChannelLabel = styled.span`
  flex: none;
  font-size: 11.5px;
  font-weight: 700;
  color: #b4b4bc;
`;

const ChannelSelect = styled.select`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  color: #17171b;
  background: #fff;
  border: 1px solid #ededf0;
  border-radius: 9px;
  padding: 9px 11px;
  outline: none;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 11px;
  border-top: 1px solid #f2f2f4;
`;

const OwnerNote = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  color: #b4b4bc;
`;

const CancelButton = styled.button`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  color: #8a8a93;
  background: #f7f7f8;
  padding: 8px 13px;
  border-radius: 9px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

const SendButton = styled.button`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  padding: 8px 15px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  box-shadow: 0 6px 16px rgba(255, 96, 0, 0.28);

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.12);
  }
`;

export default function ReviewPanel({
  enText,
  krText,
  hint,
  channels = [],
  pending = false,
  onCancel,
  onSend,
}) {
  const [addedItems, setAddedItems] = useState([]);
  const [draft, setDraft] = useState('');
  const [itemId, setItemId] = useState(() => channels[0]?.id ?? null);

  // 백엔드가 받는 덧붙임 줄은 최대 5줄이다(qna/serializers.py:MAX_ADDITIONS).
  const atLimit = addedItems.length >= MAX_ESCALATION_ADDITIONS;

  function handleAdd() {
    if (!draft.trim() || atLimit) return;
    setAddedItems((prev) => [...prev, draft.trim()]);
    setDraft('');
  }

  function handleRemove(i) {
    setAddedItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  return (
    <Panel>
      <HeaderLabel>REVIEW BEFORE SENDING</HeaderLabel>

      <EnBox>
        <EnLabel>WHAT IT SAYS · ENGLISH</EnLabel>
        <EnText>{enText}</EnText>

        {addedItems.map((text, i) => (
          <AddedRow key={i}>
            <AddedTag>YOU ADDED</AddedTag>
            <AddedText>{text}</AddedText>
            <RemoveButton onClick={() => handleRemove(i)}>✕</RemoveButton>
          </AddedRow>
        ))}

        <AddInputRow>
          <AddInput
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder={
              atLimit ? `최대 ${MAX_ESCALATION_ADDITIONS}줄까지 덧붙일 수 있습니다` : 'Add something in your own words…'
            }
            disabled={atLimit}
          />
          <AddButton onClick={handleAdd} disabled={!draft.trim() || atLimit}>
            Add
          </AddButton>
        </AddInputRow>
      </EnBox>

      <KrHeader>
        <KrLabel>KOREAN · 김대표 SEES THIS</KrLabel>
        <KrByline>written by SAI</KrByline>
      </KrHeader>
      <KrText>{krText}</KrText>

      {addedItems.map((_, i) => (
        <AddedNote key={i}>
          <AddedNoteDot />
          <AddedNoteText>
            Your added line goes out as its own Korean sentence — SAI writes it when you send.
          </AddedNoteText>
        </AddedNote>
      ))}

      {hint && <Hint>{hint}</Hint>}

      <ChannelRow>
        <ChannelLabel>보낼 채널</ChannelLabel>
        <ChannelSelect
          value={itemId ?? ''}
          onChange={(event) => setItemId(Number(event.target.value))}
        >
          {channels.map((channel) => (
            <option key={channel.id} value={channel.id}>
              {channel.label}
            </option>
          ))}
        </ChannelSelect>
      </ChannelRow>

      <FooterRow>
        <OwnerNote>보내면 대표님 슬랙 채널에 한국어로 올라갑니다.</OwnerNote>
        <CancelButton onClick={onCancel} disabled={pending}>
          Cancel
        </CancelButton>
        <SendButton onClick={() => onSend(addedItems, itemId)} disabled={pending || !itemId}>
          {pending ? '보내는 중…' : 'Send in Slack'}
        </SendButton>
      </FooterRow>
    </Panel>
  );
}
