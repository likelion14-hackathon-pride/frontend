import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤로 고정된(sticky) 스테이지의 진행률 → 활성 인덱스.
 * wrapperRef가 걸린 요소는 `steps × 100vh` 높이를 가져야 하며, 그 안에서의 스크롤 진행도가 화면을 고른다.
 */
export function useStageIndex(steps) {
  const wrapperRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const span = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(0.9999, Math.max(0, -rect.top / span));
      const next = Math.min(steps - 1, Math.floor(progress * steps));
      setIndex((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [steps]);

  return { wrapperRef, index };
}
