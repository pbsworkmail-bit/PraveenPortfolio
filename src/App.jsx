import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import CaseStudy from './pages/Home'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/worktual" element={<CaseStudy />} />
      </Routes>
    </HashRouter>
  )
}
