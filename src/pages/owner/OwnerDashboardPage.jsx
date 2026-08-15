import { useState } from 'react';
import DashboardLayout from '../../components/owner/dashboard/layout/DashboardLayout';
import DashboardHeader from '../../components/owner/dashboard/layout/DashboardHeader';
import DashboardHomeTab from '../../components/owner/dashboard/home/DashboardHomeTab';
import HandbookTab from '../../components/owner/dashboard/handbook/HandbookTab';
import QuestionTab from '../../components/owner/dashboard/question/QuestionTab';
import SourceTab from '../../components/owner/dashboard/source/SourceTab';
import SettingsTab from '../../components/owner/dashboard/settings/SettingsTab';

function OwnerDashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <DashboardLayout>
      <DashboardHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'dashboard' && <DashboardHomeTab />}
      {activeTab === 'handbook' && <HandbookTab />}
      {activeTab === 'question' && <QuestionTab />}
      {activeTab === 'source' && <SourceTab />}
      {activeTab === 'settings' && <SettingsTab />}
    </DashboardLayout>
  );
}

export default OwnerDashboardPage;
