import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import './index.css';
import logo from '../src/assets/optimized/LOGO-T.png';

// Import custom LoadingScreen
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt="Tammi Tech"
            className="h-24 w-auto mx-auto"
          />
        </motion.div>
        <motion.p 
          className="text-black text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering African Tech Talent
        </motion.p>
      </div>
    </div>
  );
};

// Lazy load components
const Home = lazy(() => import('./Component/Home_Page/Home'));
const About = lazy(() => import('./Component/About_Us/About'));
const Contact = lazy(() => import('./Component/Contact_Us/Contact'));
const Courses = lazy(() => import('./Component/Courses/Courses'));
const Apply = lazy(() => import('./Component/Apply/Apply'));

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
    // Reduced loading time from 3000ms to 1500ms
    setTimeout(() => setIsLoading(false), 1000);
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
                  path="/courses" 
                  element={
                    <AnimatedPage>
                      <Suspense fallback={<LoadingScreen />}>
                        <Courses />
                      </Suspense>
                    </AnimatedPage>
                  } 
                />
                <Route 
                  path="/apply" 
                  element={
                    <AnimatedPage>
                      <Suspense fallback={<LoadingScreen />}>
                        <Apply />
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