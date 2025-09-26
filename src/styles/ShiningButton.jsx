 import React from 'react';

const GlazeButton = ({ children, className = '' }) => {
  return (
    <button
      className={`
        px-8 py-4 font-bold rounded-xl text-white
        bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
        bg-[length:200%_auto] 
        hover:bg-[position:right_center] 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-all duration-500 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GlazeButton;