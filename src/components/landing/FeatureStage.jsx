import styled from 'styled-components';
import { useStageIndex } from '../../hooks/landing/useStageIndex';
import ScaledFrame from './mocks/ScaledFrame';
import { Own2 } from './mocks/figma/OwnerFig';
import { Div as ProjectDiv } from './mocks/figma/ProjectDiv';
import { SECTION_DATA } from './landingData';
import { colors } from './theme';

import whyHome from '../../assets/landing/why-home.png';
import whyTasks from '../../assets/landing/why-tasks.png';
import whyAsk from '../../assets/landing/why-ask.png';
import whyHandbook from '../../assets/landing/why-handbook.png';

const IMAGES = {
  'why-home': whyHome,
  'why-tasks': whyTasks,
  'why-ask': whyAsk,
  'why-handbook': whyHandbook,
};

const OWNER_SCREENS = {
  dash: Own2.Dash,
  sources: Own2.Sources,
  questions: Own2.Questions,
  handbook: Own2.Handbook,
  settings: Own2.Settings,
  project: ProjectDiv,
};

const Wrapper = styled.section`
  position: relative;
`;

const OwnerMarker = styled.div`
  position: absolute;
  inset-inline: 0;
  top: 500vh;
  height: 500vh;
  pointer-events: none;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: hidden;
`;

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: 1240px;
  grid-template-columns: 1fr;
  align-items: center;
  gap: clamp(20px, 2.2vw, 48px);
  padding: 0 clamp(20px, 4vw, 40px);

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
  }
`;

const Copy = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
`;

const GroupLabelBox = styled.div`
  position: relative;
  height: 30px;
`;

const GroupLabel = styled.div`
  position: absolute;
  inset-inline: 0;
  top: 0;
  transition: opacity 0.5s;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
`;

const GroupLabelText = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ $color }) => $color};
`;

const CopyStack = styled.div`
  position: relative;
  margin-top: 14px;
  min-height: 250px;
`;

const CopyItem = styled.div`
  position: absolute;
  inset-inline: 0;
  top: 0;
  transition: opacity 0.5s;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  pointer-events: ${({ $on }) => ($on ? 'auto' : 'none')};
`;

const ItemTag = styled.div`
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: color 0.7s;
  color: ${({ $color }) => $color};
`;

const ItemTitle = styled.h3`
  margin: 10px 0 0;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.04em;
`;

const ItemDesc = styled.p`
  margin: 12px 0 0;
  max-width: 380px;
  font-size: 14.5px;
  line-height: 1.78;
  transition: color 0.7s;
  color: ${({ $color }) => $color};
`;

const HintStack = styled.div`
  position: relative;
  margin-top: clamp(18px, 2.2vw, 26px);
  min-height: 56px;
`;

const HintText = styled.h2`
  position: absolute;
  inset-inline: 0;
  top: 0;
  margin: 0;
  font-size: clamp(15px, 1.7vw, 19px);
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: #6b6257;
  transition: opacity 0.5s;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
`;

const Dots = styled.div`
  margin-top: clamp(28px, 3.2vw, 40px);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Dot = styled.span`
  height: 4px;
  border-radius: 9999px;
  transition:
    width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  width: ${({ $on }) => ($on ? '26px' : '8px')};
  background: ${({ $on, $accent }) => ($on ? $accent : 'rgba(23,23,27,0.14)')};
`;

const ScrollHint = styled.div`
  margin-top: 18px;
  font-size: 13px;
  transition: color 0.7s;
  color: ${({ $color }) => $color};
`;

const MockCol = styled.div`
  position: relative;
  margin: clamp(40px, 10vh, 160px) auto 0;
  width: 100%;
  max-width: 1000px;
  align-self: flex-start;
`;

const MockAspect = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1372 / 956;
`;

const MockItem = styled.div`
  position: absolute;
  inset-inline: 0;
  top: 0;
  overflow: hidden;
  border-radius: 20px;
  transition: opacity 0.5s;
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  pointer-events: ${({ $on }) => ($on ? 'auto' : 'none')};
  filter: drop-shadow(0 26px 60px rgba(23, 23, 27, 0.22))
    drop-shadow(0 6px 16px rgba(23, 23, 27, 0.1));
`;

const MockImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
  border-radius: 20px;
`;

// 스크롤 구동 기능 쇼케이스 — 왼쪽 카피 컬럼 + 오른쪽 화면 크로스페이드.
export default function FeatureStage() {
  const { wrapperRef, index } = useStageIndex(SECTION_DATA.length);
  const active = SECTION_DATA[index];
  const isTeam = active.group === 'team';
  const accent = isTeam ? colors.brand : colors.ceo;

  return (
    <Wrapper id="why" ref={wrapperRef} style={{ height: `${SECTION_DATA.length * 100}vh` }}>
      <OwnerMarker id="owner" />

      <Sticky>
        <Grid>
          <Copy>
            <GroupLabelBox>
              <GroupLabel $on={isTeam}>
                <GroupLabelText $color="#C25A00">팀원 화면</GroupLabelText>
              </GroupLabel>
              <GroupLabel $on={!isTeam}>
                <GroupLabelText $color={colors.ceo}>대표 화면</GroupLabelText>
              </GroupLabel>
            </GroupLabelBox>

            <CopyStack>
              {SECTION_DATA.map((item, i) => {
                const on = i === index;
                return (
                  <CopyItem key={item.tag + i} $on={on}>
                    <ItemTag $color={item.group === 'team' ? '#B9662A' : '#2563EB'}>
                      {item.tag}
                    </ItemTag>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDesc $color={item.group === 'team' ? colors.body : '#5B6270'}>
                      {item.desc}
                    </ItemDesc>
                  </CopyItem>
                );
              })}
            </CopyStack>

            <HintStack>
              <HintText $on={isTeam}>
                기다리지 않아도,
                <br />
                망설이지 않아도 됩니다
              </HintText>
              <HintText $on={!isTeam}>
                대표님이 쓰는 시간은,
                <br />
                최소한으로 충분합니다
              </HintText>
            </HintStack>

            <Dots>
              {SECTION_DATA.map((_, i) => (
                <Dot key={`dot-${i}`} $on={i === index} $accent={accent} />
              ))}
            </Dots>
            <ScrollHint $color={isTeam ? '#6B6258' : '#5B6270'}>
              스크롤을 내리면 화면이 순서대로 바뀝니다
            </ScrollHint>
          </Copy>

          <MockCol>
            <MockAspect>
              {SECTION_DATA.map((item, i) => {
                const on = i === index;
                const OwnerScreen = item.mock.kind === 'comp' ? OWNER_SCREENS[item.mock.comp] : null;
                return (
                  <MockItem key={`mock-${i}`} $on={on}>
                    {item.mock.kind === 'img' ? (
                      <MockImage src={IMAGES[item.mock.src]} alt={item.mock.alt} />
                    ) : (
                      <ScaledFrame width={item.mock.width} height={item.mock.width / item.mock.ratio}>
                        <OwnerScreen />
                      </ScaledFrame>
                    )}
                  </MockItem>
                );
              })}
            </MockAspect>
          </MockCol>
        </Grid>
      </Sticky>
    </Wrapper>
  );
}
