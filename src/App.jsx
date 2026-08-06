import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import OnboardingOwner from './pages/OnboardingOwner'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding/owner" element={<OnboardingOwner />} />
    </Routes>
  )
}

export default App