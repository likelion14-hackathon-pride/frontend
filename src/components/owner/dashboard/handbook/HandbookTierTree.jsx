import styled from 'styled-components';
import StatusBadge from '../shared/StatusBadge';
import { COMPANY_GROUPS } from './handbookTabData';

const Tree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-self: stretch;
`;

const Band = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 14px;
  background: ${({ $tone }) => ($tone === 'company' ? '#17171b' : '#2563eb')};
`;

const BandTitleGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const BandTitle = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 800;
  color: #ffffff;
`;

const BandDescription = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.55);
`;

const BandCount = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
`;

const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 14px;
  border-left: 2px solid #f0f0f2;
  margin-left: 8px;
`;

const GroupBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GroupHeadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 4px;
`;

const GroupDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const GroupLabel = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-weight: 700;
  color: #17171b;
  letter-spacing: 0.3px;
`;

const GroupDescription = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const GroupCount = styled.span`
  margin-left: auto;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  color: #a0a0a8;
`;

const OwnerTag = styled.span`
  padding: 2px 7px;
  border-radius: 6px;
  background: #eaf1fe;
  color: #1d4ed8;
  font-family: Pretendard;
  font-size: 9.5px;
  font-weight: 700;
`;

const ItemRow = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 10px;
  border: 1px solid ${({ $active }) => ($active ? '#b3caf8' : 'transparent')};
  background: ${({ $active }) => ($active ? '#eaf1fe' : 'transparent')};
  cursor: pointer;
  text-align: left;

  &:hover {
    background: ${({ $active }) => ($active ? '#eaf1fe' : '#f7f8fc')};
  }
`;

const ItemText = styled.span`
  flex: 1 0 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 600;
  color: #17171b;
`;

const Chevron = styled.span`
  flex-shrink: 0;
  color: #c4c4cc;
  font-size: 12px;
`;

const EmptyGroupHint = styled.span`
  padding: 8px 12px;
  font-family: Pretendard;
  font-size: 11px;
  color: #c4c4cc;
`;

function ItemRowView({ item, active, onSelect }) {
  return (
    <ItemRow type="button" $active={active} onClick={() => onSelect(item.id)}>
      <ItemText>{item.text}</ItemText>
      {item.ownerAuthored && <OwnerTag>대표 직접 추가</OwnerTag>}
      <StatusBadge status={item.status === 'confirmed' ? 'confirmed' : 'unconfirmed'} />
      <Chevron>›</Chevron>
    </ItemRow>
  );
}

function HandbookTierTree({ activeTier, items, selectedItemId, onSelect, projects }) {
  const confirmedItems = items.filter((item) => item.status === 'confirmed');
  const companyItems = confirmedItems.filter((item) => item.tier === 'company');
  const projectItems = confirmedItems.filter((item) => item.tier === 'project');

  const showCompany = activeTier === 'all' || activeTier === 'company';
  const showProject = activeTier === 'all' || activeTier === 'project';

  return (
    <Tree>
      {showCompany && (
        <div>
          <Band $tone="company">
            <BandTitleGroup>
              <BandTitle>회사 규칙</BandTitle>
              <BandDescription>프로젝트가 바뀌어도 그대로 적용되는 상위 계층</BandDescription>
            </BandTitleGroup>
            <BandCount>{companyItems.length}개 항목</BandCount>
          </Band>
          <GroupList>
            {COMPANY_GROUPS.map((group) => {
              const groupItems = companyItems.filter((item) => item.groupKey === group.key);
              return (
                <GroupBlock key={group.key}>
                  <GroupHeadRow>
                    <GroupDot $color={group.dotColor} />
                    <GroupLabel>{group.label}</GroupLabel>
                    <GroupDescription>{group.description}</GroupDescription>
                    <GroupCount>{groupItems.length}개</GroupCount>
                  </GroupHeadRow>
                  {groupItems.length === 0 ? (
                    <EmptyGroupHint>확인된 항목이 없습니다</EmptyGroupHint>
                  ) : (
                    groupItems.map((item) => (
                      <ItemRowView key={item.id} item={item} active={item.id === selectedItemId} onSelect={onSelect} />
                    ))
                  )}
                </GroupBlock>
              );
            })}
          </GroupList>
        </div>
      )}

      {showProject && (
        <div>
          <Band $tone="project">
            <BandTitleGroup>
              <BandTitle>프로젝트 지식</BandTitle>
              <BandDescription>프로젝트마다 다른 하위 계층. 다른 프로젝트의 규칙은 근거로 쓰이지 않습니다</BandDescription>
            </BandTitleGroup>
            <BandCount>{projectItems.length}개 항목</BandCount>
          </Band>
          <GroupList>
            {projects.map((project) => {
              const groupItems = projectItems.filter((item) => item.groupKey === project.key);
              return (
                <GroupBlock key={project.key}>
                  <GroupHeadRow>
                    <GroupDot $color="#2563eb" />
                    <GroupLabel>{project.label.toUpperCase()}</GroupLabel>
                    <GroupCount>{groupItems.length}개</GroupCount>
                  </GroupHeadRow>
                  {groupItems.length === 0 ? (
                    <EmptyGroupHint>새로 추가된 항목은 원형 점 + &quot;대표 직접 추가&quot; 태그로 표시</EmptyGroupHint>
                  ) : (
                    groupItems.map((item) => (
                      <ItemRowView key={item.id} item={item} active={item.id === selectedItemId} onSelect={onSelect} />
                    ))
                  )}
                </GroupBlock>
              );
            })}
          </GroupList>
        </div>
      )}
    </Tree>
  );
}

export default HandbookTierTree;
