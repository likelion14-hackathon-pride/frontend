import { useCallback, useEffect, useRef, useState } from 'react';
import { CHAT_CUES } from '../../components/landing/landingData';

// 히어로 챗 루프: 0 idle → 1 생각 → 2 질문 → 3 타이핑 → 4 답변, 이후 다음 scope로.
export function useChatLoop(scopeCount) {
  const [step, setStep] = useState(0);
  const [scope, setScope] = useState(0);
  const timer = useRef(null);
  const paused = useRef(false);

  useEffect(() => {
    let current = step;

    const schedule = () => {
      const delay = CHAT_CUES[current] - (current === 0 ? 0 : CHAT_CUES[current - 1]);
      timer.current = setTimeout(() => {
        if (paused.current) return;
        if (current >= 4) {
          current = 0;
          setStep(0);
          timer.current = setTimeout(() => {
            setScope((s) => (s + 1) % scopeCount);
            schedule();
          }, 640);
          return;
        }
        current += 1;
        setStep(current);
        schedule();
      }, delay);
    };

    schedule();
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, scopeCount]);

  const pickScope = useCallback((index) => {
    clearTimeout(timer.current);
    setStep(0);
    setScope(index);
  }, []);

  return { step, scope, pickScope };
}
