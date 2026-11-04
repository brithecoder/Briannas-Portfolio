import './App.css'
import AppContainer from './Components/AppContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CaseStudyPage } from './Components/CaseStudyPage'
import { PersonalJourneyPage } from './Components/PersonalJourneyPage';


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AppContainer />} />
      <Route path="/projectPage/:slug" element={<CaseStudyPage />} />
      <Route path="/trajectory" element={<PersonalJourneyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
