import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiServer, FiUsers, FiClock, FiActivity, FiArrowRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  category: 'SaaS' | 'Education Platform';
  description: string;
  bullets: string[];
  tech: string[];
  metrics: { icon: ReactNode; label: string; value: string }[];
  liveLink: string;
  githubLink: string;
  visualMock: ReactNode;
}

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'SaaS' | 'Education'>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'LinkFlow Pro',
      category: 'SaaS',
      description: 'Full Stack SaaS URL Shortener built with React 19, Vite, Tailwind CSS, Express.js, MongoDB, and JWT.',
      bullets: [
        'Developed a full-stack SaaS URL shortening platform with JWT authentication and role-based access control.',
        'Implemented QR codes, password protection, custom aliases, link expiration, and CSV import/export.',
        'Built analytics dashboard for clicks, browsers, devices, operating systems, locations, and traffic.',
        'Configured Docker, GitHub Actions, Vercel, and Render deployment.'
      ],
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'Express.js', 'MongoDB', 'JWT', 'Docker', 'GitHub Actions'],
      liveLink: 'https://linkflow-pro.vercel.app',
      githubLink: 'https://github.com/NIRANJAN111-DEL/URL_Shortener_Pro',
      metrics: [
        { icon: <FiServer className="w-3.5 h-3.5" />, label: 'Uptime', value: '99.9%' },
        { icon: <FiClock className="w-3.5 h-3.5" />, label: 'Latency Reduction', value: '50%' }
      ],
      visualMock: (
        <div className="w-full h-full bg-[#080b1e] rounded-t-2xl p-4 border-b border-white/5 relative overflow-hidden flex flex-col justify-between select-none">
          {/* Header Browser Bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="bg-white/5 border border-white/5 rounded-full px-4 py-0.5 text-[8px] font-mono text-muted tracking-wide w-48 text-center truncate">
              linkflow.pro/analytics/short
            </div>
            <div className="w-4 h-4 rounded bg-white/5" />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2.5 my-3">
            <div className="bg-white/[0.01] border border-white/5 p-2 rounded-xl text-left">
              <span className="text-[7px] font-mono text-muted uppercase block tracking-wider mb-0.5">Clicks</span>
              <span className="font-display font-black text-xs text-accent">14,240</span>
            </div>
            <div className="bg-white/[0.01] border border-white/5 p-2 rounded-xl text-left">
              <span className="text-[7px] font-mono text-muted uppercase block tracking-wider mb-0.5">Geos</span>
              <span className="font-display font-black text-xs text-secondary">32 Countries</span>
            </div>
            <div className="bg-white/[0.01] border border-white/5 p-2 rounded-xl text-left">
              <span className="text-[7px] font-mono text-muted uppercase block tracking-wider mb-0.5">Scans</span>
              <span className="font-display font-black text-xs text-primary">2,840</span>
            </div>
          </div>

          {/* Interactive Chart Visual */}
          <div className="flex-1 flex items-end gap-1.5 h-14 px-2 pt-2 border-t border-white/5">
            {[40, 65, 45, 80, 55, 95, 75, 110, 85, 130, 95, 120].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full">
                <motion.div
                  className="w-full bg-gradient-to-t from-primary/20 via-primary/60 to-accent rounded-t-[3px]"
                  style={{ height: `${h * 0.3}px` }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Smart Student Hub',
      category: 'Education Platform',
      description: 'Complete student accreditation and placement management platform built with React (Vite), Tailwind CSS, Node.js, Express.js, MySQL, and JWT.',
      bullets: [
        'Developed a student accreditation and portfolio platform using React, Node.js, Express.js, and MySQL.',
        'Implemented JWT authentication and role-based access for students, faculty, placement officers, and administrators.',
        'Built REST APIs, Placement Readiness Score (PRS), dashboards, and recruitment analytics.',
        'Integrated secure certificate upload and verification using Multer.'
      ],
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Multer'],
      liveLink: 'https://smart-student-hub.vercel.app',
      githubLink: 'https://github.com/NIRANJAN111-DEL/Smart_Student_Hub',
      metrics: [
        { icon: <FiUsers className="w-3.5 h-3.5" />, label: 'Active Profiles', value: '1.2k+' },
        { icon: <FiActivity className="w-3.5 h-3.5" />, label: 'Placement Rate', value: '94%' }
      ],
      visualMock: (
        <div className="w-full h-full bg-[#07091c] rounded-t-2xl p-4 border-b border-white/5 relative overflow-hidden flex flex-col justify-between select-none">
          {/* Header Browser Bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="bg-white/5 border border-white/5 rounded-full px-4 py-0.5 text-[8px] font-mono text-muted tracking-wide w-48 text-center truncate">
              hub.karpagam.edu/dashboard
            </div>
            <div className="w-4 h-4 rounded bg-white/5" />
          </div>

          {/* Left Sidebar and Main Pane */}
          <div className="flex gap-3 my-3 flex-1 items-stretch text-left">
            {/* Sidebar list items */}
            <div className="w-1/4 flex flex-col gap-2 border-r border-white/5 pr-2">
              <span className="text-[5px] font-mono text-muted uppercase tracking-wider block mb-0.5">Navigation</span>
              <div className="h-4 rounded bg-primary/20 flex items-center px-1.5 gap-1 w-full border border-primary/10">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-[5px] font-bold text-white uppercase tracking-wider">Home</span>
              </div>
              <div className="h-4 rounded bg-white/[0.01] flex items-center px-1.5 gap-1 w-full border border-transparent">
                <div className="w-1 h-1 rounded-full bg-muted/40" />
                <span className="text-[5px] text-muted uppercase tracking-wider">Accred</span>
              </div>
              <div className="h-4 rounded bg-white/[0.01] flex items-center px-1.5 gap-1 w-full border border-transparent">
                <div className="w-1 h-1 rounded-full bg-muted/40" />
                <span className="text-[5px] text-muted uppercase tracking-wider">Placements</span>
              </div>
            </div>

            {/* Content area student profile card */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="bg-white/[0.02] border border-white/5 p-2 rounded-xl flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-secondary to-accent flex items-center justify-center text-[7px] font-black text-white">N</div>
                  <div>
                    <h5 className="text-[7px] font-bold text-white leading-none">Niranjan N</h5>
                    <span className="text-[5px] text-muted font-mono leading-none">B.Tech IT</span>
                  </div>
                </div>
                <span className="text-[5px] text-emerald-400 font-mono bg-emerald-400/10 border border-emerald-400/25 px-1 rounded-full">Active</span>
              </div>

              {/* Progress Gauges */}
              <div className="flex gap-2 justify-start pt-1.5">
                <div className="flex-1 bg-white/[0.01] border border-white/5 p-2 rounded-xl text-left flex flex-col justify-between">
                  <span className="text-[5px] text-muted tracking-widest font-mono uppercase block mb-1">GPA Score</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-display font-black text-accent">7.71</span>
                    <span className="text-[6px] text-muted">/10</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/[0.01] border border-white/5 p-2 rounded-xl text-left flex flex-col justify-between">
                  <span className="text-[5px] text-muted tracking-widest font-mono uppercase block mb-1">Placements</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-display font-black text-secondary">94%</span>
                    <span className="text-[5px] text-emerald-400 font-mono">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'SaaS') return p.category === 'SaaS';
    if (filter === 'Education') return p.category === 'Education Platform';
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary font-mono mb-2">
              03 / Selected Works
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white">
              Projects
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 p-1 rounded-full backdrop-blur-md self-start md:self-end">
            {(['All', 'SaaS', 'Education'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-none ${
                  filter === cat 
                    ? 'bg-white/10 text-white shadow-md' 
                    : 'text-muted hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between group shadow-lg"
              >
                {/* Visual Mock Top */}
                <div className="h-44 md:h-52 w-full relative overflow-hidden bg-black/40 group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
                  {project.visualMock}
                </div>

                {/* Content Block */}
                <div className="p-6 md:p-8 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-2">
                      {project.category}
                    </span>

                    <h3 className="font-display font-black text-xl md:text-2xl text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs md:text-sm text-muted leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 pl-1">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed font-sans">
                          <FiArrowRight className="text-primary mt-1 shrink-0 text-xs" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="bg-white/5 border border-white/5 text-muted px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary">
                            {metric.icon}
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-muted uppercase tracking-wider block">
                              {metric.label}
                            </span>
                            <span className="text-xs font-display font-extrabold text-white">
                              {metric.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-bg-dark font-display font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-full flex items-center gap-1.5 cursor-none shadow-md transition-transform hover:bg-slate-100 active:scale-95"
                      >
                        <FiGithub size={14} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
