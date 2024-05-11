import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import Navbar from '../components/header/Navbar';

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Routes>
        <Route path="/myPortfolio" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes> 
    </div>
  );
}

export default App;
