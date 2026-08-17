import styled from 'styled-components';

import * as companiesApi from '../../../../apis/companies';
import * as policyApi from '../../../../apis/policy';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import { useAsync, useMutation } from '../../../../hooks/useAsync';
import { formatTimeOfDay } from '../../../../utils/time';
import RiskKeywordCard from './RiskKeywordCard';
import WorkHoursCompanyCodeCard from './WorkHoursCompanyCodeCard';
import { EMPTY_WORK_HOURS } from './settingsData';

const TabContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
`;

const HeaderTextGroup = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7.792px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.8px;
  letter-spacing: -1.2px;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%;
`;

const CardRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
`;

function SettingsTab({ companyId }) {
  const keywordsQuery = useAsync(() => policyApi.fetchRiskKeywords(companyId), [companyId], {
    enabled: Boolean(companyId),
  });
  const settingsQuery = useAsync(() => companiesApi.fetchCompanySettings(companyId), [companyId], {
    enabled: Boolean(companyId),
  });
  const companyQuery = useAsync(() => companiesApi.fetchCompany(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  const addKeyword = useMutation((payload) => policyApi.createRiskKeyword(companyId, payload));
  const removeKeyword = useMutation((id) => policyApi.deleteRiskKeyword(companyId, id));
  const updateSettings = useMutation((patch) =>
    companiesApi.updateCompanySettings(companyId, patch)
  );

  const settings = settingsQuery.data;
  const workHours = settings
    ? {
        start: formatTimeOfDay(settings.workingHoursStart),
        end: formatTimeOfDay(settings.workingHoursEnd),
        timezone: settings.timezone,
      }
    : EMPTY_WORK_HOURS;

  const companyCode = companyQuery.data?.code ?? '';

  const handleToggleWorkHours = async () => {
    const result = await updateSettings.mutate({
      workingHoursEnabled: !settings?.workingHoursEnabled,
    });
    if (result.ok) settingsQuery.reload();
  };

  if (settingsQuery.loading && !settings) {
    return (
      <TabContent>
        <LoadingState label="설정을 불러오는 중…" />
      </TabContent>
    );
  }

  if (settingsQuery.error && !settings) {
    return (
      <TabContent>
        <ErrorState error={settingsQuery.error} onRetry={settingsQuery.reload} />
      </TabContent>
    );
  }

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>설정</Heading>
        <Subheading>
          위험 작업 키워드와 근무 시간은 팀원 화면의 사전 안내·시차 응답에 그대로 쓰입니다
        </Subheading>
      </HeaderTextGroup>

      <InlineError
        error={
          addKeyword.error || removeKeyword.error || updateSettings.error || keywordsQuery.error
        }
        onRetry={keywordsQuery.error ? keywordsQuery.reload : undefined}
      />

      <CardRow>
        <RiskKeywordCard
          keywords={keywordsQuery.data ?? []}
          loading={keywordsQuery.loading}
          pending={addKeyword.pending || removeKeyword.pending}
          onAddKeyword={async (keyword, severity) => {
            const result = await addKeyword.mutate({ keyword, severity });
            if (result.ok) keywordsQuery.reload();
          }}
          onRemoveKeyword={async (id) => {
            const result = await removeKeyword.mutate(id);
            if (result.ok) keywordsQuery.reload();
          }}
        />
        <WorkHoursCompanyCodeCard
          workHoursEnabled={Boolean(settings?.workingHoursEnabled)}
          onToggleWorkHours={handleToggleWorkHours}
          togglePending={updateSettings.pending}
          hours={workHours}
          companyCode={companyCode}
          onCopyCode={() => companyCode && navigator.clipboard?.writeText(companyCode)}
        />
      </CardRow>
    </TabContent>
  );
}

export default SettingsTab;
