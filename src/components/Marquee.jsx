import React from 'react';
import { motion } from 'framer-motion';
import { Star, Flame } from 'lucide-react';

// 5. Marquee
const Marquee = () => {
  return (
    <div className="py-8 bg-[#CCF381] overflow-hidden -skew-y-2 border-y-4 border-black">
      <motion.div 
        className="flex whitespace-nowrap text-black font-black text-4xl uppercase italic tracking-tighter"
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="mx-8">Level Up Your Game</span>
            <Star className="fill-black w-8 h-8" />
            <span className="mx-8">Breaking Limits</span>
            <Flame className="fill-black w-8 h-8" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
