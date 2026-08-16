import { useState } from 'react';
import styled from 'styled-components';
import SourceBoxCard from './SourceBoxCard';
import { INITIAL_SOURCES } from './sourceTabData';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';

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

const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const GithubIconCrop = styled.span`
  display: flex;
  width: 27.79px;
  height: 27.79px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 27.79px;
    height: 27.79px;
    transform: scale(1.4);
  }
`;

function SourceTab() {
  const [sources, setSources] = useState(INITIAL_SOURCES);

  const handleAddItem = (key, name) => {
    setSources((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        items: [...prev[key].items, { id: `${key}-${Date.now()}`, name, meta: '방금 추가' }],
      },
    }));
  };

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>소스</Heading>
        <Subheading>팀이 이미 쓰는 도구에서 핸드북이 자동으로 모입니다</Subheading>
      </HeaderTextGroup>

      <Grid>
        <SourceBoxCard
          icon={
            <GithubIconCrop>
              <img src={githubIcon} alt="" />
            </GithubIconCrop>
          }
          config={sources.github}
          items={sources.github.items}
          onAddItem={(name) => handleAddItem('github', name)}
        />
        <SourceBoxCard
          icon={<img src={slackIcon} alt="" width={27.79} height={27.79} />}
          config={sources.slack}
          items={sources.slack.items}
          onAddItem={(name) => handleAddItem('slack', name)}
        />
        <SourceBoxCard
          icon={<img src={localFileIcon} alt="" width={22} height={22} />}
          config={sources.localFile}
          items={sources.localFile.items}
          onAddItem={(name) => handleAddItem('localFile', name)}
        />
      </Grid>
    </TabContent>
  );
}

export default SourceTab;
