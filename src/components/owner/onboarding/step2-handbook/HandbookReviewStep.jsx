import { useMemo } from 'react';
import styled from 'styled-components';

import { SCOPE_KIND } from '../../../../apis/constants';
import * as handbookApi from '../../../../apis/handbook';
import { useAsync, useMutation } from '../../../../hooks/useAsync';
import { useOnboardingQuestions } from '../../../../hooks/owner/useOnboardingQuestions';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import Mascot from '../Mascot';
import HandbookSectionBand from './HandbookSectionBand';
import HandbookCategoryGroup from './HandbookCategoryGroup';
import ProjectKnowledgeSection from './ProjectKnowledgeSection';
import fileTransWhite from '../../../../assets/owner/file_trans_white.svg';
import nextArrowWhite from '../../../../assets/owner/next_arrow_white.svg';
import { countConfirmed, groupByCategory } from './handbookData';

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 18px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  align-self: stretch;
`;

const TextGroup = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

const Heading = styled.h1`
  margin: 0;
  max-width: 508.623px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 43.7px;
  letter-spacing: -1.2px;
  color: #17171b;
`;

const Subheading = styled.p`
  margin: 0;
  max-width: 616px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #6b6b73;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 22px;
  padding-left: 26px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;
  gap: 16px;
`;

const FooterHint = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 400;
  line-height: 128%;
  color: #a0a0a8;
`;

const FinishButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 43.333px;
  padding: 0 24px;
  border: none;
  border-radius: 999px;
  background: #17171b;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.2px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s ease;

  &:hover {
    background: #2e2e36;
  }
`;

const ArrowIcon = styled.img`
  width: 15px;
  height: 15px;
`;

function HandbookReviewStep({ companyId, onFinish }) {
  const company = useOnboardingQuestions(companyId);

  // 프로젝트 지식은 PROJECT 지식공간마다 한 벌씩 붙는다.
  const scopesQuery = useAsync(
    () => handbookApi.fetchScopes(companyId, { kind: SCOPE_KIND.PROJECT }),
    [companyId],
    { enabled: Boolean(companyId) }
  );
  const createScope = useMutation((name) => handbookApi.createProjectScope(companyId, { name }));

  const categories = useMemo(
    () => groupByCategory(company.questions.map((question) => ({
      templateKey: question.id,
      category: question.category,
      question: question.text,
      title: question.title,
      options: question.options,
      placeholder: question.placeholder,
    }))),
    [company.questions]
  );

  const confirmedCount = countConfirmed(company.questions, company.answers);
  const totalCount = company.questions.length;

  const projects = scopesQuery.data?.items ?? [];

  async function handleAddProject(name) {
    const result = await createScope.mutate(name);
    if (result.ok) scopesQuery.reload();
  }

  return (
    <PageContent>
      <Content>
        <TextGroup>
          <Heading>회사의 기본 규칙부터 정할게요</Heading>
          <Subheading>
            핸드북으로 남아 팀원들과 공유됩니다. 정해진 게 없으면 그냥 넘기세요. 추후에 수정·추가도
            가능합니다. 답은 고르는 즉시 저장됩니다.
          </Subheading>
        </TextGroup>
        <Mascot pose="checking" width={148} height={111} />
      </Content>

      <InlineError error={company.saveError || createScope.error} />

      {company.loading && totalCount === 0 && <LoadingState label="질문을 불러오는 중…" />}
      {company.error && totalCount === 0 && (
        <ErrorState error={company.error} onRetry={company.reload} />
      )}

      {totalCount > 0 && (
        <>
          <HandbookSectionBand
            tone="company"
            icon={fileTransWhite}
            title="회사 규칙"
            description="프로젝트가 바뀌어도 그대로 적용되는 상위 계층"
            count={`${totalCount}개 항목`}
          />
          <CategoryList>
            {categories.map((category) => (
              <HandbookCategoryGroup
                key={category.key}
                category={category}
                answers={company.answers}
                savingKey={company.savingKey}
                onAnswerChange={company.setAnswer}
              />
            ))}
          </CategoryList>
        </>
      )}

      <ProjectKnowledgeSection
        companyId={companyId}
        projects={projects}
        loading={scopesQuery.loading}
        error={scopesQuery.error}
        onReload={scopesQuery.reload}
        onAddProject={handleAddProject}
      />

      <Footer>
        <FooterHint>
          {confirmedCount} / {totalCount} 확인 · 나머지는 미확인 상태로 남습니다
        </FooterHint>
        <FinishButton type="button" onClick={onFinish}>
          답변 마치고 다음으로
          <ArrowIcon src={nextArrowWhite} alt="" role="presentation" />
        </FinishButton>
      </Footer>
    </PageContent>
  );
}

export default HandbookReviewStep;
