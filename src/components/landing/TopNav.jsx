import styled from 'styled-components';
import logoMascot from '../../assets/logo-mascot.png';
import logoWordmark from '../../assets/logo-wordmark.png';
import { CTA, NAV_ITEMS } from './landingData';
import { colors, fonts } from './theme';

const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 14px clamp(14px, 3vw, 28px) 0;
`;

const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
  max-width: 720px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 9999px;
  border: 1px solid rgba(23, 23, 27, 0.05);
  background: rgba(255, 255, 255, 0.4);
  padding: 8px 10px;
  backdrop-filter: blur(18px) saturate(150%);
`;

const Brand = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Symbol = styled.img`
  height: 42px;
  width: 58px;
  object-fit: contain;
`;

const Wordmark = styled.img`
  height: auto;
  width: 58px;
  object-fit: contain;
`;

const Links = styled.div`
  display: none;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 32px;
  font-size: 14px;
  min-width: 0;

  @media (min-width: 640px) {
    display: flex;
  }
`;

const LinkButton = styled.button`
  white-space: nowrap;
  padding: 4px 0 5px;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.2s;
  font-family: ${fonts.body};
  font-weight: ${({ $active }) => ($active ? 900 : 500)};
  color: ${({ $active }) => ($active ? colors.ink : colors.body)};
`;

const Cta = styled.a`
  white-space: nowrap;
  text-decoration: none;
  border-radius: 9999px;
  background: ${colors.ink};
  padding: 11px 22px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  transition:
    transform 0.2s,
    background 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: ${colors.brand};
    color: #fff;
  }
`;

export default function TopNav({ view, goView }) {
  return (
    <Bar>
      <Nav>
        <Brand type="button" onClick={() => goView('home')} aria-label="SAi 홈으로">
          <Symbol src={logoMascot} alt="" />
          <Wordmark src={logoWordmark} alt="SAi" />
        </Brand>
        <Links>
          {NAV_ITEMS.map((item) => (
            <LinkButton
              key={item.id}
              type="button"
              $active={item.id === view}
              onClick={() => goView(item.id)}
            >
              {item.label}
            </LinkButton>
          ))}
        </Links>
        <Cta href={CTA.href}>{CTA.label}</Cta>
      </Nav>
    </Bar>
  );
}
