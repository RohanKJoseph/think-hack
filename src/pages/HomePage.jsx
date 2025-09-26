import React from 'react';

// The content for your "About" section
const AboutSection = () => (
  <section id="about" className='h-screen bg-black flex flex-col items-center justify-center p-4'>
    <div className='text-center'>
      <h3 className='text-white text-4xl font-bold mb-8'>
        About Tink Hack 2.0
      </h3>
      <div className='max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg p-6'>
        <p className='text-gray-200 text-lg leading-relaxed'>
          TinkerHub MEC's overnight Hackathon, Kerala's inaugural AI-based event, promotes student expertise and explores Generative AI. This innovative platform unites technology and innovation, fostering diverse solutions in various fields.
        </p>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    // pointer-events-auto is needed here to allow scrolling the page
    <div className="pointer-events-auto">
      {/* --- HERO SECTION --- */}
      <div className="h-screen flex items-center justify-center">
        <h1 className='text-white text-5xl font-bold text-center'>
          Tink Hack 2.0
        </h1>
      </div>
      
      {/* --- ABOUT SECTION --- */}
      {/* The About content is now part of the HomePage */}
      <AboutSection />
    </div>
  );
};

export default HomePage;