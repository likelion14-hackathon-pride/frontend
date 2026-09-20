import styled from 'styled-components';

const Section = styled.section``;

const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: clamp(78px, 7.5vw, 130px) clamp(20px, 4vw, 40px);
`;

export default function SectionShell({ id, children, className }) {
  return (
    <Section id={id} className={className}>
      <Inner>{children}</Inner>
    </Section>
  );
}
