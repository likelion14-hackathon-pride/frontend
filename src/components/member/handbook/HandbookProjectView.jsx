import { useParams, useOutletContext } from 'react-router-dom';
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

export default function HandbookProjectView() {
  const { projectId } = useParams();
  const { projectItemsById } = useOutletContext();
  const items = projectItemsById[projectId] ?? [];

  return (
    <PageWrap>
      <HandbookHeader mode="project" projectName={projectId} />

      <Wrap>
        <div>
          <RuleGroupHeader name={projectId} count={`${items.length} items`} />
          <CardGroup>
            {items.map((item) => (
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
      </Wrap>
    </PageWrap>
  );
}