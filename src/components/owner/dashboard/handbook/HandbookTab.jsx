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
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;

const LeftColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1.15 1 380px;
  min-width: 0;
  padding: 14.667px 14.667px 22.667px 14.667px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 3px 8px -2px rgba(23, 44, 90, 0.08),
    0 14px 34px -14px rgba(23, 44, 90, 0.22);
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 320px;
  min-width: 0;
  position: sticky;
  top: 16px;
`;

function HandbookTab() {
  const [items, setItems] = useState(INITIAL_HANDBOOK_ITEMS);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeTier, setActiveTier] = useState('all');
  const [selectedItemId, setSelectedItemId] = useState(INITIAL_HANDBOOK_ITEMS[0]?.id ?? null);
  const [addPanelOpen, setAddPanelOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);

  const waitingItems = items.filter((item) => item.status !== 'confirmed');
  const selectedItem = items.find((item) => item.id === selectedItemId) ?? null;

  const handleConfirm = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'confirmed' } : item))
    );
  };

  const handleConfirmAll = () => {
    setItems((prev) =>
      prev.map((item) => (item.status !== 'confirmed' ? { ...item, status: 'confirmed' } : item))
    );
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
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text, lastConfirmed: '방금' } : item))
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItemId((prev) => (prev === id ? null : prev));
  };

  return (
    <TabContent>
      <HandbookHeaderControls
        activeTier={activeTier}
        onTierChange={setActiveTier}
        waitingCount={waitingItems.length}
        archiveOpen={archiveOpen}
        onToggleArchive={() => setArchiveOpen((prev) => !prev)}
        onOpenAddPanel={() => setAddPanelOpen(true)}
      />

      {addPanelOpen && (
        <AddItemPanel
          projects={projects}
          onAddProject={handleAddProject}
          onSave={handleSaveNewItem}
          onClose={() => setAddPanelOpen(false)}
        />
      )}

      {archiveOpen && (
        <ConfirmInboxPanel
          items={waitingItems}
          onConfirm={handleConfirm}
          onConfirmAll={handleConfirmAll}
          onClose={() => setArchiveOpen(false)}
        />
      )}

      <Body>
        <LeftColumn>
          <HandbookTierTree
            activeTier={activeTier}
            items={items}
            selectedItemId={selectedItemId}
            onSelect={setSelectedItemId}
            projects={projects}
          />
        </LeftColumn>
        <RightColumn>
          <HandbookDetailPanel
            item={selectedItem}
            onSave={handleUpdateItemText}
            onDelete={handleDeleteItem}
          />
        </RightColumn>
      </Body>
    </TabContent>
  );
}

export default HandbookTab;
