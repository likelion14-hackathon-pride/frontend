import styled from 'styled-components';
import growthIcon from '../../../assets/icons/growth.svg';
import growthGraphIcon from '../../../assets/icons/growthgraph.svg';

const Card = styled.div`
  flex: none;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E;
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 15px 20px;
  border-bottom: 1px solid #F2F2F4;
`;

const HeaderTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 800;
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 12px 20px 14px;
  display: flex;
  flex-direction: column;
`;

const NumberRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const Number = styled.span`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 1;
`;

const Delta = styled.span`
  font-size: 12.5px;
  font-weight: 700;
  color: #3BA55C;
  white-space: nowrap;
`;

const Description = styled.div`
  font-size: 12px;
  color: #8A8A93;
  margin-top: 5px;
  line-height: 1.5;
`;


const AxisRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const AxisLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${(props) => (props.$active ? '#17171B' : '#B4B4BC')};
`;

export default function HandbookGrowthCard({ count = 12, delta = '+6 this month' }) {
  return (
    <Card>
      <Header>
        <img src={growthIcon} alt="" width={15} height={15} />
        <HeaderTitle>Handbook growth</HeaderTitle>
      </Header>

      <Body>
        <NumberRow>
          <Number>{count}</Number>
          <Delta>{delta}</Delta>
        </NumberRow>

        <Description>Answers to your questions become team rules.</Description>
        <img src={growthGraphIcon} alt="" style={{ width: '100%', flex: 1, minHeight: 0, marginTop: '10px' }} />
        <AxisRow>
          <AxisLabel>W1</AxisLabel>
          <AxisLabel>W2</AxisLabel>
          <AxisLabel>W3</AxisLabel>
          <AxisLabel $active>now</AxisLabel>
        </AxisRow>
      </Body>
    </Card>
  );
}