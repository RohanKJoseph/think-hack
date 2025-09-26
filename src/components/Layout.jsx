import React from 'react';
import { Outlet } from 'react-router-dom';
import PixelBlast from '../styles/body-bg'; // Make sure path is correct
import Header from '../components/Header';   // Header lives here now

const Layout = () => {
  return (
    <div className='bg-black'>
      {/* The single background for the entire app */}
      <div className="fixed inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          liquid={true}
          enableRipples={true}
          // Add any other props
        />
      </div>

      {/* Header is part of the layout, so it appears on all pages */}
      <div className="relative z-20 pointer-events-auto">
        <Header />
      </div>

      {/* Wrapper for page content */}
      <main className="relative z-10 pointer-events-none">
        <Outlet /> {/* This is where HomePage or About will render */}
      </main>
    </div>
  );
};

export default Layout;