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
        <Route path="/Portfolio" element={ <Home/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="projects"element={<Projects/>}/>
      </Routes> 
     
    </>
  )
}

export default App
