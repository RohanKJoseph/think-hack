import React from 'react';
import Timeline from './TimeLine.jsx';
import AboutSection from './About.jsx';
import Prize from './Price.jsx';
import Contact from './Contact.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <div className="pointer-events-auto">
      <div className="h-screen flex flex-col items-center justify-center gap-4">
  <h1 className='text-white text-5xl font-bold text-center'>
    Tink Hack 3.0
  </h1>
  <div className='text-white text-2xl font-semibold text-center'>
    <a href='https://tinkhack-mec.devfolio.co/projects'><button  className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors'>
      Our Work
    </button></a>
  </div>
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
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;