import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1 0 0;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.16),
    0 3px 8px -2px rgba(23, 44, 90, 0.06);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const IconWrap = styled.div`
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
  overflow: hidden;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1 0 0;
`;

const Title = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 800;
  color: #17171b;
`;

const Subtitle = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const SyncBadge = styled.span`
  padding: 4px 9px;
  border-radius: 999px;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 700;
  background: ${({ $live }) => ($live ? '#eaf6ee' : '#f0f0f2')};
  color: ${({ $live }) => ($live ? '#1f7a45' : '#6b6b73')};
`;

const CountRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const Count = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 800;
  color: #17171b;
  letter-spacing: -0.8px;
`;

const CountLabel = styled.span`
  font-family: Pretendard;
  font-size: 11.5px;
  color: #a0a0a8;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 2px;
  border-bottom: 1px solid #f7f8fc;

  &:last-child {
    border-bottom: none;
  }
`;

const RowName = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  color: #17171b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RowMeta = styled.span`
  flex-shrink: 0;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  color: #a0a0a8;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const LastSyncText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const AddButton = styled.button`
  height: 32px;
  padding: 0 14px;
  border: none;
  border-radius: 999px;
  background: #2563eb;
  color: #fff;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
`;

const AddInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AddInput = styled.input`
  flex: 1 0 0;
  height: 32px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #dbe4fc;
  font-family: Pretendard;
  font-size: 11.5px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const SmallButton = styled.button`
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 700;
  background: ${({ $primary }) => ($primary ? '#2563eb' : '#f0f0f2')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#6b6b73')};
`;

function SourceBoxCard({ icon, config, items, onAddItem }) {
  const [adding, setAdding] = useState(false);
  const [value, setValue] = useState('');

  const handleAdd = () => {
    const name = value.trim();
    if (!name) return;
    onAddItem(name);
    setValue('');
    setAdding(false);
  };

  return (
    <Card>
      <HeadRow>
        <IconWrap>{icon}</IconWrap>
        <TitleGroup>
          <Title>{config.title}</Title>
          <Subtitle>{config.subtitle}</Subtitle>
        </TitleGroup>
        <SyncBadge $live={config.syncMode === 'live'}>{config.syncMode === 'live' ? '실시간' : '수동'}</SyncBadge>
      </HeadRow>

      <CountRow>
        <Count>{items.length}</Count>
        <CountLabel>{config.key === 'localFile' ? '업로드된 파일' : config.key === 'slack' ? '연결된 채널' : '연결된 저장소'}</CountLabel>
      </CountRow>

      <List>
        {items.map((item) => (
          <Row key={item.id}>
            <RowName>{item.name}</RowName>
            <RowMeta>{item.meta}</RowMeta>
          </Row>
        ))}
      </List>

      <FooterRow>
        <LastSyncText>{config.lastSync}</LastSyncText>
        {adding ? (
          <AddInputRow>
            <AddInput
              autoFocus
              value={value}
              placeholder={config.addPlaceholder}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <SmallButton type="button" $primary onClick={handleAdd}>
              추가
            </SmallButton>
            <SmallButton type="button" onClick={() => setAdding(false)}>
              취소
            </SmallButton>
          </AddInputRow>
        ) : (
          <AddButton type="button" onClick={() => setAdding(true)}>
            {config.addLabel}
          </AddButton>
        )}
      </FooterRow>
    </Card>
  );
}

export default SourceBoxCard;
