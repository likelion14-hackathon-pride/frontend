import { useEffect, useRef, useState } from 'react';

/**
 * 배경 팔레트 크로스페이드(오렌지 → 블루)를 스크롤 타깃에 맞춰 이징한다.
 * 0…1을 반환하며, 1이면 완전히 블루 상태.
 */
export function useBackgroundBlend(triggerIds) {
  const [blend, setBlend] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const computeTarget = () => {
      const vh = window.innerHeight;
      let value = 0;
      triggerIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const enter = (vh * 0.55 - rect.top) / (vh * 0.45);
        const exit = (rect.bottom - vh * 0.1) / (vh * 0.45);
        value = Math.max(value, Math.min(1, Math.max(0, Math.min(enter, exit))));
      });
      target.current = value;
      if (!raf.current) raf.current = requestAnimationFrame(tick);
    };

    const tick = () => {
      raf.current = 0;
      const delta = target.current - current.current;
      if (Math.abs(delta) > 0.002) {
        current.current += delta * 0.14;
        raf.current = requestAnimationFrame(tick);
      } else {
        current.current = target.current;
      }
      setBlend(Number(current.current.toFixed(3)));
    };

    computeTarget();
    window.addEventListener('scroll', computeTarget, { passive: true });
    window.addEventListener('resize', computeTarget);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
      window.removeEventListener('scroll', computeTarget);
      window.removeEventListener('resize', computeTarget);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return blend;
}
