import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Navbar from '../components/header/Navbar'

const App = () => {

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/myPortfolio" element={ <Home/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/myPortfolio/about" element={ <About/> } />
        <Route path="/myPortfolio/contact" element={ <Contact/> } />
        <Route path="/myPortfolio/projects"element={<Projects/>}/>
      </Routes> 
     
    </>
  )
}

export default App
