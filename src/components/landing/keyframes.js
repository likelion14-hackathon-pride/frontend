import { keyframes } from 'styled-components';

export const blobA = keyframes`
  0%   { transform: translate3d(-260px,-40px,0) scale(1); }
  33%  { transform: translate3d(210px,170px,0) scale(1.25); }
  66%  { transform: translate3d(300px,-90px,0) scale(0.85); }
  100% { transform: translate3d(-260px,-40px,0) scale(1); }
`;

export const blobB = keyframes`
  0%   { transform: translate3d(0,0,0) scale(1); }
  33%  { transform: translate3d(420px,-230px,0) scale(1.3); }
  66%  { transform: translate3d(-140px,210px,0) scale(0.82); }
  100% { transform: translate3d(0,0,0) scale(1); }
`;

export const blobC = keyframes`
  0%   { transform: translate3d(0,0,0) scale(1); }
  33%  { transform: translate3d(-430px,240px,0) scale(0.84); }
  66%  { transform: translate3d(150px,-200px,0) scale(1.28); }
  100% { transform: translate3d(0,0,0) scale(1); }
`;

export const cue = keyframes`
  0%, 100% { transform: translateY(0); opacity: .92; }
  50%      { transform: translateY(-5px); opacity: 1; }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
`;
