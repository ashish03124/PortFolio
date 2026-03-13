import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Custom Tanjiro-style spiky hair silhouette
  const SlayerIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12,2C11.5,3.5 10,4.5 9,5C8,5.5 6.5,5.2 5,5C5.5,6.5 6,8 5.5,9.5C5,11 3.5,12 2,12.5C3.5,13 5,14 5.5,15.5C6,17 5.5,18.5 5,20C6.5,19.8 8,19.5 9,20C10,20.5 11.5,21.5 12,23C12.5,21.5 14,20.5 15,20C16,19.5 17.5,19.8 19,20C18.5,18.5 18,17 18.5,15.5C19,14 20.5,13 22,12.5C20.5,12 19,11 18.5,9.5C18,8 18.5,6.5 19,5C17.5,5.2 16,5.5 15,5C14,4.5 12.5,3.5 12,2Z" />
    </svg>
  );

  return (
    <div 
      className="flex items-center space-x-3 cursor-pointer select-none group"
      onClick={toggleTheme}
    >
      <div className={`
        relative w-32 h-10 rounded-full border-4 transition-colors duration-300
        ${isDark ? 'border-[#ff9d00] bg-black' : 'border-demon-olive bg-white'}
      `}>
        {/* Sliding Circle */}
        <motion.div
          animate={{ x: isDark ? 4 : 84 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`
            absolute top-1 w-6 h-6 rounded-full flex items-center justify-center
            ${isDark ? 'bg-[#ff9d00] text-white' : 'bg-demon-olive text-white'}
          `}
        >
          {isDark ? <SlayerIcon /> : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12,7L14.5,12H9.5L12,7M12,2L15.5,9H8.5L12,2M12,17L9.5,12H14.5L12,17M12,22L8.5,15H15.5L12,22Z" />
            </svg>
          )}
        </motion.div>

        {/* Text */}
        <div className={`
          absolute inset-0 flex items-center justify-center pointer-events-none
          text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300
          ${isDark ? 'text-white translate-x-3' : 'text-demon-olive -translate-x-3'}
        `}>
          {isDark ? 'SLAYER' : 'HUNTER'}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
