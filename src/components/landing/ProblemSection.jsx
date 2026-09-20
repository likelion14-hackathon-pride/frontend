import { useState } from 'react';
import styled from 'styled-components';
import memojiWorker from '../../assets/landing/memoji-worker.png';
import SectionShell from './SectionShell';
import { WALL_CARDS, OWNER_DM, WORKER_DOUBTS } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Center = styled.div`
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
`;

const Heading = styled(Reveal)`
  margin: 0 auto;
  max-width: 760px;
  font-size: clamp(30px, 4.2vw, 50px);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.045em;
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const DmGrid = styled(Reveal)`
  margin-top: clamp(44px, 5.5vw, 72px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  align-items: center;
  gap: clamp(24px, 3.5vw, 48px);
  text-align: left;
`;

const OwnerCard = styled.div`
  min-width: 0;
  border-radius: 20px;
  border: 1px solid ${colors.line};
  background: #fff;
  padding: clamp(20px, 2.4vw, 28px);
  box-shadow: 0 18px 40px -28px rgba(23, 23, 27, 0.3);
`;

const OwnerHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const OwnerName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.ink};
`;

const OwnerTime = styled.span`
  font-family: monospace;
  font-size: 11.5px;
  color: ${colors.faint};
`;

const OwnerMessages = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const OwnerBubble = styled.div`
  border-radius: 10px;
  background: #f4f1ec;
  padding: 12px 15px;
  font-size: 15px;
  line-height: 1.55;
  color: ${colors.ink};
`;

const OwnerMark = styled.span`
  border-bottom: 2px solid ${colors.brand};
`;

const WorkerCol = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 1.6vw, 18px);
`;

const DoubtStack = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;

const DoubtRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const DoubtBubble = styled.div`
  border-radius: 12px;
  border: 1.5px dashed #f3c99c;
  background: #fff6ee;
  padding: 12px 16px;
  font-size: 14.5px;
  line-height: normal;
  color: #c25a00;
`;

const DoubtTail = styled.span`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 4px;
`;

const Speck = styled.span`
  display: block;
  height: 4px;
  width: 4px;
  border-radius: 9999px;
  background: #f3c99c;
`;

const WorkerFace = styled.div`
  flex-shrink: 0;
  text-align: center;
`;

const WorkerImg = styled.img`
  margin: 0 auto;
  display: block;
  height: auto;
  width: clamp(92px, 10vw, 132px);
`;

const WorkerName = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.ink};
`;

const WorkerMeta = styled.div`
  margin-top: 2px;
  font-size: 12.5px;
  line-height: normal;
  color: ${colors.muted};
`;

const SecondHeading = styled(Center)`
  margin-top: clamp(156px, 15vw, 260px);
`;

const CardGrid = styled(Reveal)`
  margin-top: clamp(44px, 5.5vw, 72px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  align-items: flex-start;
  gap: 20px;
`;

const WallCard = styled.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  gap: 14px;
  border-radius: 24px;
  border: 1px solid ${({ $on }) => ($on ? 'rgba(255,122,0,0.35)' : colors.line)};
  background: #fff;
  padding: clamp(22px, 2.6vw, 30px);
  transform: ${({ $on }) => ($on ? 'translateY(-4px)' : 'none')};
  box-shadow: ${({ $on }) =>
    $on
      ? '0 1px 2px rgba(23,23,27,0.04), 0 18px 34px -18px rgba(23,23,27,0.18), 0 30px 60px -26px rgba(255,122,0,0.36)'
      : '0 1px 2px rgba(23,23,27,0.04), 0 10px 24px -14px rgba(23,23,27,0.12), 0 22px 48px -24px rgba(255,122,0,0.22)'};
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

const WallArtBox = styled.div`
  display: flex;
  height: 132px;
  align-items: center;
  justify-content: center;
`;

const HesitBubble = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const HesitAsk = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 9px;
  border-radius: 14px 14px 4px 14px;
  background: ${colors.brand};
  padding: 12px 16px;
`;

const HesitAskMark = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;

const HesitAskLine = styled.span`
  display: block;
  height: 6px;
  width: ${({ $w }) => $w}px;
  border-radius: 3px;
  background: ${({ $o }) => `rgba(255,255,255,${$o})`};
`;

const HesitReply = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 7px;
  border: 1.6px dashed rgba(22, 19, 15, 0.18);
  border-radius: 14px 14px 14px 4px;
  padding: 14px 18px;
`;

const HesitDot = styled.span`
  display: block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
`;

function WallArt({ id }) {
  if (id === 'time') {
    return (
      <svg viewBox="0 0 300 180" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
        <circle cx="150" cy="104" r="66" stroke="#e4dcd2" strokeWidth="1.6" />
        <ellipse cx="150" cy="104" rx="66" ry="24" stroke="#e4dcd2" strokeWidth="1.6" />
        <ellipse cx="150" cy="104" rx="26" ry="66" stroke="#e4dcd2" strokeWidth="1.6" />
        <path d="M84 104h132" stroke="#e4dcd2" strokeWidth="1.6" />
        <path
          d="M96 64C120 24 180 24 204 64"
          stroke={colors.brand}
          strokeWidth="2"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
        <circle cx="96" cy="64" r="8" fill="#ded5c9" />
        <circle cx="204" cy="64" r="8" fill={colors.brand} />
        <circle cx="150" cy="38" r="15" fill="#fff0e2" stroke={colors.brand} strokeWidth="1.6" />
        <path d="M144 32l12 12M156 32l-12 12" stroke={colors.brand} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === 'hesit') {
    return (
      <HesitBubble>
        <HesitAsk>
          <HesitAskMark>?</HesitAskMark>
          <HesitAskLine $w={46} $o={0.55} />
          <HesitAskLine $w={26} $o={0.35} />
        </HesitAsk>
        <HesitReply>
          <HesitDot $bg="#ded5c9" />
          <HesitDot $bg="#e4dcd2" />
          <HesitDot $bg="#efeae3" />
        </HesitReply>
      </HesitBubble>
    );
  }

  return (
    <svg viewBox="0 0 360 150" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
      <g fill="#ded5c9">
        <circle cx="46" cy="46" r="13" />
        <path d="M24 92c0-12 10-21 22-21s22 9 22 21z" />
        <circle cx="94" cy="60" r="13" />
        <path d="M72 106c0-12 10-21 22-21s22 9 22 21z" />
        <circle cx="142" cy="46" r="13" />
        <path d="M120 92c0-12 10-21 22-21s22 9 22 21z" />
      </g>
      <path d="M212 8v134" stroke="#e4dcd2" strokeWidth="1.8" strokeDasharray="6 8" />
      <circle cx="300" cy="52" r="13" stroke={colors.brand} strokeWidth="2.2" />
      <path
        d="M278 100c0-12 10-22 22-22s22 10 22 22"
        stroke={colors.brand}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M300 118v14" stroke={colors.brand} strokeWidth="2.2" strokeLinecap="round" strokeDasharray="2 5" />
    </svg>
  );
}

const WallTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${colors.ink};
`;

const WallDetail = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-rows: ${({ $on }) => ($on ? '1fr' : '0fr')};
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  transition:
    grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

const WallDetailInner = styled.div`
  display: flex;
  min-height: 0;
  overflow: hidden;
  flex-direction: column;
  gap: 6px;
`;

const WallDesc = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14.5px;
  line-height: 1.6;
  color: ${colors.body};
`;

const WallBold = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14.5px;
  font-weight: 700;
  line-height: 1.6;
  color: ${colors.ink};
`;

export default function ProblemSection({ reveal }) {
  const [hover, setHover] = useState(-1);

  return (
    <SectionShell id="problem">
      <Center>
        <Heading ref={reveal}>
          지시를 받았지만,
          <br />
          머리 속에 질문 남습니다
        </Heading>
      </Center>

      <DmGrid ref={reveal}>
        <OwnerCard>
          <OwnerHead>
            <OwnerName>대표</OwnerName>
            <OwnerTime>오후 6:42</OwnerTime>
          </OwnerHead>
          <OwnerMessages>
            {OWNER_DM.map((msg) => (
              <OwnerBubble key={msg.mark}>
                {msg.text}
                <OwnerMark>{msg.mark}</OwnerMark>
                {msg.tail}
              </OwnerBubble>
            ))}
          </OwnerMessages>
        </OwnerCard>

        <WorkerCol>
          <DoubtStack>
            {WORKER_DOUBTS.map((doubt) => (
              <DoubtRow key={doubt}>
                <DoubtBubble>{doubt}</DoubtBubble>
                <DoubtTail>
                  <Speck />
                  <Speck style={{ marginLeft: 5 }} />
                </DoubtTail>
              </DoubtRow>
            ))}
          </DoubtStack>
          <WorkerFace>
            <WorkerImg src={memojiWorker} alt="지시를 받고 판단을 망설이는 원격 팀원" />
            <WorkerName>Nguyen</WorkerName>
            <WorkerMeta>
              하노이
              <br />
              오후 4:42
            </WorkerMeta>
          </WorkerFace>
        </WorkerCol>
      </DmGrid>

      <SecondHeading>
        <Heading ref={reveal}>
          물어보면 되는데,
          <br />왜 물어볼 수 없을까요?
        </Heading>
      </SecondHeading>

      <CardGrid ref={reveal}>
        {WALL_CARDS.map((card, i) => {
          const on = hover === i;
          return (
            <WallCard
              key={card.id}
              $on={on}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(-1)}
            >
              <WallArtBox>
                <WallArt id={card.id} />
              </WallArtBox>
              <WallTitle>{card.title}</WallTitle>
              <WallDetail $on={on}>
                <WallDetailInner>
                  <WallDesc>{card.desc}</WallDesc>
                  <WallBold>{card.bold}</WallBold>
                </WallDetailInner>
              </WallDetail>
            </WallCard>
          );
        })}
      </CardGrid>
    </SectionShell>
  );
}
