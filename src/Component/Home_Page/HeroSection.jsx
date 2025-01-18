import home_frame from '../../assets/optimized/momo.png';
import mobile_frame from '../../assets/optimized/momo.png';

const HeroSection = () => {
  return (
    <div className="bg-[#eddbd2]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24"> {/* Container with consistent padding */}
        {/* For small screens: Mobile frame at the top */}
        <div className="md:hidden flex justify-center">
          <img src={mobile_frame} alt="Mobile frame" className="w-full h-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-16">
          {/* Text section */}
          <div className="flex-1 pr-0 lg:pr-10 max-w-[650px]">
            <div className="space-y-4">
              <h3 className="text-[20px] md:text-[28px] font-bold leading-[24px] text-[#171717] text-left">
                Hello
              </h3>
             
              <h1 className="text-[28px] md:text-[48px] font-extrabold leading-[40px] md:leading-[72px] text-[#171717] font-[Red Hat Display] text-left">
               I am an innovative full stack software engineer.
              </h1>
            </div>

            {/* Buttons */}
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

              <div
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
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="hidden md:flex flex-1 justify-end">
            <img 
              src={home_frame} 
              alt="Home frame" 
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;