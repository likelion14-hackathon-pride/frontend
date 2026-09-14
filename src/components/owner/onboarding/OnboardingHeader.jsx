import styled from 'styled-components';
import OnboardingStepper from './OnboardingStepper';
import symbol from '../../../assets/owner/symbol.svg';
import wordmark from '../../../assets/owner/wordmark.svg';
import logoutIcon from '../../../assets/owner/logout.svg';

const Bar = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
  align-self: stretch;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoSymbol = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: url(${symbol}) 50% / contain no-repeat;
`;

const LogoWordmark = styled.div`
  width: 67px;
  height: 28.862px;
  flex-shrink: 0;
  aspect-ratio: 65 / 28;
  background: url(${wordmark}) 50% / contain no-repeat;
`;

const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  justify-self: end;
`;

const LogoutButton = styled.button`
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  border: 0.667px solid #eaeaee;
  background: #fff;
  cursor: pointer;
`;

const LogoutIcon = styled.img`
  width: 17px;
  height: 17px;
  flex-shrink: 0;
`;

const Avatar = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 400px;
  background: #111827;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  flex-shrink: 0;
`;

function OnboardingHeader({ currentStep, userInitial = '김', onStepClick, onLogout }) {
  return (
    <Bar>
      <Logo>
        <LogoSymbol />
        <LogoWordmark />
      </Logo>
      <StepperWrapper>
        <OnboardingStepper currentStep={currentStep} onStepClick={onStepClick} />
      </StepperWrapper>
      <AvatarContainer>
        <LogoutButton type="button" onClick={onLogout} aria-label="로그아웃" title="로그아웃">
          <LogoutIcon src={logoutIcon} alt="" />
        </LogoutButton>
        <Avatar>{userInitial}</Avatar>
      </AvatarContainer>
    </Bar>
  );
}

export default OnboardingHeader;
