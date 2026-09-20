import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useActiveView } from '../../hooks/landing/useActiveView';
import { useBackgroundBlend } from '../../hooks/landing/useBackgroundBlend';
import { useReveal } from '../../hooks/landing/useReveal';

import BlobField from '../../components/landing/BlobField';
import BusinessSection from '../../components/landing/BusinessSection';
import ClosingCta from '../../components/landing/ClosingCta';
import FaqSection from '../../components/landing/FaqSection';
import FeatureStage from '../../components/landing/FeatureStage';
import HandbookIntro from '../../components/landing/HandbookIntro';
import Hero from '../../components/landing/Hero';
import HowSection from '../../components/landing/HowSection';
import LegalModal from '../../components/landing/LegalModal';
import PrivacyPolicyContent from '../../components/landing/legal/PrivacyPolicyContent';
import TermsContent from '../../components/landing/legal/TermsContent';
import OnboardingSection from '../../components/landing/OnboardingSection';
import ProblemSection from '../../components/landing/ProblemSection';
import RoutesSection from '../../components/landing/RoutesSection';
import SectionShell from '../../components/landing/SectionShell';
import SiteFooter from '../../components/landing/SiteFooter';
import TopNav from '../../components/landing/TopNav';
import { Reveal } from '../../components/landing/reveal';
import { float } from '../../components/landing/keyframes';
import { colors, fonts } from '../../components/landing/theme';

const LEGAL_TITLES = {
  privacy: '개인정보처리방침',
  terms: '이용약관',
};

import logoMascot from '../../assets/logo-mascot.png';
import logoWordmark from '../../assets/logo-wordmark.png';

const Page = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  font-family: ${fonts.body};
  color: ${colors.ink};
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const PromptBlock = styled(Reveal)`
  text-align: center;
`;

const PromptHeading = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.04em;
  color: #ff6000;
  text-shadow:
    0 6px 24px rgba(255, 96, 0, 0.34),
    0 2px 6px rgba(255, 96, 0, 0.22);
`;

const MarkRow = styled.div`
  margin-top: clamp(32px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FloatSymbol = styled.img`
  display: block;
  height: 121px;
  width: auto;
  object-fit: contain;
  animation: ${float} 4.2s ease-in-out infinite;
`;

const FloatWordmark = styled.img`
  display: block;
  height: auto;
  width: 167px;
  object-fit: contain;
  animation: ${float} 4.2s ease-in-out -1.1s infinite;
`;

export default function LandingPage() {
  const reveal = useReveal();
  const { view, goView } = useActiveView();
  const triggerIds = useMemo(() => ['owner', 'build'], []);
  const blend = useBackgroundBlend(triggerIds);
  const [legalModal, setLegalModal] = useState(null);

  const jumpToRoutes = useCallback(() => {
    const el = document.getElementById('routes');
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 40,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Page>
      <BlobField blend={blend} />

      <Content>
        <TopNav view={view} goView={goView} />

        <Hero reveal={reveal} />
        <ProblemSection reveal={reveal} />
        <HowSection reveal={reveal} onJumpToRoutes={jumpToRoutes} />

        <SectionShell>
          <PromptBlock ref={reveal}>
            <PromptHeading>
              이제 고민하지 말고,
              <br />
              언제든 <strong>SAi</strong>에게 물어보세요
            </PromptHeading>
            <MarkRow>
              <FloatSymbol src={logoMascot} alt="" />
              <FloatWordmark src={logoWordmark} alt="SAi" />
            </MarkRow>
          </PromptBlock>
        </SectionShell>

        <HandbookIntro reveal={reveal} />
        <OnboardingSection reveal={reveal} />
        <RoutesSection reveal={reveal} />
        <FeatureStage />
        <BusinessSection reveal={reveal} />
        <FaqSection reveal={reveal} />
        <ClosingCta reveal={reveal} />
        <SiteFooter goView={goView} onOpenLegal={setLegalModal} />
      </Content>

      <LegalModal
        open={legalModal !== null}
        title={legalModal ? LEGAL_TITLES[legalModal] : ''}
        onClose={() => setLegalModal(null)}
      >
        {legalModal === 'privacy' && <PrivacyPolicyContent />}
        {legalModal === 'terms' && <TermsContent />}
      </LegalModal>
    </Page>
  );
}
