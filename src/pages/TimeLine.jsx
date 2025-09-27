 import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem.jsx';

 
const timelineData = [
  {
    date: '6pm, 5th March',
    title: 'Registrations Open',
    description: 'TinkHack registration opens. Students can register via Devfolio by submitting their project proposals.',
  },
  {
    date: '6pm, 17th March',
    title: 'Registrations Close',
    description: 'Teams must finalize and submit their project ideas before the deadline.',
  },
  {
    date: '9pm, 18th March',
    title: 'Shortlist Announcement',
    description: 'After careful evaluation, the top teams are selected and announced, moving one step closer to victory.',
  },
  {
    date: '3pm, 22nd March',
    title: 'Hackathon Kickoff',
    description: 'The hackathon officially begins as participants dive into 24 hours of innovation, collaboration, and problem-solving.',
  },
    {
    date: '3pm, 23rd March',
    title: 'Hackathon Ends',
    description: 'The coding marathon concludes as teams submit their final projects and prizes are given, marking the end of an intense and inspiring journey.',
    },
];

const Timeline = () => {
  return (
    <div id='timeline' className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-white text-center mb-12 underline">Project Timeline</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        
     
        <motion.div 
          className="border-2-2 absolute border-opacity-20 border-gray-400 h-full border" 
          style={{ left: '50%' }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        ></motion.div>

 
        {timelineData.map((item, index) => (
          <TimelineItem 
            className="bg-sky-200/20"
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            position={index % 2 === 0 ? 'left' : 'right'} 
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;