import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <div className="bg-white mx-auto py-12 md:py-20 px-6 lg:px-20 xl:px-24">
      <div className="relative bg-white rounded-[30px] border border-black max-w-[1440px] mx-auto lg:flex items-center justify-between p-6 md:p-12 z-10">
        {/* Text section */}
        <div className="lg:w-3/4 mb-4 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-black mb-4 md:mb-0">
            Reach out to us for any questions or inquiries.
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
            className="bg-black text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300 text-center w-full lg:w-auto"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;