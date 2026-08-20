import styled from 'styled-components';

const Wrap = styled.details`
  margin-top: 7px;
`;

const Summary = styled.summary`
  font-size: 13px;
  color: #a0a0a8;
  font-weight: 700;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

const SourceItem = styled.div`
  background: #fafafb;
  border: 1px solid #f0f0f2;
  border-radius: 11px;
  padding: 12px 14px;
  margin-top: 8px;
`;

const SourceKr = styled.div`
  font-size: 14px;
  line-height: 1.7;
  font-family: 'IBM Plex Mono', monospace;
  color: #3a3a42;
`;

const SourceLine = styled.div`
  font-size: 12px;
  color: #a0a0a8;
  margin-top: 7px;
`;

export default function SourceDetails({ label = 'Show the Korean source', sources = [] }) {
  if (sources.length === 0) return null;

  return (
    <Wrap>
      <Summary>
        {label} · {sources.length} item{sources.length > 1 ? 's' : ''} ▾
      </Summary>
      {sources.map((s, i) => (
        <SourceItem key={i}>
          <SourceKr>{s.kr}</SourceKr>
          {/* 과거 대화 근거에는 슬랙 원문 링크가 함께 온다. 규칙 근거에는 없다. */}
          {s.href ? (
            <SourceLine as="a" href={s.href} target="_blank" rel="noreferrer">
              {s.line} ↗
            </SourceLine>
          ) : (
            <SourceLine>{s.line}</SourceLine>
          )}
        </SourceItem>
      ))}
    </Wrap>
  );
}
