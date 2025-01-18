import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Calendar } from 'lucide-react';

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

const ContactCard = ({ icon: Icon, title, link, description, delay }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="bg-[#c35661] bg-opacity-10 p-4 rounded-full mb-6 group-hover:bg-opacity-20 transition-all duration-300 ">
      <Icon size={32} className="text-[#c35661]" />
    </div>
    <h3 className="text-xl font-bold text-[#171717] mb-2">{title}</h3>
    <p className="text-[#606060] text-sm mb-4">{description}</p>
    <span className="text-[#c35661] font-medium text-sm">Connect with me →</span>
  </motion.a>
);

function Contact() {
  const contactLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/ModupeD",
      description: "Check out my projects and contributions",
      delay: 0.1
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://linkedin.com/in/modupe-daniel",
      description: "Let's connect professionally",
      delay: 0.2
    },
    {
      icon: Mail,
      title: "Email",
      link: "mailto:daniemu@mail.uc.edu",
      description: "Send me a message directly",
      delay: 0.3
    }
  ];

  return (
    <div className="bg-[#eddbd2] pt-20">
      <Helmet>
        <title>Contact Mo</title>
        <meta name="description" content="Connect with Mo Daniel - Software Engineer" />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#171717] mb-4">Let's Connect</h1>
            <p className="text-[#606060] max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out through any of these platforms.
            </p>
          </div>
        </AnimatedSection>
{/* Calendly Banner */}
<AnimatedSection>
          <div className="bg-white rounded-[30px] shadow-lg overflow-hidden mb-12">
            <div className="bg-[#c35661] py-8 px-6 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Calendar className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Schedule a Meeting</h3>
                    <p className="text-white/90 text-sm">Let's discuss your project or opportunities</p>
                  </div>
                </div>
                
                <a
                  href="https://calendly.com/codewithmomo/code-with-momo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#c35661] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-md"
                >
                  Schedule Time
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactLinks.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;