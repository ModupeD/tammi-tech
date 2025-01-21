import React from 'react';
import logo from '../../assets/optimized/pinlog.png';
import logo2 from '../../assets/optimized/tealslog.png';
import logouc from '../../assets/optimized/uc-logo.png';
const Awards = () => {
    const awards = [
      {
        title: "Academic Excellence award",
        logo: logouc,
        alt: "UC logo"
      },
      {
        title: "Microsoft Teals",
        logo: logo2,
        alt: "Microsoft Teals logo"
      },
      {
        title: "Pinterest Apprenticeship",
        logo: logo,
        alt: "Pinterest logo"
      }
    ];
  
    return (
        <div className="w-full overflow-hidden bg-[#c35661] py-4">
          <div className="relative flex">
            <div className="flex animate-scroll-infinite">
              {[...awards, ...awards, ...awards].map((award, index) => (
                <div 
                  key={index} 
                  className="flex items-center min-w-[300px] justify-start mx-4 shrink-0"
                >
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <img 
                      src={award.logo} 
                      alt={award.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white whitespace-nowrap text-sm">
                    {award.title}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex animate-scroll-infinite" aria-hidden="true">
              {[...awards, ...awards, ...awards].map((award, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="flex items-center min-w-[300px] justify-start mx-4 shrink-0"
                >
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <img 
                      src={award.logo} 
                      alt={award.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white whitespace-nowrap text-sm">
                    {award.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes scroll-infinite {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-scroll-infinite {
              animation: scroll-infinite 30s linear infinite;
            }
          `}</style>
        </div>
      );
    };
    
    export default Awards;