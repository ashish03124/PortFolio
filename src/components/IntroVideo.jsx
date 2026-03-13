import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroVideo = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-demon-black"
          >
            <button
              onClick={() => setHasStarted(true)}
              className="px-8 py-4 bg-transparent border-2 border-demon-red text-demon-red hover:bg-demon-red hover:text-white text-lg md:text-xl font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] rounded-sm"
            >
              Enter Experience
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {hasStarted && (
        <video
          autoPlay
          playsInline
          onEnded={onComplete}
          className="w-full h-full object-cover"
        >
          <source src="/photos/landingpage1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Skip Button */}
      {hasStarted && (
        <button
          onClick={onComplete}
          className="absolute bottom-10 right-10 md:bottom-12 md:right-12 text-white bg-black/60 hover:bg-demon-red px-6 py-3 rounded text-sm md:text-base font-black tracking-[0.2em] uppercase border-2 border-white/20 hover:border-demon-red backdrop-blur-sm transition-all duration-300 z-10 drop-shadow-md"
        >
          Skip Intro
        </button>
      )}
    </motion.div>
  );
};

export default IntroVideo;
