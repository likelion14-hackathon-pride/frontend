import styled from 'styled-components';
import graphIcon from '../../../assets/icons/graph.svg';

const Card = styled.div`
  flex: none;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002e;
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
  border-bottom: 1px solid #f2f2f4;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const RingWrap = styled.div`
  position: relative;
  width: 108px;
  height: 108px;
`;

const CenterText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Percent = styled.div`
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #17171b;
`;

const Fraction = styled.div`
  font-size: 11.5px;
  color: #a0a0a8;
  margin-top: 2px;
`;

const DateRange = styled.div`
  font-size: 12px;
  color: #b4b4bc;
`;

const EmptyText = styled.div`
  font-size: 13px;
  color: #b4b4bc;
`;

export default function SaiResolutionCard({ percent, resolved, total, dateRange }) {
  const hasData = percent != null && resolved != null && total != null;

  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = hasData ? circumference * (1 - percent / 100) : circumference;

  return (
    <Card>
      <Header>
        <img src={graphIcon} alt="" width={15} height={15} />
        <HeaderTitle>SAi resolution</HeaderTitle>
      </Header>

      <Body>
        {hasData ? (
          <>
            <RingWrap>
              <svg width="108" height="108" viewBox="0 0 108 108">
                <circle cx="54" cy="54" r={radius} fill="none" stroke="#F2F2F4" strokeWidth="10" />
                <circle
                  cx="54"
                  cy="54"
                  r={radius}
                  fill="none"
                  stroke="#FF6000"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  transform="rotate(-90 54 54)"
                />
              </svg>
              <CenterText>
                <Percent>{percent}%</Percent>
                <Fraction>
                  {resolved} of {total}
                </Fraction>
              </CenterText>
            </RingWrap>

            {dateRange && <DateRange>{dateRange}</DateRange>}
          </>
        ) : (
          <EmptyText>No data yet</EmptyText>
        )}
      </Body>
    </Card>
  );
}
