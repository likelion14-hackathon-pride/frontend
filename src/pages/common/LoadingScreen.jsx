import styled, { keyframes } from 'styled-components';
import saiBody from '../../assets/landing/sai-body.png';
import saiHand from '../../assets/landing/sai-hand.png';
import logoWordmark from '../../assets/logo-wordmark.png';

const COLORS = {
  orange: '#FF6000',
  orangeSoft: '#FF8A3D',
  ink: '#17171B',
  muted: '#A88C78',
};

const SIZE = 104; // 심볼 표시 크기
const RING_SIZE = 220; // 바깥 로딩 링 지름
const WAVE_ANGLE = 12; // 손 흔드는 각도 (14deg 초과 금지)

const halo = keyframes`
  0%, 100% { transform: scale(1); opacity: .85; }
  50% { transform: scale(1.08); opacity: .45; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const arcMove = keyframes`
  0%   { stroke-dasharray: 20 280; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 150 150; stroke-dashoffset: -40; }
  100% { stroke-dasharray: 20 280; stroke-dashoffset: -300; }
`;

const wave = keyframes`
  0%, 60%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(-${WAVE_ANGLE}deg); }
  40% { transform: rotate(${WAVE_ANGLE}deg); }
`;

const markIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(.94); }
  to { opacity: 1; transform: none; }
`;

const dotPulse = keyframes`
  0%, 70%, 100% { background: rgba(255,96,0,.22); transform: scale(1); }
  25% { background: ${COLORS.orange}; transform: scale(1.35); }
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background:
    radial-gradient(60% 46% at 30% 78%, rgba(255,96,0,.30), rgba(255,138,61,.14) 46%, rgba(255,138,61,0) 74%),
    radial-gradient(72% 56% at 92% 12%, rgba(255,138,61,.26), rgba(255,138,61,0) 70%),
    linear-gradient(152deg, #FFEDE0, #FFF6EF 46%, #FFE3CE);
`;

const Inner = styled.div`
  text-align: center;
`;

const Stage = styled.div`
  position: relative;
  width: ${RING_SIZE}px;
  height: ${RING_SIZE}px;
  margin: 0 auto 22px;
  display: grid;
  place-items: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 138, 61, 0.16);
    animation: ${halo} 2.4s ease-in-out infinite;
  }
  &::before {
    width: 100%;
    height: 100%;
  }
  &::after {
    width: 72%;
    height: 72%;
    background: rgba(255, 138, 61, 0.2);
    animation-delay: 0.4s;
  }
`;

const Ring = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: ${spin} 1.4s linear infinite;
`;

const RingTrack = styled.circle`
  fill: none;
  stroke: rgba(255, 138, 61, 0.22);
  stroke-width: 3;
`;

const RingArc = styled.circle`
  fill: none;
  stroke: url(#saiGrad);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 80 220;
  animation: ${arcMove} 1.6s ease-in-out infinite;
`;

const Mascot = styled.div`
  position: relative;
  width: ${SIZE}px;
  line-height: 0;
  z-index: 1;

  img {
    width: 100%;
    display: block;
  }
`;

const Hand = styled.img`
  position: absolute;
  inset: 0;
  transform-origin: 82.94% 52.96%; /* 손목 좌표 — 변경 금지 */
  animation: ${wave} 1.1s ease-in-out infinite;
`;

const Wordmark = styled.img`
  width: 120px;
  height: 52px;
  margin: 0 auto 20px;
  display: block;
  animation: ${markIn} 0.6s cubic-bezier(0.2, 0.8, 0.3, 1) both;
  animation-delay: 0.15s;
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
`;

const Dot = styled.i`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 96, 0, 0.22);
  animation: ${dotPulse} 1.35s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;

const Caption = styled.p`
  margin-top: 14px;
  font-size: 12.5px;
  font-weight: 600;
  color: ${COLORS.muted};
`;

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Inner>
        <Stage>
          <Ring viewBox="0 0 110 110" aria-hidden="true">
            <defs>
              <linearGradient id="saiGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={COLORS.orange} />
                <stop offset="100%" stopColor="#FFB07A" />
              </linearGradient>
            </defs>
            <RingTrack cx="55" cy="55" r="52" />
            <RingArc cx="55" cy="55" r="52" />
          </Ring>

          <Mascot role="img" aria-label="SAI">
            <img src={saiBody} alt="" />
            <Hand src={saiHand} alt="" />
          </Mascot>
        </Stage>

        <Wordmark src={logoWordmark} alt="SAI" />

        <Dots role="status" aria-live="polite" aria-label="불러오는 중">
          <Dot $delay="0s" />
          <Dot $delay="0.18s" />
          <Dot $delay="0.36s" />
        </Dots>

        <Caption>잠시만 기다려 주세요</Caption>
      </Inner>
    </Wrapper>
  );
}