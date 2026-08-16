import styled from 'styled-components';
import TimingButton from './TimingButton';

const Bar = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 26px 32px 26px;
`;

const Title = styled.h1`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -0.3px;
`;

const DateText = styled.span`
  color: #8a8a93;
  font-family: 'Plus Jakarta Sans';
  font-size: 14.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 129%;
  margin-top: 6px;
`;

export default function MemberTopBar({ screenTitle, onOpenTiming }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Bar>
      <Title>{screenTitle}</Title>
      <DateText>{today}</DateText>
      <TimingButton onClick={onOpenTiming} />
    </Bar>
  );
}
