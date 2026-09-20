import { useCallback, useEffect, useState } from 'react';

// 스크롤 진입 감지. 반환된 ref 콜백을 요소에 걸어두면 화면에 들어올 때 data-revealed가 붙는다.
// 옵저버는 useEffect가 아니라 useState의 lazy initializer로 만든다 — 커밋 단계에서 각 요소의
// ref 콜백이 호출될 때 이미 존재해야 한다. useEffect 안에서 만들면 ref가 먼저 붙고(커밋)
// 옵저버는 그 다음(패시브 이펙트)에 생기기 때문에 observe() 호출이 통째로 스킵된다.
// StrictMode의 개발 모드 mount→unmount→remount 시뮬레이션이 우연히 이 문제를 가려서 dev에서는
// 멀쩡해 보이지만, 프로덕션 빌드는 그 재시도가 없어 전부 opacity:0로 남는다.
export function useReveal() {
  const [observer] = useState(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.dataset.revealed = 'true';
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
      )
  );

  useEffect(() => () => observer.disconnect(), [observer]);

  return useCallback((node) => {
    if (node) observer.observe(node);
  }, [observer]);
}
