import { useState } from 'react';
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

const ItemGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
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

const TextGroup = styled.button`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;
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

const DeleteButton = styled.button`
  display: flex;
  width: 51px;
  height: 31.333px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #fef2f2;
  cursor: pointer;
  color: #dc2626;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
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

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

const QuoteBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-top: -4px;
  background: #fafafb;
  border-radius: 11px;
  padding: 14px 16px;
`;

const QuoteText = styled.div`
  font-size: 13.5px;
  line-height: 1.7;
  font-family: 'IBM Plex Mono', monospace;
  color: #3a3a42;
`;

const SourceLine = styled.a`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: #8a8a93;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #e0e0e6;
  padding-bottom: 2px;

  &:hover {
    color: #c96a14;
    border-bottom-color: #f0c39a;
  }
`;

const SourceLineText = styled.span`
  font-size: 11.5px;
  color: #8a8a93;
  font-weight: 600;
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

function ConfirmInboxPanel({ items, pending = false, onConfirm, onConfirmAll, onDelete, onClose }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Panel>
      <HeadRow>
        <WaitingTag>확인 대기</WaitingTag>
        <Description>
          깃·문서 파일에서 추출한 규칙 초안입니다. 저장하면 핸드북에 올라가고, 삭제하면 목록에서
          사라집니다.
        </Description>
        <AllConfirmButton
          type="button"
          onClick={onConfirmAll}
          disabled={items.length === 0 || pending}
        >
          {pending ? '확인 중…' : '전체 저장'}
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
            <ItemGroup key={item.id}>
              <Row>
                <LeadingDot />
                <TextGroup type="button" onClick={() => toggleExpanded(item.id)}>
                  <ItemText>{item.text || '(내용 없음)'}</ItemText>
                  <SourceText>
                    {item.groupLabel || getGroupLabel(item.groupKey)} · {item.sourceLabel}
                  </SourceText>
                </TextGroup>
                <DeleteButton type="button" onClick={() => onDelete(item.id)} disabled={pending}>
                  삭제
                </DeleteButton>
                {/* 내용이 없는 BLANK 항목은 서버가 승인을 거절한다(cannot_approve_blank). */}
                <ConfirmButton
                  type="button"
                  onClick={() => onConfirm(item.id)}
                  disabled={pending || item.status === 'empty'}
                >
                  저장
                </ConfirmButton>
              </Row>

              {expandedId === item.id && item.koSource && (
                <QuoteBox>
                  <QuoteText>{item.koSource}</QuoteText>
                  {item.sourceHref ? (
                    <SourceLine href={item.sourceHref} target="_blank" rel="noreferrer">
                      {item.sourceLabel}
                    </SourceLine>
                  ) : (
                    <SourceLineText>{item.sourceLabel}</SourceLineText>
                  )}
                </QuoteBox>
              )}
            </ItemGroup>
          ))}
        </List>
      )}
    </Panel>
  );
}

export default ConfirmInboxPanel;
