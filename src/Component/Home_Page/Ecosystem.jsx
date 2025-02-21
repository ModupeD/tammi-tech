import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import eco1 from '../../assets/optimized/Amerifusion.jpg';
import eco3 from '../../assets/optimized/Amerifusion-Govecon.jpg';
import eco4 from '../../assets/optimized/asl.png';
import eco5 from '../../assets/optimized/olog.png';
import nwp from '../../assets/optimized/nwp-logo.png';
import travelAdvisor from '../../assets/optimized/travel_advisor.png';
import ologVideo from '../../assets/optimized/olog.mov';
import PropTypes from 'prop-types';
// Add imports for NWP posters
import nwpMen from '../../assets/optimized/nwp-men.png';
import nwpWomen from '../../assets/optimized/nwp-women.jpg';
import nwpMain from '../../assets/optimized/NWP.png';
import nwpRealTalk from '../../assets/optimized/MEN-real-talk.png';
import nwpVirtual from '../../assets/optimized/NWP-VIRTUAL.png';
import nwpVirtuaHangout from '../../assets/optimized/nwphangout.png';
// Add NWP poster images
const nwpPosters = [
  nwpMain,
  nwpRealTalk,
  nwpVirtual,
  nwpMen,
  nwpWomen,
  nwpVirtuaHangout
];

const logos = [
  { 
    src: eco1, 
    alt: "Amerifusion",
    bgColor: "#161e3e",
    scale: "scale-[1.6]",
    link: "https://amerifusionconsulting.com",
    description: "Software Engineer"
  },
  { 
    src: eco3, 
    alt: "Amerifusion Govcon",
    bgColor: "#FFFFFF",
    scale: "scale-[1.6]",
    link: "https://amerifusiongovcon.com/",
    description: "Software Engineer"
  },
  { 
    src: eco4, 
    alt: "ASL",
    bgColor: "#f0f2ff",
    scale: "scale-100",
    link: "https://abacoll.com/",
    description: "Software Engineer"
  },
  { 
    src: eco5, 
    alt: "Olog",
    bgColor: "#FFFFFF",
    scale: "scale-100",
    link: "https://olog.me/",
    description: "UX Engineer"
  },
  { 
    src: nwp, 
    alt: "NWP",
    bgColor: "#3e2e99",
    scale: "scale-100",
    description: "Brand Designer",
    type: "nwp"
  },
  { 
    src: travelAdvisor, 
    alt: "Travel Advisor Logo",
    bgColor: "white",
    scale: "scale-[1.6]",
    link: "https://github.com/ModupeD/travel-advisor/",
    description: "Software Engineer",
    type: "travelAdvisor"
  }
];

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    if (project.alt === "NWP") {
      return (
        <div className="space-y-6">
          <h4 className="font-semibold text-xl">Poster Designs</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {nwpPosters.map((poster, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                <img 
                  src={poster}
                  alt={`NWP Poster ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Project Overview</h4>
            <p className="text-gray-700">
              Designed various promotional materials and brand assets for NWP, including posters, banners, and social media content.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {['Canva', 'Figma'].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (project.alt === "bloomyLogo") {
      return (
        <div className="space-y-6">
          <h4 className="font-semibold text-xl">Poster Designs</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {nwpPosters.map((poster, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                <img 
                  src={poster}
                  alt={`NWP Poster ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Project Overview</h4>
            <p className="text-gray-700">
              Designed various promotional materials and brand assets for NWP, including posters, banners, and social media content.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {['Canva', 'Figma'].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="space-y-6">
        <div className="max-w-xl mx-auto mb-6">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto rounded-xl shadow-lg"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          >
            <source src={ologVideo} type="video/mp4" />
          </video>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-3">Project Overview</h4>
          <p className="text-gray-700 mb-4">
            Olog Reader is a platform that enables readers to upload books as PDFs so artificial intelligence can read it to them:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Designed and developed a visually appealing landing page which enhanced user engagement.</li>
            <li>Utilizing OAuth to create a secure login system for Olog Reader.</li>
            <li>Resolved bugs using Git retrieval techniques.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {['React Native', 'Node.js', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
        style={{ alignItems: 'flex-start', paddingTop: `${window.scrollY + 100}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl w-full max-w-3xl mx-auto"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">{project.alt}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    alt: PropTypes.string.isRequired,
  }).isRequired
};

const ProjectCard = ({ logo, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CardContent = () => (
    <>
      <div 
        className="aspect-square p-8 flex flex-col items-center justify-center"
        style={{ 
          backgroundColor: logo.bgColor,
          border: logo.bgColor === "#FFFFFF" ? "1px solid #E5E7EB" : "none"
        }}
      >
        <div className={`w-full h-full flex items-center justify-center ${logo.scale}`}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full text-white">
          <h3 className="font-bold text-lg mb-1">{logo.alt}</h3>
          <p className="text-sm text-white/90">{logo.description}</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {(logo.alt === "Olog" || logo.alt === "NWP") ? (
        <motion.div
          className="group relative rounded-[30px] shadow-lg overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          onClick={() => setIsModalOpen(true)}
        >
          <CardContent />
        </motion.div>
      ) : (
        <motion.a
          href={logo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-[30px] shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <CardContent />
        </motion.a>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={logo}
      />
    </>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    scale: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

function Ecosystem() {
  return (
    <section className="bg-[#eddbd2] py-20 flex justify-center column">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#606060] max-w-2xl mx-auto">
            Explore some of the innovative projects I&apos;ve contributed to, 
            showcasing my expertise in building scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {logos.map((logo, index) => (
            <ProjectCard key={index} logo={logo} index={index} flex justify-center/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;