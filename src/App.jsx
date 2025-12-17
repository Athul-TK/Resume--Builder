
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from './pages/ResumeGenerator'
import Forms from './pages/Forms'
import History from './pages/History'
import Pnf from './pages/Pnf'

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
