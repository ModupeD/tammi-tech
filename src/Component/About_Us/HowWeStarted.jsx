import imagebanner from '../../assets/optimized/mo-about-me.png';

const HowWeStarted = () => {
  return (
    <div className="bg-[#FFFDF9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        {/* Container for About Me Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#171717]">
              About Me
            </h1>
            <div className="space-y-4 text-[#606060] text-base lg:text-lg">
              <p>
              Hi, I'm Modupeoluwa—but you can call me Mo! As a passionate Software Developer, I bring over 2 years of expertise in building robust web applications with React.js, complemented by a year of cross-platform mobile development using React Native and Flutter.
               My approach to development centers on creating strategic, meaningful user experiences that not only solve complex problems but leave a lasting impression on users.
              </p>
              <p>
              At the intersection of technology and human connection is where I truly thrive. While my technical toolkit spans from React and Node.js to UX design and cloud deployment, what drives me is using these skills to empower others and create positive change.
              When I'm not crafting code or exploring the latest in FinTech innovations, you'll find me mentoring fellow developers and collaborating on projects that push the boundaries of what's possible in web development.
              </p>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-[45%] w-full">
            <div className="bg-[#C17A7A] rounded-[30px] p-4 aspect-square relative overflow-hidden">
              <img
                src={imagebanner}
                alt="Profile"
                className="w-full h-full object-cover rounded-[24px]"
                width={750}
                height={750}
              />
              {/* Decorative Flowers */}
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#FFD4D4"/>
                </svg>
              </div>
              <div className="absolute bottom-6 left-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#FFD4D4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;