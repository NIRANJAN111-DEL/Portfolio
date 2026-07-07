import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiShield, FiSliders, FiFileText } from 'react-icons/fi';
import confetti from 'canvas-confetti';

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  icon: ReactNode;
  description: string;
  badgeText: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Smart India Hackathon (SIH) 2025',
      issuer: 'Ministry of Education, Gov of India',
      badgeText: 'Shortlisted',
      icon: <FiShield className="text-accent w-6 h-6" />,
      description: 'Shortlisted for national finals in building advanced software solutions for governmental department workflow optimizations.',
    },
    {
      id: 2,
      title: 'NPTEL Certification in Software Testing',
      issuer: 'IIT Kharagpur / NPTEL Elite certification',
      badgeText: 'Certified',
      icon: <FiAward className="text-gradient-gold w-6 h-6" />,
      description: 'Completed rigorous curriculum in unit testing methodologies, integration tests, structural checks, and mutation checks.',
    },
    {
      id: 3,
      title: 'NPTEL Elite Certification in Education for Sustainable Development',
      issuer: 'IIT Madras / NPTEL Elite',
      badgeText: 'Elite Certified',
      icon: <FiFileText className="text-secondary w-6 h-6" />,
      description: 'Academic program reviewing socio-economic sustainable technologies, systems-thinking, and design paradigms.',
    },
    {
      id: 4,
      title: 'NPTEL Certification in Fundamental Algorithms Design and Analysis',
      issuer: 'IIT Roorkee / NPTEL',
      badgeText: 'Certified',
      icon: <FiSliders className="text-primary w-6 h-6" />,
      description: 'Certified expertise in algorithmic complexities, dynamic programming, greed models, and graph-traversal system optimization.',
    }
  ];

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
    });
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-secondary font-mono mb-2">
            05 / Recognition
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Achievements & Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={handleTriggerConfetti}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/5 text-left flex flex-col justify-between min-h-[240px] cursor-none shadow-md group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Row: Icon and Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                  {item.badgeText}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="font-display font-extrabold text-white text-sm md:text-base mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-3">
                  {item.issuer}
                </span>
                <p className="text-xs text-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
