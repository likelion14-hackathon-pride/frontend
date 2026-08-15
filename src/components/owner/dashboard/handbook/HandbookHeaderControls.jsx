import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const TierTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: #f0f0f2;
`;

const TierTab = styled.button`
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
  background: ${({ $active }) => ($active ? '#2563eb' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#6b6b73')};
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CountPill = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid ${({ $tone }) => ($tone === 'warning' ? '#F4C77E' : '#EFEFF1')};
  background: ${({ $tone }) => ($tone === 'warning' ? '#FDF0E3' : '#FFFFFF')};
  color: ${({ $tone }) => ($tone === 'warning' ? '#B5690E' : '#6B6B73')};
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;

  strong {
    font-weight: 800;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 999px;
  background: #17171b;
  color: #ffffff;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    background: #2e2e36;
  }
`;

function HandbookHeaderControls({
  activeTier,
  onTierChange,
  waitingCount,
  confirmedCount,
  addPanelOpen,
  onToggleAddPanel,
}) {
  return (
    <Bar>
      <TierTrack>
        <TierTab type="button" $active={activeTier === 'all'} onClick={() => onTierChange('all')}>
          전체
        </TierTab>
        <TierTab type="button" $active={activeTier === 'company'} onClick={() => onTierChange('company')}>
          회사 규칙
        </TierTab>
        <TierTab type="button" $active={activeTier === 'project'} onClick={() => onTierChange('project')}>
          프로젝트
        </TierTab>
      </TierTrack>

      <RightGroup>
        <CountPill type="button" $tone="warning">
          확인 대기 <strong>{waitingCount}</strong>
        </CountPill>
        <CountPill type="button">
          확인 보관함 <strong>{confirmedCount}</strong>
        </CountPill>
        <AddButton type="button" onClick={onToggleAddPanel}>
          {addPanelOpen ? '닫기' : '+ 항목 직접 추가'}
        </AddButton>
      </RightGroup>
    </Bar>
  );
}

export default HandbookHeaderControls;
