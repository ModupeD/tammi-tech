import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function Apply() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    background: '',
    why: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white pt-20">
      <Helmet>
        <title>Apply - Tammi Tech Bootcamp</title>
        <meta name="description" content="Apply for Tammi Tech Bootcamp courses" />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Apply Now
            </h1>
            <p className="text-gray-600">
              Take the first step towards your tech career
            </p>
          </div>

          <motion.form 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-black font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
              </div>
              
              <div>
                <label className="block text-black font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold mb-2">Course</label>
                <select 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="software-engineering">Software Engineering</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="networking">Networking</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-fit px-12 mx-auto block bg-black text-white py-3 rounded-full font-bold hover:bg-black/90 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Apply; 