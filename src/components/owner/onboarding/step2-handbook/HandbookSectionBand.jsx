import styled from 'styled-components';

const TONE = {
  company: {
    background: '#10163A',
    color: '#FFFFFF',
    subtleColor: 'rgba(255, 255, 255, 0.62)',
    border: '0.667px solid #22376A',
    boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.14) inset',
  },
  project: {
    background: '#2563EB',
    color: '#FFFFFF',
    subtleColor: 'rgba(255, 255, 255, 0.75)',
    border: '0.667px solid #1D4ED8',
    boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.22) inset, 0 14px 30px -14px rgba(37, 99, 235, 0.55)',
  },
};

const Band = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 16px;
  padding: 13.333px 20px;
  border-radius: 16px;
  border: ${({ $tone }) => TONE[$tone].border};
  background: ${({ $tone }) => TONE[$tone].background};
  box-shadow: ${({ $tone }) => TONE[$tone].boxShadow};
  color: ${({ $tone }) => TONE[$tone].color};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

const IconImg = styled.img`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
`;

const Title = styled.p`
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

const Description = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10.5px;
  font-weight: 400;
  color: ${({ $tone }) => TONE[$tone].subtleColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Count = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: ${({ $tone }) => TONE[$tone].subtleColor};
  flex-shrink: 0;
  white-space: nowrap;
`;

function HandbookSectionBand({ tone, icon, title, description, count }) {
  return (
    <Band $tone={tone}>
      <Left>
        <IconImg src={icon} alt="" role="presentation" />
        <Title>{title}</Title>
        <Description $tone={tone}>{description}</Description>
      </Left>
      <Count $tone={tone}>{count}</Count>
    </Band>
  );
}

export default HandbookSectionBand;
