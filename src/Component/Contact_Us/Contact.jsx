import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { Calendar, Mail } from 'lucide-react';
import PropTypes from 'prop-types';

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

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
};

function Contact() {
  return (
    <div className="bg-white pt-20">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Let&apos;s Connect</h1>
            <p className="text-black max-w-2xl mx-auto">
              Schedule a meeting or send us an email. We&apos;re here to help bring your ideas to life.
            </p>
          </div>
        </AnimatedSection>

        {/* Calendly Banner */}
        <AnimatedSection>
          <div className="bg-white rounded-[30px] border border-black overflow-hidden mb-12">
            <div className="bg-black py-8 px-6 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Calendar className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl mb-1">Schedule a Meeting</h2>
                    <p className="text-white/90 text-sm">Let&apos;s discuss your project or opportunities</p>
                  </div>
                </div>
                
                <a
                  href="https://calendly.com/codewithmomo/code-with-momo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  Schedule Time
                  <span className="sr-only">Open Calendly scheduling page</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Email Contact */}
        <AnimatedSection>
          <div className="bg-white rounded-[30px] border border-black overflow-hidden">
            <div className="py-8 px-6 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black p-3 rounded-full">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-black font-bold text-xl mb-1">Send us an Email</h2>
                    <p className="text-black/90 text-sm">We&apos;ll get back to you as soon as possible</p>
                  </div>
                </div>
                
                <a
                  href="mailto:danielmodupeoluwa03@gmail.com"
                  className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  Send Email
                  <span className="sr-only">Open email client</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Contact;