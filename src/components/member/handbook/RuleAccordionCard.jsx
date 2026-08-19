import styled from 'styled-components';

const Card = styled.details`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
  padding: 14px 24px;
`;

const Summary = styled.summary`
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const Title = styled.div`
  flex: 1;
  min-width: 160px;
  font-size: 16.5px;
  font-weight: 700;
`;

const SourceTag = styled.div`
  flex: none;
  font-size: 12px;
  color: #b4b4bc;
  font-weight: 600;
  white-space: nowrap;
`;

const Desc = styled.div`
  font-size: 15.5px;
  color: #3a3a42;
  line-height: 1.6;
  margin-top: 10px;
`;

const QuoteBox = styled.div`
  margin-top: 12px;
  background: #fafafb;
  border-radius: 11px;
  padding: 14px 16px;
`;

const QuoteText = styled.div`
  font-size: 14.5px;
  line-height: 1.75;
  font-family: 'IBM Plex Mono', monospace;
  color: #3a3a42;
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #8a8a93;
  margin-top: 10px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #e0e0e6;
  padding-bottom: 2px;

  &:hover {
    color: #c96a14;
    border-bottom-color: #f0c39a;
  }
`;

export default function RuleAccordionCard({
  title,
  sourceTag,
  desc,
  quote,
  sourceLine,
  sourceHref,
  showSourceBox = true,
  defaultOpen,
}) {
  return (
    <Card open={defaultOpen}>
      <Summary>
        <SummaryRow>
          <Title>{title}</Title>
          <SourceTag>{sourceTag} ▾</SourceTag>
        </SummaryRow>
      </Summary>

      {desc && <Desc>{desc}</Desc>}

      {showSourceBox && quote && (
        <QuoteBox>
          <QuoteText>{quote}</QuoteText>
          {sourceLine && (
            <SourceLink href={sourceHref} target="_blank" rel="noreferrer">
              <span>{sourceLine}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 2h6v6M10 2 3.5 8.5" />
                <path d="M8.5 9.5v1h-7v-7h1" />
              </svg>
            </SourceLink>
          )}
        </QuoteBox>
      )}
    </Card>
  );
}
