import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import * as handbookApi from '../../../../apis/handbook';
import {
  ENTRY_ORIGIN,
  ENTRY_STATUS,
  REVIEW_DECISION,
  REVIEW_STATUS,
  SCOPE_KIND,
} from '../../../../apis/constants';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import { useAsync, useMutation } from '../../../../hooks/useAsync';
import HandbookHeaderControls from './HandbookHeaderControls';
import ConfirmInboxPanel from './ConfirmInboxPanel';
import AddItemPanel from './AddItemPanel';
import HandbookTierTree from './HandbookTierTree';
import HandbookDetailPanel from './HandbookDetailPanel';
import ScrollArea from '../../../common/ScrollArea';
import { displayStatusOf } from './handbookTabData';

const TabContent = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
`;

const FillArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;
  flex-wrap: wrap;
  align-items: stretch;
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
  max-height: 100%;
  overflow: hidden;
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
`;

function toItem(entry) {
  return {
    id: entry.id,
    tier: entry.scopeKind === SCOPE_KIND.PROJECT ? 'project' : 'company',
    // 회사 규칙은 areaKey 로, 프로젝트는 scopeId 로 묶는다.
    groupKey: entry.scopeKind === SCOPE_KIND.PROJECT ? entry.scopeId : entry.areaKey,
    groupLabel: entry.scopeName,
    text: entry.title,
    enText: entry.ruleEn,
    koSource: entry.originalKo,
    sourceLabel: entry.source?.label ?? entry.sourceType,
    sourceHref: entry.source?.permalink ?? null,
    status: displayStatusOf(entry),
    day0: entry.sourceType === 'ONBOARDING',
    lastConfirmed: entry.reviewedAt ?? entry.updatedAt,
    raw: entry,
  };
}

function HandbookTab({ companyId }) {
  const [activeTier, setActiveTier] = useState('all');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [addPanelOpen, setAddPanelOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);

  // 트리·보관함 카드의 남는 높이를 실측해서 고정한다. flex 만으로는 여러 단계 아래까지
  // "확정된 높이"가 안 내려가서 내부 스크롤이 안 걸리는 경우가 있어 직접 잰다.
  const fillRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return undefined;

    const measure = () => {
      const top = el.getBoundingClientRect().top;
      // Background 하단 padding(48px)만큼 아래도 비워서 위 여백과 맞춘다.
      setFillHeight(Math.max(240, window.innerHeight - top - 48));
    };

    measure();
    window.addEventListener('resize', measure);
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('resize', measure);
      observer.disconnect();
    };
  }, [addPanelOpen, archiveOpen]);

  // 대표는 확정·초안·빈칸을 모두 본다. 보관(ARCHIVED)은 거절한 것이라 목록에서 뺀다.
  const entriesQuery = useAsync(() => handbookApi.fetchAllEntries(companyId), [companyId], {
    enabled: Boolean(companyId),
  });
  const reviewInboxQuery = useAsync(
    () =>
      handbookApi.fetchAllEntries(companyId, {
        reviewStatus: REVIEW_STATUS.PENDING,
        origin: [ENTRY_ORIGIN.SLACK, ENTRY_ORIGIN.GITHUB, ENTRY_ORIGIN.FILE].join(','),
      }),
    [companyId],
    { enabled: Boolean(companyId) }
  );
  const scopesQuery = useAsync(() => handbookApi.fetchScopes(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  const review = useMutation(({ entryId, decision }) =>
    handbookApi.reviewEntry(companyId, entryId, decision)
  );
  const reviewAll = useMutation((entryIds) => handbookApi.reviewAllEntries(companyId, entryIds));
  const createEntry = useMutation((payload) => handbookApi.createEntry(companyId, payload));
  const updateEntry = useMutation(({ entryId, patch }) =>
    handbookApi.updateEntry(companyId, entryId, patch)
  );
  const deleteEntry = useMutation((entryId) => handbookApi.deleteEntry(companyId, entryId));
  const createScope = useMutation((name) => handbookApi.createProjectScope(companyId, { name }));

  const items = useMemo(
    () =>
      (entriesQuery.data ?? [])
        .filter((entry) => entry.status !== ENTRY_STATUS.ARCHIVED)
        .map(toItem),
    [entriesQuery.data]
  );

  const scopes = scopesQuery.data?.items ?? [];
  const projects = useMemo(
    () =>
      scopes
        .filter((scope) => scope.kind === SCOPE_KIND.PROJECT)
        .map((scope) => ({ key: scope.id, label: scope.name })),
    [scopes]
  );

  const waitingItems = useMemo(
    () =>
      (reviewInboxQuery.data ?? [])
        .filter((entry) => entry.status !== ENTRY_STATUS.ARCHIVED)
        .map(toItem)
        .filter((item) => item.status !== 'confirmed'),
    [reviewInboxQuery.data]
  );
  // 오른쪽 상세 박스는 왼쪽 핸드북 트리(확정 항목)에 있는 것만 보여준다. 보관함의 초안은 대상이 아니다.
  const confirmedItems = items.filter((item) => item.status === 'confirmed');
  const selectedItem =
    confirmedItems.find((item) => item.id === selectedItemId) ?? confirmedItems[0] ?? null;

  const reload = () => {
    entriesQuery.reload();
    reviewInboxQuery.reload();
    scopesQuery.reload();
  };

  const handleConfirm = async (id) => {
    const result = await review.mutate({ entryId: id, decision: REVIEW_DECISION.APPROVE });
    if (result.ok) reload();
  };

  const handleConfirmAll = async () => {
    // 내용이 없는 BLANK 항목은 서버가 건너뛰고 skipped 로 알려 준다.
    const result = await reviewAll.mutate(waitingItems.map((item) => item.id));
    if (result.ok) reload();
  };

  const handleAddProject = async (_key, label) => {
    const result = await createScope.mutate(label);
    if (result.ok) scopesQuery.reload();
    return result.ok ? result.data.id : null;
  };

  const handleSaveNewItem = async ({ groupKey, tier, text }) => {
    // 서버는 scopeId 를 받는다. 회사 규칙이면 areaKey 에 해당하는 공간을 찾아 넘긴다.
    const scope =
      tier === 'project'
        ? scopes.find((item) => item.id === groupKey)
        : scopes.find((item) => item.kind === SCOPE_KIND.COMPANY && item.areaKey === groupKey);
    if (!scope) return;

    const result = await createEntry.mutate({
      title: text,
      originalKo: text,
      scopeId: scope.id,
    });
    if (!result.ok) return;

    setSelectedItemId(result.data.id);
    setAddPanelOpen(false);
    reload();
  };

  const handleUpdateItemText = async (id, text) => {
    if (!text) return;
    const result = await updateEntry.mutate({ entryId: id, patch: { title: text } });
    if (result.ok) reload();
  };

  const handleDeleteItem = async (id) => {
    const item = items.find((entry) => entry.id === id);
    // 확정 전 초안은 삭제가 아니라 거절(REJECT)로 내린다(handbook/views.py).
    const result =
      item?.status === 'confirmed'
        ? await deleteEntry.mutate(id)
        : await review.mutate({ entryId: id, decision: REVIEW_DECISION.REJECT });
    if (result.ok) {
      setSelectedItemId(null);
      reload();
    }
  };

  if (entriesQuery.loading && !entriesQuery.data) {
    return (
      <TabContent>
        <LoadingState label="핸드북을 불러오는 중…" />
      </TabContent>
    );
  }

  if (entriesQuery.error && !entriesQuery.data) {
    return (
      <TabContent>
        <ErrorState error={entriesQuery.error} onRetry={entriesQuery.reload} />
      </TabContent>
    );
  }

  return (
    <TabContent>
      <HandbookHeaderControls
        activeTier={activeTier}
        onTierChange={setActiveTier}
        waitingCount={waitingItems.length}
        archiveOpen={archiveOpen}
        onToggleArchive={() => {
          setAddPanelOpen(false);
          setArchiveOpen((prev) => !prev);
        }}
        onOpenAddPanel={() => {
          setArchiveOpen(false);
          setAddPanelOpen(true);
        }}
      />

      <InlineError
        error={
          review.error ||
          reviewInboxQuery.error ||
          reviewAll.error ||
          createEntry.error ||
          updateEntry.error ||
          deleteEntry.error ||
          createScope.error
        }
      />

      <FillArea ref={fillRef} style={fillHeight ? { height: fillHeight } : undefined}>
        {archiveOpen ? (
          <ConfirmInboxPanel
            items={waitingItems}
            pending={review.pending || reviewAll.pending || deleteEntry.pending}
            onConfirm={handleConfirm}
            onConfirmAll={handleConfirmAll}
            onDelete={handleDeleteItem}
            onClose={() => setArchiveOpen(false)}
          />
        ) : (
          <Body>
            <LeftColumn style={fillHeight ? { height: fillHeight } : undefined}>
              <ScrollArea>
                <HandbookTierTree
                  activeTier={activeTier}
                  items={items}
                  selectedItemId={selectedItem?.id ?? null}
                  onSelect={setSelectedItemId}
                  projects={projects}
                />
              </ScrollArea>
            </LeftColumn>
            <RightColumn style={fillHeight ? { height: fillHeight } : undefined}>
              {addPanelOpen ? (
                <AddItemPanel
                  projects={projects}
                  pending={createEntry.pending}
                  onAddProject={handleAddProject}
                  onSave={handleSaveNewItem}
                  onClose={() => setAddPanelOpen(false)}
                />
              ) : (
                <HandbookDetailPanel
                  item={selectedItem}
                  pending={updateEntry.pending || deleteEntry.pending}
                  onSave={handleUpdateItemText}
                  onDelete={handleDeleteItem}
                />
              )}
            </RightColumn>
          </Body>
        )}
      </FillArea>
    </TabContent>
  );
}

export default HandbookTab;
