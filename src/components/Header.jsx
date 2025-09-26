import React from 'react';

function Header() {
  return (
    // 1. Apply all positioning and styling to the main header tag.
    // 'fixed' makes it stick to the top. 'w-full' makes it span the full width.
    // 'z-20' ensures it stays on top of other content.
    <header className="fixed top-0 left-0 w-full p-4 z-20 bg-black/50 backdrop-blur-sm">
      
      {/* 2. The container div centers the content and handles spacing. */}
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="/" className="text-white text-xl">
          <span className="font-bold">Tinker</span>
          <span className="font-light">Hub</span>
          <span className="block text-xs font-semibold">MEC</span>
        </a>

        {/* Navigation Links */}
        {/* 3. Use <a> tags for proper navigation and accessibility. */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="/" className="hover:text-blue-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="/#about" className="hover:text-blue-300 transition-colors">About</a>
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