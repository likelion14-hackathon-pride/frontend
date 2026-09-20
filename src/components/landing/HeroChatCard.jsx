import styled, { css } from 'styled-components';
import saiMascot from '../../assets/landing/sai-mascot.png';
import { ASK_SCOPES } from './landingData';
import { colors, fonts } from './theme';
import { cue } from './keyframes';

const Card = styled.div`
  margin: 0 auto;
  display: flex;
  height: 520px;
  max-width: 520px;
  flex-direction: column;
  overflow: hidden;
  border-radius: 26px;
  border: 1px solid rgba(255, 122, 0, 0.28);
  background: linear-gradient(165deg, #fdf1e6 0%, #fbf7f4 38%, #f7f5f3 100%);
  box-shadow:
    0 1px 2px rgba(23, 23, 27, 0.04),
    0 18px 34px -18px rgba(23, 23, 27, 0.18),
    0 30px 60px -26px rgba(255, 122, 0, 0.36);
`;

const Head = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 20px 22px 10px;
`;

const Title = styled.span`
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${colors.ink};
`;

const Date = styled.span`
  white-space: nowrap;
  font-size: 13px;
  letter-spacing: -0.01em;
  color: ${colors.faint};
`;

const Body = styled.div`
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  padding: 14px 22px 8px;
`;

const bubbleShown = css`
  opacity: 1;
  transform: translateY(0);
`;

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(10px);
  ${({ $shown }) => $shown && bubbleShown}
`;

const Thought = styled.div`
  max-width: 88%;
  align-self: flex-end;
  white-space: pre-line;
  border-radius: 16px;
  border: 1.5px dashed #e3d9ce;
  padding: 10px 14px;
  font-size: 13px;
  line-height: 1.5;
  color: ${colors.faint};
`;

const Question = styled.div`
  max-width: 88%;
  align-self: flex-end;
  border-radius: 22px;
  background: #fff;
  padding: 14px 20px;
  font-size: 15px;
  line-height: normal;
  letter-spacing: -0.01em;
  color: ${colors.ink};
  box-shadow: 0 2px 10px -4px rgba(23, 23, 27, 0.12);
`;

const Typing = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 5px;
  padding: 10px 4px;
`;

const Dot = styled.span`
  display: block;
  height: 6px;
  width: 6px;
  border-radius: 9999px;
  background: #c4bbb0;
  animation: ${cue} 1.1s ease-in-out ${({ $delay }) => $delay}s infinite;
`;

const AnswerRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Avatar = styled.img`
  margin-top: 2px;
  height: 34px;
  width: 34px;
  flex-shrink: 0;
  object-fit: contain;
`;

const AnswerText = styled.div`
  min-width: 0;
  font-size: 15px;
  line-height: 1.62;
  letter-spacing: -0.01em;
  color: ${colors.ink};
`;

const AnswerPath = styled.div`
  margin-top: 10px;
  font-family: ${fonts.mono};
  font-size: 11.5px;
  color: ${colors.faint};
`;

const SourceButton = styled.button`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: ${colors.faint};
  transition: color 0.2s;

  &:hover {
    color: ${colors.body};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 22px 20px;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
`;

const ChipLabel = styled.span`
  flex-shrink: 0;
  white-space: nowrap;
  font-size: 12px;
  color: ${colors.faint};
`;

const Chip = styled.button`
  flex-shrink: 0;
  white-space: nowrap;
  border-radius: 9999px;
  border: 1px solid ${({ $on }) => ($on ? colors.ink : colors.line)};
  background: ${({ $on }) => ($on ? colors.ink : '#fff')};
  color: ${({ $on }) => ($on ? '#fff' : '#4a443c')};
  padding: 6px 10px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
  cursor: pointer;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: #fff;
  padding: 10px 10px 10px 18px;
  box-shadow: 0 2px 10px -4px rgba(23, 23, 27, 0.12);
`;

const InputPlaceholder = styled.span`
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14.5px;
  letter-spacing: -0.01em;
  color: ${colors.faint};
`;

const SendButton = styled.span`
  display: flex;
  height: 38px;
  width: 38px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: ${colors.brand};
  box-shadow: 0 6px 16px -8px rgba(255, 122, 0, 0.9);
`;

const FooterNote = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${colors.faint};
`;

export default function HeroChatCard({ step, scope, pickScope }) {
  const active = ASK_SCOPES[scope];

  return (
    <Card>
      <Head>
        <Title>Ask SAi</Title>
        <Date>Sunday, September 20</Date>
      </Head>

      <Body>
        <Bubble $shown={step >= 1}>
          <Thought>{active.thought}</Thought>
        </Bubble>

        <Bubble $shown={step >= 2}>
          <Question>{active.question}</Question>
        </Bubble>

        <Bubble $shown={step === 3}>
          <Typing>
            {[0, 0.18, 0.36].map((delay) => (
              <Dot key={delay} $delay={delay} />
            ))}
          </Typing>
        </Bubble>

        <Bubble $shown={step >= 4}>
          <AnswerRow>
            <Avatar src={saiMascot} alt="" />
            <div style={{ minWidth: 0 }}>
              <AnswerText>{active.answer}</AnswerText>
              <AnswerPath>{active.path}</AnswerPath>
              <SourceButton type="button">
                한국어 원문 보기 · 2건<span style={{ fontSize: 9 }}>▾</span>
              </SourceButton>
            </div>
          </AnswerRow>
        </Bubble>
      </Body>

      <Footer>
        <ChipRow>
          <ChipLabel>Asking about</ChipLabel>
          {ASK_SCOPES.map((item, i) => (
            <Chip key={item.chip} type="button" $on={i === scope} onClick={() => pickScope(i)}>
              {item.chip}
            </Chip>
          ))}
        </ChipRow>
        <InputRow>
          <InputPlaceholder>Ask SAi anything about this team</InputPlaceholder>
          <SendButton>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 13V3.6M8 3.6 3.9 7.7M8 3.6l4.1 4.1"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SendButton>
        </InputRow>
        <FooterNote>답변은 이 팀의 핸드북에서만 나옵니다 · {active.chip}</FooterNote>
      </Footer>
    </Card>
  );
}
