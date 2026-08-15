import { useState } from 'react';
import styled from 'styled-components';
import HandbookHeaderControls from './HandbookHeaderControls';
import ConfirmInboxPanel from './ConfirmInboxPanel';
import AddItemPanel from './AddItemPanel';
import HandbookTierTree from './HandbookTierTree';
import HandbookDetailPanel from './HandbookDetailPanel';
import { INITIAL_HANDBOOK_ITEMS, INITIAL_PROJECTS } from './handbookTabData';

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const Heading = styled.h1`
  margin: 0;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -0.6px;
`;

const Subheading = styled.p`
  margin: 6px 0 0;
  font-family: Pretendard;
  font-size: 13px;
  color: #6b6b73;
`;

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  align-self: stretch;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1 0 0;
  min-width: 0;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  flex-shrink: 0;
  position: sticky;
  top: 16px;
`;

const TreeScroll = styled.div`
  max-height: 560px;
  overflow-y: auto;
  padding-right: 4px;
`;

function HandbookTab() {
  const [items, setItems] = useState(INITIAL_HANDBOOK_ITEMS);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeTier, setActiveTier] = useState('all');
  const [selectedItemId, setSelectedItemId] = useState(INITIAL_HANDBOOK_ITEMS[0]?.id ?? null);
  const [addPanelOpen, setAddPanelOpen] = useState(false);

  const waitingItems = items.filter((item) => item.status !== 'confirmed');
  const confirmedCount = items.length - waitingItems.length;
  const selectedItem = items.find((item) => item.id === selectedItemId) ?? null;

  const handleConfirm = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status: 'confirmed' } : item)));
  };

  const handleConfirmAll = () => {
    setItems((prev) => prev.map((item) => (item.status !== 'confirmed' ? { ...item, status: 'confirmed' } : item)));
  };

  const handleAddProject = (key, label) => {
    setProjects((prev) => (prev.some((p) => p.key === key) ? prev : [...prev, { key, label }]));
  };

  const handleSaveNewItem = ({ tier, groupKey, text }) => {
    const newItem = {
      id: `owner-${Date.now()}`,
      tier,
      groupKey,
      text,
      enText: '',
      koSource: text,
      sourceLabel: '대표 직접 작성',
      status: 'confirmed',
      day0: false,
      ownerAuthored: true,
      lastConfirmed: '방금',
    };
    setItems((prev) => [...prev, newItem]);
    setActiveTier('all');
    setSelectedItemId(newItem.id);
    setAddPanelOpen(false);
  };

  const handleUpdateItemText = (id, text) => {
    if (!text) return;
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, text, lastConfirmed: '방금' } : item)));
  };

  return (
    <TabContent>
      <div>
        <Heading>핸드북</Heading>
        <Subheading>확인된 항목만 보관함에 쌓입니다. 확인 전 항목은 대시보드에서 언제든 확인할 수 있습니다</Subheading>
      </div>

      <HandbookHeaderControls
        activeTier={activeTier}
        onTierChange={setActiveTier}
        waitingCount={waitingItems.length}
        confirmedCount={confirmedCount}
        addPanelOpen={addPanelOpen}
        onToggleAddPanel={() => setAddPanelOpen((prev) => !prev)}
      />

      {addPanelOpen && (
        <AddItemPanel
          projects={projects}
          onAddProject={handleAddProject}
          onSave={handleSaveNewItem}
          onClose={() => setAddPanelOpen(false)}
        />
      )}

      {waitingItems.length > 0 && (
        <ConfirmInboxPanel items={waitingItems} onConfirm={handleConfirm} onConfirmAll={handleConfirmAll} />
      )}

      <Body>
        <LeftColumn>
          <TreeScroll>
            <HandbookTierTree
              activeTier={activeTier}
              items={items}
              selectedItemId={selectedItemId}
              onSelect={setSelectedItemId}
              projects={projects}
            />
          </TreeScroll>
        </LeftColumn>
        <RightColumn>
          <HandbookDetailPanel item={selectedItem} onSave={handleUpdateItemText} />
        </RightColumn>
      </Body>
    </TabContent>
  );
}

export default HandbookTab;
