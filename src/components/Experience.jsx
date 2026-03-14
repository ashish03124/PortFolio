import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Edunet AICTE - Virtual Internship",
      role: "Machine Learning Intern",
      duration: "Jun 2025 - Aug 2025",
      desc: "Established metrics-driven applications, implemented input validation and anomaly detection, built statistics dashboards, and integrated ML models via APIs.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const education = [
    {
      school: "Lovely Professional University | Phagwara, Punjab",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "Aug 2023 - Present",
      desc: "CGPA: 8.5 | Specializing in Data Science & Machine Learning",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      school: "Chhatrapati Shivaji Junior Science College | Jalgaon, Maharashtra",
      degree: "Intermediate",
      duration: "Apr 2021 – Jun 2023",
      desc: "Percentage: 80%",
      icon: <Award className="w-5 h-5" />
    },
    {
      school: "L. H. Patil English Medium School | Jalgaon, Maharashtra",
      degree: "Matriculation",
      duration: "Mar 2021",
      desc: "Percentage: 92%",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-demon-charcoal transition-colors duration-300 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.15] pointer-events-none"
      >
        <source src="/photos/j3.mp4" type="video/mp4" />
      </video>

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
            Battle & Training
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-widest uppercase text-center"
          >
            Missions & Disciplines
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience Column */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="h-8 w-1.5 bg-black dark:bg-demon-red"></div>
              <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-wider">Experience</h3>
            </div>
            
            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-4 border-black dark:border-l dark:border-white/10 group"
                >
                  <div className="absolute left-[-11px] dark:left-[-9px] top-0 bg-white dark:bg-demon-black p-1 rounded-full border-2 border-black dark:border-white/20 group-hover:border-black dark:group-hover:border-demon-red transition-colors">
                    <div className="bg-black text-white dark:bg-demon-red/20 dark:text-demon-red p-1 rounded-full">
                      {exp.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-white/5 p-6 rounded-none md:rounded-2xl border-2 border-black dark:border-white/5 group-hover:border-black dark:group-hover:border-demon-red/20 transition-all hover:bg-white dark:hover:bg-white/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none dark:shadow-none">
                    <div className="flex flex-col xl:flex-row justify-between xl:items-start mb-4 gap-2 xl:gap-0">
                      <h4 className="text-2xl md:text-3xl font-black text-black dark:text-white leading-tight">{exp.role}</h4>
                      <span className="text-xs md:text-sm font-black text-black border-2 border-black dark:font-mono dark:text-demon-flame uppercase dark:border-demon-red/40 px-3 py-1.5 rounded tracking-widest whitespace-nowrap self-start">{exp.duration}</span>
                    </div>
                    <p className="text-black dark:text-demon-red text-lg md:text-xl font-black mb-4 tracking-tighter uppercase leading-snug">{exp.company}</p>
                    <p className="text-gray-800 dark:text-gray-400 font-bold text-base md:text-lg italic leading-relaxed">"{exp.desc}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="h-8 w-1.5 bg-black dark:bg-demon-red"></div>
              <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-wider">Education</h3>
            </div>
            
            <div className="space-y-10">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-4 border-black dark:border-l dark:border-white/10 group"
                >
                  <div className="absolute left-[-11px] dark:left-[-9px] top-0 bg-white dark:bg-demon-black p-1 rounded-full border-2 border-black dark:border-white/20 group-hover:border-black dark:group-hover:border-demon-red transition-colors">
                    <div className="bg-black text-white dark:bg-demon-red/20 dark:text-demon-red p-1 rounded-full">
                      {edu.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-white/5 p-6 rounded-none md:rounded-2xl border-2 border-black dark:border-white/5 group-hover:border-black dark:group-hover:border-demon-red/20 transition-all hover:bg-white dark:hover:bg-white/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none dark:shadow-none">
                    <div className="flex flex-col xl:flex-row justify-between xl:items-start mb-4 gap-2 xl:gap-0">
                      <h4 className="text-2xl md:text-3xl font-black text-black dark:text-white leading-tight">{edu.degree}</h4>
                      <span className="text-xs md:text-sm font-black text-black border-2 border-black dark:font-mono dark:text-demon-flame uppercase dark:border-demon-red/40 px-3 py-1.5 rounded tracking-widest whitespace-nowrap self-start">{edu.duration}</span>
                    </div>
                    <p className="text-black dark:text-demon-red text-lg md:text-xl font-black mb-4 tracking-tighter uppercase leading-snug">{edu.school}</p>
                    <p className="text-gray-800 dark:text-gray-400 font-bold text-base md:text-lg italic leading-relaxed">"{edu.desc}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Experience;
