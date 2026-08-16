import styled from 'styled-components';
import { colors } from './theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const SectionLabel = styled.p`
  font-size: 11.5px;
  font-weight: 600;
  color: ${colors.textThird};
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Tag = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 14px 13px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;

  background: ${({ $active }) => ($active ? '#FFF3E6' : '#FAFAFB')};
  border: 1px solid ${({ $active }) => ($active ? '#FF8A3D' : '#EFEFF1')};
`;

const TagLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? colors.primary : colors.textPrimary)};
`;

const TagSub = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${colors.textLight};
`;

export default function TagSelect({ label, options, value, onChange }) {
  return (
    <Wrapper>
      {label && <SectionLabel>{label}</SectionLabel>}
      <Grid>
        {options.map((opt) => (
          <Tag
            key={opt.value}
            type="button"
            $active={value === opt.value}
            onClick={() => onChange(opt.value)}
          >
            <TagLabel $active={value === opt.value}>{opt.label}</TagLabel>
            {opt.subLabel && <TagSub>{opt.subLabel}</TagSub>}
          </Tag>
        ))}
      </Grid>
    </Wrapper>
  );
}