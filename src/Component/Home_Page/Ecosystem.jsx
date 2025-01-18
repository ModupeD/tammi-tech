import { motion } from 'framer-motion';
import eco1 from '../../assets/optimized/Amerifusion.jpg';
import eco3 from '../../assets/optimized/Amerifusion-Govecon.jpg';
import eco4 from '../../assets/optimized/asl.png';
import eco5 from '../../assets/optimized/olog.png';

const logos = [
  { 
    src: eco1, 
    alt: "Amerifusion",
    bgColor: "#161e3e",
    scale: "scale-[1.6]",
    link: "https://amerifusionconsulting.com",
    description: "Enterprise Consulting Platform"
  },
  { 
    src: eco3, 
    alt: "Amerifusion Govcon",
    bgColor: "#FFFFFF",
    scale: "scale-[1.6]",
    link: "https://amerifusiongovcon.com/",
    description: "Government Contracting Solutions"
  },
  { 
    src: eco4, 
    alt: "ASL",
    bgColor: "#f0f2ff",
    scale: "scale-100",
    link: "https://abacoll.com/",
    description: "Engineering and Management Consulting Services"
  },
  { 
    src: eco5, 
    alt: "Olog",
    bgColor: "#FFFFFF",
    scale: "scale-100",
    link: "https://olog.me/",
    description: "Self improvement Platform"
  }
];

const ProjectCard = ({ logo, index }) => {
  return (
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
    </motion.a>
  );
};

function Ecosystem() {
  return (
    <section className="bg-[#eddbd2] py-20">
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
            Explore some of the innovative projects I've contributed to, 
            showcasing my expertise in building scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <ProjectCard key={index} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;