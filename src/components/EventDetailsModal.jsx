import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EventDetailsModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#0F1522] border border-[#F43F5E]/30 rounded-2xl shadow-[0_0_50px_rgba(244,63,94,0.15)] max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background elements */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${event.color} opacity-5 rounded-full blur-3xl -mr-32 -mt-32`}></div>
            <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br ${event.color} opacity-5 rounded-full blur-3xl -ml-32 -mb-32`}></div>

            {/* Poster */}
            {event.poster && (
              <div className="w-full aspect-[210/297] max-h-64 bg-slate-800/80 overflow-hidden">
                <img
                  src={event.poster}
                  alt={`${event.title} poster`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-8 relative z-10 min-w-0">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-br ${event.color} rounded-lg text-white`}>
                  {event.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-3xl font-black text-white uppercase italic">{event.title}</h2>
                    <span className="font-mono text-xs text-[#F43F5E] uppercase border border-[#F43F5E]/30 px-2 py-1 rounded">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-[#CCF381] font-mono text-sm">{event.shortDesc}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-[#CCF381] font-bold uppercase text-sm tracking-widest mb-3">Description</h3>
                <p className="text-slate-300 text-base leading-relaxed break-words">{event.longDesc}</p>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="text-[#CCF381] font-bold uppercase text-xs tracking-widest mb-2">Date</h4>
                  <p className="text-slate-400 text-sm">{event.date}</p>
                </div>
                <div>
                  <h4 className="text-[#CCF381] font-bold uppercase text-xs tracking-widest mb-2">Time</h4>
                  <p className="text-slate-400 text-sm">{event.time}</p>
                </div>
                
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-slate-800">
                <button className="flex-1 py-3 px-6 rounded-lg bg-[#F43F5E] text-white text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#F43F5E]/90 transition-colors">
                  Register Now
                </button>
                <button 
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 text-sm font-mono font-bold uppercase tracking-wider hover:border-[#CCF381] hover:text-[#CCF381] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventDetailsModal;
