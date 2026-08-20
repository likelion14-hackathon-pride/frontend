import { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(23, 23, 27, 0.45);
  backdrop-filter: blur(6px);
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 440px;
  flex-direction: column;
  gap: 16px;
  padding: 22px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 30px 80px -34px rgba(23, 44, 90, 0.4);
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const Title = styled.h2`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.2px;
`;

const ItemName = styled.span`
  color: #6b6b73;
  font-family: 'IBM Plex Mono';
  font-size: 11.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CloseButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  border-radius: 999px;
  background: #f4f4f6;
  color: #6b6b73;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #e6e6eb;
  }
`;

const HintText = styled.p`
  margin: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
  line-height: 1.6;
`;

const ChipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  box-sizing: border-box;
  display: flex;
  height: 34px;
  padding: 0 14px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-weight: 700;

  border: 0.667px solid ${({ $active }) => ($active ? '#2563EB' : '#E6E6EB')};
  background: ${({ $active }) => ($active ? '#2563EB' : '#FFFFFF')};
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#6B6B73')};
`;

const EmptyProjectText = styled.span`
  color: #b4b4bc;
  font-family: 'Plus Jakarta Sans';
  font-size: 11.5px;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const GhostButton = styled.button`
  height: 38px;
  padding: 0 16px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  background: #f4f4f6;
  color: #3c3c44;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
`;

const ConfirmButton = styled.button`
  height: 38px;
  padding: 0 18px;
  border-radius: 11px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#DBE4FC' : '#2563EB')};
  color: ${({ disabled }) => (disabled ? '#B4B4BC' : '#FFFFFF')};
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
`;

const COMPANY_OPTION = '__company__';

// 회사 규칙은 4개 영역 중 어디에 해당하는지 대표가 고르지 않는다. 수집된 원문을 SAI 가
// 읽고 스스로 areaKey 를 판단해 넣는다(handbook 추출 파이프라인). 여기서는 그저
// "회사 규칙" 전체 vs 특정 프로젝트만 구분해서 알려 주면 된다.
function CollectScopeModal({ itemName, projects = [], pending = false, onCollect, onClose }) {
  const [selected, setSelected] = useState(COMPANY_OPTION);

  const handleConfirm = () => {
    if (pending) return;
    onCollect(selected === COMPANY_OPTION ? null : selected);
  };

  return (
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <Card>
        <HeadRow>
          <TitleGroup>
            <Title>수집 대상 선택</Title>
            <ItemName>{itemName}</ItemName>
          </TitleGroup>
          <CloseButton type="button" onClick={onClose} aria-label="닫기">
            ✕
          </CloseButton>
        </HeadRow>

        <HintText>
          회사 규칙으로 모으면 어느 영역에 해당하는지는 SAi 가 내용을 보고 스스로 분류합니다. 특정
          프로젝트에서만 쓰는 내용이라면 프로젝트를 골라 주세요.
        </HintText>

        <ChipRow>
          <Chip
            type="button"
            $active={selected === COMPANY_OPTION}
            onClick={() => setSelected(COMPANY_OPTION)}
          >
            회사 규칙
          </Chip>
          {projects.length === 0 ? (
            <EmptyProjectText>등록된 프로젝트가 없습니다</EmptyProjectText>
          ) : (
            projects.map((project) => (
              <Chip
                key={project.key}
                type="button"
                $active={selected === project.key}
                onClick={() => setSelected(project.key)}
              >
                {project.label}
              </Chip>
            ))
          )}
        </ChipRow>

        <FooterRow>
          <GhostButton type="button" onClick={onClose}>
            취소
          </GhostButton>
          <ConfirmButton type="button" disabled={pending} onClick={handleConfirm}>
            {pending ? '수집 중…' : '수집 시작'}
          </ConfirmButton>
        </FooterRow>
      </Card>
    </Overlay>
  );
}

export default CollectScopeModal;
