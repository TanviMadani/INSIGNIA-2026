import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Preloader
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
      className="fixed inset-0 z-50 bg-[#0B0F19] flex flex-col items-center justify-center text-white"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-end mb-4">
        <span className="text-9xl font-black tracking-tighter italic">{count}</span>
        <span className="text-4xl font-bold mb-4 text-[#F43F5E]">%</span>
      </div>
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-[#F43F5E]"
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
        />
      </div>
      <p className="mt-4 font-mono text-sm tracking-[0.3em] uppercase opacity-50">
        Calibrating Arena Sensors
      </p>
    </motion.div>
  );
};

export default Preloader;
