import React from 'react';
import Timeline from './TimeLine.jsx';
import AboutSection from './About.jsx';
import Prize from './Price.jsx';
import Contact from './Contact.jsx';

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
      <div>
        <Prize />
      </div>
      <dv>
        <Contact />
      </dv>
    </div>
  );
};

export default HomePage;