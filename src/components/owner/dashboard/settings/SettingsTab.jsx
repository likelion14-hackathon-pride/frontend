import { useState } from 'react';
import styled from 'styled-components';
import RiskKeywordCard from './RiskKeywordCard';
import WorkHoursCard from './WorkHoursCard';
import CompanyCodeCard from './CompanyCodeCard';
import { INITIAL_SETTINGS_KEYWORDS, DEFAULT_WORK_HOURS, MOCK_COMPANY_CODE } from './settingsData';

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
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

const BottomRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;

  > * {
    flex: 1 0 0;
  }
`;

function SettingsTab() {
  const [keywords, setKeywords] = useState(INITIAL_SETTINGS_KEYWORDS);
  const [workHoursEnabled, setWorkHoursEnabled] = useState(true);
  const [workHours, setWorkHours] = useState(DEFAULT_WORK_HOURS);

  const handleAddKeyword = (label, level) => {
    setKeywords((prev) => [...prev, { id: `sk-${Date.now()}`, label, level }]);
  };

  const handleRemoveKeyword = (id) => {
    setKeywords((prev) => prev.filter((keyword) => keyword.id !== id));
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(MOCK_COMPANY_CODE);
  };

  return (
    <TabContent>
      <div>
        <Heading>설정</Heading>
        <Subheading>위험 작업 키워드와 근무 시간, 팀원 합류 코드를 관리합니다</Subheading>
      </div>

      <RiskKeywordCard keywords={keywords} onAddKeyword={handleAddKeyword} onRemoveKeyword={handleRemoveKeyword} />

      <BottomRow>
        <WorkHoursCard
          enabled={workHoursEnabled}
          onToggle={() => setWorkHoursEnabled((prev) => !prev)}
          hours={workHours}
          onChangeHours={setWorkHours}
        />
        <CompanyCodeCard companyCode={MOCK_COMPANY_CODE} onCopyCode={handleCopyCode} />
      </BottomRow>
    </TabContent>
  );
}

export default SettingsTab;
