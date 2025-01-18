import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import GetInTouch from '../GeneralComponent/GetInTouch';
import Ecosystem from '.././Home_Page/Ecosystem'
import HowWeStarted from './HowWeStarted';

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

function About() {
  return (
    <div className="pt-19 md:pt-23"> {/* Added padding-top */}
      <Helmet>
        <title>OBAI - About</title>
        <meta name="description" content="Welcome to the OBAI website About page." />
      </Helmet>

      <AnimatedSection>
        <HowWeStarted />
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

export default About;