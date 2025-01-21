import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import home_frame from '../../assets/optimized/momo.png';
import mobile_frame from '../../assets/optimized/momo.png';

const FunFactsModal = ({ isOpen, onClose }) => {
  const funFacts = [
    "I'm originally from Nigeria 🇳🇬",
    "I enjoy working out during my free time 💪",
    "I'm passionate about mentoring other developers 👩‍💻",
    "I love traveling and experiencing new cultures ✈️"
  ];

  return (
    <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[30px] p-8 max-w-md w-full shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#171717] mb-6">Fun Facts About Me</h3>
            <ul className="space-y-4">
              {funFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-[#606060]"
                >
                  <span className="mr-2">•</span>
                  {fact}
                </motion.li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="mt-8 w-full py-3 px-6 rounded-full bg-gradient-to-b from-[#c35661] to-[#c35661] text-white font-bold hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#eddbd2]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <div className="md:hidden flex justify-center">
          <img src={mobile_frame} alt="Mobile frame" className="w-full h-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-16">
          <div className="flex-1 pr-0 lg:pr-10 max-w-[650px]">
            <div className="space-y-4">
              <h3 className="text-[20px] md:text-[28px] font-bold leading-[24px] text-[#171717] text-left">
                Hello
              </h3>
             
              <h1 className="text-[28px] md:text-[48px] font-extrabold leading-[40px] md:leading-[72px] text-[#171717] font-[Red Hat Display] text-left">
                I am an innovative full stack software engineer.
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://github.com/ModupeD"
                className="py-3 px-6 rounded-[30px] bg-gradient-to-b from-[#c35661] to-[#c35661] text-[16px] font-bold text-[#FFFDF9] w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{
                  boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                              22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                              13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                              6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                              1px 7px 15px 0px rgba(23, 23, 23, 0.05)`, 
                }}
              >
                Github
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center border-[2px] border-[#171717] rounded-[30px] p-[2px] hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
                style={{
                  height: '50px',
                  boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                              22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                              13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                              6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                              1px 7px 15px 0px rgba(23, 23, 23, 0.05)`,
                }}
              >
                <div className="w-full sm:w-[56px] h-full flex items-center justify-center bg-[#FFFDF9] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#171717"
                    className="w-8 h-8"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <img 
              src={home_frame} 
              alt="Home frame" 
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <FunFactsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HeroSection;