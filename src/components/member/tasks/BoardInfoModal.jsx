import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 60;
  background: rgba(23, 23, 27, 0.42);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 640px;
  max-height: 100%;
  overflow-y: auto;
  background: #f7f7f8;
  border-radius: 22px;
  box-shadow: 0 30px 80px rgba(17, 17, 20, 0.35);
  padding: 26px 28px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #17171b;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #8a8a93;
  font-weight: 400;
  margin-top: 3px;
`;

const CloseButton = styled.button`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #eaeaee;
  font-size: 15px;
  color: #6b6b73;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: #d8d8de;
    color: #17171b;
  }
`;

// 버튼(Pill)은 카드에 감싸지 않고, 설명 텍스트와 함께 배경 없이 그대로 둔다.
const StepRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 16px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13.5px;
  font-weight: 800;
  padding: 8px 16px;
  border-radius: 999px;
  white-space: nowrap;
  background: ${(props) => props.$bg};
  color: ${(props) => props.$color};
`;

const StepDesc = styled.div`
  font-size: 12.5px;
  color: #6b6b73;
  line-height: 1.55;
  margin-top: 9px;

  b {
    color: #17171b;
  }
`;

const Connector = styled.div`
  width: 1.5px;
  height: 22px;
  background: #d8d8de;
  margin: 6px auto;
`;

// Question 배지 바로 아래에서 내려오다가 가운데(박스 중앙)로 꺾여 들어가는 연결선.
// 오른쪽 3번째 칸 중심(x≈83%)에서 시작해 중앙(x=50%)으로 꺾은 뒤 박스 앞에서 멈춘다.
// margin 이 위/아래 여백을 줘서 텍스트나 박스에 선이 직접 닿지 않게 한다.
const ElbowConnector = styled.svg`
  display: block;
  width: 100%;
  height: 20px;
  margin: 6px 0;
`;

// 박스 자체는 가운데(전체 폭)로 돌아와, Ready/In progress 밑에 빈 공간이 남지 않게 한다.
const SubBox = styled.div`
  width: 100%;
  border: 1.5px dashed #f0c88a;
  border-radius: 16px;
  padding: 14px 18px;
  background: #fffaf3;
  text-align: left;
`;

const SubLabel = styled.div`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #a85b14;
  text-align: center;
  margin-bottom: 12px;
`;

const SubRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(168, 91, 20, 0.14);
  }
`;

// TaskCard 의 상태 배지와 동일하게 배경 없이 점/체크 + 색 글자로만 표시한다.
const Mark = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 1px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.$color};
  white-space: nowrap;
`;

const Dot = styled.span`
  width: 5px;
  height: 5px;
  flex: none;
  border-radius: 50%;
  background: currentColor;
`;

const Check = styled.svg`
  flex: none;
`;

const SubDesc = styled.div`
  font-size: 12.5px;
  color: #6b6b73;
  line-height: 1.55;
`;

export default function BoardInfoModal({ onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderText>
            <Title>How a task moves</Title>
            <Subtitle>What each column and badge on this board means</Subtitle>
          </HeaderText>
          <CloseButton type="button" onClick={onClose}>
            ✕
          </CloseButton>
        </Header>

        <StepRow>
          <Step>
            <Pill $bg="linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%)" $color="#fff">
              Ready
            </Pill>
            <StepDesc>
              An instruction arrives from the Owner. SAi reads it and makes a card here.
            </StepDesc>
          </Step>

          <Step>
            <Pill $bg="#FFDEC5" $color="#8A4708">
              In progress
            </Pill>
            <StepDesc>
              You open the card and tap <b>Take on</b>. The card moves here.
            </StepDesc>
          </Step>

          <Step>
            <Pill $bg="#FAF0E4" $color="#A85B14">
              Question
            </Pill>
            <StepDesc>You send a question to the Owner while working.</StepDesc>
          </Step>
        </StepRow>

        <ElbowConnector viewBox="0 0 300 20" preserveAspectRatio="none">
          <path
            d="M250,0 L250,10 L150,10 L150,20"
            stroke="#d8d8de"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </ElbowConnector>

        <SubBox>
          <SubLabel>INSIDE QUESTION</SubLabel>

          <SubRow>
            <Mark $color="#B03A3A">
              <Dot />
              waiting
            </Mark>
            <SubDesc>You ask the Owner a question by Slack and wait for a reply.</SubDesc>
          </SubRow>

          <SubRow>
            <Mark $color="#2C7A4B">
              <Check width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5.2l2 2L8 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Check>
              answered
            </Mark>
            <SubDesc>
              The reply lands from the Owner by Slack. Tap the card to move it back to In
              progress, or mark it done.
            </SubDesc>
          </SubRow>
        </SubBox>

        <Connector />

        <Step>
          <Pill $bg="#17171B" $color="#fff">
            Finished tasks
          </Pill>
          <StepDesc>
            Work finished — tap <b>Mark as done</b>. Find it again anytime and tap <b>Reopen</b> to
            bring it back to In progress.
          </StepDesc>
        </Step>
      </Modal>
    </Overlay>
  );
}
