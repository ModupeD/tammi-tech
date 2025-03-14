import { Helmet } from 'react-helmet-async';
import { Shield, Code, Palette, Network } from 'lucide-react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from digital attacks. Master security protocols and threat detection.",
    duration: "16 weeks",
    price: "350,000",
    icon: Shield,
    path: "/courses/cybersecurity"
  },
  {
    title: "Software Engineering",
    description: "Become a full-stack developer. Learn modern frameworks and industry best practices.",
    duration: "24 weeks",
    price: "450,000",
    icon: Code,
    path: "/courses/software-engineering"
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful and functional user interfaces. Master design thinking and user research.",
    duration: "12 weeks",
    price: "250,000",
    icon: Palette,
    path: "/courses/ui-ux-design"
  },
  {
    title: "Networking",
    description: "Master computer networking fundamentals, protocols, and infrastructure management.",
    duration: "16 weeks",
    price: "300,000",
    icon: Network,
    path: "/courses/networking"
  }
];

function Courses() {
  return (
    <div className="bg-white pt-20">
      <Helmet>
        <title>Courses - Tammi Tech Bootcamp</title>
        <meta name="description" content="Explore our comprehensive tech bootcamp courses" />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Our Courses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Launch your tech career with our intensive, hands-on bootcamp programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses; 