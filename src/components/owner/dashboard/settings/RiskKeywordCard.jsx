import styled from 'styled-components';
import RiskKeywordItem from '../../onboarding/step3-risk/RiskKeywordItem';
import RiskKeywordForm from '../../onboarding/step3-risk/RiskKeywordForm';

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
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 800;
  color: #17171b;
`;

const Hint = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 11.5px;
  color: #a0a0a8;
`;

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const ChipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
`;

const EmptyState = styled.div`
  padding: 20px;
  border-radius: 14px;
  border: 1.333px dashed #e6e6eb;
  text-align: center;
  font-family: Pretendard;
  font-size: 11.5px;
  color: #b4b4bc;
`;

function RiskKeywordCard({ keywords, onAddKeyword, onRemoveKeyword }) {
  return (
    <Card>
      <HeadRow>
        <Title>위험 작업 키워드</Title>
        <Hint>팀원이 이 단어가 들어간 질문을 하면 SAI는 답하지 않고 대표님께 먼저 확인하라고 안내합니다</Hint>
      </HeadRow>

      <Layout>
        <ChipList>
          {keywords.length === 0 ? (
            <EmptyState>아직 등록된 단어가 없습니다</EmptyState>
          ) : (
            keywords.map((keyword) => (
              <RiskKeywordItem
                key={keyword.id}
                label={keyword.label}
                level={keyword.level}
                onRemove={() => onRemoveKeyword(keyword.id)}
              />
            ))
          )}
        </ChipList>
        <RiskKeywordForm onAddKeyword={onAddKeyword} />
      </Layout>
    </Card>
  );
}

export default RiskKeywordCard;
