import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SCHEDULE_ITEMS = [
  { time: "09:00 AM", title: "Opening Ceremony", type: "Stadium" },
  { time: "11:00 AM", title: "Codemania Heats", type: "Track" },
  { time: "02:00 PM", title: "Repo Pitch", type: "Ring" },
  { time: "04:00 PM", title: "Tech Bingo", type: "Track" },
  { time: "06:00 PM", title: "Inquisitive Quiz", type: "Ring" },
  { time: "08:00 PM", title: "Design Derby", type: "Track" },
  { time: "10:00 PM", title: "CTF: Flags", type: "Ring" }
];

const TRACK_COLORS = [
  "from-red-500 to-pink-600",
  "from-green-400 to-emerald-600",
  "from-blue-400 to-indigo-600"
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative py-16 bg-[#0B0F19] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="mb-12">
          <SectionHeader title="Schedule" subtitle="March 14th - 15th" />
        </div>

        {/* The Track Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F43F5E] via-[#CCF381] to-[#0F1522] transform md:-translate-x-1/2 opacity-30 border-none border-0" style={{ borderStyle: 'dashed' }} />

        <div className="relative z-10">
          {SCHEDULE_ITEMS.map((item, idx) => {
            const color = TRACK_COLORS[idx % TRACK_COLORS.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-12 relative pl-8 md:pl-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Mobile Connector Dot */}
                <div className="absolute left-[-5px] top-6 md:hidden w-4 h-4 bg-[#0B0F19] border-2 border-[#F43F5E] rounded-full z-20" />

                {/* Schedule Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:w-5/12 bg-[#0F1522] border border-[#1E293B] p-6 rounded-2xl relative overflow-hidden group hover:border-[#CCF381] transition-all duration-300 shadow-2xl"
                >
                  <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[#F43F5E] text-sm font-bold">{item.time}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] border border-[#1E293B] px-3 py-1 rounded-full">{item.type}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mb-4 group-hover:text-[#F43F5E] transition-colors">
                      {item.title}
                    </h3>
                    
                  </div>
                </motion.div>

                {/* Desktop Connector */}
                <div className="hidden md:flex w-2/12 justify-center items-center">
                  <div className="w-6 h-6 bg-[#0B0F19] border-4 border-[#F43F5E] rounded-full z-20 shadow-[0_0_20px_rgba(244,63,94,0.5)]" />
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
