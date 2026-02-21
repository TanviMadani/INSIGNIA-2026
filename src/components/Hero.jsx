import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { THEME } from '../constants/theme';

// 4. Hero Section
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[64px] md:blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#F43F5E]/20 rounded-full blur-[64px] md:blur-[128px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-[#CCF381]/30 rounded-full bg-[#CCF381]/10 backdrop-blur-sm mb-4 md:mb-8"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#CCF381] animate-pulse" />
          <span className="font-mono text-[#CCF381] text-[10px] md:text-xs tracking-widest uppercase">Live from the Arena</span>
        </motion.div>

        <h1 className={`${THEME.fonts.display} text-[20vw] md:text-[15vw] leading-[0.8] text-white select-none`}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insignia
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 md:gap-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600"
          >
            <span className="text-[#F43F5E] text-[6vw] md:text-[5vw] align-top tracking-normal font-sans">20</span>
            26
          </motion.div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 md:mt-8 max-w-xl mx-auto text-slate-400 text-sm md:text-lg font-mono leading-relaxed px-4"
        >
          The intersection of <span className="text-[#CCF381]">athletic spirit</span> and <span className="text-[#F43F5E]">digital mastery</span>. 
          Welcome to the flagship event of the year.
        </motion.p>
      </motion.div>

      {/* Hero Interactive Elements */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-between px-4 md:px-10 items-end">
        <div className="hidden md:block font-mono text-xs text-slate-500 max-w-[200px]">
          LOCATION: CENTRAL AUDITORIUM<br/>
          COORDS: 23.0225° N, 72.5714° E
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto"
        >
          <MousePointer2 className="text-white opacity-50 w-4 h-4 md:w-5 md:h-5" />
        </motion.div>
        <div className="hidden md:block font-mono text-xs text-slate-500 max-w-[200px] text-right">
          SCROLL TO EXPLORE<br/>
          THE ARENA IS OPEN
        </div>
      </div>
    </section>
  );
};

export default Hero;
