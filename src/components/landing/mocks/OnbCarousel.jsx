import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Mirrors 4-logic.html's onboardingVals()/measureOnb(): each step is drawn at its
// native 1312px width, the box scales by min(1, boxWidth / 1312), and the box's
// own height snaps to the *active* step's real content height times that scale
// (cached per step once measured, so later switches don't re-measure). All 4
// steps stay mounted and stacked, crossfading opacity over 0.5s.
//
// `height: 'auto'` (matching the original's onbMockStyle) only works for steps whose
// root lays out children in normal flow (flex column) — auto-height then grows to fit
// them. A step whose root positions everything with `position: absolute` has no in-flow
// content, so forcing its height to auto collapses it to ~0 and its own background paints
// invisibly thin, even though the absolutely-positioned children still render below it.
// `fixedHeightSteps` lists indices where the original component's own baked-in height
// must be left alone instead.
const NATURAL_WIDTH = 1312;
const FALLBACK_HEIGHT = 660;

const Box = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 34px;
  box-shadow:
    0 26px 60px -20px rgba(23, 44, 90, 0.3),
    0 2px 6px rgba(23, 44, 90, 0.06);
`;

const Frame = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${NATURAL_WIDTH}px;
  transform-origin: top left;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
`;

const AUTO_HEIGHT_STYLE = { width: '1312px', height: 'auto' };
const NATURAL_HEIGHT_STYLE = { width: '1312px' };

export default function OnbCarousel({ step, items, fixedHeightSteps = [] }) {
  const boxRef = useRef(null);
  const frameRefs = useRef([]);
  const [scale, setScale] = useState(0);
  const [heights, setHeights] = useState(() => items.map(() => FALLBACK_HEIGHT));

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;
    const update = () => setScale(Math.min(1, box.clientWidth / NATURAL_WIDTH));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const observers = frameRefs.current.map((el, i) => {
      const child = el && el.firstElementChild;
      if (!child) return null;
      const update = () => {
        const h = child.scrollHeight;
        if (!h || h <= 200) return;
        setHeights((prev) => {
          if (Math.abs(prev[i] - h) < 0.5) return prev;
          const next = prev.slice();
          next[i] = h;
          return next;
        });
      };
      update();
      const ro = new ResizeObserver(update);
      ro.observe(child);
      return ro;
    });
    return () => observers.forEach((ro) => ro && ro.disconnect());
  }, [items]);

  const boxHeight = (heights[step] || FALLBACK_HEIGHT) * scale;

  return (
    <Box ref={boxRef} style={{ height: boxHeight }}>
      {items.map((Item, i) => (
        <Frame
          key={i}
          ref={(el) => {
            frameRefs.current[i] = el;
          }}
          $active={i === step}
          style={{ transform: `scale(${scale})` }}
        >
          <Item style={fixedHeightSteps.includes(i) ? NATURAL_HEIGHT_STYLE : AUTO_HEIGHT_STYLE} />
        </Frame>
      ))}
    </Box>
  );
}
