import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Terminal, Globe } from 'lucide-react';
import {
  FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaPython,
  FaReact, FaBootstrap, FaDocker, FaLinux, FaBrain,
  FaUsers, FaChartLine, FaGitAlt, FaChartBar
} from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase, IoLogoTableau } from 'react-icons/io5';
import {
  SiCplusplus, SiStreamlit, SiPytorch, SiKeras, SiTensorflow,
  SiFastapi, SiPlotly, SiFlask, SiMysql, SiApachehadoop,
  SiApachespark, SiN8N
} from 'react-icons/si';

const getSkillIcon = (skill) => {
  switch (skill) {
    case 'Java': return <FaJava className="w-6 h-6 mr-3" />;
    case 'C/C++': return <SiCplusplus className="w-6 h-6 mr-3" />;
    case 'HTML': return <FaHtml5 className="w-6 h-6 mr-3" />;
    case 'CSS': return <FaCss3Alt className="w-6 h-6 mr-3" />;
    case 'JavaScript': return <IoLogoJavascript className="w-6 h-6 mr-3" />;
    case 'PL/SQL': return <FaDatabase className="w-6 h-6 mr-3" />;
    case 'Python': return <FaPython className="w-6 h-6 mr-3" />;

    case 'Streamlit': return <SiStreamlit className="w-6 h-6 mr-3" />;
    case 'Pytorch': return <SiPytorch className="w-6 h-6 mr-3" />;
    case 'Keras': return <SiKeras className="w-6 h-6 mr-3" />;
    case 'TensorFlow': return <SiTensorflow className="w-6 h-6 mr-3" />;
    case 'FastAPI': return <SiFastapi className="w-6 h-6 mr-3" />;
    case 'Dash': return <SiPlotly className="w-6 h-6 mr-3" />;
    case 'MERN': return <FaReact className="w-6 h-6 mr-3" />;
    case 'Bootstrap': return <FaBootstrap className="w-6 h-6 mr-3" />;
    case 'Flask': return <SiFlask className="w-6 h-6 mr-3" />;

    case 'MySQL': return <SiMysql className="w-6 h-6 mr-3" />;
    case 'Firebase': return <IoLogoFirebase className="w-6 h-6 mr-3" />;
    case 'Git': return <FaGitAlt className="w-6 h-6 mr-3" />;
    case 'Docker': return <FaDocker className="w-6 h-6 mr-3" />;
    case 'Hadoop': return <SiApachehadoop className="w-6 h-6 mr-3" />;
    case 'Spark': return <SiApachespark className="w-6 h-6 mr-3" />;
    case 'Power BI': return <FaChartBar className="w-6 h-6 mr-3" />;
    case 'Tableau': return <IoLogoTableau className="w-6 h-6 mr-3" />;
    case 'n8n': return <SiN8N className="w-6 h-6 mr-3" />;
    case 'Linux (KDE Plasma)': return <FaLinux className="w-6 h-6 mr-3" />;

    case 'Problem-Solving': return <FaBrain className="w-6 h-6 mr-3" />;
    case 'Team Collaboration': return <FaUsers className="w-6 h-6 mr-3" />;
    case 'Analytical Thinking': return <FaChartLine className="w-6 h-6 mr-3" />;

    default: return null;
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'PL/SQL', 'Java', 'C/C++', 'HTML', 'CSS', 'JavaScript'],
      image: '/photos/tokito1.png',
      character: 'Tokito Muichiro',
      imageClass: 'object-[center_10%] scale-[1.15] translate-y-4 md:translate-y-8',
    },
    {
      title: 'Frameworks',
      icon: <BrainCircuit className="w-6 h-6" />,
      skills: ['Pytorch', 'TensorFlow', 'Keras', 'Streamlit', 'Dash', 'FastAPI', 'Flask', 'MERN', 'Bootstrap'],
      image: '/photos/rengoku.png',
      character: 'Kyojuro Rengoku',
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['MySQL', 'Tableau', 'Power BI', 'Hadoop', 'Spark', 'Git', 'Docker', 'Firebase', 'n8n', 'Linux (KDE Plasma)'],
      image: '/photos/giyu1.png',
      character: 'Giyu Tomioka',
      imageClass: 'object-[center_10%] scale-[1.15] translate-y-4 md:translate-y-8',
    },
    {
      title: 'Soft Skills',
      icon: <Globe className="w-6 h-6" />,
      skills: ['Problem-Solving', 'Team Collaboration', 'Analytical Thinking'],
      image: '/photos/zenetsu1.png',
      character: 'Zenitsu Agatsuma',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-demon-charcoal transition-colors duration-300 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vh] min-h-[100vw] object-cover opacity-[0.15] dark:opacity-[0.2] pointer-events-none shadow-inner -rotate-90"
      >
        <source src="/photos/j2.mp4" type="video/mp4" />
      </video>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-demon-black via-transparent to-white dark:to-demon-black opacity-60 pointer-events-none"></div>

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
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-widest uppercase text-center"
          >
            Mastering the Elements
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative group rounded-none md:rounded-3xl border-4 border-black dark:border-demon-red/20 overflow-hidden bg-white dark:bg-demon-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-2xl h-[450px] lg:h-[550px] hover:border-demon-red transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Character Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-20 dark:opacity-30">
                <img
                  src={category.image}
                  alt={`${category.character} Concept`}
                  className={`w-full h-full object-cover grayscale dark:grayscale-0 ${category.imageClass || 'object-center'}`}
                />
              </div>

              {/* Opaque Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black/95 z-10"></div>

              {/* Card Content - Always Visible */}
              <div className="absolute inset-0 p-6 z-20 flex flex-col justify-between">
                
                {/* Header: Title and Icon */}
                <div className="flex flex-col items-center text-center space-y-3 pt-2">
                  <div className="bg-demon-red/10 border border-demon-red/30 p-3 rounded-2xl text-demon-red shadow-lg [&>svg]:w-7 [&>svg]:h-7">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl xl:text-3xl font-extrabold text-white uppercase tracking-tighter drop-shadow-md">
                    {category.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-demon-red/50"></div>
                </div>

                {/* Body: Skills List */}
                <div className="flex flex-wrap justify-center gap-2 overflow-y-auto no-scrollbar pb-4 flex-1 items-center mt-4 max-h-[260px]">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-4 py-2 bg-gray-900/90 border border-gray-700 text-gray-200 text-sm md:text-base font-bold rounded-xl hover:border-demon-red hover:bg-black hover:text-white transition-all cursor-default shadow-md shadow-black/40"
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer: Character Concept Name */}
                <div className="text-center pt-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">
                    Concept: {category.character}
                  </span>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

