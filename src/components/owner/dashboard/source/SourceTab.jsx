import { useState } from 'react';
import styled from 'styled-components';
import SourceBoxCard from './SourceBoxCard';
import { INITIAL_SOURCES } from './sourceTabData';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  align-self: stretch;
`;

const GithubIconCrop = styled.span`
  display: flex;
  width: 27px;
  height: 27px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 27px;
    height: 27px;
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
      <div>
        <Heading>소스</Heading>
        <Subheading>팀이 이미 쓰고 있는 도구를 핸드북의 자료로 끌어옵니다</Subheading>
      </div>

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
          icon={<img src={slackIcon} alt="" width={27} height={27} />}
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
