import { useState } from 'react';
import styled from 'styled-components';
import OnbCarousel from './mocks/OnbCarousel';
import { Screen, Div, BackgroundBorder, BackgroundBorder2 } from './mocks/figma/OnbFig';
import { ONB_STEPS } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const ONB_MOCKS = [Screen, Div, BackgroundBorder, BackgroundBorder2];

const Section = styled.section``;

const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: clamp(78px, 7.5vw, 130px) clamp(20px, 4vw, 40px) 0;
`;

const Center = styled.div`
  text-align: center;
`;

const IntroBlock = styled(Reveal)`
  margin: 0 auto;
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
  color: #16130f;
`;

const Lead = styled.p`
  margin: clamp(156px, 15vw, 260px) auto 0;
  max-width: 600px;
  font-size: 20px;
  line-height: 1.7;
  color: #000;
`;

const LeadStrong = styled.span`
  font-weight: 700;
  color: ${colors.ceo};
`;

const Heading = styled.h2`
  margin: 20px auto 0;
  max-width: 680px;
  font-size: clamp(30px, 4.2vw, 50px);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.04em;
  text-shadow:
    0 6px 24px rgba(22, 19, 15, 0.18),
    0 2px 6px rgba(22, 19, 15, 0.12);
`;

const StageLabel = styled.div`
  margin-top: 12px;
  font-size: 16px;
  letter-spacing: -0.65px;
  color: #1958df;
`;

const TabRow = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;
  white-space: nowrap;
  border-radius: 100px;
  border: 1px solid ${({ $on }) => ($on ? '#16130f' : 'rgba(22,19,15,0.10)')};
  background: ${({ $on }) => ($on ? '#16130f' : '#fff')};
  color: ${({ $on }) => ($on ? '#fff' : '#60594f')};
  font-weight: ${({ $on }) => ($on ? 700 : 600)};
  padding: 11px 20px 11px 13px;
  font-size: 14px;
  letter-spacing: -0.01em;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: ${({ $on }) => ($on ? '0 10px 22px -12px rgba(22,19,15,0.5)' : 'none')};

  &:hover {
    border-color: rgba(22, 19, 15, 0.28);
    box-shadow: 0 10px 22px -12px rgba(22, 19, 15, 0.4);
  }
`;

const TabIndex = styled.span`
  display: flex;
  height: 22px;
  width: 22px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  font-weight: 700;
  background: ${({ $state }) =>
    $state === 'on' ? colors.ceo : $state === 'done' ? '#e8eefc' : '#f3efe9'};
  color: ${({ $state }) => ($state === 'on' ? '#fff' : $state === 'done' ? colors.ceo : colors.muted)};
  transition:
    background 0.2s ease,
    color 0.2s ease;
`;

const StepCopy = styled.div`
  margin: 20px auto 0;
  max-width: 660px;
  text-align: center;
`;

const StepTitle = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

const StepDesc = styled.p`
  margin: 10px auto 0;
  max-width: 666px;
  font-size: 16px;
  line-height: 1.7;
  color: #60594f;
`;

const MockWrap = styled(Reveal)`
  margin: 22px auto 0;
  width: min(880px, 100%);
`;

const NavRow = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const RoundButton = styled.button`
  display: flex;
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid rgba(22, 19, 15, 0.12);
  background: #fff;
  cursor: pointer;
`;

const NavHint = styled.span`
  text-align: center;
  font-size: 15px;
  color: ${colors.muted};
`;

const OutroBlock = styled(Reveal)`
  margin: clamp(96px, 11vw, 180px) auto 0;
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
`;

const OutroTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: #16130f;
`;

const OutroDesc = styled.p`
  max-width: 520px;
  font-size: 15px;
  line-height: 1.7;
  color: #60594f;
`;

export default function OnboardingSection({ reveal }) {
  const [step, setStep] = useState(0);
  const count = ONB_STEPS.length;
  const active = ONB_STEPS[step];

  return (
    <Section id="build">
      <Inner>
        <Center>
          <IntroBlock ref={reveal}>
            <Emoji>🤨</Emoji>
            <IntroTitle>그렇다면 핸드북은 어떻게 채워지게 될까요?</IntroTitle>
          </IntroBlock>

          <Lead ref={reveal}>
            <LeadStrong>대표</LeadStrong>가 회원가입 직후 거치는 첫 설정에서,
          </Lead>
          <Heading ref={reveal}>
            소스 연동과 간단한 문답으로
            <br />
            핸드북 첫 페이지가 만들어집니다
          </Heading>
          <StageLabel>대표 온보딩 단계</StageLabel>
        </Center>

        <TabRow>
          {ONB_STEPS.map((item, i) => {
            const on = i === step;
            const state = on ? 'on' : i < step ? 'done' : 'todo';
            return (
              <Tab key={item.id} type="button" $on={on} onClick={() => setStep(i)}>
                <TabIndex $state={state}>{i + 1}</TabIndex>
                {item.tab}
              </Tab>
            );
          })}
        </TabRow>

        <StepCopy>
          <StepTitle>{active.title}</StepTitle>
          <StepDesc>{active.desc}</StepDesc>
        </StepCopy>

        <MockWrap ref={reveal}>
          <OnbCarousel step={step} items={ONB_MOCKS} fixedHeightSteps={[1]} />
        </MockWrap>

        <NavRow>
          <RoundButton
            type="button"
            aria-label="이전 설정 단계"
            onClick={() => setStep((s) => (s - 1 + count) % count)}
          >
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 5l-5 5 5 5"
                stroke="#16130F"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </RoundButton>
          <NavHint>여기까지가 대표의 몫입니다 — 이후는 팀원의 질문이 핸드북을 채웁니다.</NavHint>
          <RoundButton
            type="button"
            aria-label="다음 설정 단계"
            onClick={() => setStep((s) => (s + 1) % count)}
          >
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 5l5 5-5 5"
                stroke="#16130F"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </RoundButton>
        </NavRow>

        <OutroBlock ref={reveal}>
          <Emoji>🛠️</Emoji>
          <OutroTitle>
            매일 쌓이는 협업 기록이
            <br />
            핸드북의 '재료'가 됩니다
          </OutroTitle>
          <OutroDesc>
            따로 문서를 쓸 필요 없습니다. Slack의 대화와 GitHub의 업무 결정 사항 등 연동된 채널의
            모든 소통이 알아서 규칙의 재료로 쌓이게 됩니다.
          </OutroDesc>
        </OutroBlock>
      </Inner>
    </Section>
  );
}
