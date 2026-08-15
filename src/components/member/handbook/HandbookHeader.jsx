import styled from 'styled-components';
import mascot from '../../../assets/logo-mascot.png';

const Wrap = styled.div`
  padding: 2px 2px 0;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  width: 62px;
  height: 62px;
  flex: none;
  object-fit: contain;
  transform: rotate(-8deg);
`;

const TitleRow = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const Title = styled.div`
  min-width: 0;
  max-width: 100%;
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -1.3px;
  line-height: 1.1;
  color: #17171B;
  font-family: Tahoma;
  overflow-wrap: break-word;
`;



const Subtitle = styled.div`
  flex: none;
  font-size: 13px;
  color: #A0A0A8;
  line-height: 1.5;
  align-self: flex-end;
  padding-bottom: 5px;
`;

export default function HandbookHeader({ mode = 'company', projectName }) {
  const title = mode === 'company' ? 'Company system' : projectName || 'Project';
  const subtitle =
    mode === 'company' ? 'Applies across the whole company' : 'Applies to this project only';

  return (
    <Wrap>
      <Icon src={mascot} alt="" />
      <TitleRow>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleRow>
    </Wrap>
  );
}