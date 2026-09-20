import styled from 'styled-components';
import SectionShell from './SectionShell';
import { MARKET_ROWS, PRICING_PLANS, PRICING_ROWS } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Center = styled.div`
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
`;

const Heading = styled(Reveal)`
  font-size: clamp(30px, 4.2vw, 50px);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.045em;
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const SubText = styled(Reveal)`
  margin: 20px auto 0;
  max-width: 560px;
  font-size: 16px;
  line-height: 1.75;
  color: ${colors.body};
`;

const MarketRow = styled(Reveal)`
  margin-top: clamp(40px, 4.5vw, 64px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: clamp(28px, 3.5vw, 52px);
`;

const Chart = styled.div`
  position: relative;
  display: flex;
  height: clamp(230px, 24vw, 300px);
  min-width: min(100%, 340px);
  flex: 1 1 340px;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

const Dome = styled.div`
  position: absolute;
  bottom: 0;
  height: clamp(150px, 16vw, 210px);
  width: clamp(300px, 32vw, 420px);
  border-radius: clamp(300px, 32vw, 420px) clamp(300px, 32vw, 420px) 0 0;
  border: 1px solid rgba(255, 122, 0, 0.22);
  background: rgba(255, 122, 0, 0.13);
`;

const DomeMid = styled.div`
  position: absolute;
  bottom: 0;
  height: clamp(100px, 10.5vw, 138px);
  width: clamp(200px, 21vw, 276px);
  border-radius: clamp(200px, 21vw, 276px) clamp(200px, 21vw, 276px) 0 0;
  border: 1px solid rgba(255, 122, 0, 0.34);
  background: rgba(255, 122, 0, 0.28);
`;

const DomeCore = styled.div`
  position: absolute;
  bottom: 0;
  height: clamp(54px, 5.5vw, 74px);
  width: clamp(108px, 11vw, 148px);
  border-radius: clamp(108px, 11vw, 148px) clamp(108px, 11vw, 148px) 0 0;
  background: ${colors.brandDeep};
`;

const DomeLabel = styled.span`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #b9662a;
`;

const SamLabel = styled.span`
  position: absolute;
  bottom: 91px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #b9662a;
`;

const SomLabel = styled.span`
  position: absolute;
  bottom: clamp(20px, 2vw, 26px);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #fff;
`;

const MarketDetail = styled.div`
  display: flex;
  min-width: min(100%, 340px);
  flex: 1 1 340px;
  flex-direction: column;
  gap: 14px;
  align-self: flex-end;
`;

const TargetCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 16px;
  border: 1px solid rgba(255, 122, 0, 0.25);
  background: #fff6ee;
  padding: 16px 20px;
`;

const TargetKicker = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #b9662a;
`;

const TargetTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${colors.ink};
`;

const TargetDesc = styled.div`
  font-size: 13.5px;
  line-height: 1.7;
  color: ${colors.body};
`;

const MarketItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: ${({ $last }) => ($last ? '0' : '14px')};
  border-bottom: ${({ $last }) => ($last ? 'none' : `1px solid ${colors.line}`)};
`;

const MarketKey = styled.div`
  width: 52px;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${({ $accent }) => ($accent ? colors.brandDeep : '#b9662a')};
`;

const MarketValue = styled.div`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ $accent }) => ($accent ? colors.brandDeep : colors.ink)};
`;

const MarketDesc = styled.div`
  margin-top: 4px;
  font-size: 13.5px;
  line-height: 1.7;
  color: ${colors.body};
`;

const PricingBlock = styled(Reveal)`
  margin-top: clamp(48px, 5vw, 76px);
`;

const PricingTitle = styled.h3`
  margin: 0;
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.035em;
`;

const TableWrap = styled.div`
  margin-top: 22px;
  overflow-x: auto;
  border-radius: 20px;
  border: 1px solid ${colors.line};
  background: #fff;
  box-shadow:
    0 1px 2px rgba(23, 23, 27, 0.04),
    0 18px 44px -26px rgba(255, 122, 0, 0.28);
`;

const Table = styled.div`
  display: grid;
  min-width: 720px;
  grid-template-columns: 1.1fr 1fr 1fr 1fr;
`;

const TableCorner = styled.div`
  background: ${colors.ink};
  padding: 16px 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #fff;
`;

const PlanHead = styled.div`
  padding: 16px 20px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: ${({ $i }) =>
    $i === 0 ? 'rgba(255,122,0,0.13)' : $i === 1 ? 'rgba(255,122,0,0.28)' : colors.brandDeep};
  color: ${({ $i }) => ($i === 2 ? '#fff' : '#b9662a')};
`;

const RowLabel = styled.div`
  border-top: 1px solid rgba(23, 23, 27, 0.07);
  background: ${colors.paper};
  padding: 18px 20px;
  font-size: 13.5px;
  font-weight: 600;
  color: ${colors.body};
`;

const RowCell = styled.div`
  border-top: 1px solid rgba(23, 23, 27, 0.07);
  padding: 18px 20px;
  ${({ $strong, $accent }) =>
    $strong
      ? `font-size:20px;font-weight:800;letter-spacing:-0.03em;color:${$accent ? colors.brandDeep : colors.ink};`
      : `font-size:14px;line-height:1.65;color:${colors.body};`}
`;

const PriceNote = styled.div`
  margin-top: 12px;
  text-align: right;
  font-size: 12px;
  line-height: 1.7;
  color: ${colors.muted};
`;

export default function BusinessSection({ reveal }) {
  return (
    <SectionShell id="bm">
      <Center>
        <Heading ref={reveal}>타깃 시장 및 규모</Heading>
        <SubText ref={reveal}>
          글로벌 협업 소프트웨어 시장 안에서 APAC 분산형 Tech SMB를 첫 타깃으로 잡고,
          <br />팀 규모 기반 구독으로 과금합니다.
        </SubText>
      </Center>

      <MarketRow ref={reveal}>
        <Chart>
          <Dome>
            <DomeLabel>TAM</DomeLabel>
          </Dome>
          <DomeMid />
          <DomeCore />
          <SamLabel>SAM</SamLabel>
          <SomLabel>SOM</SomLabel>
        </Chart>

        <MarketDetail>
          <TargetCard>
            <TargetKicker>첫번째 타깃</TargetKicker>
            <TargetTitle>APAC 분산형 Tech SMB</TargetTitle>
            <TargetDesc>한국 우선 진입 · 5~200인 · Slack/GitHub 기반 원격 협업팀</TargetDesc>
          </TargetCard>

          {MARKET_ROWS.map((row, i) => (
            <MarketItem key={row.key} $last={i === MARKET_ROWS.length - 1}>
              <MarketKey $accent={row.accent}>{row.key}</MarketKey>
              <div>
                <MarketValue $accent={row.accent}>{row.value}</MarketValue>
                <MarketDesc>{row.desc}</MarketDesc>
              </div>
            </MarketItem>
          ))}
        </MarketDetail>
      </MarketRow>

      <PricingBlock ref={reveal}>
        <PricingTitle>수익 모델 및 가격 정책</PricingTitle>

        <TableWrap>
          <Table>
            <TableCorner>요금제 구분</TableCorner>
            {PRICING_PLANS.map((plan, i) => (
              <PlanHead key={plan} $i={i}>
                {plan}
              </PlanHead>
            ))}

            {PRICING_ROWS.map((row) => (
              <RowLabelGroup key={row.label} row={row} />
            ))}
          </Table>
        </TableWrap>

        <PriceNote>
          * 일정 규모의 기업은 각 회사의 보안 규정과 데이터양에 맞춘 별도 견적으로 진행됩니다.
        </PriceNote>
      </PricingBlock>
    </SectionShell>
  );
}

function RowLabelGroup({ row }) {
  return (
    <>
      <RowLabel>{row.label}</RowLabel>
      {row.cells.map((cell, i) => (
        <RowCell key={`${row.label}-${i}`} $strong={row.strong} $accent={i === 2}>
          {cell}
        </RowCell>
      ))}
    </>
  );
}
