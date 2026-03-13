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
    <section id="skills" className="py-24 relative bg-white dark:bg-demon-charcoal transition-colors duration-300">
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
            Techniques
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
              className="relative group rounded-none md:rounded-3xl border-4 border-black dark:border-demon-red/20 overflow-hidden bg-white dark:bg-demon-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-2xl h-[450px] lg:h-[550px] hover:border-demon-red transition-colors duration-300"
            >
              {/* Background Character Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={category.image}
                  alt={`${category.character} Concept`}
                  className={`w-full h-full object-cover grayscale dark:grayscale-0 group-hover:grayscale-0 ${category.imageClass || 'object-center'}`}
                />
              </div>

              {/* Gradient overlays to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-demon-black via-white/40 dark:via-demon-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100 z-10"></div>

              {/* Dark overlay specifically for the hover state to read skills easily */}
              <div className="absolute inset-0 bg-black/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Character/Category info (Default state) */}
              <div className="absolute bottom-8 left-6 right-6 z-20 transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                <div className="flex flex-col space-y-2">
                  <div className="text-black dark:text-demon-red [&>svg]:w-8 [&>svg]:h-8 mb-1">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl xl:text-4xl font-extrabold text-demon-red uppercase leading-none tracking-tighter drop-shadow-md">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills info (Hover state) */}
              <div className="absolute inset-0 p-6 z-30 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-8 group-hover:translate-y-0">
                <div className="flex flex-col items-center text-center space-y-4 mb-6">
                  <div className="bg-white dark:bg-demon-red/20 p-3 rounded-xl text-black dark:text-demon-red shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold text-demon-red uppercase tracking-tighter drop-shadow-md">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-2 max-h-[250px] overflow-y-auto no-scrollbar">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-5 py-2.5 bg-gray-900 border border-gray-700 text-gray-100 text-base md:text-lg font-bold rounded-xl hover:border-demon-red hover:bg-black hover:text-white transition-all cursor-default shadow-md hover:shadow-demon-red/20 shadow-black/50"
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </span>
                  ))}
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

