import { motion } from 'framer-motion';
import { Code2, Server, PenTool, Shield } from 'lucide-react';
import PropTypes from 'prop-types';

const features = [
  {
    title: 'Software Engineering',
    description: 'Full Stack Software Engineering with React and Node.js',
    Icon: Code2
  },
  {
    title: 'Networking and Systems Administration',
    description: 'Learn how to manage and maintain networks and systems',
    Icon: Server
  },
  {
    title: 'UI/UX Design',
    description: 'Possess fundamental practical knowledge on UI/UX design using Figma',
    Icon: PenTool
  },
  {
    title: 'Cybersecurity',
    description: 'Learn how to keep your data safe and secure',
    Icon: Shield
  }
];

const FeatureCard = ({ title, description, Icon }) => (
  <motion.div
    className="bg-[#FFFDF9] rounded-[30px] shadow-lg cursor-pointer overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-6 h-[280px] flex flex-col">
      {/* Icon container at the top */}
      <div className="mb-6 flex justify-end">
        <div className="p-4 bg-[#171717] rounded-[20px]">
          <Icon size={32} className="text-[#FFFDF9]" />
        </div>
      </div>
      
      {/* Text content */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-[#171717] mb-3">{title}</h3>
        <p className="text-[#606060] text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

// Move PropTypes outside the component
FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
};

export default function KeyFeatures() {
  return (
    <section className="py-8 md:py-16 bg-[#FFFDF9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <h2 className="text-3xl font-extrabold text-center text-[#171717] mb-12">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title} 
              {...feature} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}