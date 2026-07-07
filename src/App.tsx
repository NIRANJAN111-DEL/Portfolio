import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Loading preloader screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Layout content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen text-white bg-bg-dark flex flex-col items-center justify-between"
        >
          <CustomCursor />
          <Navbar />

          {/* Core Content Blocks */}
          <main className="w-full flex flex-col relative z-10 overflow-hidden">
            <Hero />
            
            <div className="max-w-7xl mx-auto w-full">
              <About />
              <Skills />
              <Projects />
              <Education />
              <Achievements />
              <Contact />
            </div>
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
