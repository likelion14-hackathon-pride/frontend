import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { ROLE } from './apis/constants';
import { AuthProvider } from './context/AuthContext';
import { MemberProvider } from './context/member/MemberContext';
import { RedirectIfAuthenticated, RequireAuth, RequireRole } from './routes/guards';

import LoginPage from './pages/auth/LoginPage';
import LoadingScreen from './pages/common/LoadingScreen';
import MemberHomePage from './pages/member/MemberHomePage';
import MemberTasksPage from './pages/member/MemberTasksPage';
import MemberAskPage from './pages/member/MemberAskPage';
import MemberHandbookPage from './pages/member/MemberHandbookPage';
import HandbookCompanyView from './components/member/handbook/HandbookCompanyView';
import HandbookProjectView from './components/member/handbook/HandbookProjectView';
import OwnerOnboardingPage from './pages/owner/OwnerOnboardingPage';
import OwnerDashboardPage from './pages/owner/OwnerDashboardPage';

const SPLASH_DURATION = 1800; // ms, 필요하면 조절

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        }
      />

      <Route element={<RequireAuth />}>
        <Route element={<RequireRole role={ROLE.OWNER} />}>
          <Route path="/owner/onboarding" element={<OwnerOnboardingPage />} />
          <Route path="/owner" element={<OwnerDashboardPage />} />
        </Route>

        <Route element={<RequireRole role={ROLE.MEMBER} />}>
          {/* MemberProvider 는 한 번만 감싼다. Tasks 에서 Ask SAI 로 넘길 때
              질문이 이동을 넘어 살아 있어야 하기 때문이다. */}
          <Route
            path="/member"
            element={
              <MemberProvider>
                <Outlet />
              </MemberProvider>
            }
          >
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<MemberHomePage />} />
            <Route path="tasks" element={<MemberTasksPage />} />
            <Route path="ask" element={<MemberAskPage />} />
            <Route path="handbook" element={<MemberHandbookPage />}>
              <Route index element={<Navigate to="company" replace />} />
              <Route path="company" element={<HandbookCompanyView />} />
              <Route path="project/:projectId" element={<HandbookProjectView />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      {/* AuthProvider 는 라우터 안에 있어야 세션이 끊겼을 때 사유와 함께 이동시킬 수 있다. */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
