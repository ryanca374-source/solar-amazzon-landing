import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
    </Routes>
  )
}
