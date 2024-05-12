import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import Navbar from '../components/header/Navbar';
import heroimg from '../components/images/Tharindu.jpg';

const App = () => {
  return (
    <div className='bg-transparent'>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${heroimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      ><Navbar />
      <Routes>
        <Route path="/myPortfolio" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes> 
      </div>
      
    </div>
  );
}

export default App;
