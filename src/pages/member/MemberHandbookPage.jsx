import { useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import * as handbookApi from '../../apis/handbook';
import {
  AREA_KEY_DESCRIPTION,
  AREA_KEY_LABEL,
  AREA_KEY_ORDER,
  ENTRY_ORIGIN_LABEL,
  ENTRY_STATUS,
  EVIDENCE_TAG_LABEL,
  SCOPE_KIND,
  lookup,
} from '../../apis/constants';
import MemberShell from '../../components/member/layout/MemberShell';
import { ErrorState, LoadingState } from '../../components/common/AsyncStates';
import { useAsync } from '../../hooks/useAsync';
import { useMemberNavigation } from '../../context/member/MemberContext';
import { formatDateTime } from '../../utils/time';

const EMPTY = [];

function toRuleItem(entry, index) {
  const source = entry.source;
  return {
    id: entry.id,
    title: entry.ruleEn || entry.title,
    // 접힌 줄에도 출처가 보인다. 근거가 없으면 어디서 만들어졌는지라도 보여 준다.
    sourceTag: source?.label ?? lookup(ENTRY_ORIGIN_LABEL, entry.sourceType),
    desc: entry.ruleEn && entry.ruleEn !== entry.title ? entry.title : null,
    quote: entry.originalKo,
    sourceLine: source
      ? [
          `Source · ${lookup(EVIDENCE_TAG_LABEL, source.tag)}`,
          source.label,
          source.speakerName,
          source.occurredAt ? formatDateTime(source.occurredAt, { fallback: '' }) : null,
          source.count > 1 ? `외 ${source.count - 1}건` : null,
        ]
          .filter(Boolean)
          .join(' · ')
      : `Source · ${lookup(ENTRY_ORIGIN_LABEL, entry.sourceType)}`,
    sourceHref: source?.permalink ?? null,
    defaultOpen: index === 0,
  };
}

export default function MemberHandbookPage() {
  const navigate = useNavigate();
  const { companyId, scopes, projectScopes } = useMemberNavigation();

  // 팀원에게는 확정된 규칙만 보인다. 초안과 빈 항목은 대표 화면에서 다룬다.
  const entriesQuery = useAsync(
    () => handbookApi.fetchAllEntries(companyId, { status: ENTRY_STATUS.CONFIRMED }),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  const entries = entriesQuery.data ?? EMPTY;

  const companyGroups = useMemo(() => {
    const companyScopeList = scopes.filter((scope) => scope.kind === SCOPE_KIND.COMPANY);
    // 서버가 시딩한 4개 공간 순서대로. 목록에 없는 areaKey 가 오면 뒤에 붙인다.
    const ordered = [
      ...AREA_KEY_ORDER.map((areaKey) =>
        companyScopeList.find((scope) => scope.areaKey === areaKey)
      ).filter(Boolean),
      ...companyScopeList.filter((scope) => !AREA_KEY_ORDER.includes(scope.areaKey)),
    ];

    return ordered.map((scope) => {
      const items = entries.filter((entry) => entry.scopeId === scope.id).map(toRuleItem);
      return {
        id: scope.id,
        name: scope.name || lookup(AREA_KEY_LABEL, scope.areaKey),
        meta: scope.description || lookup(AREA_KEY_DESCRIPTION, scope.areaKey),
        items,
      };
    });
  }, [scopes, entries]);

  const projectItemsById = useMemo(() => {
    const map = {};
    projectScopes.forEach((scope) => {
      map[String(scope.id)] = {
        name: scope.name,
        description: scope.description,
        items: entries.filter((entry) => entry.scopeId === scope.id).map(toRuleItem),
      };
    });
    return map;
  }, [projectScopes, entries]);

  const firstProjectId = projectScopes[0]?.id;

  return (
    <MemberShell screenTitle="Handbook">
      {entriesQuery.loading && !entriesQuery.data ? (
        <LoadingState label="핸드북을 불러오는 중…" />
      ) : entriesQuery.error && !entriesQuery.data ? (
        <ErrorState error={entriesQuery.error} onRetry={entriesQuery.reload} />
      ) : (
        <Outlet
          context={{
            companyGroups,
            projectItemsById,
            hasProjects: Boolean(firstProjectId),
            onGoToProject: () =>
              firstProjectId && navigate(`/member/handbook/project/${firstProjectId}`),
          }}
        />
      )}
    </MemberShell>
  );
}
