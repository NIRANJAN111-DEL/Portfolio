import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiCpu, FiGlobe } from 'react-icons/fi';

interface HighlightItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const highlights: HighlightItem[] = [
    {
      icon: <FiBookOpen className="text-primary w-5 h-5" />,
      title: 'Education Focus',
      description: 'Information Technology undergraduate at Karpagam Institute of Technology, graduating in 2027.',
    },
    {
      icon: <FiCode className="text-secondary w-5 h-5" />,
      title: 'Technical Specialties',
      description: 'Skilled in Java, JavaScript, Python, MySQL, and Full-Stack Development.',
    },
    {
      icon: <FiCpu className="text-accent w-5 h-5" />,
      title: 'Relevant Coursework',
      description: 'Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.',
    },
    {
      icon: <FiGlobe className="text-emerald-400 w-5 h-5" />,
      title: 'Languages',
      description: 'Bilingual proficiency in Tamil and English.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-primary font-mono mb-2">
            01 / Profile
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Professional Summary
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          
          {/* Left Text Block */}
          <motion.div className="lg:col-span-6 text-left space-y-6" variants={itemVariants}>
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
              Dedicated IT undergraduate building scalable solutions.
            </h3>
            
            <p className="text-muted leading-relaxed text-sm md:text-base font-sans">
              I am an Information Technology undergraduate with a strong interest in Full-Stack Development and software engineering. Experienced in working with Java, JavaScript, Python, and MySQL to build responsive and practical applications. I enjoy solving real-world problems through technology, learning new tools, and working with others to create reliable and user-friendly software.
            </p>

            <p className="text-muted leading-relaxed text-sm md:text-base font-sans">
              Throughout my academic program at Karpagam Institute of Technology, I have focused heavily on core software engineering principles, analyzing complexity in algorithms, building secure RESTful APIs, and implementing robust backend systems coupled with responsive, modern user interfaces.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-5 rounded-2xl text-left border border-white/5 shadow-md">
                <span className="block font-display font-black text-2xl md:text-3xl text-gradient-purple-cyan">
                  7.71
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted mt-1.5 block">
                  B.Tech IT CGPA
                </span>
              </div>
              <div className="glass-panel p-5 rounded-2xl text-left border border-white/5 shadow-md">
                <span className="block font-display font-black text-2xl md:text-3xl text-accent">
                  87.33%
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-muted mt-1.5 block">
                  HSC Aggregate
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 text-left flex flex-col justify-between min-h-[170px] shadow-lg relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-display font-bold text-white text-sm md:text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
