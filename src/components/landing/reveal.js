import styled, { css } from 'styled-components';

// scroll-in 애니메이션 공통 스니펫. IntersectionObserver가 data-revealed="true"를 붙이면 나타난다.
export const revealCss = css`
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1.6s cubic-bezier(0.16, 1, 0.3, 1);

  &[data-revealed='true'] {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Reveal = styled.div`
  ${revealCss}
`;
