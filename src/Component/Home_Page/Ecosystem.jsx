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
    link: "https://amerifusionconsulting.com"
  },
  { 
    src: eco3, 
    alt: "Amerifusion Govcon",
    bgColor: "#FFFFFF",
    scale: "scale-[1.6]",
    link: "https://amerifusiongovcon.com/"
  },
  { 
    src: eco4, 
    alt: "ASL",
    bgColor: "#f0f2ff",
    scale: "scale-100",
    link: "https://abacoll.com/"
  },
  { 
    src: eco5, 
    alt: "Olog",
    bgColor: "#FFFFFF",
    scale: "scale-100",
    link: "https://olog.me/"
  }
];

function Ecosystem() {
  return (
    <div className="bg-[#eddbd2] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Title on the right for large screens */} 
        <div className="lg:w-1/3 mb-12 lg:mb-0 text-center lg:text-center lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-black">My Projects</h2>
        </div>

        {/* Static grid of logos */} 
        <div className="grid grid-cols-1 gap-6 md:w-1/2 md:order-1 lg:grid-cols-2 sm:grid-cols-1">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[30px] shadow-custom flex items-center justify-center h-40 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                backgroundColor: logo.bgColor,
                border: logo.bgColor === "#FFFFFF" ? "1px solid #E5E7EB" : "none"
              }}
            >
              <div className={`w-full h-full flex items-center justify-center p-4 ${logo.scale}`}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[80%] max-h-[80%] object-contain"
                  style={{
                    filter: logo.bgColor === "#1B1F31" ? "brightness(1)" : "none"
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;