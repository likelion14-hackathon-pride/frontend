import styled from 'styled-components';

export const OWNER_TABS = [
  { key: 'dashboard', label: '대시보드' },
  { key: 'handbook', label: '핸드북' },
  { key: 'question', label: '질문' },
  { key: 'source', label: '소스' },
  { key: 'settings', label: '설정' },
];

const Track = styled.nav`
  box-sizing: border-box;
  display: flex;
  width: 388.76px;
  height: 52px;
  padding: 0 7px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 999px;
  border: 1px solid #e6e6eb;
  background: #fff;
  box-shadow:
    0 8px 20px -12px rgba(23, 44, 90, 0.22),
    0 1px 0 1px #fff inset;
`;

const Tab = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  padding: 10.667px 20px 10px 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 129%;
  letter-spacing: -0.2px;
  white-space: nowrap;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  background: ${({ $active }) => ($active ? '#2563eb' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#3c3c44')};

  &:hover {
    color: ${({ $active }) => ($active ? '#fff' : '#17171b')};
  }
`;

function NavTabs({ activeTab, onChange }) {
  return (
    <Track>
      {OWNER_TABS.map((tab) => (
        <Tab key={tab.key} type="button" $active={activeTab === tab.key} onClick={() => onChange(tab.key)}>
          {tab.label}
        </Tab>
      ))}
    </Track>
  );
}

export default NavTabs;
