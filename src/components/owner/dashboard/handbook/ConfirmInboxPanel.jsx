import styled from 'styled-components';
import { getGroupLabel } from './handbookTabData';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid #f4dcae;
  background: #fdf6e8;
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 800;
  color: #8a5a12;
`;

const CountBadge = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  background: #b5690e;
  color: #fff;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-weight: 700;
`;

const Hint = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a9803f;
`;

const AllConfirmButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border: none;
  border-radius: 999px;
  background: #17171b;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background: #e4d6bd;
    color: #b39a6c;
    cursor: default;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #f4e6c8;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 0 0;
  min-width: 0;
`;

const ItemText = styled.span`
  font-family: Pretendard;
  font-size: 12.5px;
  font-weight: 700;
  color: #17171b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SourceText = styled.span`
  font-family: Pretendard;
  font-size: 10.5px;
  color: #a0a0a8;
`;

const EmptyFlag = styled.span`
  flex-shrink: 0;
  padding: 3px 8px;
  border-radius: 8px;
  background: #f0f0f2;
  color: #6b6b73;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 700;
`;

const ConfirmButton = styled.button`
  flex-shrink: 0;
  height: 28px;
  padding: 0 14px;
  border: none;
  border-radius: 999px;
  background: #17171b;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
`;

const EmptyState = styled.div`
  padding: 18px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px dashed #f4e6c8;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  color: #a9803f;
`;

function ConfirmInboxPanel({ items, onConfirm, onConfirmAll }) {
  return (
    <Panel>
      <HeadRow>
        <TitleGroup>
          <Title>
            확인 대기 <CountBadge>{items.length}</CountBadge>
          </Title>
          <Hint>소스에서 추출됐지만 대표 확인을 거치지 않은 항목입니다. 확인하면 핸드북 목록에 나타납니다.</Hint>
        </TitleGroup>
        <AllConfirmButton type="button" onClick={onConfirmAll} disabled={items.length === 0}>
          전체 확인
        </AllConfirmButton>
      </HeadRow>

      {items.length === 0 ? (
        <EmptyState>확인 대기 항목이 없습니다</EmptyState>
      ) : (
        <List>
          {items.map((item) => (
            <Row key={item.id}>
              <TextGroup>
                <ItemText>{item.text || '(내용 없음)'}</ItemText>
                <SourceText>
                  {getGroupLabel(item.groupKey)} · {item.sourceLabel}
                </SourceText>
              </TextGroup>
              {item.status === 'empty' && <EmptyFlag>빈칸</EmptyFlag>}
              <ConfirmButton type="button" onClick={() => onConfirm(item.id)}>
                확인
              </ConfirmButton>
            </Row>
          ))}
        </List>
      )}
    </Panel>
  );
}

export default ConfirmInboxPanel;
