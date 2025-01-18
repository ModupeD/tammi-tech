import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Flutter', color: '#02569B' },
    { name: 'AWS', color: '#FF9900' }
  ];

  return (
    <div className="fixed inset-0 bg-[#eddbd2] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <motion.h1 
            className="text-4xl font-bold text-[#c35661] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading...
          </motion.h1>
          <motion.p 
            className="text-[#606060]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Preparing something awesome
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white px-4 py-2 rounded-full shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
              style={{
                border: `2px solid ${tech.color}`
              }}
            >
              <span className="font-medium" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;