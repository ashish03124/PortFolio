import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Trophy, BookOpen, X, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const achievements = [
    {
      title: '350+ LeetCode Problems',
      icon: <img src="/photos/leet.png" alt="LeetCode" className="w-full h-full object-contain" />,
      path: '/photos/leet.png',
      type: 'image',
      desc: 'Demonstrated computational efficiency and analytical rigor through intensive algorithmic problem-solving.'
    },
    {
      title: "Dean's Top 10% Honoree",
      icon: <img src="/photos/dean.png" alt="Dean List" className="w-full h-full object-contain" />,
      path: '/photos/dean.png',
      type: 'image',
      desc: 'Selected among the top 10% of students for academic excellence.'
    },
    {
      title: '200-Day LeetCode Badge',
      icon: <img src="/photos/200.gif" alt="200 Day Badge" className="w-full h-full object-contain" />,
      path: '/photos/200.gif',
      type: 'image',
      desc: 'Earned for consistent dedication to daily analytical challenges and computational optimization.'
    },
    {
      title: 'Hackathon Runner-Up',
      icon: <img src="/photos/hack.jpeg" alt="Hackathon" className="w-full h-full object-contain" />,
      path: '/photos/hack.jpeg',
      type: 'image',
      desc: 'Runner-up in Infenion Agentic AI Hackathon, won a cash prize of ₹10,000.'
    },
  ];

  const certifications = [
    { name: 'Complete Java Course (Neocolab)', pdf: '/photos/java.pdf' },
    { name: 'Cloud Computing (NPTEL)', pdf: '/photos/NPTEL.pdf' },
    { name: 'Data Engineering (GeeksForGeeks)', pdf: '/photos/gfg.pdf' },
    { name: 'Data Structure & Algorithm (Neocolab)', pdf: '/photos/dsa.pdf' }
  ];

  return (
    <section id="achievements" ref={containerRef} className="py-24 relative overflow-hidden bg-white dark:bg-demon-black transition-colors duration-300">
      {/* Background Decorative Element with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/5 dark:bg-demon-red/5 rounded-full blur-[150px] -ml-64 -mt-32"
      ></motion.div>

      {/* Subtle Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <video
          src="/photos/z.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-black dark:bg-demon-red mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-black dark:text-white uppercase tracking-tighter text-center"
          >
            Mastery & Honor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-widest uppercase text-center"
          >
            Achievements & Certifications
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Achievements - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-3xl font-extrabold text-black dark:text-white uppercase tracking-tighter flex items-center gap-3">
              <Trophy className="w-8 h-8 text-black dark:text-demon-red" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMedia({ path: item.path, type: 'image' })}
                  className="p-6 glass-morphism rounded-none md:rounded-2xl border-black dark:border-demon-red/20 hover:border-black dark:hover:border-demon-red/50 transition-all cursor-pointer shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-none dark:hover:shadow-[0_0_20px_rgba(185,28,28,0.15)] relative overflow-hidden group"
                >
                  <div className="bg-black/5 dark:bg-demon-red/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 border border-black dark:border-none overflow-hidden p-2 relative z-10">
                    {item.icon}
                  </div>
                  <h4 className="text-black dark:text-white font-black text-lg mb-2 leading-tight relative z-10">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-400 text-sm font-medium leading-relaxed relative z-10">{item.desc}</p>

                  {/* View overlay cue */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-black dark:text-demon-red" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications - Spans 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-extrabold text-black dark:text-white uppercase tracking-tighter flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-black dark:text-demon-red" />
              Certifications
            </h3>
            <div className="flex flex-col gap-4 h-full justify-center">
              {certifications.map((cert, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMedia({ path: cert.pdf, type: 'pdf' })}
                  className="w-full text-left p-5 glass-morphism rounded-none md:rounded-xl border-2 border-black dark:border-white/10 hover:border-black dark:hover:border-demon-red/40 transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none bg-white dark:bg-white/5 hover:bg-black dark:hover:bg-demon-red/10 overflow-hidden relative"
                >
                  {/* Hover Slash Effect */}
                  <div className="absolute inset-0 bg-demon-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 opacity-0 dark:opacity-20 blur-xl"></div>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-black dark:bg-demon-red group-hover:bg-white dark:group-hover:bg-demon-flame rounded-full group-hover:scale-150 transition-all"></div>
                      <span className="text-black dark:text-gray-300 font-bold text-lg leading-snug group-hover:text-white transition-colors">{cert.name}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-white dark:text-demon-flame" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Media Viewer Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-demon-black rounded-sm md:rounded-3xl border-4 border-black dark:border-demon-red/30 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_50px_rgba(220,38,38,0.2)] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="h-16 border-b-4 border-black dark:border-demon-red/30 flex items-center justify-between px-6 bg-gray-100 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-demon-red animate-pulse"></div>
                  <span className="font-black text-black dark:text-white tracking-widest uppercase text-sm">Viewer Active</span>
                </div>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 hover:bg-black hover:text-white dark:hover:bg-demon-red dark:text-gray-400 dark:hover:text-white transition-colors rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Viewer Container */}
              <div className="flex-1 bg-gray-200 dark:bg-[#1a1a1a] relative overflow-auto flex items-center justify-center">
                {selectedMedia.type === 'pdf' ? (
                  <iframe
                    src={`${selectedMedia.path}#toolbar=0&navpanes=0`}
                    title="Document Viewer"
                    className="w-full h-full border-none"
                  />
                ) : (
                  <img
                    src={selectedMedia.path}
                    alt="Achievement Visual"
                    className="max-w-full max-h-full object-contain p-4 drop-shadow-2xl"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
