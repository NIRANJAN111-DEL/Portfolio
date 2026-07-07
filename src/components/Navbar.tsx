import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Niranjan_N_Resume.pdf';
    link.download = 'Niranjan_N_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Dynamic celebration effect
    confetti({
      particleCount: 80,
      spread: 60,
      colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
    });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-bg-dark/70 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-1 font-display font-bold text-lg tracking-tight cursor-none"
          >
            <span className="text-white">Niranjan</span>
            <span className="text-primary transition-all duration-300 group-hover:text-accent">N</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 bg-white/[0.02] border border-white/5 px-6 py-2 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-xs tracking-wider uppercase font-semibold font-display transition-colors duration-300 cursor-none ${
                  activeSection === link.id ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-5 py-2.5 rounded-full overflow-hidden border border-white/10 bg-white/5 text-xs font-semibold tracking-wider uppercase flex items-center gap-2 cursor-none text-white hover:text-white transition-all shadow-md"
            >
              {/* Glowing animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <FiDownload className="text-sm text-accent group-hover:text-white transition-colors duration-300" />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={handleDownloadResume}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-accent cursor-none"
            >
              <FiDownload className="text-sm" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors p-1 cursor-none"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Glassmorphic Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[65px] left-0 w-full z-30 lg:hidden px-6 pb-6 pt-2 bg-bg-dark/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="flex flex-col gap-4 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-sm uppercase tracking-widest font-semibold py-2 cursor-none border-b border-white/[0.03] last:border-0 ${
                    activeSection === link.id ? 'text-primary' : 'text-muted'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
