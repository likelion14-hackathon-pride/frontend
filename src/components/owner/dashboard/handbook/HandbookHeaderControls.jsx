import styled from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const TextGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  min-width: 320px;
  padding-bottom: 1.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7.792px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.8px;
  letter-spacing: -1.2px;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%;
`;

const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const TierTrack = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 6.667px;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 0.667px solid #dfe3eb;
  background: #eef1f6;
`;

const TierTab = styled.button`
  display: flex;
  height: 37.333px;
  padding: 10.667px 21px 10.667px 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  letter-spacing: -0.2px;

  background: ${({ $active }) => ($active ? '#2563EB' : '#FFF')};
  color: ${({ $active }) => ($active ? '#FFF' : '#3C3C44')};
  box-shadow: ${({ $active }) => ($active ? '0 10px 20px -8px #2563EB' : '0 1px 4px 0 rgba(23, 44, 90, 0.10)')};
`;

const ArchiveButton = styled.button`
  display: flex;
  align-items: center;
  height: 40.667px;
  padding: 0 16px 0 14px;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  cursor: pointer;

  border: 0.667px solid
    ${({ $open, $hasItems }) => ($open ? '#9A6212' : $hasItems ? '#F0E0C0' : '#F0E0C0')};
  background: ${({ $open }) => ($open ? '#9A6212' : '#FFF')};
  opacity: ${({ $open, $hasItems }) => ($open || $hasItems ? 1 : 0.55)};
`;

const ArchiveLabel = styled.span`
  color: ${({ $open }) => ($open ? '#FFF' : '#9A6212')};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  letter-spacing: -0.2px;
  white-space: nowrap;
`;

const ArchiveCount = styled.span`
  display: flex;
  min-width: 20px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ $open }) => ($open ? 'rgba(255, 255, 255, 0.22)' : '#FFF6E8')};
  color: ${({ $open }) => ($open ? '#FFF' : '#9A6212')};
  text-align: center;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
  letter-spacing: -0.2px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  height: 38.667px;
  padding: 0 18px 0 16px;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 999px;
  background: #17171b;
  cursor: pointer;

  &:hover {
    background: #2e2e36;
  }
`;

const AddLabel = styled.span`
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  letter-spacing: -0.2px;
  white-space: nowrap;
`;

function ArchiveIcon({ color }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M1.625 3.73749H11.375V6.17499H1.625V3.73749Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M2.51855 6.17499H10.4811V10.4H2.51855V6.17499Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M5.3623 8.125H7.6373" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1.5V10.5M1.5 6H10.5" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

function HandbookHeaderControls({
  activeTier,
  onTierChange,
  waitingCount,
  archiveOpen,
  onToggleArchive,
  onOpenAddPanel,
}) {
  return (
    <HeaderRow>
      <TextGroup>
        <Heading>핸드북</Heading>
        <Subheading>
          확인된 항목만 표시됩니다. 확인 전 항목은 보관함에서 한 번에 확인하세요
        </Subheading>
      </TextGroup>

      <ControlsGroup>
        <TierTrack>
          <TierTab
            type="button"
            $active={!archiveOpen && activeTier === 'all'}
            onClick={() => onTierChange('all')}
          >
            전체
          </TierTab>
          <TierTab
            type="button"
            $active={!archiveOpen && activeTier === 'company'}
            onClick={() => onTierChange('company')}
          >
            회사 규칙
          </TierTab>
          <TierTab
            type="button"
            $active={!archiveOpen && activeTier === 'project'}
            onClick={() => onTierChange('project')}
          >
            프로젝트
          </TierTab>
        </TierTrack>

        <ArchiveButton
          type="button"
          $open={archiveOpen}
          $hasItems={waitingCount > 0}
          onClick={onToggleArchive}
        >
          <ArchiveIcon color={archiveOpen ? '#FFFFFF' : '#9A6212'} />
          <ArchiveLabel $open={archiveOpen}>확인 보관함</ArchiveLabel>
          <ArchiveCount $open={archiveOpen}>{waitingCount}</ArchiveCount>
        </ArchiveButton>

        <AddButton type="button" onClick={onOpenAddPanel}>
          <PlusIcon />
          <AddLabel>항목 직접 추가</AddLabel>
        </AddButton>
      </ControlsGroup>
    </HeaderRow>
  );
}

export default HandbookHeaderControls;
