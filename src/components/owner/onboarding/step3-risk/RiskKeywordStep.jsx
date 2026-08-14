import styled from 'styled-components';
import Mascot from '../Mascot';
import RiskKeywordItem from './RiskKeywordItem';
import RiskKeywordForm from './RiskKeywordForm';
import { colors, radii } from '../theme';

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: ${colors.textPrimary};
`;

const Subheading = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: ${colors.textSecondary};

  strong {
    color: ${colors.textPrimary};
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
`;

const RegisteredPanel = styled.div`
  border-radius: ${radii.lg};
  overflow: hidden;
`;

const PanelHeader = styled.div`
  padding: 14px 20px;
  background: ${colors.dangerBg};
  color: ${colors.danger};
  font-size: 13px;
  font-weight: 700;
`;

const LevelSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 4px;
`;

const LevelSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px 4px;
`;

const LevelDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

const LevelSectionLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ $color }) => $color};
  flex-grow: 1;
`;

const LevelSectionCount = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const NextButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.navy};
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

function groupByLevel(keywords) {
  return {
    danger: keywords.filter((keyword) => keyword.level === 'danger'),
    warning: keywords.filter((keyword) => keyword.level === 'warning'),
  };
}

function RiskKeywordStep({ keywords, onAddKeyword, onRemoveKeyword, onFinish }) {
  const grouped = groupByLevel(keywords);

  return (
    <div>
      <Content>
        <div>
          <Heading>위험 작업을 미리 알려 주세요</Heading>
          <Subheading>
            팀원이 이 단어가 들어간 질문을 하면, SAI는 답하지 않고 <strong>"대표님께 먼저 확인하세요"</strong>
            라고 안내합니다.
          </Subheading>
        </div>
        <Mascot pose="pointing" size={90} />
      </Content>

      <Layout>
        <RegisteredPanel>
          <PanelHeader>등록된 키워드</PanelHeader>

          <LevelSection>
            <LevelSectionHeader>
              <LevelDot $color={colors.danger} />
              <LevelSectionLabel $color={colors.danger}>위험</LevelSectionLabel>
              <LevelSectionCount>{grouped.danger.length}건</LevelSectionCount>
            </LevelSectionHeader>
            {grouped.danger.map((keyword) => (
              <RiskKeywordItem
                key={keyword.id}
                label={keyword.label}
                level={keyword.level}
                onRemove={() => onRemoveKeyword(keyword.id)}
              />
            ))}
          </LevelSection>

          <LevelSection>
            <LevelSectionHeader>
              <LevelDot $color={colors.warning} />
              <LevelSectionLabel $color={colors.warning}>주의</LevelSectionLabel>
              <LevelSectionCount>{grouped.warning.length}건</LevelSectionCount>
            </LevelSectionHeader>
            {grouped.warning.map((keyword) => (
              <RiskKeywordItem
                key={keyword.id}
                label={keyword.label}
                level={keyword.level}
                onRemove={() => onRemoveKeyword(keyword.id)}
              />
            ))}
          </LevelSection>
        </RegisteredPanel>

        <RiskKeywordForm onAddKeyword={onAddKeyword} />
      </Layout>

      <Footer>
        <NextButton type="button" onClick={onFinish}>
          다음으로 →
        </NextButton>
      </Footer>
    </div>
  );
}

export default RiskKeywordStep;
