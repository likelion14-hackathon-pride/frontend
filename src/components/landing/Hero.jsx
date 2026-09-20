import styled from 'styled-components';
import { useChatLoop } from '../../hooks/landing/useChatLoop';
import HeroChatCard from './HeroChatCard';
import { ASK_SCOPES, CTA, HERO } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';
import { float } from './keyframes';

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  display: grid;
  min-height: calc(100vh - 80px);
  max-width: 1120px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  align-items: center;
  gap: clamp(32px, 4.5vw, 72px);
  padding: clamp(20px, 3vw, 40px) clamp(20px, 4vw, 40px) clamp(40px, 5vw, 72px);
`;

const Copy = styled.div`
  min-width: 0;
  text-align: left;
`;

const Eyebrow = styled(Reveal)`
  margin-bottom: 12px;
  max-width: 560px;
  font-size: clamp(17px, 1.8vw, 20px);
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.01em;
  color: ${colors.body};
`;

const Title = styled(Reveal)`
  max-width: 560px;
  font-size: clamp(40px, 5.2vw, 64px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: ${colors.ink};
  text-shadow:
    0 6px 24px rgba(23, 23, 27, 0.18),
    0 2px 6px rgba(23, 23, 27, 0.12);
`;

const Brand = styled.span`
  font-weight: 900;
  color: ${colors.brandDeep};
  text-shadow:
    0 6px 24px rgba(239, 98, 0, 0.28),
    0 2px 6px rgba(239, 98, 0, 0.2);
`;

const BodyText = styled(Reveal)`
  margin-top: 24px;
  max-width: 520px;
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.72;
  color: ${colors.body};
`;

const CtaRow = styled(Reveal)`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CtaLink = styled.a`
  white-space: nowrap;
  text-decoration: none;
  border-radius: 24px;
  background: linear-gradient(135deg, #ffa352 0%, #ff7a00 52%, #ef6200 100%);
  padding: 15px 30px;
  font-size: 15.5px;
  font-weight: 600;
  color: #fff;
  box-shadow:
    0 16px 34px -12px rgba(255, 122, 0, 0.62),
    0 3px 8px -2px rgba(255, 122, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition:
    transform 0.3s,
    scale 0.3s;
  animation: ${float} 4.2s ease-in-out infinite;

  &:hover {
    transform: translateY(-4px) scale(1.02);
  }
`;

const ChatWrap = styled(Reveal)`
  min-width: 0;
`;

export default function Hero({ reveal }) {
  const chat = useChatLoop(ASK_SCOPES.length);

  return (
    <Section id="top">
      <Copy>
        <Eyebrow ref={reveal}>{HERO.eyebrow}</Eyebrow>
        <Title ref={reveal}>
          <Brand>SAi</Brand> {HERO.titleLead}
          <br />
          {HERO.titleTail}
        </Title>
        <BodyText ref={reveal}>
          {HERO.body.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </BodyText>
        <CtaRow ref={reveal}>
          <CtaLink href={CTA.href}>{CTA.label}</CtaLink>
        </CtaRow>
      </Copy>

      <ChatWrap ref={reveal}>
        <HeroChatCard {...chat} />
      </ChatWrap>
    </Section>
  );
}
