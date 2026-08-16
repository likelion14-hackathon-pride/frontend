import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import LoadingScreen from './pages/common/LoadingScreen';
import { MemberProvider } from './context/member/MemberContext';
import MemberHomePage from './pages/member/MemberHomePage';
import MemberTasksPage from './pages/member/MemberTasksPage';
import MemberShell from './components/member/layout/MemberShell';
import MemberAskPage from './pages/member/MemberAskPage';
import MemberHandbookPage from './pages/member/MemberHandbookPage';
import HandbookCompanyView from './components/member/handbook/HandbookCompanyView';
import HandbookProjectView from './components/member/handbook/HandbookProjectView';
import OwnerOnboardingPage from './pages/owner/OwnerOnboardingPage';
import OwnerDashboardPage from './pages/owner/OwnerDashboardPage';

const SPLASH_DURATION = 1800; // ms, 필요하면 조절

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
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/owner/onboarding" element={<OwnerOnboardingPage />} />
        <Route path="/owner" element={<OwnerDashboardPage />} />
        {/* 실제 화면 완성되면 교체 */}
        <Route path="/member" element={<div>팀원 화면</div>} />
        <Route path="/owner" element={<div>오너 화면</div>} />

        <Route
          path="/member/*"
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

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
