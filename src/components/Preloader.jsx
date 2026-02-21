import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap } from 'lucide-react';

// 2. Preloader – Sporty / Arena theme
const Preloader = ({ onComplete }) => {
const [count, setCount] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
      if (prev >= 100) {
      clearInterval(interval);
        setTimeout(onComplete, 500);
        return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white overflow-hidden"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Arena background */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1522] to-[#0B0F19]" />
        {/* Track lines */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,#1E293B_40px,#1E293B_42px)] opacity-40" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F43F5E]/30 to-transparent" />
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-[#CCF381]/20 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-[#CCF381]/20 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-[#F43F5E]/20 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-[#F43F5E]/20 rounded-br-lg" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Sport badge */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <Trophy className="text-[#CCF381] w-8 h-8" />
          <span className="font-mono text-large tracking-[0.4em] uppercase text-[#CCF381]">Loading...</span>
          <Zap className="text-[#F43F5E] w-8 h-8" />
        </motion.div>

        {/* Big count */}
        <div className="flex items-end mb-2">
          <motion.span 
            key={count}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-8xl md:text-9xl font-black tracking-tighter italic text-white drop-shadow-[0_0_30px_rgba(244,63,94,0.3)]"
          >
          {count}
          </motion.span>
          <span className="text-3xl md:text-4xl font-bold mb-2 text-[#F43F5E]">%</span>
        </div>

        {/* Track-style progress bar */}
        <div className="w-72 md:w-80 h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 mb-6">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#F43F5E] to-[#CCF381] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Labels */}
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/60">
          Welcome to INSIGNIA
        </p>
        <motion.p 
          className="mt-2 font-black text-lg md:text-xl tracking-widest uppercase text-[#CCF381]"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Let the battle begin.
        </motion.p>
        <p className="mt-6 font-mono text-[10px] tracking-[0.5em] uppercase text-slate-500">
          Get • Set • Go
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;