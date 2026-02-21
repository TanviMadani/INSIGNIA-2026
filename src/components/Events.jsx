import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { EVENTS } from '../data/events.jsx';
import EventDetailsModal from './EventDetailsModal';

// 7. Events Section
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="py-32 bg-[#0f1522] relative border-t border-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeader title="Events" subtitle="Choose Your Sport" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0B0F19] border border-slate-800 overflow-hidden flex flex-col"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-duration-500`} />

              {/* Poster box – A4 portrait ratio (210:297) - temporarily smaller */}
              <div className="w-full aspect-[210/297] max-h-48 bg-slate-800/80 border-b border-slate-800 overflow-hidden flex-shrink-0">
                {event.poster ? (
                  <img
                    src={event.poster}
                    alt={`${event.title} poster`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600">
                    <span className="font-mono text-xs uppercase tracking-widest">Poster</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 relative z-10 flex flex-col min-h-0">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-slate-800/50 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                     {event.icon}
                   </div>
                   <span className="font-mono text-xs text-[#F43F5E] uppercase border border-[#F43F5E]/30 px-2 py-1 rounded">
                     {event.date}
                   </span>
                </div>
                
                <h3 className="text-2xl font-black text-white uppercase italic mb-2">{event.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{event.shortDesc}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-800/50 flex items-center gap-3">
                  <button className="flex-1 py-2.5 px-4 rounded-lg bg-[#F43F5E] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F43F5E]/90 transition-colors">
                    Register
                  </button>
                  <button 
                    onClick={() => handleDetailsClick(event)}
                    className="flex-1 py-2.5 px-4 rounded-lg border border-slate-600 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider hover:border-[#CCF381] hover:text-[#CCF381] transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
              
              {/* Background Number */}
              <div className="absolute -bottom-10 -right-4 text-[120px] font-black text-slate-800/20 italic select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <EventDetailsModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Events;
