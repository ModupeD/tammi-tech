import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <div className="bg-[#eddbd2] mx-auto py-12 md:py-20 px-6 lg:px-20 xl:px-24">
      <div className="relative bg-white rounded-[30px] shadow-lg max-w-[1440px] mx-auto lg:flex items-center justify-between p-6 md:p-12 z-10"
        style={{
          boxShadow: `35px 164px 47px 0px rgba(23, 23, 23, 0.00),
                      22px 105px 43px 0px rgba(23, 23, 23, 0.01),
                      13px 59px 36px 0px rgba(23, 23, 23, 0.03),
                      6px 26px 27px 0px rgba(23, 23, 23, 0.04),
                      1px 7px 15px 0px rgba(23, 23, 23, 0.05)`
        }}
      >
        {/* Text section */}
        <div className="lg:w-3/4 mb-4 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-4">
            Contact Me
          </h2>
          <p className="text-[#606060] mb-4 md:mb-0">
            Wanna reach out to me for a Software Engineering role?
          </p>
        </div>

        {/* Button section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="lg:w-1/4 flex justify-end w-full lg:w-auto"
        >
          <a
            href="/contact"
            className="bg-gradient-to-b from-[#c35661] to-[#c35661] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300 text-center w-full lg:w-auto"
            style={{
              boxShadow: '0px 9px 20px rgba(195, 86, 97, 0.3)',
            }}
          >
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;