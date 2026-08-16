import styled from 'styled-components';

const STATUS_META = {
  waiting: { label: '답변 대기', bg: '#FFF6E8', color: '#9A6212' },
  pending_approval: { label: '승인 대기', bg: '#EEF3FF', color: '#1D4ED8' },
  saved: { label: '저장됨', bg: '#EAF6EF', color: '#1F7A45' },
};

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 705.323px;
  height: 334.792px;
  flex-shrink: 0;
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
  height: 34px;
  padding: 10px 12px 10px 3.958px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  background: #dde7fd;
`;

const AvatarLabel = styled.span`
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

function QuestionList({ questions, selectedId, onSelect }) {
  return (
    <Panel>
      {questions.map((q) => {
        const meta = STATUS_META[q.status];
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
