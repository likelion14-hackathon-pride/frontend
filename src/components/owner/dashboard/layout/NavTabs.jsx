import styled from 'styled-components';

export const OWNER_TABS = [
  { key: 'dashboard', label: '대시보드' },
  { key: 'handbook', label: '핸드북' },
  { key: 'question', label: '질문' },
  { key: 'source', label: '소스' },
  { key: 'settings', label: '설정' },
];

const Track = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: #f0f0f2;
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 18px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.2px;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  background: ${({ $active }) => ($active ? '#2563eb' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#6b6b73')};

  &:hover {
    color: ${({ $active }) => ($active ? '#ffffff' : '#17171b')};
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
