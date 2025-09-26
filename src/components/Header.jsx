import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 z-20 bg-black/50 backdrop-blur-sm">
      
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-xl">
          <span className="font-bold">Tinker</span>
          <span className="font-light">Hub</span>
          <span className="block text-xs font-semibold">MEC</span>
        </a>

        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="/" className="hover:text-blue-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="/#about" className="hover:text-blue-300 transition-colors">About</a>
            </li>
            <li>
                <a href="/#timeline" className="hover:text-blue-300 transition-colors">Timeline</a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-blue-300 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;