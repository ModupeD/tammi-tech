const HowWeStarted = () => {
  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-24">
        {/* Container for About Section */}
        <div className="flex flex-col items-start justify-between gap-12">
          {/* Main Content */}
          <div className="w-full space-y-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-black">
              Our Story
            </h1>
            <div className="space-y-6 text-black text-base lg:text-lg max-w-3xl">
              <p>
                Tammi Tech was born from a simple yet powerful vision: to empower African talent in the global tech ecosystem. As a family-driven initiative, we understand that true transformation comes from combining technical excellence with genuine care and support.
              </p>
              <p>
                Our journey began when we recognized the immense untapped potential within Africa&apos;s youth. We saw brilliant minds eager to enter the tech industry but facing barriers to entry and lacking structured guidance. This realization sparked our mission to create a supportive environment where aspiring tech professionals could thrive.
              </p>
              <p>
                What sets us apart is our holistic approach to tech education. We don&apos;t just teach coding; we build complete tech professionals. Our curriculum combines practical skills with real-world experience, ensuring our students are ready to make meaningful contributions from day one.
              </p>
              <p>
                Today, we&apos;re proud to be nurturing the next generation of African tech leaders. Our community is built on the principles of excellence, support, and continuous growth. We believe that by providing the right skills, mentorship, and opportunities, we can help bridge the global tech talent gap while creating sustainable careers for African youth.
              </p>
              <p>
                Join us in our mission to transform lives through technology. Whether you&apos;re starting your tech journey or looking to advance your career, Tammi Tech is here to support your growth every step of the way.
              </p>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="w-full mt-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-black p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Excellence</h3>
                <p className="text-black">We maintain high standards in everything we do, ensuring our students receive world-class education and support.</p>
              </div>
              <div className="border border-black p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Community</h3>
                <p className="text-black">We foster a supportive environment where learning and growth happen through collaboration and shared experiences.</p>
              </div>
              <div className="border border-black p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Impact</h3>
                <p className="text-black">We&apos;re committed to creating lasting positive change in Africa&apos;s tech ecosystem and the lives of our students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;