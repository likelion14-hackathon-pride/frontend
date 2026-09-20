import { useState } from 'react';
import styled from 'styled-components';
import SectionShell from './SectionShell';
import { HOW_STEPS } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Center = styled.div`
  text-align: center;
`;

const Heading = styled(Reveal)`
  margin: 0 auto;
  max-width: 680px;
  font-size: clamp(30px, 4.2vw, 50px);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.04em;
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const TagRow = styled(Reveal)`
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
`;

const Tag = styled.span`
  white-space: nowrap;
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #c25a00;
`;

const CardRow = styled(Reveal)`
  margin-top: clamp(44px, 5.5vw, 72px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.button`
  position: relative;
  display: flex;
  min-width: 0;
  cursor: pointer;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid ${({ $active }) => ($active ? colors.ink : colors.line)};
  background: ${({ $active }) => ($active ? colors.ink : 'rgba(255,255,255,0.66)')};
  backdrop-filter: blur(6px);
  padding: clamp(24px, 2.6vw, 34px);
  text-align: left;
  box-shadow: ${({ $active }) =>
    $active ? '0 20px 44px -22px rgba(23,23,27,0.45)' : '0 1px 2px rgba(23,23,27,0.03)'};
  transition:
    flex 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  flex: ${({ $active }) => ($active ? '2.1 1 320px' : '1 1 180px')};
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const StepBadge = styled.span`
  display: flex;
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  transition: background-color 0.5s;
  background: ${({ $active }) => ($active ? colors.brand : colors.ink)};
`;

const CardMark = styled.div`
  position: absolute;
  right: -16px;
  bottom: -12px;
  display: flex;
  height: 168px;
  width: 168px;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: ${({ $active }) => ($active ? 0.08 : 0.06)};
  filter: ${({ $active }) => ($active ? 'none' : 'invert(1)')};
  transition: opacity 0.4s ease;
`;

function StepIcon({ id, dots = true, size = 16 }) {
  if (id === 'collect') {
    return (
      <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
        <circle cx="3" cy="3" r="2" fill="#fff" />
        <circle cx="13" cy="3" r="2" fill="#fff" />
        <circle cx="3" cy="13" r="2" fill="#fff" opacity="0.5" />
        <circle cx="12" cy="12" r="3.5" fill="#fff" opacity="0.8" />
      </svg>
    );
  }
  if (id === 'translate') {
    return (
      <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
        <rect x="1" y="7" width="7" height="2" rx="1" fill="#fff" opacity="0.55" />
        <rect x="10" y="2" width="5" height="2" rx="1" fill="#fff" />
        <rect x="10" y="7" width="5" height="2" rx="1" fill="#fff" />
        <rect x="10" y="12" width="5" height="2" rx="1" fill="#fff" />
      </svg>
    );
  }
  if (id === 'ask') {
    return (
      <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
        <path
          d="M2 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3H7.5L4 14.5V11.5A3 3 0 0 1 2 8.5V5z"
          fill="#fff"
          opacity="0.9"
        />
        {dots && (
          <>
            <circle cx="8" cy="6.6" r="1.1" fill="#16130f" opacity="0.45" />
            <circle cx="5" cy="6.6" r="1.1" fill="#16130f" opacity="0.45" />
            <circle cx="11" cy="6.6" r="1.1" fill="#16130f" opacity="0.45" />
          </>
        )}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
      <rect x="2" y="11" width="12" height="3" rx="1.5" fill="#fff" />
      <rect x="2" y="6.5" width="12" height="3" rx="1.5" fill="#fff" opacity="0.6" />
      <rect x="2" y="2" width="12" height="3" rx="1.5" fill="#fff" opacity="0.32" />
    </svg>
  );
}

const StepTag = styled.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${({ $active }) => ($active ? '#ff9a40' : colors.muted)};
`;

const StepTitle = styled.h3`
  margin: 14px 0 0;
  font-weight: 700;
  letter-spacing: -0.03em;
  transition: all 0.5s;
  font-size: ${({ $active }) => ($active ? 'clamp(24px,2.6vw,32px)' : 'clamp(19px,2vw,24px)')};
  color: ${({ $active }) => ($active ? '#fff' : colors.ink)};
`;

const Detail = styled.div`
  position: relative;
  white-space: pre-line;
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
`;

const DetailDesc = styled.p`
  margin: 0;
`;

const ChipRow = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StepChip = styled.span`
  white-space: nowrap;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  padding: 5px 9px;
  font-family: monospace;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.75);
`;

const ExampleBox = styled.div`
  margin-top: 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  padding: 14px 16px;
`;

const ExampleTitle = styled.div`
  font-size: 13.5px;
  font-weight: 600;
  color: #fff;
`;

const ExampleBody = styled.div`
  margin-top: 6px;
  white-space: pre-line;
  font-size: 12.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
`;

const ChatCol = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ChatQ = styled.div`
  max-width: 88%;
  align-self: flex-end;
  border-radius: 12px 12px 3px 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 14px;
  font-size: 13px;
  color: #fff;
`;

const ChatA = styled.div`
  max-width: 88%;
  align-self: flex-start;
  border-radius: 12px 12px 12px 3px;
  background: ${colors.brand};
  padding: 10px 14px;
  font-size: 13px;
  color: #fff;
`;

const RoutesCol = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const RoutesGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const RouteChip = styled.div`
  white-space: nowrap;
  border-radius: 11px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  padding: 12px 14px;
  text-align: center;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #ff9a40;
`;

const JumpLink = styled.span`
  margin-top: 4px;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 2px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  transition: color 0.2s;

  &:hover {
    color: #ff9a40;
  }
`;

const NavRow = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const RoundButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid ${colors.line};
  background: #fff;
  color: ${colors.ink};
  cursor: pointer;
`;

const NavHint = styled.span`
  text-align: center;
  font-size: 13.5px;
  color: ${colors.muted};
`;

export default function HowSection({ reveal, onJumpToRoutes }) {
  const [step, setStep] = useState(0);
  const count = HOW_STEPS.length;

  return (
    <SectionShell id="how">
      <Center>
        <Heading ref={reveal}>SAi에서 한 번에 해결하세요</Heading>
        <TagRow ref={reveal}>
          {['#핸드북 생성', '#지시 해석', '#질문 응대'].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>
      </Center>

      <CardRow ref={reveal}>
        {HOW_STEPS.map((card, i) => {
          const active = i === step;
          return (
            <Card key={card.id} type="button" $active={active} onClick={() => setStep(i)}>
              <CardMark $active={active}>
                <StepIcon id={card.id} dots={false} size={150} />
              </CardMark>
              <div>
                <CardHead>
                  <StepBadge $active={active}>
                    <StepIcon id={card.id} />
                  </StepBadge>
                  <StepTag $active={active}>{card.tag}</StepTag>
                </CardHead>
                <StepTitle $active={active}>{card.title}</StepTitle>
              </div>

              {active && (
                <Detail>
                  <DetailDesc>{card.desc}</DetailDesc>

                  {card.chips && (
                    <ChipRow>
                      {card.chips.map((chip) => (
                        <StepChip key={chip}>{chip}</StepChip>
                      ))}
                    </ChipRow>
                  )}

                  {card.example && (
                    <ExampleBox>
                      <ExampleTitle>{card.example.title}</ExampleTitle>
                      <ExampleBody>{card.example.body}</ExampleBody>
                    </ExampleBox>
                  )}

                  {card.chat && (
                    <ChatCol>
                      <ChatQ>{card.chat.q}</ChatQ>
                      <ChatA>{card.chat.a}</ChatA>
                    </ChatCol>
                  )}

                  {card.routes && (
                    <RoutesCol>
                      <RoutesGrid>
                        {card.routes.map((route) => (
                          <RouteChip key={route}>{route}</RouteChip>
                        ))}
                      </RoutesGrid>
                      <JumpLink
                        role="link"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          onJumpToRoutes();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') onJumpToRoutes();
                        }}
                      >
                        자세히 보기<span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
                      </JumpLink>
                    </RoutesCol>
                  )}
                </Detail>
              )}
            </Card>
          );
        })}
      </CardRow>

      <NavRow>
        <RoundButton
          type="button"
          aria-label="이전 단계"
          onClick={() => setStep((s) => (s - 1 + count) % count)}
        >
          ‹
        </RoundButton>
        <NavHint>카드를 누르면 자세한 내용이 열립니다.</NavHint>
        <RoundButton
          type="button"
          aria-label="다음 단계"
          onClick={() => setStep((s) => (s + 1) % count)}
        >
          ›
        </RoundButton>
      </NavRow>
    </SectionShell>
  );
}
