import styled from 'styled-components';

const VARIANT_BACKGROUNDS = {
  github:
    'radial-gradient(88.02% 55.73% at 86% -14%, rgba(23, 23, 27, 0.16) 0%, rgba(23, 23, 27, 0.04) 46%, rgba(23, 23, 27, 0.00) 74%), #FFF',
  slack:
    'radial-gradient(82.52% 46.44% at 92% -16%, rgba(236, 178, 7, 0.24) 0%, rgba(236, 178, 7, 0.00) 62%), radial-gradient(90.77% 53.41% at 60% -14%, rgba(224, 30, 90, 0.16) 0%, rgba(224, 30, 90, 0.00) 66%), radial-gradient(93.52% 58.05% at 20% -10%, rgba(54, 192, 255, 0.20) 0%, rgba(54, 192, 255, 0.00) 70%), #FFF',
  localFile:
    'radial-gradient(88.02% 55.73% at 86% -14%, rgba(90, 169, 230, 0.28) 0%, rgba(31, 90, 140, 0.08) 48%, rgba(31, 90, 140, 0.00) 76%), #FFF',
};

const Card = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  flex: 1 0 0;
  border-radius: 22px;
  border: 1px solid ${({ $status }) => ($status === 'connected' ? '#B3CAF8' : '#EFEFF1')};
  background: ${({ $status, $variant }) => ($status === 'connected' ? '#EAF1FE' : VARIANT_BACKGROUNDS[$variant])};
  box-shadow: 0 14px 34px -14px rgba(23, 44, 90, 0.22), 0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  align-self: stretch;
`;

const IconWrap = styled.div`
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #EAEAEE;
  background: #FFF;
  box-shadow: 0 3px 8px -4px rgba(23, 44, 90, 0.22);
  flex-shrink: 0;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25px;
  flex: 1 0 0;
`;

const Title = styled.p`
  margin: 0;
  color: #17171B;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: ${({ $variant }) => ($variant === 'localFile' ? 800 : 700)};
  line-height: 20.25px;
  letter-spacing: -0.3px;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #A0A0A8;
  font-family: Pretendard;
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.18px;
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
`;

const Description = styled.p`
  margin: 0;
  align-self: stretch;
  color: #6B6B73;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.4px;
`;

const ConnectButton = styled.button`
  display: flex;
  padding: 14px 0 13px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: none;
  border-radius: 999px;
  cursor: ${({ $status }) => ($status === 'connecting' ? 'default' : 'pointer')};
  background: ${({ $status }) => ($status === 'connected' ? '#1D4ED8' : '#F0F0F2')};
  text-align: center;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.2px;

  ${({ $status }) =>
    $status === 'connecting'
      ? `
    color: #A0A0A8;
    font-family: "Plus Jakarta Sans";
    line-height: 15.333px;
  `
      : `
    color: ${$status === 'connected' ? '#FFFFFF' : '#17171B'};
    font-family: Pretendard;
    line-height: normal;
  `}
`;

function SourceCard({
  variant,
  icon,
  title,
  subtitle,
  description,
  buttonLabel,
  connectingLabel,
  connectedLabel,
  status,
  onToggle,
}) {
  const label = status === 'connected' ? connectedLabel : status === 'connecting' ? connectingLabel : buttonLabel;

  return (
    <Card $variant={variant} $status={status}>
      <Head>
        <IconWrap>{icon}</IconWrap>
        <TitleGroup>
          <Title $variant={variant}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleGroup>
      </Head>
      <DescriptionWrap>
        <Description>{description}</Description>
      </DescriptionWrap>
      <ConnectButton type="button" $status={status} disabled={status === 'connecting'} onClick={onToggle}>
        {label}
      </ConnectButton>
    </Card>
  );
}

export default SourceCard;
