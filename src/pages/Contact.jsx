import { motion } from 'framer-motion';

 
    const datas=[
        {
            id: 1,
            name: "Person1",
            position: "Role1",
            contact:""
        },
        {
            id: 2,
            name: "Person2",
            position: "Role2",
            contact:""
        },
        {
            id: 3,
            name: "Person3",
            position: "Role3",
            contact:""
        },
        {
            id: 4,
            name: "Person4",
            position: "Role4",
            contact:""
        },
        {
            id: 5,
            name: "Person5",
            position: "Role5",
            contact:""
        },
        {
            id: 6,
            name: "Person6",
            position: "Role6",
            contact:""
        },
        {
            id: 7,
            name: "Person7",
            position: "Role7",
            contact:""  
        }
    ]

    const containerVariants = {
    hidden: { opacity: 0 },
     visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};
 
    const itemVariants = {
     hidden: { y: 50, opacity: 0 },   
     visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    },
  },
};

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Members</h2>
      
       
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}  
      >
        {datas.map((data) => (
                <motion.div key={data.id} className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg shadow-md text-center border-2 border-transparent hover:border-white transition-colors duration-300  ">
                    <img
                        src="https://ui-avatars.com/api/?name=Person&background=0D8ABC&color=fff"
                        alt="Person"
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{data.name}</h3>
                    <p className="text-gray-400 mb-4">{data.position}</p>
                    <a href={`tel:${data.contact}`} className="text-blue-400 hover:underline"></a>
                
                    <a
                        href={data.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="text-blue-500 hover:text-blue-700 inline"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                        </svg>
                    </a>
                </motion.div>
            ))}
      </motion.div>
    </div>
  );
};




export default Contact;

