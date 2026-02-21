import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { THEME } from '../constants/theme';

// 3. Section Title
const SectionHeader = ({ number, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-16 md:mb-24 relative pl-6 md:pl-0">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F43F5E] to-transparent md:hidden" />
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-baseline gap-4 mb-2"
      >
        <span className="h-[1px] w-12 bg-[#F43F5E] hidden md:block" />
        <span className="font-mono text-slate-400 text-sm md:text-base uppercase tracking-widest">{subtitle}</span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${THEME.fonts.display} text-5xl md:text-8xl text-white leading-[0.9]`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
