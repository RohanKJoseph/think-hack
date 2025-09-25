import React from 'react';
import Header from '../components/Header';
import About from './About';
import PixelBlast from '../styles/body-bg.jsx';

const HomePage = () => {
  return (
    <div className='bg-black'>
      
 
      <div className="fixed inset-0 z-0 h-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples={true}
          liquid={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
 
      <div className="relative z-10 pointer-events-none">  
      
        <div className="pointer-events-auto">
          <Header /> 
        </div>
        
        <div className="h-screen flex items-center justify-center">
          <h1 className='text-white text-5xl font-bold text-center'>
            Think Hack 2.0
          </h1>
        </div>

        <div className="pointer-events-auto">
          <About />
        </div>

      </div>

    </div>
  );
};

export default HomePage;