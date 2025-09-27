import React, { useState, useEffect } from 'react';
import GradientText from '../styles/GradientText';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-50">  
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-white text-xl">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            className="text-2xl"
          >
            <span className="font-bold">Tinker</span>
            <span className="font-light">Hub</span>
            <span className="block text-xs font-semibold">MEC</span>
          </GradientText>
        </a>

       
        <nav className="hidden md:flex">  
          <ul className="flex items-center space-x-6 text-white">
            <li><a href="/" className="hover:text-blue-300 transition-colors">Home</a></li>
            <li><a href="/#about" className="hover:text-blue-300 transition-colors">About</a></li>
            <li><a href="/#timeline" className="hover:text-blue-300 transition-colors">Timeline</a></li>
            <li><a href="/#price" className="hover:text-blue-300 transition-colors">Prizes</a></li>
            <li><a href="/#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
          </ul>
        </nav>

     
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-white text-3xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

 
      <div 
        className={`
          md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-8
          transition-transform duration-300 ease-in-out
          bg-black/80 backdrop-blur-lg  
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
       
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-5 right-5 text-white text-4xl"
        >
          <HiX />
        </button>

        <a href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-bold">Home</a>
        <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-bold">About</a>
        <a href="/#timeline" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-bold">Timeline</a>
        <a href="/#price" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-bold">Prizes</a>
        <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-bold">Contact</a>
      </div>
    </header>
  );
}

export default Header;