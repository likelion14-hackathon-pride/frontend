import styled from 'styled-components';
import Mascot from '../Mascot';
import HandbookSectionBand from './HandbookSectionBand';
import HandbookCategoryGroup from './HandbookCategoryGroup';
import ProjectKnowledgeSection from './ProjectKnowledgeSection';
import { colors, radii } from '../theme';
import { HANDBOOK_CATEGORIES, TOTAL_HANDBOOK_QUESTIONS, countConfirmed } from './handbookData';

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  color: ${colors.textPrimary};
`;

const Subheading = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const CompanyPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

const CategoryList = styled.div`
  border-radius: ${radii.lg};
  border: 1px solid ${colors.border};
  padding: 4px 20px 12px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;

const FooterHint = styled.span`
  font-size: 13px;
  color: ${colors.textMuted};
`;

const FinishButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.navy};
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

function HandbookReviewStep({
  handbookAnswers,
  onAnswerChange,
  projects,
  onAddProject,
  onToggleProjectExpand,
  onProjectAnswerChange,
  onSkipProjectToCompanyRules,
  onFinish,
}) {
  const allQuestions = HANDBOOK_CATEGORIES.flatMap((category) => category.questions);
  const confirmedCount = countConfirmed(allQuestions, handbookAnswers);

  return (
    <div>
      <Content>
        <div>
          <Heading>회사의 기본 규칙부터 정할게요</Heading>
          <Subheading>핸드북으로 남아 팀원들에게 공유됩니다. 정해진 게 없다면 그냥 넘기세요.</Subheading>
        </div>
        <Mascot pose="checking" size={90} />
      </Content>

      <CompanyPanel>
        <HandbookSectionBand
          tone="company"
          icon="▤"
          title="회사 규칙"
          description="프로젝트가 바뀌어도 그대로 적용되는 상위 계층"
          count={`${TOTAL_HANDBOOK_QUESTIONS}개 항목`}
        />
        <CategoryList>
          {HANDBOOK_CATEGORIES.map((category) => (
            <HandbookCategoryGroup
              key={category.key}
              category={category}
              answers={handbookAnswers}
              onAnswerChange={(questionId, patch) => onAnswerChange(questionId, patch)}
            />
          ))}
        </CategoryList>
      </CompanyPanel>

      <ProjectKnowledgeSection
        projects={projects}
        onAddProject={onAddProject}
        onToggleExpand={onToggleProjectExpand}
        onAnswerChange={onProjectAnswerChange}
        onSkipToCompanyRules={onSkipProjectToCompanyRules}
      />

      <Footer>
        <FooterHint>
          {confirmedCount}/{TOTAL_HANDBOOK_QUESTIONS} 확인 · 나머지는 미확인 상태로 남습니다
        </FooterHint>
        <FinishButton type="button" onClick={onFinish}>
          답변 마치고 다음으로 →
        </FinishButton>
      </Footer>
    </div>
  );
}

export default HandbookReviewStep;
