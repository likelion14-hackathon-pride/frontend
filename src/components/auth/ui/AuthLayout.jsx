import styled from "styled-components";
import { colors } from "./theme";
import chatBubbleIcon from "../../../assets/icons/chat-bubble.svg";
import logoMascot from "../../../assets/logo-mascot.png";
import logoWordmark from "../../../assets/logo-wordmark.png";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 100px 40px;
  justify-content: center;
  align-items: center;
  background:
    radial-gradient(77.78% 62.5% at 88% 4%, rgba(255, 96, 0, 0.42) 0%, rgba(255, 138, 61, 0.20) 46%, rgba(255, 138, 61, 0.00) 74%),
    radial-gradient(68.89% 52.78% at 4% 96%, rgba(255, 138, 61, 0.34) 0%, rgba(255, 138, 61, 0.00) 70%),
    linear-gradient(127deg, #FFE7D4 0%, #FFF2E8 46%, #FFDCC2 100%);
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px; 
  height: 740px;
  border-radius: 24px;
  background: #FFF;
  box-shadow: 0 30px 80px 0 rgba(120, 55, 10, 0.18), 0 2px 6px 0 rgba(120, 55, 10, 0.06);
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

  border-right: 1px solid #EFEFF1;
  background: radial-gradient(74.29% 140.28% at 12% 8%, rgba(255, 96, 0, 0.16) 0%, rgba(255, 138, 61, 0.06) 46%, rgba(255, 138, 61, 0.00) 74%), linear-gradient(165deg, #FFF6EF 0%, #FFF 62%);
`;

const LeftBrandRow = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
  gap: 8.491px;
`;

const MascotImg = styled.img`
  transform: rotate(-8deg); 
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
`;

const Title = styled.h1`
  color: #17171B;
  font-family: "Tahoma", sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 40.8px; 
  letter-spacing: -1.1px;
`;

const Description = styled.p`
  color: #6B6B73;
  font-size: 14.5px;
  font-weight: 400;
  line-height: 24.65px; 
`;

const IconBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  background: linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%);
  box-shadow: 0 5px 14px 0 rgba(255, 96, 0, 0.26);
  flex-shrink: 0;
`;

const TextList = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  color: #3C3C44;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  align-items: flex-start;
  align-self: stretch;
  gap: 10px; 
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
  color: ${({ $active }) => ($active ? "#17171B" : "#B4B4BC")};
  cursor: pointer;
`;

//오른쪽 카드

const RightPanel = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  padding: 57.5px 60px;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
`;

const RightBrandRow = styled.div`
  display: flex;
  align-items: center;
  height: 31px;
  gap: 7.464px;
  align-self: center;
`;

const RightBrandText = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: ${colors.primary};
  letter-spacing: -0.3px;
`;


export default function AuthLayout({ children }) {
  return (
    <PageWrapper>
      <Content>
        <LeftPanel>
          <LeftBrandRow>
            <MascotImg src={logoMascot} alt="SAI mascot" height={54} />
            <img src={logoWordmark} alt="SAI" height={26} />
          </LeftBrandRow>

          <TitleContainer>
            <div>
              <Title>물어보면, 팀의 규칙이 답합니다</Title>
              <Description>슬랙과 핸드북을 대신 읽고, 해야 할 일로 정리해 드립니다.</Description>
            </div>
            <ListWrapper>
              <TextList>
                <IconBadge><img src={chatBubbleIcon} alt="" width={12} height={12} /></IconBadge>
                질문에는 근거가 함께 붙습니다
              </TextList>
              <TextList>
                <IconBadge><img src={chatBubbleIcon} alt="" width={12} height={12} /></IconBadge>
                답할 수 없는 것만 대표님께 갑니다
              </TextList>
              <TextList>
                <IconBadge><img src={chatBubbleIcon} alt="" width={12} height={12} /></IconBadge>
                읽기는 영어, 확인은 한국어
              </TextList>
            </ListWrapper>
          </TitleContainer>

          <LanguageRow>
            <LanguageOption $active>한국어</LanguageOption>
            <LanguageOption>English</LanguageOption>
          </LanguageRow>
        </LeftPanel>

        <RightPanel>
          <RightBrandRow>
            <img src={logoMascot} alt="SAI" height={24} />
            <RightBrandText>SAI에 오신 것을 환영합니다</RightBrandText>
          </RightBrandRow>
          {children}
        </RightPanel>
      </Content>
    </PageWrapper>
  );
}
