import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import OwnerOnboardingPage from './pages/owner/OwnerOnboardingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/owner/onboarding" element={<OwnerOnboardingPage />} />
        {/* 실제 화면 완성되면 교체 */}
        <Route path="/owner" element={<div>오너 화면</div>} />
        <Route path="/member" element={<div>팀원 화면</div>} />

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
