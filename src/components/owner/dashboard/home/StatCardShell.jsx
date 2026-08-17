import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 240px;
  min-width: 0;
  min-height: 250.333px;
  flex-direction: column;
  padding: 20px 14.667px;
  gap: 14px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const Title = styled.span`
  width: 100%;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  letter-spacing: -0.2px;
`;

function StatCardShell({ title, children }) {
  return (
    <Card>
      <Title>{title}</Title>
      {children}
    </Card>
  );
}

export default StatCardShell;
