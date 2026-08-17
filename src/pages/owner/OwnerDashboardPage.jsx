import { useState } from 'react';

import * as companiesApi from '../../apis/companies';
import DashboardLayout from '../../components/owner/dashboard/layout/DashboardLayout';
import DashboardHeader from '../../components/owner/dashboard/layout/DashboardHeader';
import DashboardHomeTab from '../../components/owner/dashboard/home/DashboardHomeTab';
import HandbookTab from '../../components/owner/dashboard/handbook/HandbookTab';
import QuestionTab from '../../components/owner/dashboard/question/QuestionTab';
import SourceTab from '../../components/owner/dashboard/source/SourceTab';
import SettingsTab from '../../components/owner/dashboard/settings/SettingsTab';
import { LoadingState } from '../../components/common/AsyncStates';
import { useAuth } from '../../context/AuthContext';
import { useAsync } from '../../hooks/useAsync';

function OwnerDashboardPage() {
  const { companyId, user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  // 상단 시차 패널이 쓰는 구성원 목록. 탭이 바뀌어도 다시 부르지 않는다.
  const membersQuery = useAsync(
    () => companiesApi.fetchMembers(companyId, { limit: 20 }),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  if (!companyId) {
    return (
      <DashboardLayout>
        <LoadingState label="회사 정보를 확인하는 중…" />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        members={membersQuery.data?.items ?? []}
        userName={user?.name}
        onLogout={logout}
      />

      {activeTab === 'dashboard' && (
        <DashboardHomeTab
          companyId={companyId}
          ownerName={user?.name}
          onNavigateToQuestions={() => setActiveTab('question')}
        />
      )}
      {activeTab === 'handbook' && <HandbookTab companyId={companyId} />}
      {activeTab === 'question' && <QuestionTab companyId={companyId} />}
      {activeTab === 'source' && <SourceTab companyId={companyId} />}
      {activeTab === 'settings' && <SettingsTab companyId={companyId} />}
    </DashboardLayout>
  );
}

export default OwnerDashboardPage;
