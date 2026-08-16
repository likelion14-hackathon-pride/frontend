import styled from 'styled-components';

const Background = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: 1180px;
  min-height: 100vh;
  padding: 48px 64px;
  flex-direction: column;
  align-items: center;

  background:
    radial-gradient(77.78% 62.5% at 88% 4%, rgba(37, 99, 235, 0.4) 0%, rgba(91, 141, 239, 0.2) 46%, rgba(91, 141, 239, 0) 74%),
    radial-gradient(68.89% 52.78% at 4% 96%, rgba(91, 141, 239, 0.32) 0%, rgba(91, 141, 239, 0) 70%),
    linear-gradient(127deg, #dce7fb 0%, #eef3fe 46%, #d3e0fa 100%);
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1388px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 20px;
  padding: 22.667px 26.667px 26.667px 26.667px;
  border-radius: 30px;
  border: 0.667px solid rgba(255, 255, 255, 0.9);
  background:
    radial-gradient(88.41% 64.94% at 78% -8%, rgba(37, 99, 235, 0.14) 0%, rgba(91, 141, 239, 0.06) 42%, rgba(91, 141, 239, 0) 72%),
    radial-gradient(81.61% 50.51% at 6% 108%, rgba(91, 141, 239, 0.1) 0%, rgba(91, 141, 239, 0) 68%),
    #fff;
  box-shadow:
    0 2px 6px 0 rgba(23, 44, 90, 0.06),
    0 30px 80px -34px rgba(23, 44, 90, 0.3);
`;

function DashboardLayout({ children }) {
  return (
    <Background>
      <Card>{children}</Card>
    </Background>
  );
}

export default DashboardLayout;
