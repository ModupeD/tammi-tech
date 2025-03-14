import { motion } from 'framer-motion';

function Ecosystem() {
  const reasons = [
    {
      title: "Innovative Solutions",
      description: "We transform complex challenges into elegant, efficient solutions using cutting-edge technology."
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We collaborate closely to ensure our solutions align perfectly with your goals."
    },
    {
      title: "Technical Excellence",
      description: "Our team brings deep expertise in modern development practices and emerging technologies."
    },
    {
      title: "Scalable Architecture",
      description: "We build systems that grow with your business, ensuring long-term sustainability and performance."
    }
  ];
  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Why Work With Us
          </h2>
          <p className="text-[#000000] max-w-2xl mx-auto">
            Partner with us to bring your vision to life through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="border border-[#000000] p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#000000] mb-4">
                {reason.title}
              </h3>
              <p className="text-[#000000]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/contact"
            className="inline-block bg-[#000000] text-[#FFFFFF] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Ecosystem;