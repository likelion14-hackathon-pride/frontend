import styled from 'styled-components';

const Wrap = styled.details`
  margin-top: 7px;
`;

const Summary = styled.summary`
  font-size: 13px;
  color: #A0A0A8;
  font-weight: 700;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

const SourceItem = styled.div`
  background: #FAFAFB;
  border: 1px solid #F0F0F2;
  border-radius: 11px;
  padding: 12px 14px;
  margin-top: 8px;
`;

const SourceKr = styled.div`
  font-size: 14px;
  line-height: 1.7;
  font-family: 'IBM Plex Mono', monospace;
  color: #3A3A42;
`;

const SourceLine = styled.div`
  font-size: 12px;
  color: #A0A0A8;
  margin-top: 7px;
`;

export default function SourceDetails({ label = 'Show the Korean source', sources = [] }) {
  if (sources.length === 0) return null;

  return (
    <Wrap>
      <Summary>{label} · {sources.length} item{sources.length > 1 ? 's' : ''} ▾</Summary>
      {sources.map((s, i) => (
        <SourceItem key={i}>
          <SourceKr>{s.kr}</SourceKr>
          <SourceLine>{s.line}</SourceLine>
        </SourceItem>
      ))}
    </Wrap>
  );
}