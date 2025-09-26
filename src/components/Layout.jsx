import React from 'react';
import { Outlet } from 'react-router-dom';
import PixelBlast from '../styles/body-bg';  
import Header from '../components/Header';    

const Layout = () => {
  return (
    <div className='bg-black'>
      <div className="fixed inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          liquid={true}
          enableRipples={true}
        
        />
      </div>
      <div className="relative z-20 pointer-events-auto">
        <Header />
      </div>
      <main className="relative z-10 pointer-events-none">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;