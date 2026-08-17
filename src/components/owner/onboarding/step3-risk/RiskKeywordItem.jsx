import styled from 'styled-components';

import { lookup } from '../../../../apis/constants';
import exclamationIcon from '../../../../assets/icons/exclamation.svg';
import exclamationTriangleIcon from '../../../../assets/icons/exclamation_triangle.svg';

// 키는 백엔드 RiskKeyword.Level 값 그대로다(policy/models.py:5).
const LEVEL_META = {
  DANGER: {
    color: '#DC2626',
    tagBg: '#FEF2F2',
    icon: exclamationIcon,
    label: '위험',
  },
  CAUTION: {
    color: '#EA6A0A',
    tagBg: '#FFF7ED',
    icon: exclamationTriangleIcon,
    label: '주의',
  },
  // 서버가 모르는 값을 보내도 화면이 죽지 않도록.
  DEFAULT: {
    color: '#EA6A0A',
    tagBg: '#FFF7ED',
    icon: exclamationTriangleIcon,
    label: '주의',
  },
};

const Row = styled.div`
  display: flex;
  padding: 12px 15px 12px 0;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 14px;
  border: 1px solid #efeff1;
  background: #fff;
  box-shadow: 0 6px 16px -10px rgba(23, 44, 90, 0.2);
  overflow: hidden;
`;

const AccentBarWrap = styled.span`
  display: flex;
  padding: 1px 0;
  align-items: flex-start;
  align-self: stretch;
`;

const AccentBar = styled.span`
  width: 4px;
  align-self: stretch;
  background: ${({ $color }) => $color};
`;

const IconBox = styled.span`
  display: flex;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: ${({ $color }) => $color};
`;

const IconImg = styled.img`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;

const LabelWrap = styled.span`
  display: flex;
  flex: 1 0 0;
  min-width: 0;
  padding-bottom: 2px;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.span`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #17171b;
  font-family: 'IBM Plex Mono';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const RightGroup = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const Tag = styled.span`
  display: flex;
  padding: 6px 10px 5px 10px;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 8px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-family: 'IBM Plex Mono';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const RemoveButton = styled.button`
  display: flex;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #efeff1;
  background: #fff;
  cursor: pointer;
`;

const RemoveGlyph = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: Quicksand;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.2px;
`;

function RiskKeywordItem({ label, level, onRemove }) {
  const meta = lookup(LEVEL_META, level);

  return (
    <Row>
      <AccentBarWrap>
        <AccentBar $color={meta.color} />
      </AccentBarWrap>

      <IconBox $color={meta.color}>
        <IconImg src={meta.icon} alt="" />
      </IconBox>

      <LabelWrap>
        <Label>{label}</Label>
      </LabelWrap>

      <RightGroup>
        <Tag $bg={meta.tagBg} $color={meta.color}>
          {meta.label}
        </Tag>
        <RemoveButton type="button" onClick={onRemove} aria-label={`${label} 삭제`}>
          <RemoveGlyph>✕</RemoveGlyph>
        </RemoveButton>
      </RightGroup>
    </Row>
  );
}

export default RiskKeywordItem;
