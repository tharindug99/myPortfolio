import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {AiOutlineArrowUp} from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
      transition: 'background-color 0.3s ease-in-out'
    }}>
      <div className="h-10vh flex flex-col 
      lg:flex-row lg:py-5 justify-between z-50 bg-slate-300 text-cyan-900  px-20 py-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold px--4">TNG</span>
          <div className="lg:hidden md:hidden flex items-center justify-end font-normal">
          <button
            className="text-2xl pl-24"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
        </div>
        {/* Mobile Menu Toggle Button (Right-aligned) */}
        
        {/* Mobile Menu (Right-aligned) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col mt-4 ">
            <Link className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointerspy={true} smooth={true}"  to="/" >Home</Link>
            <Link className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointerspy={true} smooth={true}" to="/myPortfolio/About">About</Link>
            <Link className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointerspy={true} smooth={true}" to="/myPortfolio/Projects">My Projects</Link>
            <Link className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointerspy={true} smooth={true}" to="/myPortfolio/Contact">Contact Me</Link>
          </div>
        )}
        {/* Desktop Menu (Left-aligned) */}
        <div className="lg:flex md:flex hidden lg:justify-end">
          <ul className="lg:flex md:flex lg:space-x-4 md:space-x-4 lg:items-center">
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointerspy={true} smooth={true}  ">
              <Link spy={true} smooth={true} to="/">Home</Link>
            </li>
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointerspy={true} smooth={true}  ">
              <Link spy={true} smooth={true} to="/myPortfolio/About">About</Link>
            </li>
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointerspy={true} smooth={true}  ">
              <Link spy={true} smooth={true} to="/myPortfolio/Projects">My Projects</Link>
            </li>
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointerspy={true} smooth={true}  ">
              <Link spy={true} smooth={true} to="/myPortfolio/Contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <button
  className={`${
    isScrolled ? 'block' : 'hidden'
  } fixed bottom-4 right-4 bg-cyan-500 text-white py-2 px-4 rounded-full h-12 w-12 shadow-md`}
  onClick={scrollToTop}
>
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
