import styled from 'styled-components';
import { CTA } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Section = styled.section`
  padding: clamp(40px, 6vw, 90px) clamp(20px, 4vw, 40px) clamp(48px, 6vw, 96px);
`;

const Center = styled.div`
  margin: 0 auto;
  max-width: 820px;
  text-align: center;
`;

const Heading = styled(Reveal)`
  font-size: clamp(34px, 5.4vw, 66px);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.045em;
  color: ${colors.ink};
  text-shadow: 0 0 34px rgba(239, 98, 0, 0.2);
  filter: blur(20px);
  transition:
    filter 1.9s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 1.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1.9s cubic-bezier(0.16, 1, 0.3, 1);

  &[data-revealed='true'] {
    filter: blur(0);
  }
`;

const Brand = styled.span`
  font-weight: 900;
  color: ${colors.brandDeep};
`;

const LinkRow = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: center;
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  border-bottom: 2px solid ${colors.brand};
  padding-bottom: 8px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${colors.ink};
  transition: all 0.3s;

  &:hover {
    gap: 16px;
    color: ${colors.brandDeep};
  }
`;

const Arrow = styled.span`
  font-size: 17px;
  line-height: 1;
  color: ${colors.brand};
`;

export default function ClosingCta({ reveal }) {
  return (
    <Section>
      <Center>
        <Heading ref={reveal}>
          팀 사이의 간극을
          <br />
          <Brand>SAi</Brand>가 메웁니다
        </Heading>
        <LinkRow>
          <CtaLink href={CTA.href}>
            {CTA.label}
            <Arrow>→</Arrow>
          </CtaLink>
        </LinkRow>
      </Center>
    </Section>
  );
}
