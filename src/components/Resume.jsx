import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-demon-black transition-colors duration-300 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-black dark:bg-demon-red mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white uppercase tracking-tighter text-center">Curriculum Vitae</h2>
          <p className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-widest uppercase text-center">The Hashira's Records</p>
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-white dark:bg-demon-black border-4 border-black dark:border-white/10 rounded-none md:rounded-3xl p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-2xl mb-12"
          >
            {/* The CV Viewer (Iframe) */}
            <div className="relative w-full h-[600px] md:h-[800px] bg-gray-100 dark:bg-gray-800 rounded-none md:rounded-xl overflow-hidden border-2 border-black dark:border-white/5">
              <iframe 
                src="/photos/a.pdf" 
                title="Ashish Garud CV"
                className="w-full h-full border-none"
              />
            </div>
          </motion.div>

          <motion.a
            href="/photos/a.pdf"
            download="Ashish_Garud_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white dark:bg-demon-red hover:bg-white hover:text-black dark:hover:bg-red-700 dark:hover:text-white border-2 border-transparent hover:border-black dark:border-none px-12 py-5 rounded-none md:rounded-xl font-black flex items-center space-x-3 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none dark:shadow-[0_0_20px_rgba(185,28,28,0.3)] dark:hover:shadow-[0_0_30px_rgba(185,28,28,0.5)] text-lg cursor-pointer"
          >
            <Download className="w-6 h-6 z-10" />
            <span className="z-10 relative">Download Official CV</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
