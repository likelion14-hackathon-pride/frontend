import styled from 'styled-components';
import { COMPANY_GROUPS } from './handbookTabData';
import fileTransWhite from '../../../../assets/owner/file_trans_white.svg';
import treeIcon from '../../../../assets/owner/tree.svg';

const Tree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`;

const Band = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 53.333px;
  padding: 0 16px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.667px solid ${({ $tone }) => ($tone === 'company' ? '#22376A' : '#1D4ED8')};
  background: ${({ $tone }) => ($tone === 'company' ? '#101828' : '#2563EB')};
  box-shadow: ${({ $tone }) =>
    $tone === 'company'
      ? '0 1px 0 0 rgba(255, 255, 255, 0.14) inset'
      : '0 1px 0 0 rgba(255, 255, 255, 0.22) inset, 0 14px 30px -14px rgba(37, 99, 235, 0.55)'};
`;

const BandIconBox = styled.span`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.667px solid rgba(255, 255, 255, ${({ $tone }) => ($tone === 'company' ? 0.22 : 0.3)});
  background: rgba(255, 255, 255, ${({ $tone }) => ($tone === 'company' ? 0.14 : 0.16)});
`;

const BandIconImg = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;

const BandTextStack = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex: 1 0 0;
  min-width: 0;
`;

const BandTitle = styled.span`
  flex-shrink: 0;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  letter-spacing: -0.3px;
`;

const BandDescription = styled.span`
  min-width: 0;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BandCount = styled.span`
  flex-shrink: 0;
  color: #fff;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
`;

const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px 14px 34px;
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 4px 0;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 18.667px;
  margin-bottom: 12px;
`;

const CornerCurve = styled.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 0 0 0 7px;
  border-bottom: 1.333px solid #e0e0e6;
  border-left: 1.333px solid #e0e0e6;
`;

const Square = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 3px;
  background: #1d4ed8;
  flex-shrink: 0;
`;

const Label = styled.span`
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: #3c3c44;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Description = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 400;
  line-height: 121%;
  color: #b4b4bc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DividerLine = styled.span`
  flex: 1 1 auto;
  height: 1px;
  background: #e6e6eb;
  min-width: 16px;
`;

const Count = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-weight: 600;
  color: #a0a0a8;
  flex-shrink: 0;
  white-space: nowrap;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
`;

const ItemButton = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-height: 48.927px;
  padding: 15.333px 10.667px 13.594px 18.667px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  cursor: pointer;
  text-align: left;
  border-radius: 22px;

  border: 0.667px solid ${({ $active }) => ($active ? '#C9DAFB' : '#EFEFF1')};
  background: ${({ $active }) => ($active ? '#F5F8FF' : '#FFFFFF')};
  box-shadow: 0 3px 8px -2px rgba(23, 44, 90, 0.08), 0 14px 34px -14px rgba(23, 44, 90, 0.22);

  &:hover {
    background: ${({ $active }) => ($active ? '#F5F8FF' : '#FAFAFB')};
  }
`;

const ItemText = styled.span`
  flex: 1 0 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.6px;
  letter-spacing: -0.3px;
`;

const Chevron = styled.span`
  flex-shrink: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

const EmptyGroupHint = styled.span`
  padding: 8px 4px;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  color: #c4c4cc;
`;

function ItemRowView({ item, active, onSelect }) {
  return (
    <ItemButton type="button" $active={active} onClick={() => onSelect(item.id)}>
      <ItemText>{item.text}</ItemText>
      <Chevron>›</Chevron>
    </ItemButton>
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
            <BandIconBox $tone="company">
              <BandIconImg src={fileTransWhite} alt="" />
            </BandIconBox>
            <BandTextStack>
              <BandTitle>회사 규칙</BandTitle>
              <BandDescription>프로젝트가 바뀌어도 그대로 적용되는 상위 계층</BandDescription>
            </BandTextStack>
            <BandCount>{companyItems.length}개 항목</BandCount>
          </Band>
          <GroupList>
            {COMPANY_GROUPS.map((group) => {
              const groupItems = companyItems.filter((item) => item.groupKey === group.key);
              return (
                <CategorySection key={group.key}>
                  <Header>
                    <CornerCurve />
                    <Square />
                    <Label>{group.label}</Label>
                    <Description>{group.description}</Description>
                    <DividerLine />
                    <Count>{groupItems.length}개</Count>
                  </Header>
                  <ItemList>
                    {groupItems.length === 0 ? (
                      <EmptyGroupHint>확인된 항목이 없습니다</EmptyGroupHint>
                    ) : (
                      groupItems.map((item) => (
                        <ItemRowView
                          key={item.id}
                          item={item}
                          active={item.id === selectedItemId}
                          onSelect={onSelect}
                        />
                      ))
                    )}
                  </ItemList>
                </CategorySection>
              );
            })}
          </GroupList>
        </div>
      )}

      {showProject && (
        <div>
          <Band $tone="project">
            <BandIconBox $tone="project">
              <BandIconImg src={treeIcon} alt="" />
            </BandIconBox>
            <BandTextStack>
              <BandTitle>프로젝트 지식</BandTitle>
              <BandDescription>프로젝트마다 다른 하위 계층. 다른 프로젝트의 규칙은 근거로 쓰이지 않습니다</BandDescription>
            </BandTextStack>
            <BandCount>{projectItems.length}개 항목</BandCount>
          </Band>
          <GroupList>
            {projects.map((project) => {
              const groupItems = projectItems.filter((item) => item.groupKey === project.key);
              return (
                <CategorySection key={project.key}>
                  <Header>
                    <CornerCurve />
                    <Square />
                    <Label>{project.label}</Label>
                    <DividerLine />
                    <Count>{groupItems.length}개</Count>
                  </Header>
                  <ItemList>
                    {groupItems.length === 0 ? (
                      <EmptyGroupHint>확인된 항목이 없습니다</EmptyGroupHint>
                    ) : (
                      groupItems.map((item) => (
                        <ItemRowView
                          key={item.id}
                          item={item}
                          active={item.id === selectedItemId}
                          onSelect={onSelect}
                        />
                      ))
                    )}
                  </ItemList>
                </CategorySection>
              );
            })}
          </GroupList>
        </div>
      )}
    </Tree>
  );
}

export default HandbookTierTree;
