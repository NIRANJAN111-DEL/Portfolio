import { motion } from 'framer-motion';
import { FiBookOpen, FiBookmark, FiCalendar } from 'react-icons/fi';

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  scoreLabel: string;
  score: string;
  details: string[];
}

export default function Education() {
  const educationHistory: EducationItem[] = [
    {
      year: '2023 – 2027',
      degree: 'B.Tech Information Technology',
      institution: 'Karpagam Institute of Technology, Coimbatore',
      scoreLabel: 'Current CGPA',
      score: '7.71',
      details: [
        'Specializing in systems architecture, object-oriented concepts, relational databases, and computer networks.',
        'Analyzing computational complexities and building scalable software codebases.',
        'Shortlisted for Smart India Hackathon 2025.'
      ]
    },
    {
      year: '2022 – 2023',
      degree: 'Higher Secondary Course (HSC)',
      institution: 'Sri Ramakrishna Matriculation School, Perambalur',
      scoreLabel: 'Aggregate Score',
      score: '87.33%',
      details: [
        'Major studies in Mathematics, Physics, Chemistry, and Computer Science.',
        'Established strong foundation in logical analysis and structural mathematical modeling.'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-accent font-mono mb-2">
            04 / Academic Path
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
          {educationHistory.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group text-left"
            >
              {/* Timeline Orb Point */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full border border-white/20 bg-bg-dark flex items-center justify-center group-hover:border-primary/80 transition-colors duration-300">
                <div className="w-2.5 h-2.5 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#06B6D4]" />
              </div>

              {/* Float Year Box on Left (Desktop only) */}
              <div className="hidden md:block absolute -left-44 top-1.5 w-28 text-right font-display font-extrabold text-sm text-gradient-purple-cyan flex items-center justify-end gap-1.5">
                <FiCalendar className="text-xs text-primary" />
                <span>{item.year}</span>
              </div>

              {/* Mobile Year Box */}
              <div className="md:hidden flex items-center gap-1.5 font-display font-extrabold text-xs text-gradient-purple-cyan mb-2">
                <FiCalendar className="text-xs text-primary" />
                <span>{item.year}</span>
              </div>

              {/* Content Card */}
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-3xl border border-white/5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg md:text-xl text-white leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-muted font-semibold mt-1 font-display flex items-center gap-1">
                      <FiBookOpen className="text-primary" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                  
                  {/* Score Tag */}
                  <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-2 text-left self-start">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted block">
                      {item.scoreLabel}
                    </span>
                    <span className="text-sm font-display font-black text-accent">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Details List */}
                <ul className="space-y-2 mt-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed font-sans">
                      <FiBookmark className="text-primary mt-1 shrink-0 text-[10px]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
