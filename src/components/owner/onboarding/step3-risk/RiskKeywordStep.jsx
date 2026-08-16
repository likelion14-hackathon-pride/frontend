import styled from 'styled-components';

import { RISK_LEVEL } from '../../../../apis/constants';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import Mascot from '../Mascot';
import RiskKeywordItem from './RiskKeywordItem';
import RiskKeywordForm from './RiskKeywordForm';
import { colors, radii } from '../theme';
import nextArrowWhite from '../../../../assets/owner/next_arrow_white.svg';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const HeaderRow = styled.div`
  display: flex;
  padding: 4px 4px 8px 4px;
  align-items: center;
  align-content: center;
  gap: 0 40px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const TextColumn = styled.div`
  display: flex;
  min-width: 440px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
`;

const MascotColumn = styled.div`
  display: flex;
  padding: 0 12.02px 13.5px 0;
  align-items: center;
`;

const HeadingWrap = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 0.69px;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: Pretendard;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: 43.7px; /* 115% */
  letter-spacing: -1.2px;
`;

const SubheadingWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */

  strong {
    color: #17171b;
    font-weight: 700;
  }
`;

const DANGER_LINE = '#DC2626';
const DANGER_SOFT = '#F8DADA';
const WARNING_LINE = '#EA6A0A';
const WARNING_SOFT = colors.warningBg;

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const RegisteredPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

const PanelHeader = styled.div`
  display: flex;
  height: 59px;
  padding: 21px 19px 19px 19px;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;
  border-radius: 22px;
  border: 0.667px solid #fbd9d9;
  background: linear-gradient(0deg, #fef2f2 0%, #fef2f2 100%);
  box-shadow: 0 14px 34px -14px rgba(220, 38, 38, 0.24);
`;

const PanelHeaderLabel = styled.span`
  width: 114px;
  flex-shrink: 0;
  color: #c2705a;
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.667px; /* 124.444% */
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const EmptyState = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 87.458px;
  padding: 25.333px 20px 31.125px 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 14px;
  border: 1.333px dashed #e6e6eb;
`;

const EmptyText = styled.p`
  margin: 0;
  width: 240.25px;
  color: #b4b4bc;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.333px; /* 127.777% */
`;

const GroupsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const LevelGroup = styled.div`
  display: flex;
  padding-left: 26px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const LevelGroupInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const LevelSectionHeader = styled.div`
  display: flex;
  padding: 2px 0;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const LevelConnector = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 0 0 0 7px;
  border-bottom: 1px solid ${({ $color }) => $color};
  border-left: 1px solid ${({ $color }) => $color};
`;

const LevelDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const LevelSectionLabelWrap = styled.span`
  display: flex;
  padding-bottom: 2px;
  flex-direction: column;
  align-items: flex-start;
`;

const LevelSectionLabel = styled.span`
  color: ${({ $color }) => $color};
  font-family: 'IBM Plex Mono';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;

const LevelLine = styled.span`
  flex: 1 0 0;
  height: 1px;
  background: ${({ $color }) => $color};
`;

const LevelSectionCountWrap = styled.span`
  display: flex;
  padding-bottom: 1px;
  flex-direction: column;
  align-items: flex-start;
`;

const LevelSectionCount = styled.span`
  color: ${({ $color }) => $color};
  font-family: 'IBM Plex Mono';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
`;

const NextButton = styled.button`
  display: flex;
  height: 43.333px;
  padding: 13.667px 22px 13.667px 23px;
  justify-content: center;
  align-items: flex-start;
  gap: 14.719px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.navy};
  cursor: pointer;

  &:hover {
    background: #2e2e36;
    box-shadow: 0 12px 26px -12px rgba(23, 23, 27, 0.55);
  }
`;

const NextButtonLabel = styled.span`
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.2px;
`;

const NextButtonIcon = styled.img`
  width: 15px;
  height: 15px;
`;

// 서버는 severity 로 내려주고 값은 RiskKeyword.Level(CAUTION | DANGER) 이다.
// DANGER 가 아닌 것은 전부 주의로 본다. 모르는 값이 와도 목록에서 사라지지 않게.
function groupByLevel(keywords) {
  return {
    danger: keywords.filter((keyword) => keyword.severity === RISK_LEVEL.DANGER),
    caution: keywords.filter((keyword) => keyword.severity !== RISK_LEVEL.DANGER),
  };
}

function RiskKeywordStep({
  keywords,
  loading,
  error,
  onReload,
  pending,
  actionError,
  onAddKeyword,
  onRemoveKeyword,
  onFinish,
}) {
  const grouped = groupByLevel(keywords);

  return (
    <Section>
      <HeaderRow>
        <TextColumn>
          <HeadingWrap>
            <Heading>위험 작업을 미리 알려 주세요</Heading>
          </HeadingWrap>
          <SubheadingWrap>
            <Subheading>
              팀원이 이 단어가 들어간 질문을 하면, SAI는 답하지 않고{' '}
              <strong>"대표님께 먼저 확인하세요"</strong>라고 안내합니다.
            </Subheading>
          </SubheadingWrap>
        </TextColumn>
        <MascotColumn>
          <Mascot pose="pointing" width={157} height={118} />
        </MascotColumn>
      </HeaderRow>

      <InlineError error={actionError} />

      <Layout>
        <RegisteredPanel>
          <PanelHeader>
            <PanelHeaderLabel>등록된 키워드</PanelHeaderLabel>
          </PanelHeader>

          {loading && keywords.length === 0 ? (
            <LoadingState compact label="키워드를 불러오는 중…" />
          ) : error && keywords.length === 0 ? (
            <ErrorState error={error} onRetry={onReload} compact />
          ) : keywords.length === 0 ? (
            <EmptyState>
              <EmptyText>
                아직 등록된 단어가 없습니다
                <br />
                아래 추천 항목을 누르거나 직접 추가해주세요
              </EmptyText>
            </EmptyState>
          ) : (
            <GroupsWrap>
              <LevelGroup>
                <LevelGroupInner>
                  <LevelSectionHeader>
                    <LevelConnector $color={DANGER_SOFT} />
                    <LevelDot $color={DANGER_LINE} />
                    <LevelSectionLabelWrap>
                      <LevelSectionLabel $color={DANGER_LINE}>위험</LevelSectionLabel>
                    </LevelSectionLabelWrap>
                    <LevelLine $color={DANGER_SOFT} />
                    <LevelSectionCountWrap>
                      <LevelSectionCount $color={DANGER_LINE}>
                        {grouped.danger.length}건
                      </LevelSectionCount>
                    </LevelSectionCountWrap>
                  </LevelSectionHeader>
                  {grouped.danger.map((keyword) => (
                    <RiskKeywordItem
                      key={keyword.id}
                      label={keyword.keyword}
                      level={keyword.severity}
                      onRemove={() => onRemoveKeyword(keyword.id)}
                    />
                  ))}
                </LevelGroupInner>
              </LevelGroup>

              <LevelGroup>
                <LevelGroupInner>
                  <LevelSectionHeader>
                    <LevelConnector $color={WARNING_SOFT} />
                    <LevelDot $color={WARNING_LINE} />
                    <LevelSectionLabelWrap>
                      <LevelSectionLabel $color={WARNING_LINE}>주의</LevelSectionLabel>
                    </LevelSectionLabelWrap>
                    <LevelLine $color={WARNING_SOFT} />
                    <LevelSectionCountWrap>
                      <LevelSectionCount $color={WARNING_LINE}>
                        {grouped.caution.length}건
                      </LevelSectionCount>
                    </LevelSectionCountWrap>
                  </LevelSectionHeader>
                  {grouped.caution.map((keyword) => (
                    <RiskKeywordItem
                      key={keyword.id}
                      label={keyword.keyword}
                      level={keyword.severity}
                      onRemove={() => onRemoveKeyword(keyword.id)}
                    />
                  ))}
                </LevelGroupInner>
              </LevelGroup>
            </GroupsWrap>
          )}
        </RegisteredPanel>

        <RiskKeywordForm onAddKeyword={onAddKeyword} pending={pending} />
      </Layout>

      <Footer>
        <NextButton type="button" onClick={onFinish} disabled={pending}>
          <NextButtonLabel>{pending ? '마무리하는 중…' : '등록하고 마치기'}</NextButtonLabel>
          <NextButtonIcon src={nextArrowWhite} alt="" />
        </NextButton>
      </Footer>
    </Section>
  );
}

export default RiskKeywordStep;
