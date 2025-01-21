import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import Ecosystem from './Ecosystem';
import GetInTouch from '../GeneralComponent/GetInTouch';
import Awards from './Awards';  // Add this import

const AnimatedSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <div className="pt-19 md:pt-23"> {/* Added padding-top */}
      <Helmet>
        <title>Mo - Portfolio</title>
        <meta name="description" content="Welcome to the obai website home page." />
      </Helmet>
      
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <Awards />
      </AnimatedSection>

      <AnimatedSection>
        <KeyFeatures />
      </AnimatedSection>


      <AnimatedSection>
        <Ecosystem />
      </AnimatedSection>

      

      <AnimatedSection>
        <GetInTouch />
      </AnimatedSection>

    </div>
  );
}

export default Home;