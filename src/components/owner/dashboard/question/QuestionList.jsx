import styled from 'styled-components';

import { lookup } from '../../../../apis/constants';

const STATUS_META = {
  waiting: { label: '답변 대기', bg: '#FFF6E8', color: '#9A6212' },
  pending_approval: { label: '승인 대기', bg: '#EEF3FF', color: '#1D4ED8' },
  saved: { label: '저장됨', bg: '#EAF6EF', color: '#1F7A45' },
  discarded: { label: '저장 안 함', bg: '#F4F4F6', color: '#6B6B73' },
  DEFAULT: { label: '알 수 없음', bg: '#F4F4F6', color: '#6B6B73' },
};

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1.15 1 320px;
  min-width: 0;
  height: 334.792px;
  flex-direction: column;
  padding: 12px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
  overflow-y: auto;
`;

const Row = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-height: 62.292px;
  padding: 14px 10px;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  background: ${({ $active }) => ($active ? '#FAFAFB' : 'transparent')};

  &:hover {
    background: #fafafb;
  }
`;

const AvatarPill = styled.span`
  display: flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #dde7fd;
`;

const AvatarLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
  white-space: nowrap;
`;

const TextGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

const QuestionText = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.9px;
  letter-spacing: -0.2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SourceText = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Badge = styled.span`
  flex-shrink: 0;
  display: flex;
  height: 24px;
  padding: 5.667px 13.875px 5.333px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const EmptyBox = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
`;

function QuestionList({ questions, selectedId, onSelect }) {
  if (questions.length === 0) {
    return (
      <Panel>
        <EmptyBox>아직 올라온 질문이 없습니다</EmptyBox>
      </Panel>
    );
  }

  return (
    <Panel>
      {questions.map((q) => {
        const meta = lookup(STATUS_META, q.status);
        return (
          <Row
            key={q.id}
            type="button"
            $active={q.id === selectedId}
            onClick={() => onSelect(q.id)}
          >
            <AvatarPill>
              <AvatarLabel>{q.employee}</AvatarLabel>
            </AvatarPill>
            <TextGroup>
              <QuestionText>{q.text}</QuestionText>
              <SourceText>
                {q.project} · {q.time}
                {q.declined ? ' · 응답 거부' : ''}
              </SourceText>
            </TextGroup>
            <Badge $bg={meta.bg} $color={meta.color}>
              {meta.label}
            </Badge>
          </Row>
        );
      })}
    </Panel>
  );
}

export default QuestionList;
