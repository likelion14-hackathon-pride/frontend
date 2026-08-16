import { useState } from 'react';
import styled from 'styled-components';

import { lookup } from '../../../../apis/constants';
import KeywordAddModal from './KeywordAddModal';

// 키는 백엔드 RiskKeyword.Level 값 그대로다(policy/models.py:5).
const LEVEL_META = {
  DANGER: { label: '위험', color: '#DC2626', bg: '#FEF2F2', dot: '#DC2626' },
  CAUTION: { label: '주의', color: '#EA6A0A', bg: '#FFF7ED', dot: '#EA6A0A' },
  DEFAULT: { label: '주의', color: '#EA6A0A', bg: '#FFF7ED', dot: '#EA6A0A' },
};

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 0;
  min-height: 248px;
  flex-direction: column;
  gap: 16px;
  padding: 24px 22.667px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Title = styled.span`
  flex-shrink: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%;
  letter-spacing: -0.4px;
`;

const CountText = styled.span`
  flex-shrink: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 128%;
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
`;

const KeywordChip = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  height: 39.333px;
  padding: 0 10px 0 14px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 0.667px solid #f8dada;
  background: #fff;
  box-shadow: 0 6px 16px -10px rgba(23, 44, 90, 0.2);
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  background: ${({ $color }) => $color};
`;

const KeywordLabel = styled.span`
  color: #3a3a42;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 123%;
  white-space: nowrap;
`;

const LevelBadge = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 3.667px 9px 3.333px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const RemoveButton = styled.button`
  display: flex;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  color: #b4b4bc;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 123%;
`;

const AddChip = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  padding: 10.333px 19.573px 10.667px 14.667px;
  align-items: center;
  border-radius: 999px;
  border: 0.667px dashed #d8d8de;
  background: none;
  cursor: pointer;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 123%;
  white-space: nowrap;

  &:hover {
    border-color: #2563eb;
    color: #2563eb;
  }
`;

function RiskKeywordCard({ keywords, loading = false, pending = false, onAddKeyword, onRemoveKeyword }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card>
      <TitleRow>
        <Title>위험 작업 키워드</Title>
        <CountText>{loading ? '불러오는 중…' : `${keywords.length}개 등록됨`}</CountText>
      </TitleRow>

      <ChipWrap>
        {keywords.map((keyword) => {
          const meta = lookup(LEVEL_META, keyword.severity);
          return (
            <KeywordChip key={keyword.id} title={keyword.message || undefined}>
              <Dot $color={meta.dot} />
              <KeywordLabel>{keyword.keyword}</KeywordLabel>
              <LevelBadge $bg={meta.bg} $color={meta.color}>
                {meta.label}
              </LevelBadge>
              <RemoveButton
                type="button"
                disabled={pending}
                onClick={() => onRemoveKeyword(keyword.id)}
                aria-label={`${keyword.keyword} 삭제`}
              >
                ✕
              </RemoveButton>
            </KeywordChip>
          );
        })}
        <AddChip type="button" onClick={() => setModalOpen(true)}>
          + 키워드 추가
        </AddChip>
      </ChipWrap>

      {modalOpen && (
        <KeywordAddModal
          onAddKeyword={(keyword, severity) => {
            onAddKeyword(keyword, severity);
            setModalOpen(false);
          }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </Card>
  );
}

export default RiskKeywordCard;
