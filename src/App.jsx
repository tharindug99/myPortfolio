import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Navbar from '../components/header/Navbar'

const App = () => {

  return (
    <div className='bg-orange-500 '>
    <Navbar/>
     <Routes>
        <Route path="/myPortfolio" element={ <Home/> } />
        <Route path="/" element={ <Home/> } />
        
      </Routes> 
     
    </div>
  )
}

export default App
