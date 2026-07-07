import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiHtml5, SiCss, SiReact, 
  SiNodedotjs, SiExpress, 
  SiMysql, SiMongodb, SiGit, SiGithub, SiDocker, 
  SiGithubactions, SiFigma,
  SiAnthropic, SiPython
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiCode, FiLayers, FiCheckCircle, FiCpu } from 'react-icons/fi';

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  // Configured exactly as per resume (combining categories and including tools/frameworks mentioned)
  const categories: SkillCategory[] = [
    {
      title: 'Programming Languages & Web Technologies',
      skills: [
        { name: 'Java', icon: <FaJava className="w-5 h-5 text-[#007396]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
        { name: 'Python', icon: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
        { name: 'HTML5', icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
        { name: 'CSS', icon: <SiCss className="w-5 h-5 text-[#1572B6]" /> },
      ]
    },
    {
      title: 'Frameworks & Databases',
      skills: [
        { name: 'React', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="w-5 h-5 text-white" /> },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-[#4479A1]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
      ]
    },
    {
      title: 'Tools & Deployments',
      skills: [
        { name: 'Git', icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="w-5 h-5 text-white" /> },
        { name: 'VS Code', icon: <FiCode className="w-5 h-5 text-[#007ACC]" /> },
        { name: 'Claude', icon: <SiAnthropic className="w-5 h-5 text-[#D97706]" /> },
        { name: 'Codex', icon: <FiCpu className="w-5 h-5 text-[#10B981]" /> },
        { name: 'Docker', icon: <SiDocker className="w-5 h-5 text-[#2496ED]" /> },
        { name: 'GitHub Actions', icon: <SiGithubactions className="w-5 h-5 text-[#2088FF]" /> },
        { name: 'Figma', icon: <SiFigma className="w-5 h-5 text-[#F24E1E]" /> },
      ]
    }
  ];

  // Core Concepts listed in the resume
  const coreConcepts = [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'REST APIs',
    'Problem Solving'
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-secondary font-mono mb-2">
            02 / Capabilities
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Side: Skills Columns */}
          <div className="lg:col-span-8 space-y-10">
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 className="font-display font-extrabold text-sm text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-1 h-3 bg-primary rounded-full" />
                  <span>{cat.title}</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.03 }}
                      className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3 bg-white/[0.01] hover:bg-white/[0.04] transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0">
                        {skill.icon}
                      </div>
                      <span className="font-display font-bold text-xs text-white truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Core Concepts Badge Panel */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 rounded-3xl border border-white/5 bg-white/[0.01] space-y-6">
              <h3 className="font-display font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-3">
                <FiLayers className="text-accent" />
                <span>Core Concepts</span>
              </h3>
              
              <div className="flex flex-col gap-3">
                {coreConcepts.map((concept, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-center gap-3 text-xs text-muted font-medium bg-white/[0.02] p-3 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                  >
                    <FiCheckCircle className="text-accent shrink-0 text-sm" />
                    <span>{concept}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
