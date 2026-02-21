import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

// 10. Footer
const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer className="bg-[#0B0F19] border-t border-[#1E293B] pt-20 pb-10">
      {/* Podium section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16 w-full">
          <div className="flex justify-center items-end gap-4 mb-12">
            {/* 2nd place */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-3xl mb-2">🥈</span>
              <div className="w-20 md:w-28 h-20 bg-gradient-to-t from-[#C0C0C0]/40 to-[#C0C0C0]/20 rounded-t-lg flex items-center justify-center">
                <span className="text-white/60 font-bold text-sm">2ND</span>
              </div>
            </motion.div>

            {/* 1st place */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-4xl mb-2">🏆</span>
              <div className="w-24 md:w-32 h-32 bg-gradient-to-t from-[#FFD700]/40 to-[#FFD700]/20 rounded-t-lg flex items-center justify-center">
                <span className="text-[#FFD700] font-bold">1ST</span>
              </div>
            </motion.div>

            {/* 3rd place */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-3xl mb-2">🥉</span>
              <div className="w-20 md:w-28 h-16 bg-gradient-to-t from-[#CD7F32]/40 to-[#CD7F32]/20 rounded-t-lg flex items-center justify-center">
                <span className="text-white/60 font-bold text-sm">3RD</span>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-white/50 text-lg italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Will you stand on the podium?
          </motion.p>
        </div>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="mb-10 p-4 bg-[#0F1522] rounded-full">
          <h2 className="font-black text-4xl text-[#F1F5F9] tracking-tighter">INSIGNIA<span className="text-[#F43F5E]"> 2026</span></h2>
        </div>
        
        <div className="flex gap-8 mb-12">
          <motion.a 
            href="https://www.linkedin.com/company/association-of-computer-engineering-students" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: "#F43F5E" }}
            className="text-[#94A3B8] hover:text-[#F43F5E] transition-colors p-3 bg-[#0F1522] rounded-full border border-[#1E293B]"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/aces_itnu" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: "#F43F5E" }}
            className="text-[#94A3B8] hover:text-[#F43F5E] transition-colors p-3 bg-[#0F1522] rounded-full border border-[#1E293B]"
          >
            <Instagram size={24} />
          </motion.a>
        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center w-full max-w-4xl mb-16 border-b border-[#1E293B] pb-12">
          <div className="space-y-3">
            <h4 className="text-[#CCF381] font-bold uppercase text-sm tracking-widest">Location</h4>
            <p className="text-[#94A3B8] text-sm leading-relaxed">Nirma University<br/>Ahmedabad, Gujarat</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[#CCF381] font-bold uppercase text-sm tracking-widest">Contact</h4>
            <p className="text-[#94A3B8] text-sm leading-relaxed">aces_itnu@nirmauni.ac.in<br/>+91 1234567890</p>
          </div>
        </div>

        <div className="text-[#94A3B8] text-xs font-medium flex flex-col md:flex-row items-center gap-4">
          <span>© 2026 INSIGNIA.</span>
          <span className="hidden md:inline w-1 h-1 bg-[#1E293B] rounded-full"></span>
          <p className="text-white/60 text-sm mt-2">
            Developed by{' '}
            <button 
              onClick={() => setShowCredits(true)}
              className="text-[#F43F5E] hover:underline hover:text-[#F43F5E]/80 transition-colors font-medium focus:outline-none"
            >
              Team ACES
            </button>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showCredits && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCredits(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0F1522] border border-[#F43F5E]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(244,63,94,0.15)] max-w-sm w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F43F5E]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F43F5E]/5 rounded-full blur-2xl -ml-10 -mb-10"></div>

              {/* Close button */}
              <button 
                onClick={() => setShowCredits(false)}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <span className="text-[#F43F5E]">{`{`}</span> 
                <span>Credits</span> 
                <span className="text-[#F43F5E]">{`}`}</span>
              </h3>
              
              <div className="space-y-8 relative z-10">
                <div className="text-center group">
                  <h4 className="text-[#CCF381] font-medium mb-3 text-xs uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">Developer Team</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="font-medium text-lg hover:text-[#F43F5E] transition-colors">Tanvi Madani</li>
                    <li className="font-medium text-lg hover:text-[#F43F5E] transition-colors">Bhavya Shah</li>
                    <li className="font-medium text-lg hover:text-[#F43F5E] transition-colors">Rachit Bhatia</li>
                  </ul>
                </div>
                                
              </div>

              <div className="mt-10 text-center relative z-10">
                <div className="w-12 h-1 bg-[#F43F5E]/20 mx-auto rounded-full mb-4"></div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Designed & Developed with ❤️</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
