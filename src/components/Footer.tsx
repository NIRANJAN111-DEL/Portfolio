import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-bg-dark/80 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Credits */}
        <div className="text-left flex flex-col items-center md:items-start gap-1">
          <div className="font-display font-black text-lg text-white">
            Niranjan N<span className="text-primary">.</span>
          </div>
          <p className="text-[10px] font-mono text-muted tracking-wider uppercase">
            Designed & Developed by Niranjan N
          </p>
        </div>

        {/* Copyright & Info */}
        <div className="text-xs text-muted font-sans md:text-center">
          &copy; 2026 Niranjan N. All rights reserved.
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <a
              href="https://github.com/NIRANJAN111-DEL"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-white transition-colors cursor-none"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/niranjan-n-aaa1692a3/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-white transition-colors cursor-none"
            >
              <FiLinkedin size={16} />
            </a>
          </div>

          {/* Scroll top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-accent hover:text-white cursor-none transition-all hover:scale-105 active:scale-95"
            title="Scroll to Top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
