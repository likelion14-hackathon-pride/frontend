import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const Outer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid ${colors.line};
  aspect-ratio: ${({ $ratio }) => $ratio};
`;

const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: top left;
`;

// Renders a fixed-pixel-width mock component (ported from Figma exports at 1312px
// or similar) scaled down to fill its responsive container, matching how the
// original template scaled its own dashboard/onboarding screenshots.
export default function ScaledFrame({ width, height, className, children }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => setScale(el.clientWidth / width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <Outer ref={ref} $ratio={width / height} className={className}>
      <Inner style={{ width, height, transform: `scale(${scale})` }}>{children}</Inner>
    </Outer>
  );
}
