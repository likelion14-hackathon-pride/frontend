import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import HandbookHeader from './HandbookHeader';
import RuleGroupHeader from './RuleGroupHeader';
import RuleAccordionCard from './RuleAccordionCard';

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const PromptCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  border-radius: 14px;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
  padding: 23px 20px;
  flex-wrap: wrap;
`;

const PromptText = styled.div`
  flex: 1;
  min-width: 220px;
  font-size: 14px;
  color: #6b6b73;
  line-height: 1.6;
`;

const PromptButton = styled.button`
  flex: none;
  white-space: nowrap;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

export default function HandbookCompanyView() {
  const { companyGroups, onGoToProject } = useOutletContext();

  return (
    <PageWrap>
      <HandbookHeader mode="company" />

      <Wrap>
        {companyGroups.map((group) => (
          <div key={group.id}>
            <RuleGroupHeader
              name={group.name}
              meta={group.meta}
              count={`${group.items.length} items`}
            />
            <CardGroup>
              {group.items.map((item) => (
                <RuleAccordionCard
                  key={item.id}
                  title={item.title}
                  sourceTag={item.sourceTag}
                  desc={item.desc}
                  quote={item.quote}
                  sourceLine={item.sourceLine}
                  sourceHref={item.sourceHref}
                  defaultOpen={item.defaultOpen}
                />
              ))}
            </CardGroup>
          </div>
        ))}

        <PromptCard>
          <PromptText>
            These rules also apply inside every project. Open the project knowledge to see what only
            holds there.
          </PromptText>
          <PromptButton onClick={onGoToProject}>Go to project knowledge →</PromptButton>
        </PromptCard>
      </Wrap>
    </PageWrap>
  );
}
