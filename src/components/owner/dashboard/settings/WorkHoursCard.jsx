import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #17171b;
`;

const Toggle = styled.button`
  position: relative;
  width: 42px;
  height: 24px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ $on }) => ($on ? '#2563eb' : '#e6e6eb')};
  transition: background 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ $on }) => ($on ? '21px' : '3px')};
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: #ffffff;
    transition: left 0.15s ease;
  }
`;

const RangeText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  color: #17171b;
`;

const RangeInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TimeInput = styled.input`
  width: 84px;
  height: 34px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: 'IBM Plex Mono';
  font-size: 12.5px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const Hint = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const TeamPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px;
  border-radius: 14px;
  background: #17171b;
`;

const TeamPreviewTag = styled.span`
  width: fit-content;
  padding: 2px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.7);
  font-family: 'IBM Plex Mono';
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

const TeamPreviewText = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
`;

const TeamPreviewSubtext = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.5);
`;

function WorkHoursCard({ enabled, onToggle, hours, onChangeHours }) {
  const [editing, setEditing] = useState(false);

  return (
    <Card>
      <HeadRow>
        <Title>근무 시간</Title>
        <Toggle type="button" $on={enabled} onClick={onToggle} aria-pressed={enabled} aria-label="근무 시간 토글" />
      </HeadRow>

      {editing ? (
        <RangeInputRow>
          <TimeInput
            type="time"
            value={hours.start}
            onChange={(e) => onChangeHours({ ...hours, start: e.target.value })}
          />
          <span>–</span>
          <TimeInput type="time" value={hours.end} onChange={(e) => onChangeHours({ ...hours, end: e.target.value })} />
          <RangeText style={{ cursor: 'pointer', color: '#2563eb' }} onClick={() => setEditing(false)}>
            완료
          </RangeText>
        </RangeInputRow>
      ) : (
        <RangeText>
          근무 시간 {hours.start}–{hours.end} ({hours.timezone}){' '}
          {enabled && (
            <span style={{ color: '#2563eb', fontWeight: 700, cursor: 'pointer' }} onClick={() => setEditing(true)}>
              시간 범위 편집
            </span>
          )}
        </RangeText>
      )}

      <Hint>
        {enabled
          ? '이 시간 밖 질문에는 대기 안내가 표시됩니다'
          : '시간대와 무관하게 SAI가 항상 즉시 답변합니다'}
      </Hint>

      <TeamPreview>
        <TeamPreviewTag>TEAM VIEW</TeamPreviewTag>
        {enabled ? (
          <>
            <TeamPreviewText>대표님 근무 시간이 아닙니다</TeamPreviewText>
            <TeamPreviewSubtext>질문은 전달해 두었습니다. 내일 {hours.start} 이후에 답변이 도착합니다.</TeamPreviewSubtext>
          </>
        ) : (
          <>
            <TeamPreviewText>SAI가 24시간 즉시 답변합니다</TeamPreviewText>
            <TeamPreviewSubtext>근무 시간 안내 문구는 표시되지 않습니다.</TeamPreviewSubtext>
          </>
        )}
      </TeamPreview>
    </Card>
  );
}

export default WorkHoursCard;
