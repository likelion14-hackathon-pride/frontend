import styled from 'styled-components';
import { colors } from './theme';
import stepperCheck from '../../../assets/owner/StepperCheck.svg';

const ONBOARDING_STEPS = [
  { id: 1, label: '소스 연결' },
  { id: 2, label: '기본 규칙' },
  { id: 3, label: '위험 작업 등록' },
  { id: 4, label: '완료' },
];

const List = styled.ol`
  display: inline-flex;
  padding: 6px;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  border-radius: 999px;
  border-bottom: 1px solid rgba(180, 180, 188, 0.50);
  background: #FFF;
  box-shadow: 0 8px 20px 0 rgba(23, 44, 90, 0.25);
`;

const StepListItem = styled.li`
  display: flex;
`;

const StepButton = styled.button`
  display: flex;
  padding: 10px 18px;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 999px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  background: ${({ $state }) => ($state === 'active' ? '#2563EB' : 'transparent')};
  box-shadow: ${({ $state }) => ($state === 'active' ? '0 5px 10px 0 rgba(37, 99, 235, 0.40)' : 'none')};
  color: ${({ $state }) => {
    if ($state === 'active') return '#FFFFFF';
    if ($state === 'upcoming') return colors.textMuted;
    return colors.textPrimary;
  }};
`;

const IconSlot = styled.span`
  display: flex;
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const NumberCircle = styled(IconSlot)`
  border-radius: 9.5px;
  background: ${({ $state }) => ($state === 'active' ? 'rgba(255, 255, 255, 0.22)' : '#F0F0F2')};
  color: ${({ $state }) => ($state === 'active' ? '#FFFFFF' : '#A0A0A8')};
  text-align: center;
  font-family: Pretendard;
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.2px;
`;

function stateFor(stepId, currentStep) {
  if (stepId < currentStep) return 'done';
  if (stepId === currentStep) return 'active';
  return 'upcoming';
}

function OnboardingStepper({ currentStep, onStepClick }) {
  return (
    <List>
      {ONBOARDING_STEPS.map((step) => {
        const state = stateFor(step.id, currentStep);
        const clickable = state === 'done';
        return (
          <StepListItem key={step.id}>
            <StepButton
              type="button"
              $state={state}
              $clickable={clickable}
              disabled={!clickable}
              onClick={clickable ? () => onStepClick(step.id) : undefined}
            >
              {state === 'done' ? (
                <IconSlot>
                  <img src={stepperCheck} alt="완료" />
                </IconSlot>
              ) : (
                <NumberCircle $state={state}>{step.id}</NumberCircle>
              )}
              {step.label}
            </StepButton>
          </StepListItem>
        );
      })}
    </List>
  );
}

export default OnboardingStepper;
