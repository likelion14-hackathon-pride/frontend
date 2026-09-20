import styled, { css } from 'styled-components';
import { blobA, blobB, blobC } from './keyframes';

const anim = (keyframe, duration, direction = 'normal') => css`
  animation: ${keyframe} ${duration} ease-in-out infinite ${direction};
`;

const SHAPES = [
  {
    left: '50%',
    top: '-200px',
    width: 720,
    height: 620,
    marginLeft: -360,
    anim: anim(blobA, '13s'),
  },
  { left: '2%', top: '220px', width: 560, height: 520, anim: anim(blobB, '16s') },
  { right: '2%', top: '60px', width: 600, height: 540, anim: anim(blobC, '19s') },
  { left: '20%', top: '520px', width: 440, height: 400, anim: anim(blobA, '14s', 'reverse') },
  { right: '16%', top: '560px', width: 380, height: 360, anim: anim(blobB, '17s', 'reverse') },
  { left: '44%', top: '180px', width: 320, height: 300, anim: anim(blobC, '11s') },
];

const WARM = [
  'radial-gradient(closest-side,#FFB871 0%,rgba(255,203,150,0.62) 46%,rgba(255,255,255,0) 76%)',
  'radial-gradient(closest-side,rgba(255,166,92,0.55) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(255,143,61,0.48) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(255,178,110,0.4) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(255,150,80,0.42) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(255,120,40,0.4) 0%,rgba(255,255,255,0) 74%)',
];

const COOL = [
  'radial-gradient(closest-side,#7FA6F5 0%,rgba(163,190,246,0.62) 46%,rgba(255,255,255,0) 76%)',
  'radial-gradient(closest-side,rgba(96,140,236,0.5) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(64,114,231,0.44) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(120,161,241,0.38) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(86,131,235,0.4) 0%,rgba(255,255,255,0) 74%)',
  'radial-gradient(closest-side,rgba(28,94,234,0.38) 0%,rgba(255,255,255,0) 74%)',
];

const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  opacity: ${({ $opacity }) => $opacity};
`;

const Shape = styled.div`
  position: absolute;
  border-radius: 9999px;
  will-change: transform;
  left: ${({ $s }) => $s.left ?? 'auto'};
  right: ${({ $s }) => $s.right ?? 'auto'};
  top: ${({ $s }) => $s.top};
  width: ${({ $s }) => $s.width}px;
  height: ${({ $s }) => $s.height}px;
  margin-left: ${({ $s }) => ($s.marginLeft ? `${$s.marginLeft}px` : '0')};
  background: ${({ $bg }) => $bg};
  ${({ $s }) => $s.anim}
`;

function BlobLayer({ gradients, opacity }) {
  return (
    <Layer $opacity={opacity} aria-hidden="true">
      {SHAPES.map((shape, i) => (
        <Shape key={i} $s={shape} $bg={gradients[i]} />
      ))}
    </Layer>
  );
}

// 오렌지(팀원) → 블루(대표) 배경 크로스페이드. blend는 useBackgroundBlend()의 0..1 값.
export default function BlobField({ blend }) {
  return (
    <>
      <BlobLayer gradients={WARM} opacity={1 - blend} />
      <BlobLayer gradients={COOL} opacity={blend} />
    </>
  );
}
