import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import { MemberProvider } from './context/member/MemberContext';
import MemberHomePage from './pages/member/MemberHomePage';
import MemberTasksPage from './pages/member/MemberTasksPage';
import MemberShell from './components/member/layout/MemberShell';
import MemberAskPage from './pages/member/MemberAskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/owner" element={<div>오너 화면</div>} />

        <Route path="/member/*" element={<MemberProvider><Outlet /></MemberProvider>}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<MemberHomePage />} />
          <Route path="tasks" element={<MemberTasksPage />} />
          <Route path="ask" element={<MemberAskPage />} />
          <Route path="handbook/*" element={<MemberShell screenTitle="Handbook">Handbook 준비중</MemberShell>} />
        </Route>

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;