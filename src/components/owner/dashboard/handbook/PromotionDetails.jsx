import styled from 'styled-components';

import { PROMOTION_TYPE } from '../../../../apis/constants';
import { formatShortKo } from '../../../../utils/time';
import {
  autoPromotionMethodLabel,
  knownSignalRows,
  promotionReasonRows,
  similarityLabel,
} from './handbookPromotion';

const Section = styled.section`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid #efeff1;
`;

const AutoSummary = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #edf8f1;
  color: #195f38;
`;

const AutoText = styled.strong`
  min-width: 0;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

const AutoTime = styled.span`
  flex-shrink: 0;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  color: #397654;
`;

const SectionTitle = styled.h4`
  margin: 0;
  color: #3c3c44;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
`;

const Metrics = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(122px, 1fr));
  width: 100%;
  gap: 8px;
  margin: 0;
`;

const Metric = styled.div`
  min-width: 0;
  padding: 10px 12px;
  border-radius: 12px;
  background: #fafafb;
`;

const MetricLabel = styled.dt`
  color: #8a8a93;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-weight: 600;
  line-height: 1.35;
`;

const MetricValue = styled.dd`
  margin: 3px 0 0;
  color: ${({ $warning }) => ($warning ? '#9A6212' : '#2E2E36')};
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`;

const Subsection = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 7px;
`;

const SubLabel = styled.span`
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 700;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span`
  display: inline-flex;
  max-width: 100%;
  padding: 5px 8px;
  border-radius: 8px;
  background: ${({ $danger }) => ($danger ? '#FEF2F3' : '#F4F4F6')};
  color: ${({ $danger }) => ($danger ? '#A51D27' : '#565660')};
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 600;
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

const SimilarButton = styled.button`
  align-self: flex-start;
  border: none;
  border-radius: 9px;
  padding: 7px 10px;
  background: #eef3ff;
  color: #1d4ed8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 700;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

function metricValue(value, fallback = '확인되지 않음') {
  return value == null ? fallback : value;
}

function PromotionDetails({ entry, onOpenSimilar }) {
  if (!entry) return null;

  if (entry.promotionType === PROMOTION_TYPE.AUTO_PROMOTED) {
    return (
      <Section aria-label="자동 승격 정보">
        <AutoSummary>
          <AutoText>{autoPromotionMethodLabel(entry.autoPromotionMethod)}</AutoText>
          <AutoTime>
            {entry.autoPromotedAt ? formatShortKo(entry.autoPromotedAt) : '승격 시각 미확인'}
          </AutoTime>
        </AutoSummary>
      </Section>
    );
  }

  if (entry.promotionType !== PROMOTION_TYPE.MANUAL_REQUIRED) return null;

  const risks = Array.isArray(entry.riskKeywords) ? entry.riskKeywords : [];
  const reasons = promotionReasonRows(entry.promotionReason);
  const signals = knownSignalRows(entry.promotionReason?.signals);

  return (
    <Section aria-label="개별 검토 정보">
      <SectionTitle>개별 검토 판단 정보</SectionTitle>
      <Metrics>
        <Metric>
          <MetricLabel>근거 수</MetricLabel>
          <MetricValue>{metricValue(entry.evidenceCount, '미집계')}</MetricValue>
        </Metric>
        <Metric>
          <MetricLabel>충돌 여부</MetricLabel>
          <MetricValue $warning={entry.hasConflict === true}>
            {entry.hasConflict == null ? '확인되지 않음' : entry.hasConflict ? '충돌 가능' : '없음'}
          </MetricValue>
        </Metric>
        <Metric>
          <MetricLabel>유사 규칙</MetricLabel>
          <MetricValue $warning={entry.hasSimilarRule === true}>
            {entry.hasSimilarRule == null
              ? '확인되지 않음'
              : entry.hasSimilarRule
                ? '있음'
                : '없음'}
          </MetricValue>
        </Metric>
        <Metric>
          <MetricLabel>유사도</MetricLabel>
          <MetricValue>{similarityLabel(entry.similarityScore)}</MetricValue>
        </Metric>
      </Metrics>

      {risks.length > 0 && (
        <Subsection>
          <SubLabel>위험 키워드</SubLabel>
          <ChipRow>
            {risks.map((risk, index) => {
              const keyword = risk?.keyword || risk?.matched || '알 수 없는 키워드';
              const context = [risk?.category, risk?.level].filter(Boolean).join(' · ');
              return (
                <Chip key={`${keyword}-${index}`} $danger>
                  {keyword}
                  {risk?.matched && risk.matched !== keyword ? ` · 일치: ${risk.matched}` : ''}
                  {context ? ` · ${context}` : ''}
                </Chip>
              );
            })}
          </ChipRow>
        </Subsection>
      )}

      {reasons.length > 0 && (
        <Subsection>
          <SubLabel>자동화 판단 사유</SubLabel>
          <ChipRow>
            {reasons.map((reason) => (
              <Chip key={reason.key} title={reason.code}>
                {reason.label}
              </Chip>
            ))}
          </ChipRow>
        </Subsection>
      )}

      {signals.length > 0 && (
        <Subsection>
          <SubLabel>핵심 신호</SubLabel>
          <ChipRow>
            {signals.map((signal) => (
              <Chip key={signal}>{signal}</Chip>
            ))}
          </ChipRow>
        </Subsection>
      )}

      {entry.similarEntryId != null && onOpenSimilar && (
        <SimilarButton type="button" onClick={() => onOpenSimilar(entry.similarEntryId)}>
          유사 규칙 #{entry.similarEntryId} 확인
        </SimilarButton>
      )}
    </Section>
  );
}

export default PromotionDetails;
