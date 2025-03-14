import home_frame from '../../assets/optimized/tammi.png';
import mobile_frame from '../../assets/optimized/tammi.png';

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <div className="md:hidden flex justify-center">
          <img src={mobile_frame} alt="Mobile frame" className="w-full h-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-16">
          <div className="flex-1 pr-0 lg:pr-10 max-w-[650px]">
            <div className="space-y-4">
              <h3 className="text-[20px] md:text-[28px] font-bold leading-[24px] text-[#171717] text-left">
                In Three Months,
              </h3>
              
              <h1 className="text-[28px] md:text-[48px] font-extrabold leading-[40px] md:leading-[72px] text-[#171717] font-[Red Hat Display] text-left">
                Build a Tech Career
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/apply"
                className="py-3 px-6 rounded-[30px] bg-black text-[16px] font-bold text-[#FFFDF9] w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Enroll Now
              </a>

              <a
                href="/apply"
                className="w-full sm:w-auto flex items-center justify-center border-[2px] border-[#171717] rounded-[30px] p-[2px] hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{ height: '50px' }}
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
              </a>
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
    </div>
  );
};

export default HeroSection;