import styled from 'styled-components';
import SectionShell from './SectionShell';
import { HANDBOOK_FACETS, HANDBOOK_PROJECTS } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Hero = styled.section`
  display: flex;
  min-height: calc(100vh - 80px);
  align-items: center;
`;

const HeroInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: clamp(48px, 6vw, 96px) clamp(20px, 4vw, 40px);
`;

const Heading = styled(Reveal)`
  margin: 0 auto;
  max-width: 760px;
  text-align: center;
  font-size: clamp(34px, 4.6vw, 56px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.045em;
  color: ${colors.ink};
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const FacetGrid = styled(Reveal)`
  margin-top: clamp(48px, 6vw, 84px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: clamp(24px, 3vw, 44px);
`;

const Facet = styled.div`
  min-width: 0;
  border-top: 1px solid #ede7df;
  padding-top: 20px;
`;

const Kicker = styled.span`
  display: block;
  padding-bottom: 12px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #b9662a;
`;

const FacetTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${colors.ink};
`;

const FacetDesc = styled.p`
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.72;
  color: ${colors.body};
`;

const LayersHeading = styled(Reveal)`
  margin: 0 auto;
  text-align: center;
  font-size: clamp(30px, 4.2vw, 50px);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.04em;
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const LayersBody = styled.p`
  margin: 20px auto 0;
  max-width: 520px;
  text-align: center;
  font-size: 17px;
  line-height: 1.75;
  color: ${colors.body};
`;

const LayerStack = styled(Reveal)`
  margin: clamp(32px, 4vw, 52px) auto 0;
  display: flex;
  max-width: 640px;
  flex-direction: column;
  gap: 12px;
`;

const CompanyBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 14px;
  background: ${colors.ink};
  padding: 16px 20px;
`;

const CompanyLabel = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;

const CompanyNote = styled.span`
  font-family: monospace;
  font-size: 11.5px;
  color: #948b80;
`;

const Connector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ConnectorLine = styled.span`
  display: block;
  height: 18px;
  width: 1px;
  background: #ddd6cd;
`;

const ConnectorText = styled.span`
  font-size: 15px;
  color: ${colors.muted};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 12px;
`;

const ProjectCard = styled.div`
  min-width: 0;
  border-radius: 16px;
  border: 1.5px dashed ${({ $accent }) => ($accent ? '#f3c99c' : '#dfd8cf')};
  background: ${({ $accent }) => ($accent ? '#fff6ee' : '#faf7f3')};
  padding: 18px 20px;
`;

const ProjectRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ProjectName = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 800;
  color: ${({ $accent }) => ($accent ? '#e96d00' : colors.body)};
`;

const ProjectBadge = styled.span`
  white-space: nowrap;
  border-radius: 9999px;
  padding: 4px 9px;
  font-size: 11px;
  font-weight: 600;
  background: ${({ $accent }) => ($accent ? '#ffe6ce' : '#efeae3')};
  color: ${({ $accent }) => ($accent ? '#c25a00' : colors.body)};
`;

const LayerNote = styled.div`
  text-align: center;
  font-size: 15px;
  color: ${colors.muted};
`;

export default function HandbookIntro({ reveal }) {
  return (
    <>
      <Hero id="handbook-intro">
        <HeroInner>
          <Heading ref={reveal}>회사의 모든 규칙이 하나로 모이는 곳, 핸드북</Heading>

          <FacetGrid ref={reveal}>
            {HANDBOOK_FACETS.map((facet) => (
              <Facet key={facet.kicker}>
                <Kicker>{facet.kicker}</Kicker>
                <FacetTitle>{facet.title}</FacetTitle>
                <FacetDesc>{facet.desc}</FacetDesc>
              </Facet>
            ))}
          </FacetGrid>
        </HeroInner>
      </Hero>

      <SectionShell>
        <LayersHeading ref={reveal}>두 층으로 나눕니다</LayersHeading>
        <LayersBody>
          회사 전체에 항상 적용되는 규칙과, 프로젝트마다 달라지는 지식은 성격이 다릅니다. 섞이면 둘
          다 신뢰를 잃기 때문에 층을 나눴습니다.
        </LayersBody>

        <LayerStack ref={reveal}>
          <CompanyBar>
            <CompanyLabel>회사 전반 규칙</CompanyLabel>
            <CompanyNote>모든 프로젝트에 적용</CompanyNote>
          </CompanyBar>
          <Connector>
            <ConnectorLine />
            <ConnectorText>위 규칙은 아래 모든 프로젝트 안에서도 그대로 유효합니다</ConnectorText>
          </Connector>
          <ProjectGrid>
            {HANDBOOK_PROJECTS.map((project) => (
              <ProjectCard key={project.name} $accent={project.accent}>
                <ProjectRow>
                  <ProjectName $accent={project.accent}>{project.name}</ProjectName>
                  <ProjectBadge $accent={project.accent}>이 프로젝트 안에서만</ProjectBadge>
                </ProjectRow>
              </ProjectCard>
            ))}
          </ProjectGrid>
          <LayerNote>다른 프로젝트의 규칙은 답으로 쓰이지 않습니다.</LayerNote>
        </LayerStack>
      </SectionShell>
    </>
  );
}
