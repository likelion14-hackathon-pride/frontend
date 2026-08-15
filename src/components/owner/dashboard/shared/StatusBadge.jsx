import styled from 'styled-components';

const STATUS_META = {
  confirmed: { label: '확인됨', color: '#1F7A45', bg: 'rgba(31, 122, 69, 0.12)' },
  unconfirmed: { label: '미확인', color: '#6B6B73', bg: '#F0F0F2' },
  review: { label: '검토 필요', color: '#EA6A0A', bg: '#FFF3E6' },
  waiting: { label: '대기', color: '#2563EB', bg: '#EAF1FE' },
};

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 9px;
  border-radius: 999px;
  font-family: Pretendard;
  font-size: 10.5px;
  font-weight: 700;
  white-space: nowrap;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

function StatusBadge({ status, label }) {
  const meta = STATUS_META[status] ?? STATUS_META.unconfirmed;
  return (
    <Chip $color={meta.color} $bg={meta.bg}>
      {label ?? meta.label}
    </Chip>
  );
}

export default StatusBadge;
