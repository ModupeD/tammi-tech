import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';

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

function Resume() {
  const experiences = [
    {
      company: "Medpace",
      location: "Cincinnati, Ohio",
      role: "Software Engineer Intern",
      date: "August 2024 - December 2024",
      tech: "Angular | HTML | SCSS | Git | C# | MySQL",
      points: [
        "Developed and maintained scalable backend services using C# and SQL Server for clinical research data management",
        "Enhanced website functionality for 30+ doctors, improving clinical research collaboration",
        "Collaborated in an agile environment to modernize legacy systems",
        "Implemented efficient version control practices for large-scale projects"
      ]
    },
    {
      company: "OBAI",
      location: "Cincinnati, Ohio",
      role: "Junior Software Engineer",
      date: "June 2024 - August 2024",
      tech: "React | HTML | CSS | Git",
      points: [
        "Established Git version control for a full-stack AI web application",
        "Developed responsive Frontend components using React.js for 30% mobile user adoption",
        "Created customizable logo update feature for consistent branding"
      ]
    },
    {
      company: "E-commony",
      location: "Remote",
      role: "Full-Stack Software Developer Intern",
      date: "March 2022 - September 2022",
      tech: "Angular | HTML | CSS | Flask",
      points: [
        "Implemented Angular and Material UI for touch screen pin code system",
        "Created Flask-based SQL database and API endpoints for food locker monitoring",
        "Containerized backend services using Docker for AWS deployment"
      ]
    }
  ];

  const projects = [
    {
      name: "NutriMind",
      role: "Mobile App Developer, Frontend Engineer",
      tech: "Flutter",
      points: [
        "Designed intuitive UI for nutritional goal tracking",
        "Implemented multi-step user onboarding for personalized recommendations"
      ]
    },
    {
      name: "Water My Plants",
      role: "Frontend Developer",
      tech: "React | Axios | Hooks | CSS | State Management",
      points: [
        "Developed authentication system using Axios and React Hooks",
        "Led junior developers in building full-stack website using agile methodology"
      ]
    }
  ];

  return (
    <div className="bg-[white] pt-20">
      <Helmet>
        <title>Mo Daniel - Resume</title>
        <meta name="description" content="Software Engineer with experience in full-stack development" />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        {/* Technical Skills */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#171717] mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#606060]">
              <div>
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p>React.js, Angular, HTML, CSS, JavaScript, Redux, Hooks, Jest</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend Development</h3>
                <p>Node.js, PostgreSQL, MySQL, Flask, Express, C#</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                <p>AWS, Azure, Git, Docker, Vercel, Heroku, Netlify</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Design & UI/UX</h3>
                <p>Figma, Adobe XD, User Research, Wireframing</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Work Experience */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#171717] mb-6">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-[#c35661] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#171717]">{exp.company}</h3>
                      <p className="text-[#606060] font-medium">{exp.role}</p>
                    </div>
                    <p className="text-[#606060]">{exp.date}</p>
                  </div>
                  <p className="text-[#c35661] text-sm mb-4">{exp.tech}</p>
                  <ul className="list-disc list-inside space-y-2 text-[#606060]">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection>
          <div>
            <h2 className="text-2xl font-bold text-[#171717] mb-6">Projects</h2>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-[#c35661] pl-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#171717]">{project.name}</h3>
                    <p className="text-[#606060] font-medium">{project.role}</p>
                  </div>
                  <p className="text-[#c35661] text-sm mb-4">{project.tech}</p>
                  <ul className="list-disc list-inside space-y-2 text-[#606060]">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Resume;