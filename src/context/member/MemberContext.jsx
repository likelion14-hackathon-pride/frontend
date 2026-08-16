import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberContext = createContext(null);

const DEFAULT_PROFILE = {
  name: 'Minh',
  locationId: 'hanoi',
  role: 'Backend',
};

export function MemberProvider({ children }) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [pendingQuestion, setPendingQuestion] = useState(null);

  const value = useMemo(
    () => ({
      goToHome: () => navigate('/member/home'),
      goToAsk: () => navigate('/member/ask'),
      goToAskWithQuestion: (text) => {
        setPendingQuestion(text);
        navigate('/member/ask');
      },
      goToTasks: () => navigate('/member/tasks'),
      goToHandbook: (path = 'company') => navigate(`/member/handbook/${path}`),
      profile,
      setProfile,
      pendingQuestion,
      clearPendingQuestion: () => setPendingQuestion(null),
    }),
    [navigate, profile, pendingQuestion]
  );

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>;
}

export function useMemberNavigation() {
  const ctx = useContext(MemberContext);
  if (!ctx) throw new Error('useMemberNavigation must be used within MemberProvider');
  return ctx;
}
