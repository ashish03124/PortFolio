import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden bg-white dark:bg-demon-black transition-colors duration-300">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.1] pointer-events-none"
      >
        <source src="/photos/j4.mp4" type="video/mp4" />
      </video>

      {/* Background Decorative Element with Parallax */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 dark:bg-demon-red/5 rounded-full blur-[150px] -mr-64 -mt-32"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-black dark:bg-demon-red mb-4"
          />
          {/* Vertical Japanese decorative text with Parallax */}
          <motion.div
            style={{ y: yText }}
            className="absolute -top-10 left-0 hidden lg:block select-none pointer-events-none opacity-10 dark:opacity-20"
          >
            <span className="text-8xl font-black uppercase text-black dark:text-white" style={{ writingMode: 'vertical-rl' }}>自己紹介</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-extrabold text-black dark:text-white uppercase tracking-tighter text-center"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-[0.5em] uppercase text-center"
          >
            Engineering & Data Insights
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-24 items-center">
          {/* Creative Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 space-y-8 relative"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-black dark:from-demon-red to-transparent hidden md:block" />

            <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white leading-tight">
              A <span className="text-white bg-black dark:bg-demon-red px-2 py-1 transform -rotate-2 inline-block">Data Science Enthusiast</span> <br />
              architecting strategic solutions from complex datasets.
            </h3>

            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-[1.8] text-lg font-medium border-l-4 border-black/10 dark:border-white/10 pl-6 italic">
                "I specialize in transforming raw data into actionable intelligence, building predictive models that drive evidence-based strategic decisions."
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                My core expertise lies in <span className="text-black dark:text-white font-bold">Machine Learning, Statistical Modeling, and Big Data Architecture</span>. I bring a disciplined, analytical approach to every project—prioritizing technical precision, clear communication, and collaborative leadership to ensure high-impact results.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Whether optimizing complex algorithms or delivering data-driven insights to stakeholders, I am committed to <span className="text-black dark:text-white font-bold">accuracy, technical integrity, and the continuous pursuit of analytical excellence</span>.
              </p>
            </div>

            {/* Red decorative accent */}
            <div className="h-0.5 w-1/4 bg-demon-red opacity-50" />
          </motion.div>

          {/* Scaled Down Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[320px] lg:max-w-sm aspect-[4/5] rounded-none md:rounded-[2rem] overflow-hidden glass-morphism border-black dark:border-demon-red/20 shadow-[20px_20px_0px_[-10px]_rgba(0,0,0,1)] dark:shadow-[0_0_50px_rgba(220,38,38,0.1)] relative group">
              <img
                src="/photos/t.png"
                alt="Professional Portrait Placeholder"
                className="w-full h-full object-contain grayscale dark:grayscale-0 hover:grayscale-0 hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-demon-black via-transparent to-transparent opacity-40"></div>

              {/* Image Frame Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-black dark:border-demon-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-black dark:border-demon-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating text badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-black dark:bg-demon-red text-white p-4 font-black uppercase text-xs tracking-[0.2em] transform -rotate-12 hidden lg:block border-2 border-white dark:border-black"
            >
              Insights Driven Growth
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
