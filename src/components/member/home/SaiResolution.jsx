import styled from 'styled-components';
import graphIcon from '../../../assets/icons/graph.svg';

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
  font-weight: 700;
  line-height: 125%;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B4B4BC;
  font-size: 13px;
`;

export default function SaiResolutionCard() {
  return (
    <Card>
      <Header>
        <img src={graphIcon} alt="" width={15} height={15} />
        <HeaderTitle>SAI resolution</HeaderTitle>
      </Header>
      <Body>TODO: 도넛 차트</Body>
    </Card>
  );
}