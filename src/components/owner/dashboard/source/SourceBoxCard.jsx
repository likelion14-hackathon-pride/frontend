import { useState } from 'react';
import styled from 'styled-components';

const VARIANT_BACKGROUNDS = {
  github:
    'radial-gradient(88.02% 55.73% at 86% -14%, rgba(23, 23, 27, 0.16) 0%, rgba(23, 23, 27, 0.04) 46%, rgba(23, 23, 27, 0.00) 74%), #FFF',
  slack:
    'radial-gradient(82.52% 46.44% at 92% -16%, rgba(236, 178, 7, 0.24) 0%, rgba(236, 178, 7, 0.00) 62%), radial-gradient(90.77% 53.41% at 60% -14%, rgba(224, 30, 90, 0.16) 0%, rgba(224, 30, 90, 0.00) 66%), radial-gradient(93.52% 58.05% at 20% -10%, rgba(54, 192, 255, 0.20) 0%, rgba(54, 192, 255, 0.00) 70%), #FFF',
  localFile:
    'radial-gradient(88.02% 55.73% at 86% -14%, rgba(90, 169, 230, 0.28) 0%, rgba(31, 90, 140, 0.08) 48%, rgba(31, 90, 140, 0.00) 76%), #FFF',
};

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 0 0;
  min-height: 303.292px;
  padding: 22px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: ${({ $variant }) => VARIANT_BACKGROUNDS[$variant]};
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const IdentityGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

const IconWrap = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  padding: 8.105px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  border: 0.667px solid #eaeaee;
  background: #fff;
  box-shadow: 0 3px 8px -4px rgba(23, 44, 90, 0.22);
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Title = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 21.6px;
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

const Subtitle = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.85px;
  white-space: nowrap;
`;

const SyncBadge = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  padding: 6.667px 14.5px 6.333px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ $live }) => ($live ? '#EAF6EF' : '#F4F4F6')};
  color: ${({ $live }) => ($live ? '#1F7A45' : '#A0A0A8')};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid #efeff1;
`;

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const StatNumber = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.5px;
  letter-spacing: -0.8px;
`;

const StatLabel = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  white-space: nowrap;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1 0 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1d4ed8;
`;

const RowName = styled.span`
  flex: 1 0 0;
  min-width: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RowMeta = styled.span`
  flex-shrink: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 128%;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AddButton = styled.button`
  display: flex;
  height: 36px;
  padding: 10.667px 20.146px 10.333px 16px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  background: ${({ $primary }) => ($primary ? '#2563EB' : '#F4F4F6')};
  color: ${({ $primary }) => ($primary ? '#FFFFFF' : '#3C3C44')};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
  white-space: nowrap;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

const LastSyncText = styled.span`
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 121%;
  white-space: nowrap;
`;



const AddSelect = styled.select`
  flex: 1 0 0;
  min-width: 0;
  height: 36px;
  padding: 0 10px;
  border-radius: 11px;
  border: 0.667px solid #dbe4fc;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const EmptyText = styled.span`
  color: #b4b4bc;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
`;

const SmallButton = styled.button`
  height: 36px;
  padding: 0 14px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-weight: 700;
  background: ${({ $primary }) => ($primary ? '#2563eb' : '#f0f0f2')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#6b6b73')};
`;

function SourceBoxCard({
  icon,
  config,
  connected = false,
  items = [],
  availableOptions,
  extractedCount = 0,
  lastSync,
  onAddItem,
}) {
  const [adding, setAdding] = useState(false);
  const [value, setValue] = useState('');
  const isLive = config.syncMode === 'live';
  // 채널·레포는 서버가 준 목록에서 고른다. 이름을 손으로 적게 하면 오타로 400 이 난다.
  const usesPicker = Array.isArray(availableOptions);

  const handleAdd = () => {
    if (!value) return;
    onAddItem(value);
    setValue('');
    setAdding(false);
  };

  const handleAddClick = () => {
    if (!usesPicker) {
      onAddItem();
      return;
    }
    setAdding(true);
  };

  return (
    <Card $variant={config.key}>
      <HeadRow>
        <IdentityGroup>
          <IconWrap>{icon}</IconWrap>
          <TitleGroup>
            <Title>{config.title}</Title>
            <Subtitle>{config.subtitle}</Subtitle>
          </TitleGroup>
        </IdentityGroup>
        <SyncBadge $live={isLive}>{isLive ? '실시간' : '수동'}</SyncBadge>
      </HeadRow>

      <StatsRow>
        <StatBlock>
          <StatNumber>{items.length}</StatNumber>
          <StatLabel>{config.connectedLabel}</StatLabel>
        </StatBlock>
        <StatBlock>
          <StatNumber>{extractedCount}</StatNumber>
          <StatLabel>추출된 항목</StatLabel>
        </StatBlock>
      </StatsRow>

      <List>
        {items.length === 0 ? (
          <EmptyText>{connected ? config.emptyLabel : config.notConnectedLabel}</EmptyText>
        ) : (
          items.map((item) => (
            <Row key={item.id}>
              <Dot />
              <RowName>{item.name}</RowName>
              <RowMeta>{item.meta}</RowMeta>
            </Row>
          ))
        )}
      </List>

      <FooterRow>
        {adding && usesPicker ? (
          <>
            <AddSelect autoFocus value={value} onChange={(e) => setValue(e.target.value)}>
              <option value="">{config.addPlaceholder}</option>
              {availableOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </AddSelect>
            <SmallButton type="button" $primary onClick={handleAdd} disabled={!value}>
              추가
            </SmallButton>
            <SmallButton type="button" onClick={() => setAdding(false)}>
              취소
            </SmallButton>
          </>
        ) : (
          <>
            <AddButton
              type="button"
              $primary={!isLive}
              disabled={usesPicker && !connected}
              onClick={handleAddClick}
            >
              {config.addLabel}
            </AddButton>
            <LastSyncText>{lastSync}</LastSyncText>
          </>
        )}
      </FooterRow>
    </Card>
  );
}

export default SourceBoxCard;
