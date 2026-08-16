import styled from 'styled-components';
import { getGroupLabel } from './handbookTabData';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 16.667px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.667px solid #f3e4c6;
  background: #fffdf7;
`;

const HeadRow = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const WaitingTag = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 5.667px 14.063px 5.333px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #9a6212;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const Description = styled.p`
  margin: 0;
  flex: 1 0 0;
  min-width: 0;
  color: #9a6212;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 127%;
`;

const AllConfirmButton = styled.button`
  display: flex;
  height: 31.333px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #9a6212;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const CloseButton = styled.button`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 1.667px 6.667px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.667px solid #eadfc6;
  background: #fff;
  cursor: pointer;
  color: #a0a0a8;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 12.667px 14.667px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 0.667px solid #f0e7d6;
  background: #fff;
`;

const LeadingDot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #d8d8de;
`;

const TextGroup = styled.div`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

const ItemText = styled.span`
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 13.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.9px;
  letter-spacing: -0.3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const SourceText = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const StatusBadge = styled.span`
  flex-shrink: 0;
  display: flex;
  height: 24px;
  padding: ${({ $variant }) => ($variant === 'empty' ? '5.667px 11px 5.333px 10px' : '5.667px 12.5px 5.333px 10px')};
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ $variant }) => ($variant === 'empty' ? '#F4F4F6' : '#FFF6E8')};
  color: ${({ $variant }) => ($variant === 'empty' ? '#A0A0A8' : '#9A6212')};
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const ConfirmButton = styled.button`
  display: flex;
  width: 51px;
  height: 31.333px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #17171b;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
`;

const EmptyRow = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 62px;
  padding: 0 2.667px 0 22.667px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  border: 0.667px solid #f0e7d6;
  background: #fff;
`;

const EmptyText = styled.span`
  color: #1f7a45;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 123%;
`;

function ConfirmInboxPanel({ items, onConfirm, onConfirmAll, onClose }) {
  return (
    <Panel>
      <HeadRow>
        <WaitingTag>확인 대기</WaitingTag>
        <Description>
          소스에서 추출됐지만 대표 확인을 거치지 않은 항목입니다. 확인하면 핸드북 목록에 나타납니다.
        </Description>
        <AllConfirmButton type="button" onClick={onConfirmAll} disabled={items.length === 0}>
          전체 확인
        </AllConfirmButton>
        <CloseButton type="button" onClick={onClose} aria-label="확인 보관함 닫기">
          ✕
        </CloseButton>
      </HeadRow>

      {items.length === 0 ? (
        <EmptyRow>
          <EmptyText>확인 대기 항목이 없습니다</EmptyText>
        </EmptyRow>
      ) : (
        <List>
          {items.map((item) => (
            <Row key={item.id}>
              <LeadingDot />
              <TextGroup>
                <ItemText>{item.text || '(내용 없음)'}</ItemText>
                <SourceText>
                  {getGroupLabel(item.groupKey)} · {item.sourceLabel}
                </SourceText>
              </TextGroup>
              <StatusBadge $variant={item.status}>
                {item.status === 'empty' ? '빈칸' : '미확인'}
              </StatusBadge>
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
