import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import { Contact, Footer } from './components/Contact';
import IntroVideo from './components/IntroVideo';
import Particles from './components/Particles';
import { useScroll, useTransform, motion } from 'framer-motion';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollYProgress } = useScroll();

  // Cinematic Parallax Transforms
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ySamurai = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacitySamurai = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]);

  return (
    <div className="bg-white dark:bg-demon-black text-demon-olive dark:text-white selection:bg-demon-red selection:text-white min-h-screen transition-colors duration-300 overflow-x-hidden relative">
      <Particles />
      
      {/* Cinematic Background Layer 1: Mountains */}
      <motion.div 
        style={{ y: yMountains }}
        className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10 grayscale"
      >
        <img 
          src="/photos/mountains.png" 
          alt="Japanese Mountains" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic Background Layer 2: Samurai Silhouette */}
      <motion.div 
        style={{ y: ySamurai, opacity: opacitySamurai }}
        className="fixed bottom-0 right-0 z-0 pointer-events-none w-[600px] h-[800px] hidden lg:block"
      >
        <img 
          src="/photos/samurai.png" 
          alt="Samurai Silhouette" 
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      <AnimatePresence>
        {showIntro && <IntroVideo key="intro-video" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      <Navbar onLogoClick={() => setShowIntro(true)} />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Slash Effect Overlay Placeholder */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-demon-red transform -rotate-12 blur-sm"></div>
      </div>
    </div>
  );
}

export default App;
