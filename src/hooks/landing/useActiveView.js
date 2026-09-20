import { useCallback, useEffect, useState } from 'react';
import { NAV_MARKS } from '../../components/landing/landingData';

// 마커 섹션들의 위치로부터 현재 활성 네비 항목을 계산한다.
export function useActiveView() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const sync = () => {
      let next = NAV_MARKS[0].view;
      NAV_MARKS.forEach((mark) => {
        const el = document.getElementById(mark.id);
        if (el && el.getBoundingClientRect().top <= 140) next = mark.view;
      });
      setView((prev) => (prev === next ? prev : next));
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  const goView = useCallback((id) => {
    const mark = NAV_MARKS.find((m) => m.view === id);
    const el = mark && document.getElementById(mark.id);
    if (!el) return;
    const y = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }, []);

  return { view, goView };
}
