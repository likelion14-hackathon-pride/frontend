import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import homeIcon from '../../../assets/icons/home.svg';
import tasksIcon from '../../../assets/icons/sharp-grey.svg';
import chatIcon from '../../../assets/icons/chat-grey.svg';
import handbookIcon from '../../../assets/icons/book-grey.svg';
import fileIcon from '../../../assets/icons/file.svg';
import linkIcon from '../../../assets/icons/link.svg';

const activeStyle = {
  background: 'linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%)',
  color: '#fff',
  boxShadow: '0 14px 34px -14px rgba(23, 44, 90, 0.22)',
};

export default function MemberNav() {
  const { pathname } = useLocation();
  const { goToHandbook, columns, companyScopes, projectScopes } = useMemberNavigation();
  const isHandbookActive = pathname.startsWith('/member/handbook');
  const isHandbookOpen = isHandbookActive;
  const isTasksActive = pathname.startsWith('/member/tasks');
  const [isProjectOpen, setIsProjectOpen] = useState(
    pathname.startsWith('/member/handbook/project')
  );

  // 배지는 아직 안 끝낸 카드 수다. Done 열은 세지 않는다.
  const taskCount = columns
    .filter((column) => column.id !== 'DONE')
    .reduce((sum, column) => sum + column.cards.length, 0);

  // 규칙 수는 지식공간의 entryCount(확정 규칙만) 합계다.
  const sumEntries = (scopes) => scopes.reduce((sum, scope) => sum + (scope.entryCount ?? 0), 0);
  const companyRuleCount = sumEntries(companyScopes);
  const projectRuleCount = sumEntries(projectScopes);

  return (
    <NavWrap>
      <NavItem to="/member/home" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        {({ isActive }) => (
          <>
            <IconImg src={homeIcon} alt="" width={15} height={15} $active={isActive} />
            <span>Home</span>
          </>
        )}
      </NavItem>

      <NavItem to="/member/tasks" $active={isTasksActive}>
        <IconImg src={tasksIcon} alt="" width={15} height={15} $active={isTasksActive} />
        <span>Tasks</span>
        <Badge $active={isTasksActive}>{taskCount}</Badge>
      </NavItem>

      <NavItem to="/member/ask" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        {({ isActive }) => (
          <>
            <IconImg src={chatIcon} alt="" width={15} height={15} $active={isActive} />
            <span>Ask SAI</span>
          </>
        )}
      </NavItem>

      <ToggleItem $active={isHandbookActive} onClick={() => goToHandbook()}>
        <IconImg src={handbookIcon} alt="" width={15} height={15} $active={isHandbookActive} />
        <span>Handbook</span>
        <Caret $open={isHandbookOpen}>▾</Caret>
      </ToggleItem>

      {isHandbookOpen && (
        <SubMenu>
          <SubItem to="/member/handbook/company">
            <img src={fileIcon} alt="" width={13} height={13} />
            <SubLabel>Company system</SubLabel>
            <SubCount>{companyRuleCount}</SubCount>
          </SubItem>

          <SubToggle onClick={() => setIsProjectOpen((v) => !v)}>
            <img src={linkIcon} alt="" width={13} height={13} />
            <SubLabel>By project</SubLabel>
            <SubCount>{projectRuleCount}</SubCount>
          </SubToggle>

          {isProjectOpen && projectScopes.length > 0 && (
            <ProjectTree>
              {projectScopes.map((scope) => {
                const isActive = pathname === `/member/handbook/project/${scope.id}`;
                return (
                  <ProjectRow key={scope.id}>
                    <TreeLine />
                    <ProjectItem to={`/member/handbook/project/${scope.id}`}>
                      <Dot $active={isActive} />
                      <ProjectLabel>{scope.name}</ProjectLabel>
                      <SubCount>{scope.entryCount ?? 0}</SubCount>
                    </ProjectItem>
                  </ProjectRow>
                );
              })}
            </ProjectTree>
          )}
        </SubMenu>
      )}
    </NavWrap>
  );
}

const itemStyles = css`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  color: #6b6b73;
  text-decoration: none;
  font-weight: 600;
  font-size: 14.5px;
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const NavItem = styled(NavLink)`
  ${itemStyles}

  ${(props) =>
    props.$active &&
    css`
      background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
      color: #fff;
      box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22);

      &:hover {
        box-shadow: 0 18px 38px -14px rgba(23, 44, 90, 0.3);
      }
    `}
`;

const ToggleItem = styled.button`
  ${itemStyles}

  ${(props) =>
    props.$active &&
    css`
      background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
      color: #fff;
      box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22);

      &:hover {
        box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22);
      }
    `}
`;

const IconImg = styled.img`
  filter: ${(props) => (props.$active ? 'brightness(0) invert(1)' : 'none')};
`;

const Badge = styled.span`
  margin-left: auto;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 11.5px;
  font-weight: 700;
  border-radius: 50%;
  transition: 0.15s;

  ${(props) =>
    props.$active
      ? css`
          background: rgba(255, 255, 255, 0.28);
          color: #fff;
          box-shadow: none;
        `
      : css`
          background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
          color: #fff;
          box-shadow:
            0 6px 16px rgba(255, 96, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        `}
`;

const Caret = styled.span`
  margin-left: auto;
  flex: none;
  font-size: 11px;
  color: inherit;
  transform: rotate(${(props) => (props.$open ? '0deg' : '-90deg')});
  transition: transform 0.15s;
`;

const subItemStyles = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 9px;
  color: #17171b;
  text-decoration: none;
  font-size: 14px;
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0 8px 20px;
`;

const SubItem = styled(NavLink)`
  ${subItemStyles}
`;

const SubToggle = styled.button`
  ${subItemStyles}
`;

const SubLabel = styled.span`
  flex: 1;
  min-width: 0;
  color: #6b6b73;
  font-size: 14px;
  font-weight: 700;
`;

const SubCount = styled.span`
  flex: none;
  font-size: 11.5px;
  font-weight: 700;
  color: inherit;
  opacity: 0.65;
`;

const ProjectTree = styled.div`
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 0;
    bottom: 19px;
    width: 1.5px;
    background: #e6e6eb;
  }
`;

const ProjectRow = styled.div`
  position: relative;
`;

const TreeLine = styled.span`
  position: absolute;
  left: -16px;
  top: 50%;
  width: 12px;
  height: 1.5px;
  background: #e6e6eb;
`;

const ProjectItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 9px;
  text-decoration: none;
  color: #17171b;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  flex: none;
  border-radius: 2px;
  background: ${(props) => (props.$active ? '#8A94A3' : '#D8D8DE')};
`;

const ProjectLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  color: #5a6675;
  font-weight: 700;
  font-family: 'IBM Plex Mono', monospace;
`;
