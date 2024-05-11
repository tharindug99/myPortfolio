import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { AiOutlineArrowUp } from 'react-icons/ai';

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
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuad'
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
        {/* Mobile Menu Toggle Button (Right-aligned) */}
        <div className="lg:hidden md:hidden flex items-center justify-end font-normal">
          <button
            className="text-2xl pr-4" // Adjusted padding
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
        {/* Mobile Menu (Right-aligned) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col mt-4 ">
            <ScrollLink className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointer" to="home" spy={true} smooth={true} offset={-70}>Home</ScrollLink>
            <ScrollLink className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointer" to="about" spy={true} smooth={true} offset={-70}>About</ScrollLink>
            <ScrollLink className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointer" to="projects" spy={true} smooth={true} offset={-70}>My Projects</ScrollLink>
            <ScrollLink className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-200 transition border-b2 cursor-pointer" to="contact" spy={true} smooth={true} offset={-70}>Contact Me</ScrollLink>
          </div>
        )}
        {/* Desktop Menu (Left-aligned) */}
        <div className="lg:flex md:flex hidden lg:justify-end">
          <ul className="lg:flex md:flex lg:space-x-4 md:space-x-4 lg:items-center">
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointer">
              <ScrollLink to="home" spy={true} smooth={true} offset={-70}>Home</ScrollLink>
            </li>
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointer">
              <ScrollLink to="about" spy={true} smooth={true} offset={-70}>About</ScrollLink>
            </li>
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointer">
              <ScrollLink to="projects" spy={true} smooth={true} offset={-70}>My Projects</ScrollLink>
            </li>
            <li className="my-2 py-1 border-b-2 border-slate-800 hover:text-cyan-500 hover:border-cyan-500 transition border-b2 cursor-pointer">
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70}>Contact Me</ScrollLink>
            </li>
          </ul>
        </div>
        <button
          className={`${
            isScrolled ? 'block' : 'hidden'
          } fixed bottom-4 right-4 bg-cyan-500 text-white py-2 px-4 rounded-full h-12 w-12 shadow-md`}
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
