import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import developerImg from '../assets/niranjan.png';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Niranjan_N_Resume.pdf';
    link.download = 'Niranjan_N_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 80,
      spread: 60,
      colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 md:py-32"
    >
      {/* Mouse follow spotlight glow rendered BELOW the text (z-0) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,rgba(139,92,246,0.03)_45%,transparent_75%)] transition-transform duration-500 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Dynamic Animated background mesh circles */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0 animate-float-blob-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-secondary/8 rounded-full blur-[140px] pointer-events-none z-0 animate-float-blob-2" />
      <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] bg-accent/4 rounded-full blur-[140px] pointer-events-none z-0 animate-float-blob-3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Greeting Tag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 glass-panel px-4 py-1.5 rounded-full border border-white/10 text-xs text-accent font-semibold tracking-widest uppercase mb-6 font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Available for Opportunities</span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-display font-black text-5xl md:text-7xl leading-tight tracking-tight text-white mb-2">
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient-purple-cyan block mt-1">Niranjan N</span>
          </h1>

          {/* Styled Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl md:text-4xl font-extrabold tracking-wide text-gradient-purple-cyan mb-4"
          >
            Full-Stack Developer
          </motion.h2>

          {/* New Resume Skills Badges UI */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            {['Java', 'JavaScript', 'Python', 'MySQL', 'React'].map((skill) => (
              <span 
                key={skill}
                className="glass-panel px-3.5 py-1.5 rounded-full border border-white/5 text-[10px] md:text-xs font-mono text-muted hover:text-white hover:border-primary/40 transition-colors cursor-none"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed mb-10 font-sans">
            Information Technology undergraduate with a strong interest in Full-Stack Development and software engineering. Experienced in working with Java, JavaScript, Python, and MySQL to build responsive and practical applications.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {/* CTA 1: Projects */}
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-bg-dark hover:bg-slate-100 font-display font-semibold text-xs tracking-wider uppercase px-6 py-4 rounded-full flex items-center gap-2 cursor-none shadow-xl transition-all"
            >
              <span>View Projects</span>
              <FiArrowRight className="text-sm" />
            </motion.button>

            {/* CTA 2: Resume */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel text-white hover:bg-white/10 font-display font-semibold text-xs tracking-wider uppercase px-6 py-4 rounded-full flex items-center gap-2 border border-white/10 cursor-none shadow-lg transition-all"
            >
              <FiDownload className="text-sm text-accent" />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/NIRANJAN111-DEL"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-primary/50 transition-all cursor-none"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/niranjan-n-aaa1692a3/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-secondary/50 transition-all cursor-none"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Visual Avatar / Core Visual */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Custom Glowing Rings (Animated energy core style avatar) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-double border-accent/15"
            />
            
            {/* Core glowing mesh sphere visual */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 0 25px rgba(59, 130, 246, 0.1)',
                  '0 0 45px rgba(139, 92, 246, 0.2)',
                  '0 0 25px rgba(59, 130, 246, 0.1)',
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full glass-panel border border-white/10 flex items-center justify-center overflow-hidden z-10"
            >
              {/* Outer gradient mesh sphere */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/10 to-accent/5 mix-blend-color-dodge opacity-80" />
              
              {/* Developer Image */}
              <motion.img 
                src={developerImg}
                alt="Niranjan N"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full h-full object-cover object-top hover:scale-[1.03] transition-all duration-700 select-none pointer-events-none"
              />
            </motion.div>

            {/* Orbiting particles/dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-full flex items-center justify-between"
            >
              <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_#06B6D4]" />
              <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#8B5CF6]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-muted font-mono">Explore</span>
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-muted hover:text-white transition-colors cursor-none p-1"
        >
          <FiChevronDown size={22} className="text-accent" />
        </motion.button>
      </div>
    </section>
  );
}
