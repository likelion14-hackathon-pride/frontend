import { useState } from 'react';
import styled from 'styled-components';
import RiskKeywordCard from './RiskKeywordCard';
import WorkHoursCompanyCodeCard from './WorkHoursCompanyCodeCard';
import { INITIAL_SETTINGS_KEYWORDS, DEFAULT_WORK_HOURS, MOCK_COMPANY_CODE } from './settingsData';

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

function SettingsTab() {
  const [keywords, setKeywords] = useState(INITIAL_SETTINGS_KEYWORDS);
  const [workHoursEnabled, setWorkHoursEnabled] = useState(true);
  const [workHours] = useState(DEFAULT_WORK_HOURS);

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
      <HeaderTextGroup>
        <Heading>설정</Heading>
        <Subheading>
          위험 작업 키워드와 근무 시간은 팀원 화면의 사전 안내·시차 응답에 그대로 쓰입니다
        </Subheading>
      </HeaderTextGroup>

      <CardRow>
        <RiskKeywordCard
          keywords={keywords}
          onAddKeyword={handleAddKeyword}
          onRemoveKeyword={handleRemoveKeyword}
        />
        <WorkHoursCompanyCodeCard
          workHoursEnabled={workHoursEnabled}
          onToggleWorkHours={() => setWorkHoursEnabled((prev) => !prev)}
          hours={workHours}
          companyCode={MOCK_COMPANY_CODE}
          onCopyCode={handleCopyCode}
        />
      </CardRow>
    </TabContent>
  );
}

export default SettingsTab;
