import { useState } from 'react';
import styled from 'styled-components';
import HandbookSectionBand from './HandbookSectionBand';
import ProjectKnowledgeItem from './ProjectKnowledgeItem';
import { colors, radii } from '../theme';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  gap: 12px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 10px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border: 1.5px dashed #DCDCE2;
  border-radius: ${radii.lg};
  background: transparent;
  color: ${colors.textMuted};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: ${colors.primaryBlue};
    background: #F5F8FF;
    color: ${colors.primaryBlue};
  }
`;

const AddHint = styled.span`
  font-weight: 400;
  color: ${colors.textMuted};
`;

const AddRow = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`;

const NameInput = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${colors.primaryBlue};
  }
`;

const CreateButton = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: ${radii.pill};
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? colors.surfaceSubtle : colors.primaryBlue)};
  color: ${({ disabled }) => (disabled ? colors.textMuted : '#FFFFFF')};
`;

const CancelButton = styled.button`
  padding: 12px 18px;
  border: 1px solid ${colors.border};
  border-radius: ${radii.pill};
  background: ${colors.surface};
  font-size: 13px;
  font-weight: 700;
  color: ${colors.textMuted};
  cursor: pointer;
  white-space: nowrap;
`;

function ProjectKnowledgeSection({ projects, onAddProject, onToggleExpand, onAnswerChange, onSkipToCompanyRules }) {
  const [isAdding, setIsAdding] = useState(false);
  const [nameDraft, setNameDraft] = useState('');

  const handleCreate = () => {
    const name = nameDraft.trim();
    if (!name) return;
    onAddProject(name);
    setNameDraft('');
    setIsAdding(false);
  };

  return (
    <Wrap>
      <HandbookSectionBand
        tone="project"
        icon="⑂"
        title="프로젝트 지식"
        description="선택 사항 · 프로젝트마다 다른 규칙만 따로 정합니다. 회사 규칙은 그대로 상속됩니다"
        count={`${projects.length}개`}
      />

      {projects.length > 0 && (
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectKnowledgeItem
              key={project.id}
              project={project}
              index={index}
              onToggleExpand={() => onToggleExpand(project.id)}
              onAnswerChange={(questionId, patch) => onAnswerChange(project.id, questionId, patch)}
              onSkipToCompanyRules={() => onSkipToCompanyRules(project.id)}
            />
          ))}
        </ProjectList>
      )}

      {isAdding ? (
        <AddRow>
          <NameInput
            type="text"
            autoFocus
            placeholder="프로젝트 이름 (예: 관리자 페이지 개편)"
            value={nameDraft}
            onChange={(event) => setNameDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleCreate();
            }}
          />
          <CreateButton type="button" disabled={!nameDraft.trim()} onClick={handleCreate}>
            만들기
          </CreateButton>
          <CancelButton
            type="button"
            onClick={() => {
              setIsAdding(false);
              setNameDraft('');
            }}
          >
            취소
          </CancelButton>
        </AddRow>
      ) : (
        <AddButton type="button" onClick={() => setIsAdding(true)}>
          + 프로젝트 지식 추가
          <AddHint>이 프로젝트에서만 쓰는 규칙을 더합니다 · 답하지 않고 넘어가도 됩니다</AddHint>
        </AddButton>
      )}
    </Wrap>
  );
}

export default ProjectKnowledgeSection;
