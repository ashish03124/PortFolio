import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Flame } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Google Play Store Insights & Prediction",
      description: "Engineered a predictive framework to analyze app success factors. Utilized Random Forest algorithms to achieve 94% accuracy in performance forecasting, delivering actionable insights for developer strategic planning.",
      tech: ["Python", "NLP", "Random Forest", "Streamlit"],
      github: "https://github.com/ashish03124",
      demo: "#",
      image: "/photos/p1.png"
    },
    {
      title: "Real Estate Market Analytics Chatbot",
      description: "Implemented an AI-driven conversational agent that provides real-time market insights and property valuation trends, helping users navigate complex real estate data through natural language processing.",
      tech: ["Python", "NLP", "Flask", "ML Models"],
      github: "https://github.com/ashish03124",
      demo: "#",
      image: "/photos/p2.png"
    },
    {
      title: "Padhega - Educational Platform",
      description: "A student-centric educational platform with interactive learning modules. Optimized progress tracking and utilized Firebase for real-time information synchronization and user authentication.",
      tech: ["HTML/CSS/JS", "Firebase", "Real-time DB"],
      github: "https://github.com/ashish03124",
      demo: "#",
      image: "/photos/p3.png"
    },
    {
      title: "Human Action Patterns - Supervised Learning",
      description: "Developed a detection system for smart home environments that classifies human behavior patterns with high precision using sensor data streams and supervised learning algorithms.",
      tech: ["Python", "scikit-learn", "Machine Learning"],
      github: "https://github.com/ashish03124/Supervised-Learning-for-Human-Action-Recognition-In-Smart-Home",
      demo: "#",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Payment Fraud Detection - XGBoost API",
      description: "Deployed a high-performance machine learning API using XGBoost to identify fraudulent transaction patterns, significantly reducing financial risk through automated anomaly detection.",
      tech: ["Python", "Flask", "XGBoost"],
      github: "https://github.com/ashish03124/Payment-Fraud-Detection",
      demo: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dashboard For Unemployment",
      description: "Comprehensive data visualization and analysis dashboard tracking unemployment metrics and trends.",
      tech: ["Data Analysis", "Visualization", "Excel/Tableau"],
      github: "https://github.com/ashish03124/DashBoard-For-Unemployment",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Traffic Flow Pattern Analysis",
      description: "Conducted large-scale spatio-temporal analysis of vehicle GPS data to discover urban mobility patterns and optimize infrastructure planning through data-driven traffic modeling.",
      tech: ["Python", "Data Science", "Pandas"],
      github: "https://github.com/ashish03124/Traffic-Pattern-Analysis",
      demo: "#",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-demon-black transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative">
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
            className="text-4xl md:text-5xl font-extrabold text-black dark:text-white uppercase tracking-tighter"
          >
            Missions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-widest uppercase"
          >
            The Path of a Hashira
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-demon-black rounded-none md:rounded-3xl overflow-hidden border-2 border-black dark:border-white/5 hover:border-black dark:hover:border-demon-red/40 transition-all duration-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none dark:shadow-2xl dark:hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden border-b-2 border-black dark:border-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale dark:grayscale-0 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-demon-black via-transparent to-transparent opacity-100 dark:opacity-80"></div>

                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 bg-white dark:bg-demon-black/80 backdrop-blur-md p-2 rounded-none md:rounded-full border-2 border-black dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
                  <Flame className="w-5 h-5 text-black dark:text-demon-red" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white dark:bg-demon-red/10 text-black dark:text-demon-red rounded-none md:rounded-full text-[10px] font-black uppercase tracking-wider border border-black dark:border-demon-red/20 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">{t}</span>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-black dark:text-white mb-3 group-hover:text-gray-500 dark:group-hover:text-demon-red transition-colors">{project.title}</h3>
                <p className="text-gray-800 dark:text-gray-400 font-bold text-sm leading-relaxed mb-6 italic">"{project.description}"</p>

                <div className="flex items-center space-x-6">
                  <a href={project.github} className="flex items-center space-x-2 text-black hover:text-gray-500 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-black">
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  <a href={project.demo} className="flex items-center space-x-2 text-black hover:text-gray-500 dark:text-demon-red dark:hover:text-demon-flame transition-colors text-sm font-black">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Bottom Line Glow */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black dark:bg-demon-red duration-500 transition-all group-hover:w-full dark:shadow-[0_0_15px_rgba(185,28,28,0.8)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
