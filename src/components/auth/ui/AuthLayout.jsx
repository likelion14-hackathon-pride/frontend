import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from './theme';
import chatBubbleIcon from '../../../assets/icons/chat-bubble.svg';
import logoMascot from '../../../assets/logo-mascot.png';
import logoWordmark from '../../../assets/logo-wordmark.png';
import mascotHiIcon from '../../../assets/mascot-hi.png';
import welcomeImage from '../../../assets/welcome.png';

const DESIGN_WIDTH = 1000;
const DESIGN_HEIGHT = 778;
const SIDE_PADDING = 40;
const TOP_BOTTOM_PADDING = 60;

function computeScale() {
  const availableWidth = window.innerWidth - SIDE_PADDING * 2;
  const availableHeight = window.innerHeight - TOP_BOTTOM_PADDING * 2;
  const widthScale = availableWidth / DESIGN_WIDTH;
  const heightScale = availableHeight / DESIGN_HEIGHT;
  return Math.min(1, widthScale, heightScale);
}

const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(
      77.78% 62.5% at 88% 4%,
      rgba(255, 96, 0, 0.42) 0%,
      rgba(255, 138, 61, 0.2) 46%,
      rgba(255, 138, 61, 0) 74%
    ),
    radial-gradient(
      68.89% 52.78% at 4% 96%,
      rgba(255, 138, 61, 0.34) 0%,
      rgba(255, 138, 61, 0) 70%
    ),
    linear-gradient(127deg, #ffe7d4 0%, #fff2e8 46%, #ffdcc2 100%);
`;

const Page = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: ${TOP_BOTTOM_PADDING}px ${SIDE_PADDING}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StageOuter = styled.div`
  position: relative;
  flex: none;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: ${DESIGN_WIDTH}px;
  height: ${DESIGN_HEIGHT}px;
  transform: scale(${(props) => props.$scale});
  transform-origin: top left;
  border-radius: 24px;
  background: #fff;
  box-shadow:
    0 30px 80px 0 rgba(120, 55, 10, 0.18),
    0 2px 6px 0 rgba(120, 55, 10, 0.06);
  overflow: hidden;
`;

//왼쪽 카드

const LeftPanel = styled.div`
  flex: 1 0 0;
  padding: 52px 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-right: 1px solid #efeff1;
  background:
    radial-gradient(
      74.29% 140.28% at 12% 8%,
      rgba(255, 96, 0, 0.16) 0%,
      rgba(255, 138, 61, 0.06) 46%,
      rgba(255, 138, 61, 0) 74%
    ),
    linear-gradient(165deg, #fff6ef 0%, #fff 62%);
`;

const Highlight = styled.span`
  color: ${colors.primary};
  font-weight: 400;
`;

const LeftLogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8.491px;
  width: 237.5px;
  height: 121.423px;
  align-self: center;
  margin-top: 12px;
`;

const MascotImg = styled.img`
  transform: rotate(-8deg);
`;

const HeroBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 16px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const Title = styled.h1`
  color: #17171b;
  font-family: Pretendard, sans-serif;
  font-size: 33px;
  font-weight: 700;
  line-height: 40.8px;
  letter-spacing: -1.1px;
`;

const Description = styled.p`
  color: #6B6B73;
  font-size: 14.5px;
  font-weight: 400;
  line-height: 24.65px; 
  font-family: Pretendard, sans-serif;
  .highlight {
    color: ${colors.primary};  
`;

const IconBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  box-shadow: 0 5px 14px 0 rgba(255, 96, 0, 0.26);
  flex-shrink: 0;
`;

const TextList = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  color: #3c3c44;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  font-family: Pretendard, sans-serif;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  align-items: flex-start;
  align-self: stretch;
  gap: 15px;
`;

const LanguageRow = styled.div`
  display: flex;
  padding-top: 34px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  gap: 14px;
`;

const LanguageOption = styled.span`
  font-size: 12.5px;
  text-align: center;
  font-weight: 500;
  color: ${({ $active }) => ($active ? '#17171B' : '#B4B4BC')};
  cursor: pointer;
`;

//오른쪽 카드

const RightPanel = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  padding: 57.5px 60px;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 380px;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
`;

const RightBrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7.46px;
  align-self: center;
  height: 60px;
  overflow: visible;
`;

const WelcomeImg = styled.img`
  width: 200px;
  height: 133px;
  align-self: center;
`;

const MascotHiImg = styled.img`
  width: 40px;
  height: 32px;
  flex-shrink: 0;
  aspect-ratio: 5/4;
`;

function renderLine(parts) {
  return parts.map((part, i) =>
    part.highlight ? <Highlight key={i}>{part.text}</Highlight> : part.text
  );
}

export default function AuthLayout({
  children,
  brandWelcome,
  heroTitle,
  heroDescription,
  checklist = [],
  lang = 'ko',
  onLangChange,
  heroDescriptionLine1,
  heroDescriptionLine2,
}) {
  const [scale, setScale] = useState(computeScale);

  useEffect(() => {
    function updateScale() {
      setScale(computeScale());
    }
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const scaledWidth = DESIGN_WIDTH * scale;
  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <Page>
      <PageBackground />

      <StageOuter $width={scaledWidth} $height={scaledHeight}>
        <Content $scale={scale}>
          <LeftPanel>
            <HeroBlock>
              <LeftLogoGroup>
                <MascotImg src={logoMascot} alt="SAI mascot" width={104} height={108} />
                <img src={logoWordmark} alt="SAI" width={120} height={52} />
              </LeftLogoGroup>

              <TitleContainer>
                <TitleBlock>
                  <Title>{heroTitle}</Title>
                  <Description>
                    {renderLine(heroDescriptionLine1)}
                    <br />
                    {renderLine(heroDescriptionLine2)}
                  </Description>
                </TitleBlock>
                <ListWrapper>
                  {checklist.map((item, i) => (
                    <TextList key={i}>
                      <IconBadge>
                        <img src={chatBubbleIcon} alt="" width={12} height={12} />
                      </IconBadge>
                      {item}
                    </TextList>
                  ))}
                </ListWrapper>
              </TitleContainer>
            </HeroBlock>

            <LanguageRow>
              <LanguageOption $active={lang === 'ko'} onClick={() => onLangChange?.('ko')}>
                한국어
              </LanguageOption>
              <LanguageOption $active={lang === 'en'} onClick={() => onLangChange?.('en')}>
                English
              </LanguageOption>
            </LanguageRow>
          </LeftPanel>

          <RightPanel>
            <RightBrandRow>
              <MascotHiImg src={mascotHiIcon} alt="" />
              <WelcomeImg src={welcomeImage} alt={brandWelcome} />
            </RightBrandRow>
            <FormWrapper>{children}</FormWrapper>
          </RightPanel>
        </Content>
      </StageOuter>
    </Page>
  );
}
