import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // Total loading time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          onFinished();
        }, 300);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full bg-[#050816] z-50 flex flex-col items-center justify-center cursor-none"
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-6 max-w-md w-full px-6">
        {/* Luxury Logo Branding */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-4xl tracking-widest text-white mb-2"
        >
          NIRANJAN N<span className="text-primary font-sans">.</span>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-widest text-muted font-mono"
        >
          Crafting Scalable Web Environments
        </motion.p>

        {/* Dynamic Glowing Progress Indicator */}
        <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden mt-6">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter Number */}
        <div className="flex justify-between w-full mt-2 text-[10px] font-mono text-muted tracking-wider">
          <span>INITIALIZING</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
