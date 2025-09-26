import React from 'react';
import Timeline from '../components/TimeLine';
import AboutSection from './About.jsx';

const HomePage = () => {
  return (
    <div className="pointer-events-auto">
      <div className="h-screen flex items-center justify-center">
        <h1 className='text-white text-5xl font-bold text-center'>
          Tink Hack 2.0
        </h1>
      </div> 
      <div>
        <AboutSection />
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;