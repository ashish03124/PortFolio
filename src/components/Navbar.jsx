import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'CV', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-1 shadow-lg' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={onLogoClick}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img
                src="/photos/Demon_Slayer.png"
                alt="Demon Slayer Logo"
                className="h-10 md:h-12 lg:h-16 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] dark:brightness-100 brightness-0"
              />
              <span className="text-black dark:text-white text-lg font-bold tracking-tighter uppercase italic hidden sm:block">Portfolio</span>
            </motion.div>
          </div>

          <div className="ml-10 hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-demon-red px-3 py-2 rounded-md text-sm font-black transition-colors relative group uppercase tracking-widest"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-demon-red transition-all group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-morphism border-t border-black/10 dark:border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-demon-red block px-3 py-2 rounded-md text-base font-black uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
