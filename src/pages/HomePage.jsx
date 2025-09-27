import React from 'react';
import Timeline from './TimeLine.jsx';
import AboutSection from './About.jsx';
import Prize from './Price.jsx';
import Contact from './Contact.jsx';
import Footer from '../components/Footer.jsx';
import Shuffle from '../styles/Shuffle.jsx';

const HomePage = () => {
  return (
    <div className="pointer-events-auto">
      <div className="h-screen flex flex-col items-center justify-center gap-4">
  <h1 className='text-white text-5xl font-bold text-center'>
    <Shuffle
  text="Tink Hack 3.0"
  shuffleDirection="right"
  duration={0.35}
  animationMode="evenodd"
  shuffleTimes={1}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
/>
    
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