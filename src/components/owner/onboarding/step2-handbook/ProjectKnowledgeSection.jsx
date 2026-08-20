import { useState } from 'react';
import styled from 'styled-components';

import { ErrorState, LoadingState } from '../../../common/AsyncStates';
import HandbookSectionBand from './HandbookSectionBand';
import ProjectKnowledgeItem from './ProjectKnowledgeItem';
import treeIcon from '../../../../assets/owner/tree.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 10px;
`;

const AddRowWrap = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`;

const CornerCurve = styled.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 0 0 0 7px;
  border-bottom: 1.333px solid #dce7fc;
  border-left: 1.333px solid #dce7fc;
`;

const AddButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 10px;
  height: 50.667px;
  padding: 0 18px;
  border: 1.333px dashed #dcdce2;
  border-radius: 18px;
  background: #ffffff;
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: #2563eb;
    background: #f5f8ff;
  }
`;

const PlusBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #f0f0f2;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #6b6b73;
`;

const AddTitle = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #17171b;
  white-space: nowrap;
`;

const AddHint = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 400;
  color: #b4b4bc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NameInputWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 8px;
  padding: 12.667px 14.667px;
  border: 0.667px solid #c9dafb;
  border-radius: 18px;
  background: #f5f8ff;
`;

const NameInput = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  height: 42px;
  box-sizing: border-box;
  padding: 0 14.667px;
  border: 0.667px solid #e6e6eb;
  border-radius: 11px;
  background: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  color: #17171b;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: #b4b4bc;
  }
`;

const CreateButton = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  height: 38.667px;
  padding: 11.667px 20.5px 12px 18px;
  border: none;
  border-radius: 11px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#E6E6EB' : '#2563EB')};
  color: ${({ disabled }) => (disabled ? '#B4B4BC' : '#FFFFFF')};
`;

const CancelButton = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  height: 38.667px;
  padding: 11.667px 18px 12px 16px;
  border: none;
  border-radius: 11px;
  background: #ededf0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #6b6b73;
  cursor: pointer;
  white-space: nowrap;
`;

function ProjectKnowledgeSection({ companyId, projects, loading, error, onReload, onAddProject }) {
  const [isAdding, setIsAdding] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  // 어느 프로젝트를 펼쳤는지는 화면 상태다. 서버에 저장할 것이 아니다.
  const [expandedId, setExpandedId] = useState(null);

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
        icon={treeIcon}
        title="프로젝트 지식"
        description="선택 사항 · 프로젝트마다 다른 규칙만 따로 정합니다. 회사 규칙은 그대로 상속됩니다"
        count={`${projects.length}개`}
      />

      {loading && projects.length === 0 && <LoadingState compact label="프로젝트를 불러오는 중…" />}
      {error && projects.length === 0 && <ErrorState error={error} onRetry={onReload} compact />}

      {projects.length > 0 && (
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectKnowledgeItem
              key={project.id}
              companyId={companyId}
              project={project}
              index={index}
              expanded={expandedId === project.id}
              onToggleExpand={() =>
                setExpandedId((prev) => (prev === project.id ? null : project.id))
              }
            />
          ))}
        </ProjectList>
      )}

      <AddRowWrap>
        <CornerCurve />
        {isAdding ? (
          <NameInputWrap>
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
          </NameInputWrap>
        ) : (
          <AddButton type="button" onClick={() => setIsAdding(true)}>
            <PlusBadge>+</PlusBadge>
            <AddTitle>프로젝트 지식 추가</AddTitle>
            <AddHint>이 프로젝트에서만 쓰는 규칙을 더합니다 · 답하지 않고 넘어가도 됩니다</AddHint>
          </AddButton>
        )}
      </AddRowWrap>
    </Wrap>
  );
}

export default ProjectKnowledgeSection;
