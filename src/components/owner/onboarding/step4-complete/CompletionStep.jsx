import { useState } from 'react';
import styled from 'styled-components';
import Mascot from '../Mascot';
import StatCard from './StatCard';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';
import fileTransIcon from '../../../../assets/owner/file_trans.svg';
import treeIcon from '../../../../assets/owner/tree.svg';
import nextArrowWhite from '../../../../assets/owner/next_arrow_white.svg';
import exclamationIcon from '../../../../assets/icons/exclamation.svg';
import exclamationTriangleIcon from '../../../../assets/icons/exclamation_triangle.svg';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const HeaderRow = styled.div`
  display: flex;
  padding: 4px 4px 0 4px;
  align-items: center;
  align-content: center;
  gap: 0 40px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const TextColumn = styled.div`
  display: flex;
  min-width: 440px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 25px;
  flex: 1 0 0;
`;

const HeadingWrap = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 0.69px;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: Pretendard;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: 43.7px; /* 115% */
  letter-spacing: -1.3px;
`;

const SubheadingWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
`;

const MascotColumn = styled.div`
  display: flex;
  align-items: center;
`;

const MascotSpacer = styled.span`
  display: block;
  width: 160px;
  height: 128px;
  aspect-ratio: 5 / 4;
  flex-shrink: 0;
`;

const StatGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
`;

const SourceIconWrap = styled.span`
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #eaeaee;
  background: #fff;
  box-shadow: 0 3px 8px -4px rgba(23, 44, 90, 0.22);
  flex-shrink: 0;
`;

const SourceIcon = styled.img`
  width: ${({ $size }) => $size || 22}px;
  height: ${({ $size }) => $size || 22}px;
  flex-shrink: 0;
`;

const GithubIconCrop = styled.span`
  display: flex;
  width: 27px;
  height: 27px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 27px;
    height: 27px;
    transform: scale(1.4);
  }
`;

const IconBox = styled.span`
  display: flex;
  width: 38px;
  height: 38px;
  padding: 10.133px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: ${({ $radius }) => $radius || 0};
  border: ${({ $border }) => $border || 'none'};
  background: ${({ $bg }) => $bg || 'transparent'};
`;

const IconBoxImg = styled.img`
  width: 17.733px;
  height: 17.733px;
  flex-shrink: 0;
`;

const Banner = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 20px 24px;
  align-items: center;
  align-content: center;
  gap: 0 20px;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 22px;
  border: 1px solid #1d4ed8;
  background: #2563eb;
  box-shadow:
    0 18px 40px -14px rgba(37, 99, 235, 0.5),
    0 1px 0 1px rgba(255, 255, 255, 0.22) inset;
`;

const BannerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  flex: 1 0 0;
`;

const BannerTitleWrap = styled.div`
  display: flex;
  padding: 3px 0 2px 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const BannerTitle = styled.p`
  margin: 0;
  align-self: stretch;
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const BannerSubtitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const BannerSubtitle = styled.p`
  margin: 0;
  align-self: stretch;
  color: rgba(255, 255, 255, 0.62);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 175% */
`;

const CodeCopyWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.27);
  flex-shrink: 0;
`;

const CodeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

const CodeLabelWrap = styled.div`
  display: flex;
  padding-bottom: 1px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CodeLabel = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const CodeValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CodeValue = styled.span`
  color: #fff;
  font-family: 'IBM Plex Mono';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.2px;
`;

const CopyButton = styled.button`
  display: flex;
  height: 43px;
  padding: 14px 20px 13px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
`;

const CopyButtonLabelWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CopyButtonLabel = styled.span`
  color: #17171b;
  text-align: center;
  font-family: Pretendard;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CopiedBadge = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 88.771px;
  height: 40px;
  padding: 13px 20px 11px 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  background: rgba(31, 122, 69, 0.28);
`;

const CopiedBadgeLabel = styled.span`
  width: 48.771px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.333px; /* 122.666% */
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const GhostButton = styled.button`
  display: flex;
  min-width: 125.23px;
  padding: 17px 20px 15px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 999px;
  background: #f0f0f2;
  color: #6b6b73;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  display: flex;
  padding: 15px 22px;
  align-items: flex-end;
  gap: 9px;
  border: none;
  border-radius: 999px;
  background: #000;
  box-shadow: 0 12px 26px -12px rgba(37, 99, 235, 0.6);
  cursor: pointer;
`;

const PrimaryButtonLabel = styled.span`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PrimaryButtonIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const COPIED_RESET_MS = 2000;

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
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    onCopyCode();
    setCopied(true);
    setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  return (
    <Section>
      <HeaderRow>
        <TextColumn>
          <HeadingWrap>
            <Heading>Day 0 설정이 끝났습니다</Heading>
          </HeadingWrap>
          <SubheadingWrap>
            <Subheading>이제 핸드북이 준비되었습니다. 팀원을 초대해보세요.</Subheading>
          </SubheadingWrap>
        </TextColumn>
        <MascotColumn>
          <MascotSpacer />
          <Mascot pose="party" width={175} height={179.688} />
        </MascotColumn>
      </HeaderRow>

      <StatGrid>
        <StatCard
          title="연결된 소스"
          icons={
            <>
              <SourceIconWrap>
                <GithubIconCrop>
                  <img src={githubIcon} alt="" />
                </GithubIconCrop>
              </SourceIconWrap>
              <SourceIconWrap>
                <SourceIcon src={slackIcon} alt="" $size={27} />
              </SourceIconWrap>
              <SourceIconWrap>
                <SourceIcon src={localFileIcon} alt="" />
              </SourceIconWrap>
            </>
          }
          count={connectedSourcesCount}
          unit="개"
          description="GitHub · Slack · 로컬 파일"
          border="#EFEFF1"
          bg="#F2F2F5"
        />
        <StatCard
          title="핸드북 항목"
          icons={
            <>
              <IconBox $radius="12px" $border="0.844px solid #C9DAFB" $bg="#FFF">
                <IconBoxImg src={fileTransIcon} alt="" />
              </IconBox>
              <IconBox $radius="12px" $border="0.844px solid #1D4ED8" $bg="#2563EB">
                <IconBoxImg src={treeIcon} alt="" />
              </IconBox>
            </>
          }
          count={handbookConfirmedCount}
          unit="개 확인됨"
          description={`전체 ${handbookTotal}개 중`}
          border="#EFEFF1"
          bg="#EAF1FE"
        />
        <StatCard
          title="위험 작업 키워드"
          icons={
            <>
              <IconBox $radius="12px" $bg="#DC2626">
                <IconBoxImg src={exclamationIcon} alt="" style={{ width: 20, height: 20 }} />
              </IconBox>
              <IconBox $radius="12px" $bg="#EA6A0A">
                <IconBoxImg src={exclamationTriangleIcon} alt="" style={{ width: 20, height: 20 }} />
              </IconBox>
            </>
          }
          count={riskKeywordCount}
          unit="개"
          description="팀원 화면에 안내로 표시"
          border="#EFEFF1"
          bg="#FEF2F2"
        />
      </StatGrid>

      <Banner>
        <BannerTextGroup>
          <BannerTitleWrap>
            <BannerTitle>회사 핸드북이 만들어졌습니다. 이제 팀원이 합류할 수 있어요</BannerTitle>
          </BannerTitleWrap>
          <BannerSubtitleWrap>
            <BannerSubtitle>
              SAI로 원격 팀원과의 협업을 더 쉽게 만들어보세요. 팀의 규칙에 맞춰 정확한 지시로 안내해드립니다.
            </BannerSubtitle>
          </BannerSubtitleWrap>
        </BannerTextGroup>

        <CodeCopyWrap>
          <CodeGroup>
            <CodeLabelWrap>
              <CodeLabel>회사 코드</CodeLabel>
            </CodeLabelWrap>
            <CodeValueWrap>
              <CodeValue>{companyCode}</CodeValue>
            </CodeValueWrap>
          </CodeGroup>

          {copied ? (
            <CopiedBadge>
              <CopiedBadgeLabel>복사됨 ✓</CopiedBadgeLabel>
            </CopiedBadge>
          ) : (
            <CopyButton type="button" onClick={handleCopyCode}>
              <CopyButtonLabelWrap>
                <CopyButtonLabel>복사</CopyButtonLabel>
              </CopyButtonLabelWrap>
            </CopyButton>
          )}
        </CodeCopyWrap>
      </Banner>

      <ActionRow>
        <GhostButton type="button" onClick={onReviewSettings}>
          설정 다시 보기
        </GhostButton>
        <PrimaryButton type="button" onClick={onOpenHandbook}>
          <PrimaryButtonLabel>핸드북 열어보기</PrimaryButtonLabel>
          <PrimaryButtonIcon src={nextArrowWhite} alt="" />
        </PrimaryButton>
      </ActionRow>
    </Section>
  );
}

export default CompletionStep;
