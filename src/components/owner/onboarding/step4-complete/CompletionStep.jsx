import styled from 'styled-components';
import Mascot from '../Mascot';
import StatCard from './StatCard';
import { colors, radii } from '../theme';

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  color: ${colors.textPrimary};
`;

const Subheading = styled.p`
  margin: 12px 0 0;
  font-size: 15px;
  color: ${colors.textSecondary};
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 32px;
  border-radius: ${radii.lg};
  background: ${colors.primaryBlue};
  color: #ffffff;
`;

const BannerTitle = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 800;
`;

const BannerSubtitle = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
`;

const CodeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: ${radii.md};
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
`;

const CodeText = styled.div`
  span {
    display: block;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.7);
  }

  strong {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.04em;
  }
`;

const CopyButton = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: ${radii.pill};
  background: #ffffff;
  color: ${colors.primaryBlue};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;

const GhostButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.surfaceSubtle};
  color: ${colors.textMuted};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: ${radii.pill};
  background: ${colors.navy};
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const Monogram = styled.span`
  font-size: 11px;
  font-weight: 800;
  color: ${({ $color }) => $color};
`;

function CompletionStep({
  connectedSourcesCount,
  handbookConfirmedCount,
  handbookTotal,
  riskKeywordCount,
  companyCode,
  onReviewSettings,
  onOpenHandbook,
  onCopyCode,
}) {
  return (
    <div>
      <Content>
        <div>
          <Heading>Day 0 설정이 끝났습니다</Heading>
          <Subheading>이제 핸드북이 준비되었습니다.</Subheading>
        </div>
        <Mascot pose="party" size={100} />
      </Content>

      <StatGrid>
        <StatCard
          title="연결된 소스"
          icons={[
            <Monogram key="gh" $color={colors.textPrimary}>GH</Monogram>,
            <Monogram key="sl" $color="#36C5F0">SL</Monogram>,
            <Monogram key="file" $color={colors.primaryBlue}>F</Monogram>,
          ]}
          value={connectedSourcesCount}
          unit="개"
          description="GitHub · Slack · 로컬 파일"
        />
        <StatCard
          title="핸드북 항목"
          icons={[
            <Monogram key="folder" $color={colors.textMuted}>▤</Monogram>,
            <Monogram key="branch" $color={colors.primaryBlue}>⑂</Monogram>,
          ]}
          value={handbookConfirmedCount}
          unit="개 확인됨"
          description={`전체 ${handbookTotal}개 중`}
        />
        <StatCard
          title="위험 작업 키워드"
          icons={[
            <Monogram key="danger" $color={colors.danger}>!</Monogram>,
            <Monogram key="warning" $color={colors.warning}>⚠</Monogram>,
          ]}
          value={riskKeywordCount}
          unit="개"
          description="팀원 화면에 안내로 표시"
          tint={colors.dangerBg}
        />
      </StatGrid>

      <Banner>
        <div>
          <BannerTitle>회사 핸드북이 만들어졌습니다. 이제 팀원이 합류할 수 있어요</BannerTitle>
          <BannerSubtitle>SAI로 원격 팀원과의 협업을 더 쉽게 만들어보세요. 팀의 규칙에 맞춰 정확한 지시로 안내해드립니다.</BannerSubtitle>
        </div>
        <CodeBox>
          <CodeText>
            <span>회사 코드</span>
            <strong>{companyCode}</strong>
          </CodeText>
          <CopyButton type="button" onClick={onCopyCode}>
            복사
          </CopyButton>
        </CodeBox>
      </Banner>

      <ActionRow>
        <GhostButton type="button" onClick={onReviewSettings}>
          설정 다시 보기
        </GhostButton>
        <PrimaryButton type="button" onClick={onOpenHandbook}>
          핸드북 열어보기 →
        </PrimaryButton>
      </ActionRow>
    </div>
  );
}

export default CompletionStep;
