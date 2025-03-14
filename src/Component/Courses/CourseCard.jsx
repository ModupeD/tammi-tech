import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CourseCard({ title, description, duration, price, icon: Icon, path }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-black p-3 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-black">{title}</h2>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm">
          <span className="text-gray-500">Duration:</span>
          <span className="font-semibold text-black ml-2">{duration}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Price:</span>
          <span className="font-semibold text-black ml-2">₦{price}</span>
        </div>
      </div>

      <Link
        to={path}
        className="block w-fit mx-auto px-8 bg-black text-white text-center py-2 rounded-full font-bold hover:bg-black/90 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

export default CourseCard; 