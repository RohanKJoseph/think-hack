import ScrollStack, { ScrollStackItem } from '../styles/ScrollList.jsx';

const AboutSection = () => (
  
  <section id="about" className='bg-transparent p-4'>
    <div className='text-center text-white'>
      <h1 className='text-4xl font-bold mb-6 underline'>About Us</h1>
      <ScrollStack useWindowScroll={true}>  
        <ScrollStackItem itemClassName="bg-sky-800/50 text-white">
          <h2 className='text-indigo-500 text-3xl'>Tinker Hub</h2>
          <p className='text-xs sm:text-lg'>Tinkerhub MEC, the Model Engineering College chapter of Tinkerhub, is a dynamic community fostering innovation and tech upskilling. The chapter hosts interactive sessions, hackathons, and workshops like Tinktank, GetSetWeb, and TinkHerHack to equip students with hands-on skills and industry insights. With our initiatives, we champion inclusivity and collaborative learning, inspiring students to explore and elevate their careers.</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-sky-800/50 text-white">
          <h2 className='text-indigo-500 text-3xl'>Tink Hack</h2>
          <p className='text-lg'> 
TinkerHub MEC's overnight Hackathon, Kerala's inaugural AI-based event, promotes student expertise and explores Generative AI. This innovative platform unites technology and innovation, fostering diverse solutions in various fields.</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  </section>
);

export default AboutSection;