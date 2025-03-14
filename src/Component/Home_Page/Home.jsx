import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import Ecosystem from './Ecosystem';
import GetInTouch from '../GeneralComponent/GetInTouch';

const fadeUpVariant = {
  hidden: { 
    opacity: 0, 
    y: 100,
  },
  visible: (index) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: index * 0.1
    }
  })
};

function Home() {
  return (
    <div className="pt-19 md:pt-23">
      <Helmet>
        <title>Tammi Tech</title>
        <meta name="description" content="Welcome to the obai website home page." />
      </Helmet>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0}
        variants={fadeUpVariant}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={1}
        variants={fadeUpVariant}
      >
        <KeyFeatures />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={2}
        variants={fadeUpVariant}
      >
        <Ecosystem />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={3}
        variants={fadeUpVariant}
      >
        <GetInTouch />
      </motion.div>
    </div>
  );
}

export default Home;