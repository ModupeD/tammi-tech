import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import './index.css';

// Import custom LoadingScreen
const LoadingScreen = () => {
  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'AWS', color: '#FF9900' }
  ];

  return (
    <div className="fixed inset-0 bg-[#eddbd2] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <motion.h1 
            className="text-4xl font-bold text-[#c35661] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Code with Momo
          </motion.h1>
          <motion.p 
            className="text-[#606060]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building something awesome...
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white px-4 py-2 rounded-full shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
              }}
              style={{
                border: `2px solid ${tech.color}`
              }}
            >
              <span className="font-medium" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Lazy load components
const Home = lazy(() => import('./Component/Home_Page/Home'));
const About = lazy(() => import('./Component/About_Us/About'));
const Resume = lazy(() => import('./Component/Resume/Resume'));
const Contact = lazy(() => import('./Component/Contact_Us/Contact'));

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AnimatedPage = ({ children }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Longer initial loading time to show the tech stack
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="App bg-[rgb(249,249,255)]">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main className="mt-20 md:mt-17 overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route 
                  path="/" 
                  element={
                    <AnimatedPage>
                      <Suspense fallback={<LoadingScreen />}>
                        <Home />
                      </Suspense>
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <AnimatedPage>
                      <Suspense fallback={<LoadingScreen />}>
                        <About />
                      </Suspense>
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/resume" 
                  element={
                    <AnimatedPage>
                      <Suspense fallback={<LoadingScreen />}>
                        <Resume />
                      </Suspense>
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <AnimatedPage>
                      <Suspense fallback={<LoadingScreen />}>
                        <Contact />
                      </Suspense>
                    </AnimatedPage>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;