import { useCallback, useEffect, useRef } from 'react';

// 스크롤 진입 감지. 반환된 ref 콜백을 요소에 걸어두면 화면에 들어올 때 data-revealed가 붙는다.
export function useReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.dataset.revealed = 'true';
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    );
    return () => observerRef.current?.disconnect();
  }, []);

  return useCallback((node) => {
    if (node && observerRef.current) observerRef.current.observe(node);
  }, []);
}
