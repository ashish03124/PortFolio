import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Mail, FileText, Flame } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-demon-black"></div>
        <div className="absolute inset-0 breathing-bg opacity-30 dark:opacity-100"></div>

        {/* lightning.gif Background Triggered on Section Hover */}
        <AnimatePresence>
          {isHeroHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <img
                src="/photos/lightning1.gif"
                alt="Section Lightning"
                className="w-full h-full object-cover mix-blend-screen brightness-150"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Parallax Embers/Atmosphere */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200 dark:bg-demon-red/10 rounded-full blur-[120px] transition-colors duration-300"
        ></motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200 dark:bg-demon-red/5 rounded-full blur-[100px] transition-colors duration-300"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ opacity }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center space-x-2">
            <span className="h-[2px] w-12 bg-black dark:bg-demon-red"></span>
            <span className="text-black dark:text-demon-flame font-black tracking-[0.2em] uppercase text-sm">Breathing Style: Infinite Innovation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white mb-6 tracking-tight leading-tight">
            I'm <span className="text-black dark:text-demon-red uppercase italic font-black">Ashish Garud</span>
            <br />
            <span className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-gray-400">Data Science Enthusiast</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-lg leading-relaxed">
            Computer Science Engineering Student specializing in <span className="text-black dark:text-white italic font-black">Data Analytics</span> & <span className="text-black dark:text-white italic font-black">Machine Learning</span>. Transforming complex data into actionable insights with precision.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-8 group relative inline-block cursor-crosshair transform hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 dark:bg-red-600/20 bg-black/5 blur-2xl rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

            <div className="relative bg-black dark:bg-demon-charcoal border-2 border-black dark:border-demon-red/50 py-3 px-5 flex items-center gap-4 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(185,28,28,1)] group-hover:translate-y-1 group-hover:translate-x-1 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_0px_rgba(185,28,28,1)] transition-all duration-300">

              <div className="flex flex-col border-r-2 border-gray-800 dark:border-demon-red/30 pr-5">
                <span className="text-gray-500 dark:text-gray-400 text-[9px] font-black tracking-[0.4em] uppercase mb-1 drop-shadow-md">Power Level</span>
                <div className="flex items-baseline gap-1 relative">
                  <span className="text-3xl font-black text-white dark:text-demon-red group-hover:text-gray-300 dark:group-hover:text-red-500 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">8.50</span>
                  <span className="text-xs font-bold text-gray-600">/10</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-white dark:text-white font-black text-sm uppercase tracking-[0.15em] mb-1 flex items-center gap-2 group-hover:text-gray-300 dark:group-hover:text-demon-flame transition-colors duration-300">
                  <Flame className="w-4 h-4 text-white dark:text-demon-flame group-hover:animate-[spin_3s_linear_infinite]" />
                  Academic Rank
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-[11px] italic font-semibold leading-tight group-hover:text-gray-200 dark:group-hover:text-red-300 transition-colors duration-300 max-w-[140px]">
                  "Surviving engineering with data-driven precision."
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white dark:bg-demon-red hover:bg-white hover:text-black dark:hover:bg-red-700 dark:hover:text-white border-2 border-transparent hover:border-black dark:border-none px-8 py-4 rounded-none font-black flex items-center space-x-2 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none dark:shadow-[0_0_20px_rgba(185,28,28,0.3)] dark:hover:shadow-[0_0_30px_rgba(185,28,28,0.5)] cursor-pointer"
            >
              <span>View Projects</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black dark:border-white/20 hover:bg-black hover:text-white text-black dark:text-white px-8 py-4 rounded-none font-black flex items-center space-x-2 transition-all bg-transparent dark:bg-white/5 backdrop-blur-sm cursor-pointer shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
            >
              <FileText className="w-5 h-5" />
              <span>View CV</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white px-4 py-4 transition-colors flex items-center space-x-2 font-bold cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          style={{ opacity }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Profile Hexagon/Aura Frame */}
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer"
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
          >
            <div className="absolute inset-0 bg-black dark:bg-demon-red rounded-full blur-2xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-black/30 dark:border-demon-red/30 rounded-full scale-110 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black dark:border-demon-charcoal bg-white dark:bg-demon-charcoal/50 backdrop-blur-xl flex items-center justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all duration-300">
              <img
                src="/photos/profile1.png"
                alt="Ashish Garud"
                className="w-full h-full object-cover grayscale dark:grayscale-0 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>

          {/* Sword Slash Graphic Placeholder */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 border-r-4 border-b-4 border-black dark:border-demon-red/40 rounded-br-none transform rotate-45 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Katana Slash Divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none overflow-hidden">
        <div className="w-[200%] h-px bg-gradient-to-r from-transparent via-black dark:via-demon-red to-transparent transform -rotate-2 origin-left animate-[slash_2s_ease-out_infinite]"></div>
      </div>
    </section>
  );
};

export default Hero;
