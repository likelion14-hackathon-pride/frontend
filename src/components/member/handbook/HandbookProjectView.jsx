import { useParams, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

import { EmptyState } from '../../common/AsyncStates';
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
  // 주소의 id 는 문자열이고 서버의 scope id 는 숫자다. 키를 문자열로 맞춰 둔다.
  const project = projectItemsById[String(projectId)];
  const items = project?.items ?? [];

  return (
    <PageWrap>
      <HandbookHeader mode="project" projectName={project?.name ?? projectId} />

      <Wrap>
        <div>
          <RuleGroupHeader
            name={project?.name ?? projectId}
            meta={project?.description}
            count={`${items.length} items`}
          />
          <CardGroup>
            {!project ? (
              <EmptyState label="이 프로젝트 지식공간을 찾을 수 없습니다" />
            ) : items.length === 0 ? (
              <EmptyState label="이 프로젝트에만 적용되는 규칙이 아직 없습니다. 회사 규칙은 그대로 적용됩니다." />
            ) : (
              items.map((item) => (
                <RuleAccordionCard
                  key={item.id}
                  title={item.title}
                  sourceTag={item.sourceTag}
                  desc={item.desc}
                  quote={item.quote}
                  sourceLine={item.sourceLine}
                  sourceHref={item.sourceHref}
                  showSourceBox={item.showSourceBox}
                  defaultOpen={item.defaultOpen}
                />
              ))
            )}
          </CardGroup>
        </div>
      </Wrap>
    </PageWrap>
  );
}
