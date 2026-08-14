import styled from 'styled-components';
import QuestionRow from './QuestionRow';
import { colors, radii } from '../theme';
import { EMPTY_ANSWER, PROJECT_QUESTION_TEMPLATE, countConfirmed } from './handbookData';

const Card = styled.div`
  border: 1px solid ${colors.border};
  border-radius: ${radii.lg};
  overflow: hidden;
  background: ${colors.surface};
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 18px;
  border: none;
  background: ${({ $expanded }) => ($expanded ? '#F7FAFF' : 'transparent')};
  cursor: pointer;
  text-align: left;
`;

const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${colors.surfaceSubtle};
  font-size: 11px;
  font-weight: 800;
  color: ${colors.textMuted};
  flex-shrink: 0;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

const Summary = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
  flex-grow: 1;
`;

const Chevron = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
  transform: rotate(${({ $expanded }) => ($expanded ? '180deg' : '0deg')});
  transition: transform 0.15s ease;
`;

const Body = styled.div`
  padding: 4px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SkipRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px 0 8px;
`;

const SkipButton = styled.button`
  padding: 8px 14px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.pill};
  background: ${colors.surface};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

function ProjectKnowledgeItem({ project, index, onToggleExpand, onAnswerChange, onSkipToCompanyRules }) {
  const confirmedCount = countConfirmed(PROJECT_QUESTION_TEMPLATE, project.answers);
  const summary =
    confirmedCount === 0
      ? '회사 규칙만 적용'
      : `${confirmedCount}/${PROJECT_QUESTION_TEMPLATE.length} 답변 · 회사 규칙 상속`;

  return (
    <Card>
      <Header type="button" $expanded={project.expanded} onClick={onToggleExpand}>
        <Number>{index + 1}</Number>
        <Name>{project.name}</Name>
        <Summary>{summary}</Summary>
        <Chevron $expanded={project.expanded}>⌄</Chevron>
      </Header>

      {project.expanded && (
        <Body>
          <SkipRow>
            <SkipButton type="button" onClick={onSkipToCompanyRules}>
              회사 규칙만 쓰고 넘어가기
            </SkipButton>
          </SkipRow>
          {PROJECT_QUESTION_TEMPLATE.map((question) => (
            <QuestionRow
              key={question.id}
              question={question}
              answer={project.answers[question.id] ?? EMPTY_ANSWER}
              onChange={(patch) => onAnswerChange(question.id, patch)}
            />
          ))}
        </Body>
      )}
    </Card>
  );
}

export default ProjectKnowledgeItem;
