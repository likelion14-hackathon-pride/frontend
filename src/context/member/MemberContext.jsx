import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberContext = createContext(null);

export function MemberProvider({ children }) {
  const navigate = useNavigate();

  const value = useMemo(
    () => ({
      goToHome: () => navigate('/member/home'),
      goToAsk: () => navigate('/member/ask'),
      goToTasks: () => navigate('/member/tasks'),
      goToHandbook: (path = 'company') => navigate(`/member/handbook/${path}`),
      // TODO: SAI 요약 수치(slackMessages, turnedIntoTasks, waitingAnswer) 등
      // 서버에서 가져와서 여기에 얹기 (apis/ 사용)
    }),
    [navigate]
  );

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>;
}

export function useMemberNavigation() {
  const ctx = useContext(MemberContext);
  if (!ctx) throw new Error('useMemberNavigation must be used within MemberProvider');
  return ctx;
}