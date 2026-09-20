import styled from 'styled-components';
import { PROMOTION_ROUTES } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Section = styled.section``;

const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 clamp(20px, 4vw, 40px) clamp(78px, 7.5vw, 130px);
`;

const Center = styled.div`
  text-align: center;
`;

const IntroBlock = styled(Reveal)`
  margin: clamp(130px, 15vw, 210px) auto;
  display: flex;
  max-width: 620px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const Emoji = styled.span`
  font-size: 34px;
  line-height: 1;
`;

const IntroTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: ${colors.ink};
`;

const Heading = styled(Reveal)`
  margin: 0 auto;
  max-width: 680px;
  font-size: clamp(30px, 4.2vw, 50px);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.04em;
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const SubText = styled.p`
  margin: 18px auto 0;
  max-width: 640px;
  font-size: clamp(15px, 1.5vw, 18px);
  line-height: 1.62;
  color: ${colors.body};
`;

const RouteStack = styled(Reveal)`
  margin: clamp(44px, 5.5vw, 72px) auto 0;
  display: flex;
  max-width: 820px;
  flex-direction: column;
  gap: 14px;
`;

const RouteRow = styled.div`
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 34px;
  border: 1px solid ${({ $border }) => $border};
  background: ${({ $bg }) => $bg};
  margin-left: ${({ $indent }) => $indent ?? '0'};

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

const Lane = styled.div`
  display: flex;
  width: 84px;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 10px;
  background: ${({ $bg }) => $bg};
`;

const LaneNo = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7);
`;

const LaneLabel = styled.span`
  white-space: pre-line;
  text-align: center;
  font-size: 12.5px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 9px;
  padding: 24px clamp(18px, 2.4vw, 30px);
`;

const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
`;

const RouteTitle = styled.span`
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${colors.ink};
  font-size: ${({ $size }) => `${$size}px`};
`;

const RouteBadge = styled.span`
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ $color }) => $color};
`;

const RouteDesc = styled.p`
  max-width: 640px;
  font-size: 14.5px;
  line-height: 1.7;
  color: ${colors.body};
`;

const ChipRow = styled.div`
  margin-top: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const RouteChip = styled.span`
  white-space: nowrap;
  border-radius: 9999px;
  border: 1px solid ${({ $border }) => $border};
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  padding: 6px 12px;
  font-size: 12.5px;
  font-weight: 600;
`;

const FootNote = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Dot = styled.span`
  display: block;
  height: 5px;
  width: 5px;
  flex-shrink: 0;
  border-radius: 9999px;
  background: ${colors.ceo};
`;

const FootText = styled.span`
  font-size: 13.5px;
  line-height: 1.7;
  color: ${colors.muted};
`;

export default function RoutesSection({ reveal }) {
  return (
    <Section id="routes">
      <Inner>
        <Center>
          <IntroBlock ref={reveal}>
            <Emoji>🤓</Emoji>
            <IntroTitle>
              이때, 모든 대화와 결정이
              <br />
              핸드북으로 저장되는 것은 아닙니다
            </IntroTitle>
          </IntroBlock>
          <Heading ref={reveal}>세 갈래로 나눠 올립니다</Heading>
          <SubText>
            주고받은 답변은 반복 횟수·충돌 여부·민감도로 분류됩니다.
            <br />
            확실한 것은 자동으로, 애매한 것은 모아서, 위험한 것은 사람이 직접 판단합니다.
          </SubText>
        </Center>

        <RouteStack ref={reveal}>
          {PROMOTION_ROUTES.map((route) => (
            <RouteRow
              key={route.no}
              $bg={route.theme.cardBg}
              $border={route.theme.cardBorder}
              $indent={route.theme.indent}
            >
              <Lane $bg={route.theme.lane}>
                <LaneNo>{route.no}</LaneNo>
                <LaneLabel>{route.lane}</LaneLabel>
              </Lane>
              <Content>
                <TitleRow>
                  <RouteTitle $size={route.theme.titleSize}>{route.title}</RouteTitle>
                  <RouteBadge $color={route.theme.badge}>{route.badge}</RouteBadge>
                </TitleRow>
                <RouteDesc>{route.desc}</RouteDesc>
                <ChipRow>
                  {route.chips.map((chip) => (
                    <RouteChip
                      key={chip}
                      $color={route.theme.chipColor}
                      $bg={route.theme.chipBg}
                      $border={route.theme.chipBorder}
                    >
                      {chip}
                    </RouteChip>
                  ))}
                </ChipRow>
              </Content>
            </RouteRow>
          ))}
        </RouteStack>

        <FootNote>
          <Dot />
          <FootText>어떤 경로로 올라왔는지는 항목마다 기록됩니다.</FootText>
        </FootNote>
      </Inner>
    </Section>
  );
}
