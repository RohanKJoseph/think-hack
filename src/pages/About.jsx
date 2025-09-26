import React from 'react';

const About = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center p-4 pointer-events-auto'>
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
};

export default About;