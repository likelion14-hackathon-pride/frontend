import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex: 1 0 0;
  box-sizing: border-box;
  padding: 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 22px;
  border: 1px solid ${({ $border }) => $border || '#efeff1'};
  background: ${({ $bg }) => $bg || '#f2f2f5'};
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const HeadRow = styled.div`
  display: flex;
  min-height: 30px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const TitleWrap = styled.span`
  display: flex;
  padding: 3px 0 2px 0;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const Title = styled.span`
  color: #17171b;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CountRow = styled.div`
  display: flex;
  height: 38px;
  align-self: stretch;
  align-items: flex-end;
  gap: 4px;
`;

const CountNumber = styled.span`
  color: #17171b;
  font-family: Pretendard;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 100% */
  letter-spacing: -1.6px;
`;

const CountUnitWrap = styled.span`
  display: inline-flex;
  padding: 3px 0 1px 0;
  flex-direction: column;
  align-items: flex-start;
`;

const CountUnit = styled.span`
  color: #a0a0a8;
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DescriptionWrap = styled.div`
  display: flex;
  padding: 3px 0 1px 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const Description = styled.p`
  margin: 0;
  align-self: stretch;
  color: #a0a0a8;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function StatCard({ title, icons, count, unit, description, border, bg }) {
  return (
    <Card $border={border} $bg={bg}>
      <HeadRow>
        <TitleWrap>
          <Title>{title}</Title>
        </TitleWrap>
        {icons}
      </HeadRow>
      <CountRow>
        <CountNumber>{count}</CountNumber>
        <CountUnitWrap>
          <CountUnit>{unit}</CountUnit>
        </CountUnitWrap>
      </CountRow>
      <DescriptionWrap>
        <Description>{description}</Description>
      </DescriptionWrap>
    </Card>
  );
}

export default StatCard;
