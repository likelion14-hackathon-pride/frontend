import styled from 'styled-components';
import logoMascot from '../../assets/logo-mascot.png';
import logoWordmark from '../../assets/logo-wordmark.png';
import { FOOTER_LINKS } from './landingData';
import { colors } from './theme';

const Footer = styled.footer``;

const LinkGrid = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 1120px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 32px;
  padding: clamp(40px, 5vw, 64px) clamp(20px, 4vw, 40px) 36px;
`;

const BrandCol = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Symbol = styled.img`
  height: 46px;
  width: 45px;
  object-fit: contain;
`;

const Wordmark = styled.img`
  height: auto;
  width: 70px;
  object-fit: contain;
`;

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: ${colors.body};
`;

const ColLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: ${colors.muted};
`;

const NavButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
  font-size: 14px;
  color: ${colors.body};
  transition: color 0.2s;

  &:hover {
    color: ${colors.brand};
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${colors.body};
  transition: color 0.2s;

  &:hover {
    color: ${colors.brand};
  }
`;

const FooterLinkButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
  font-size: 14px;
  color: ${colors.body};
  transition: color 0.2s;

  &:hover {
    color: ${colors.brand};
  }
`;

const ContactValue = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: ${colors.body};
`;

const BottomBar = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 clamp(20px, 4vw, 40px) 44px;
`;

const BottomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid #f1ece5;
  padding-top: 20px;
  font-size: 13px;
  color: #6b6258;
`;

export default function SiteFooter({ goView, onOpenLegal }) {
  return (
    <Footer>
      <LinkGrid>
        <BrandCol>
          <Symbol src={logoMascot} alt="" />
          <Wordmark src={logoWordmark} alt="SAi" />
        </BrandCol>
        <LinkCol>
          <ColLabel>제품</ColLabel>
          {FOOTER_LINKS.product.map((link) => (
            <NavButton key={link.label} type="button" onClick={() => goView(link.view)}>
              {link.label}
            </NavButton>
          ))}
        </LinkCol>
        <LinkCol>
          <ColLabel>회사</ColLabel>
          {FOOTER_LINKS.company.map((link) =>
            link.legal ? (
              <FooterLinkButton
                key={link.label}
                type="button"
                onClick={() => onOpenLegal(link.legal)}
              >
                {link.label}
              </FooterLinkButton>
            ) : (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            )
          )}
        </LinkCol>
        <div>
          <ColLabel>문의</ColLabel>
          <ContactValue>1sthackthon@gmail.com</ContactValue>
        </div>
      </LinkGrid>
      <BottomBar>
        <BottomRow>
          <span>© 2026 SAI</span>
          <span>묻기 편한 팀, 설명하지 않아도 되는 대표</span>
        </BottomRow>
      </BottomBar>
    </Footer>
  );
}
