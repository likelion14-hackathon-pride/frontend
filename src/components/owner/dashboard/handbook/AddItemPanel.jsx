import { useState } from 'react';
import styled from 'styled-components';
import { CATEGORY_OPTIONS } from './handbookTabData';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 16.667px 8.667px 17px 16.667px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.667px solid #efeff1;
  background: #fafafb;
`;

const HeadRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const Badge = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 5.667px 15.74px 5.333px 11px;
  align-items: center;
  border-radius: 8px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const HeadDescription = styled.span`
  flex: 1 0 0;
  min-width: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

const CloseButton = styled.button`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 1.667px 6.667px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.667px solid #e6e6eb;
  background: #fff;
  cursor: pointer;
  color: #a0a0a8;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`;

const SectionLabel = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const ChipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  box-sizing: border-box;
  display: flex;
  height: 30px;
  padding: 7.667px 12.667px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 9px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;

  border: 0.667px solid ${({ $active }) => ($active ? '#2563EB' : '#E6E6EB')};
  background: ${({ $active }) => ($active ? '#2563EB' : '#FFFFFF')};
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#6B6B73')};
`;

const AddProjectChip = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 107.292px;
  height: 30px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 9px;
  border: 0.667px dashed #c9cad2;
  background: #fff;
  cursor: pointer;
`;

const AddProjectLabel = styled.span`
  width: 81.958px;
  color: #6b6b73;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
`;

const NewProjectInputRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const NewProjectInput = styled.input`
  flex: 1 0 0;
  height: 30px;
  padding: 0 12px;
  border-radius: 9px;
  border: 0.667px solid #e6e6eb;
  background: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const SmallButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-weight: 700;
  background: ${({ $primary }) => ($primary ? '#2563eb' : '#f0f0f2')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#6b6b73')};
`;

const RuleTextarea = styled.textarea`
  resize: none;
  min-height: 90px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 0.667px solid #e6e6eb;
  background: #fff;
  font-family: 'Plus Jakarta Sans';
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
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  color: #a0a0a8;
`;

const FooterRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  display: flex;
  min-width: 110.146px;
  height: 36px;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 11px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#E6E6EB' : '#2563EB')};
  color: ${({ disabled }) => (disabled ? '#B4B4BC' : '#FFFFFF')};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
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
        <HeadDescription>
          질문을 기다리지 않고 규칙을 바로 등록합니다. 저장 즉시 확인됨 상태가 됩니다.
        </HeadDescription>
        <CloseButton type="button" onClick={onClose} aria-label="닫기">
          ✕
        </CloseButton>
      </HeadRow>

      <div style={{ width: '100%' }}>
        <SectionLabel>카테고리</SectionLabel>
        <ChipRow style={{ marginTop: 8 }}>
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

      <div style={{ width: '100%' }}>
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
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M4.5 1.125V7.875M1.125 4.5H7.875" stroke="#6B6B73" strokeWidth="1.5" />
              </svg>
              <AddProjectLabel>프로젝트 추가</AddProjectLabel>
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

      <div style={{ width: '100%' }}>
        <SectionLabel>한 줄 규칙</SectionLabel>
        <RuleTextarea
          style={{ marginTop: 8 }}
          value={ruleText}
          placeholder="예: 연차는 사전 승인 없이도 사용"
          onChange={(e) => setRuleText(e.target.value)}
        />
      </div>

      <FooterRow>
        <HintText>출처는 &quot;대표 직접 작성&quot;으로 기록됩니다</HintText>
        <SaveButton type="button" disabled={!canSave} onClick={handleSave}>
          핸드북에 저장
        </SaveButton>
      </FooterRow>
    </Panel>
  );
}

export default AddItemPanel;
