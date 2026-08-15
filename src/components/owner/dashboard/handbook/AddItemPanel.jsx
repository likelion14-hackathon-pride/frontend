import { useState } from 'react';
import styled from 'styled-components';
import { CATEGORY_OPTIONS } from './handbookTabData';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid #dbe4fc;
  background: #f5f8ff;
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: #17171b;
  color: #fff;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 1px solid #dbe4fc;
  background: #fff;
  color: #6b6b73;
  cursor: pointer;
`;

const SectionLabel = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
  color: #a0a0a8;
`;

const ChipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? 'transparent' : '#dbe4fc')};
  background: ${({ $active }) => ($active ? '#2563eb' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#17171b')};
  cursor: pointer;
  white-space: pre-line;
  text-align: center;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  line-height: 1.3;
`;

const AddProjectChip = styled(Chip)`
  border-style: dashed;
  background: #ffffff;
  color: #6b6b73;
`;

const NewProjectInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NewProjectInput = styled.input`
  flex: 1 0 0;
  height: 34px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: Pretendard;
  font-size: 12px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const SmallButton = styled.button`
  height: 34px;
  padding: 0 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  background: ${({ $primary }) => ($primary ? '#2563eb' : '#f0f0f2')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#6b6b73')};
`;

const RuleTextarea = styled.textarea`
  resize: none;
  min-height: 56px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #dbe4fc;
  font-family: Pretendard;
  font-size: 12.5px;
  color: #17171b;
  outline: none;

  &::placeholder {
    color: #a0a0a8;
  }

  &:focus {
    border-color: #2563eb;
  }
`;

const HintText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  height: 36px;
  padding: 0 20px;
  border: none;
  border-radius: 999px;
  background: ${({ disabled }) => (disabled ? '#dbe4fc' : '#2563eb')};
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
`;

function AddItemPanel({ projects, onAddProject, onSave, onClose }) {
  const [tier, setTier] = useState('company');
  const [categoryKey, setCategoryKey] = useState(CATEGORY_OPTIONS[0].key);
  const [projectKey, setProjectKey] = useState(projects[0]?.key ?? '');
  const [showNewProjectInput, setShowNewProjectInput] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [ruleText, setRuleText] = useState('');

  const groupKey = tier === 'company' ? categoryKey : projectKey;
  const canSave = ruleText.trim().length > 0 && groupKey;

  const handleAddProject = () => {
    const name = newProjectName.trim();
    if (!name) return;
    const key = name.toLowerCase().replace(/\s+/g, '-');
    onAddProject(key, name);
    setProjectKey(key);
    setNewProjectName('');
    setShowNewProjectInput(false);
  };

  const handleSave = () => {
    if (!canSave) return;
    onSave({ tier, groupKey, text: ruleText.trim() });
    setRuleText('');
  };

  return (
    <Panel>
      <HeadRow>
        <Badge>대표 직접 작성</Badge>
        <CloseButton type="button" onClick={onClose} aria-label="닫기">
          ✕
        </CloseButton>
      </HeadRow>

      <div>
        <SectionLabel>카테고리</SectionLabel>
        <ChipRow style={{ marginTop: 8 }}>
          <Chip type="button" $active={tier === 'company'} onClick={() => setTier('company')}>
            회사 규칙
          </Chip>
          {CATEGORY_OPTIONS.map((cat) => (
            <Chip
              key={cat.key}
              type="button"
              $active={tier === 'company' && categoryKey === cat.key}
              onClick={() => {
                setTier('company');
                setCategoryKey(cat.key);
              }}
            >
              {cat.label}
            </Chip>
          ))}
        </ChipRow>
      </div>

      <div>
        <SectionLabel>프로젝트 지식</SectionLabel>
        <ChipRow style={{ marginTop: 8 }}>
          {projects.map((project) => (
            <Chip
              key={project.key}
              type="button"
              $active={tier === 'project' && projectKey === project.key}
              onClick={() => {
                setTier('project');
                setProjectKey(project.key);
              }}
            >
              {project.label}
            </Chip>
          ))}
          {!showNewProjectInput && (
            <AddProjectChip type="button" onClick={() => setShowNewProjectInput(true)}>
              + 프로젝트 추가
            </AddProjectChip>
          )}
        </ChipRow>
        {showNewProjectInput && (
          <NewProjectInputRow style={{ marginTop: 8 }}>
            <NewProjectInput
              autoFocus
              value={newProjectName}
              placeholder="새 프로젝트 이름 (예: mobile-app)"
              onChange={(e) => setNewProjectName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddProject()}
            />
            <SmallButton type="button" $primary onClick={handleAddProject}>
              추가
            </SmallButton>
            <SmallButton type="button" onClick={() => setShowNewProjectInput(false)}>
              취소
            </SmallButton>
          </NewProjectInputRow>
        )}
      </div>

      <div>
        <SectionLabel>한 줄 규칙</SectionLabel>
        <RuleTextarea
          style={{ marginTop: 8, width: '100%' }}
          value={ruleText}
          placeholder="예: 연차는 사전 승인 없이도 사용"
          onChange={(e) => setRuleText(e.target.value)}
        />
        <HintText>원문 그대로 — 대표님 말투로 적어주세요. SAI가 영어 요약을 자동으로 붙입니다.</HintText>
      </div>

      <FooterRow>
        <HintText>저장 즉시 &quot;대표 직접 작성&quot;으로 기록됩니다</HintText>
        <SaveButton type="button" disabled={!canSave} onClick={handleSave}>
          핸드북에 저장
        </SaveButton>
      </FooterRow>
    </Panel>
  );
}

export default AddItemPanel;
