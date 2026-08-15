import styled from 'styled-components';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import bookIcon from '../../../assets/icons/book.svg';
import fileIcon from '../../../assets/icons/file.svg';
import linkIcon from '../../../assets/icons/link.svg';

const Card = styled.div`
  flex: 1;
  min-height: 0;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 15px 20px;
  border-bottom: 1px solid #F2F2F4;
`;

const HeaderTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 700;
`;

const CountBadge = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  color: #6B6B73;
  background: #F7F7F8;
  padding: 5px 10px;
  border-radius: 20px;
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  padding: 16px 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 14px;
  text-align: left;
  border: 0.5px solid rgba(0, 0, 0, 0.10);
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.15s;
  margin-top: ${(props) => (props.$spaced ? '10px' : '0')};

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

const NavLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 700;
  color: #17171B;
  line-height: 129%;
`;

const NavCount = styled.span`
  flex: none;
  font-size: 12px;
  font-weight: 700;
  color: #8A8A93;
`;

const NavArrow = styled.span`
  flex: none;
  font-size: 13px;
  color: #C0C0C8;
`;

const SubList = styled.div`
  position: relative;
  padding-left: 30px;
  margin-top: 6px;
`;

const SubButton = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 10px 11px 26px;
  text-align: left;
  border: none;
  background: transparent;
  border-radius: 9px;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background: #FAFAFB;
  }
`;

const TreeLine = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50%;
  width: 12px;
  border-left: 1.33px solid #E6E6EB;
  border-bottom: 1.33px solid #E6E6EB;
  border-radius: 0 0 0 8px;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  flex: none;
  border-radius: 2px;
  background: ${(props) => (props.$active ? '#FF6000' : '#D8D8DE')};
`;

const SubLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 700;
  color: ${(props) => (props.$active ? '#17171B' : '#3C3C44')};
  font-family: 'IBM Plex Mono', monospace;
`;

const SubMeta = styled.span`
  flex: none;
  font-size: 12px;
  color: #A0A0A8;
`;

const SubCount = styled.span`
  flex: none;
  font-size: 12px;
  font-weight: 700;
  color: #B4B4BC;
  min-width: 14px;
  text-align: right;
`;

export default function HandbookSummaryCard({
  totalEntries = 12,
  companyRuleCount = 12,
  projects = [
    { id: 'payment-api', label: 'payment-api', meta: 'This project', count: 3, active: true },
    { id: 'admin-web', label: 'admin-web', meta: 'Another project', count: 2, active: false },
  ],
}) {
  const { goToHandbook } = useMemberNavigation();

  return (
    <Card>
      <Header>
        <img src={bookIcon} alt="" width={15} height={15} />
        <HeaderTitle>Handbook</HeaderTitle>
        <CountBadge>{totalEntries} entries</CountBadge>
      </Header>

      <Body>
        <NavButton onClick={() => goToHandbook('company')}>
          <img src={fileIcon} alt="" width={15} height={15} />
          <NavLabel>Company system</NavLabel>
          <NavCount>{companyRuleCount} rules</NavCount>
          <NavArrow>→</NavArrow>
        </NavButton>

        <NavButton $spaced onClick={() => goToHandbook(`project/${projects[0]?.id ?? ''}`)}>
          <img src={linkIcon} alt="" width={15} height={15} />
          <NavLabel>By project</NavLabel>
          <NavCount>{projects.reduce((sum, p) => sum + p.count, 0)} rules</NavCount>
          <NavArrow>→</NavArrow>
        </NavButton>

        <SubList>
          {projects.map((p) => (
            <SubButton key={p.id} onClick={() => goToHandbook(`project/${p.id}`)}>
              <TreeLine />
              <Dot $active={p.active} />
              <SubLabel $active={p.active}>{p.label}</SubLabel>
              <SubMeta>{p.meta}</SubMeta>
              <SubCount>{p.count}</SubCount>
            </SubButton>
          ))}
        </SubList>
      </Body>
    </Card>
  );
}