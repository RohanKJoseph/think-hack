import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, description, position }) => {
  const isLeft = position === 'left';

 
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
 
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
   
      <div className="hidden md:block w-5/12"></div>

 
      <div className="z-10 flex items-center bg-sky-500 shadow-xl w-5 h-5 rounded-full">
        <div className="w-4 h-4 bg-white rounded-full mx-auto"></div>
      </div>
      
 
      <motion.div
        className={`w-full md:w-5/12 bg-gray-200/20 p-4 rounded-lg shadow-md backdrop-blur-sm ${isLeft ? 'md:text-right' : 'md:text-left'}`}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mb-2">{date}</p>
        <p className="text-gray-300">{description}</p>
      </motion.div>

    </div>
  );
};

export default TimelineItem;