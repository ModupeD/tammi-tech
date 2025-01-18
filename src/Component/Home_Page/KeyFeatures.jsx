import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette, Presentation } from 'lucide-react';

const features = [
  {
    title: 'Software Engineering',
    description: 'Full Stack Software Engineering with React and Node.js',
    Icon: Code2
  },
  {
    title: 'Mobile App Development',
    description: 'Experience developing apps using Flutter and React Native.',
    Icon: Smartphone
  },
  {
    title: 'UI/UX Design',
    description: 'Possess fundamental practical knowledge on UI/UX design using Figma',
    Icon: Palette
  },
  {
    title: 'Public Speaking',
    description: 'Experience speaking at conferences',
    Icon: Presentation
  }
];

const FeatureCard = ({ title, description, Icon }) => (
  <motion.div
    className="bg-white rounded-[30px] shadow-custom cursor-pointer overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-6 h-[280px] flex flex-col">
      {/* Icon container at the top */}
      <div className="mb-6 flex justify-end">
        <div className="p-4 bg-gradient-to-b from-[#c35661] to-[#c35661] rounded-[20px]">
          <Icon size={32} className="text-white" />
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

export default function KeyFeatures() {
  return (
    <section className="py-8 md:py-16 bg-[#FFFDF9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <h2 className="text-3xl font-extrabold text-center text-[#171717] mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}