import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, UserPlus, ChevronRight, CheckCircle, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILS & CONSTANTS ---

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const COLORS = {
  midnight: "#0B0F19",
  deepArena: "#0F1522",
  crimson: "#F43F5E",
  volt: "#CCF381",
  slateLight: "#F1F5F9",
  slateDim: "#94A3B8",
};

// --- CSS/FRAMER-MOTION 3D ALTERNATIVES ---
// Replacing React-Three-Fiber with Framer Motion to prevent reconciler crashes in this environment
// while maintaining the high-end "Prestige Sports Tech" visual fidelity.

const FloatingOrb = ({ color, size, initialPos, animateTo, delay, duration }) => {
  return (
    <motion.div
      initial={{ x: initialPos.x, y: initialPos.y, opacity: 0, scale: 0.5 }}
      animate={{
        x: [initialPos.x, animateTo.x, initialPos.x],
        y: [initialPos.y, animateTo.y, initialPos.y],
        opacity: [0.6, 0.9, 0.6],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, #ffffff, ${color} 40%, #000000 90%)`,
        boxShadow: `0 0 30px ${color}60, inset -10px -10px 20px rgba(0,0,0,0.5)`,
        filter: "drop-shadow(0 0 15px rgba(255,255,255,0.2))"
      }}
    />
  );
};

const HeroSceneFX = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Red Orb (representing Cricket/Intensity) */}
      <FloatingOrb 
        color={COLORS.crimson} 
        size={180} 
        initialPos={{ x: '-30vw', y: '-20vh' }} 
        animateTo={{ x: '-25vw', y: '-10vh' }} 
        delay={0} 
        duration={8} 
      />
      {/* Green Orb (representing Tech/Tennis) */}
      <FloatingOrb 
        color={COLORS.volt} 
        size={120} 
        initialPos={{ x: '30vw', y: '25vh' }} 
        animateTo={{ x: '25vw', y: '15vh' }} 
        delay={2} 
        duration={6} 
      />
      {/* White Orb (representing Football/Core) */}
      <FloatingOrb 
        color="#ffffff" 
        size={250} 
        initialPos={{ x: '10vw', y: '-30vh' }} 
        animateTo={{ x: '5vw', y: '-20vh' }} 
        delay={1} 
        duration={10} 
      />
      
      {/* Ground Reflection */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[20vh] bg-gradient-to-t from-[#F43F5E] to-transparent opacity-10 blur-3xl rounded-[100%]"></div>
    </div>
  );
};

const AbstractNeonTrophy = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[400px]">
      {/* Background Glow */}
      <div className="absolute w-64 h-64 bg-[#F43F5E] opacity-10 rounded-full blur-[80px]"></div>

      {/* Rotating Tech Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 border border-dashed border-[#F43F5E] rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-64 h-64 border-[3px] border-[#CCF381] rounded-full opacity-40 border-t-transparent border-l-transparent"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-[#F1F5F9] rounded-full opacity-10"
      />

      {/* Core Trophy Element */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center"
      >
        <Trophy size={140} strokeWidth={1} className="text-[#F43F5E] drop-shadow-[0_0_25px_rgba(244,63,94,0.8)]" />
        {/* Inner energy core */}
        <div className="absolute w-10 h-10 bg-[#CCF381] rounded-full blur-xl opacity-60 mix-blend-screen"></div>
      </motion.div>
    </div>
  );
};

// --- SECTIONS ---

// 1. HERO
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0B0F19]">
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1E293B] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1522] via-transparent to-[#0B0F19] pointer-events-none z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* FX Scene (Replaced 3D with safe Framer Motion FX) */}
      <HeroSceneFX />

      {/* Main Content */}
      <div className="z-20 text-center px-4 max-w-6xl mx-auto mt-12 select-none">
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
            <h2 className="text-[#CCF381] font-bold tracking-[0.3em] text-sm md:text-xl mb-6 uppercase flex items-center justify-center gap-4">
                <span className="w-8 h-[2px] bg-[#CCF381]"></span>
                Prestige • Sports • Tech
                <span className="w-8 h-[2px] bg-[#CCF381]"></span>
            </h2>
            
            <h1 className="font-black text-6xl md:text-8xl lg:text-9xl text-[#F1F5F9] drop-shadow-2xl tracking-tighter leading-[0.9]">
                WELCOME TO <br/>
                <span className="relative inline-block">
                    <span className="absolute -inset-1 blur-lg bg-[#F43F5E]/30 rounded-lg"></span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] via-[#ff7e93] to-[#CCF381]">
                        INSIGNIA
                    </span>
                </span>
            </h1>
            
            <p className="font-medium text-[#94A3B8] text-lg md:text-2xl mt-8 max-w-3xl mx-auto leading-relaxed">
                Where the relentless spirit of sports meets the <span className="text-[#CCF381]">future of tech</span>.
            </p>
        </motion.div>

        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 243, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group mt-12 px-10 py-5 bg-[#F43F5E] text-[#F1F5F9] font-bold text-lg rounded-none skew-x-[-10deg] border border-transparent hover:border-[#CCF381] hover:bg-[#0B0F19] transition-all duration-300 relative overflow-hidden"
        >
            <span className="absolute inset-0 w-full h-full bg-[#CCF381] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left -z-10"></span>
            <span className="skew-x-[10deg] inline-block group-hover:text-[#0B0F19]">JOIN THE QUEST</span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[#94A3B8] text-xs tracking-widest uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#CCF381] to-transparent"></div>
      </motion.div>
    </section>
  );
};

// 2. ABOUT (Locker Room)
const About = () => {
    const timelineItems = [
        { year: '2022', title: 'The Inception', desc: 'First ever Insignia launched with 500+ participants.', icon: "🚀" },
        { year: '2023', title: 'Going National', desc: 'Teams from 5 states competed for the gold.', icon: "🏆" },
        { year: '2024', title: 'Digital Evolution', desc: 'Integrated e-sports and tech hackathons.', icon: "💻" },
        { year: '2026', title: 'The New Era', desc: 'Bigger, bolder, and more prestigious than ever.', icon: "⚡" },
    ];

    return (
        <section className="relative py-20 bg-[#0F1522] overflow-hidden">
             {/* Asymmetrical grid */}
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Left: Timeline */}
                <div className="space-y-8 pl-4 md:pl-0">
                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                    >
                        <h2 className="font-extrabold text-4xl md:text-5xl text-[#F1F5F9] mb-2 tracking-tight">THE LEGACY</h2>
                        <div className="h-1 w-24 bg-[#F43F5E] mb-8"></div>
                        <p className="text-[#94A3B8] text-lg mb-12 max-w-md">
                            From a small college event to a national phenomenon. Walk through the history of glory.
                        </p>
                    </motion.div>

                    <div className="relative space-y-8 border-l-2 border-[#1E293B] pl-8 ml-4 md:ml-0">
                        {timelineItems.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <span className="absolute -left-[41px] top-1 flex items-center justify-center w-6 h-6 bg-[#0B0F19] border-2 border-[#CCF381] rounded-full group-hover:scale-125 transition-transform duration-300">
                                    <div className="w-2 h-2 bg-[#CCF381] rounded-full"></div>
                                </span>
                                
                                <div className="p-6 bg-[#0B0F19] border border-[#1E293B] rounded-xl hover:border-[#F43F5E] hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl text-[#CCF381]">{item.year}</h3>
                                        <span className="text-xl opacity-50 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-[#F1F5F9] text-lg mb-2">{item.title}</h4>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Abstract Neon Trophy (Replaced 3D Canvas) */}
                <div className="relative h-[500px] flex flex-col items-center justify-center">
                    <AbstractNeonTrophy />
                    <div className="absolute bottom-10 md:bottom-20 text-center w-full z-20">
                        <p className="font-[Pacifico] text-3xl md:text-4xl text-[#F1F5F9] transform -rotate-2 drop-shadow-lg opacity-90">
                            "The Spirit of Insignia"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 3. EVENTS (Victory Track)
const Events = () => {
    const events = [
        { id: 1, name: "Neon Football", cat: "Sports", icon: <CheckCircle className="text-[#F43F5E]"/>, color: "from-red-500 to-pink-600" },
        { id: 2, name: "Code Sprint", cat: "Tech", icon: <CheckCircle className="text-[#CCF381]"/>, color: "from-green-400 to-emerald-600" },
        { id: 3, name: "Grand Quiz", cat: "Intellect", icon: <CheckCircle className="text-blue-400"/>, color: "from-blue-400 to-indigo-600" },
        { id: 4, name: "Battle Royale", cat: "E-Sports", icon: <CheckCircle className="text-purple-500"/>, color: "from-purple-500 to-violet-600" },
    ];

    return (
        <section className="relative py-24 bg-[#0B0F19] overflow-hidden">
            <div className="text-center mb-24 relative z-10 px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-black text-5xl md:text-7xl text-[#F1F5F9] uppercase tracking-tighter"
                >
                    Sub-Events
                </motion.h2>
                <p className="text-[#CCF381] font-medium mt-4 text-lg tracking-widest uppercase">Choose your battlefield</p>
            </div>

            {/* The Track Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F43F5E] via-[#CCF381] to-[#0F1522] transform md:-translate-x-1/2 opacity-30 dashed-line"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                {events.map((event, idx) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={cn(
                            "flex flex-col md:flex-row items-start md:items-center justify-between mb-24 relative pl-8 md:pl-0",
                            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        )}
                    >
                        {/* Mobile Connector Dot */}
                        <div className="absolute left-[-5px] top-0 md:hidden w-4 h-4 bg-[#0B0F19] border-2 border-[#F43F5E] rounded-full z-20"></div>

                        {/* Event Card */}
                        <motion.div 
                            whileHover={{ scale: 1.02, rotateY: idx % 2 === 0 ? 5 : -5 }}
                            className="w-full md:w-5/12 bg-[#0F1522] border border-[#1E293B] p-8 rounded-2xl relative overflow-hidden group hover:border-[#CCF381] transition-all duration-300 shadow-2xl"
                        >
                            {/* Abstract bg shape */}
                            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${event.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    {event.icon}
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] border border-[#1E293B] px-3 py-1 rounded-full">{event.cat}</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4 group-hover:text-[#F43F5E] transition-colors">
                                    {event.name}
                                </h3>
                                <p className="text-[#94A3B8] mb-8 leading-relaxed">
                                    Compete with the best to secure your legacy. Victory awaits the bold.
                                </p>
                                <button className="flex items-center text-[#CCF381] font-bold text-sm uppercase group-hover:gap-3 transition-all">
                                    View Details <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Desktop Connector */}
                        <div className="hidden md:flex w-2/12 justify-center items-center">
                            <div className="w-6 h-6 bg-[#0B0F19] border-4 border-[#F43F5E] rounded-full z-20 shadow-[0_0_20px_#F43F5E]"></div>
                        </div>
                        
                        {/* Spacer */}
                        <div className="w-full md:w-5/12 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// 4. REGISTER (Finish Line)
const Register = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-[#0F1522] to-[#0B0F19]">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Schedule Left */}
                <div>
                    <h2 className="font-extrabold text-4xl text-[#F1F5F9] mb-8 flex items-center gap-3">
                        <Calendar className="text-[#F43F5E]" size={32} />
                        EVENT SCHEDULE
                    </h2>
                    <div className="space-y-4">
                        {[
                            { time: "09:00 AM", event: "Opening Ceremony", loc: "Main Arena" },
                            { time: "10:30 AM", event: "Football Knockouts", loc: "Field A" },
                            { time: "01:00 PM", event: "Hackathon Kickoff", loc: "Tech Lab 2" },
                            { time: "04:00 PM", event: "Chess Finals", loc: "Auditorium" },
                            { time: "07:00 PM", event: "Prize Distribution", loc: "Main Stage" },
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 10, backgroundColor: "#0F1522" }}
                                className="flex flex-col sm:flex-row sm:items-center p-5 border-l-4 border-[#1E293B] bg-[#0B0F19]/50 hover:border-[#F43F5E] transition-all cursor-default rounded-r-lg"
                            >
                                <div className="w-32 font-bold text-[#F43F5E] text-lg mb-1 sm:mb-0">{item.time}</div>
                                <div className="flex-1">
                                    <div className="text-[#F1F5F9] font-bold text-lg">{item.event}</div>
                                    <div className="text-[#94A3B8] text-sm flex items-center gap-1 mt-1">
                                        <MapPin size={12} /> {item.loc}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Form Right */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0F1522] p-8 md:p-10 rounded-3xl border border-[#1E293B] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F43F5E] to-[#CCF381]"></div>
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#CCF381]/5 rounded-full blur-3xl"></div>
                    
                    <h3 className="font-bold text-3xl text-[#F1F5F9] mb-8 flex items-center gap-3">
                        <UserPlus className="text-[#CCF381]" />
                        REGISTER NOW
                    </h3>
                    
                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">First Name</label>
                                <input type="text" className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg p-4 text-[#F1F5F9] focus:border-[#CCF381] focus:ring-1 focus:ring-[#CCF381] focus:outline-none transition-all placeholder:text-[#94A3B8]/30" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">Last Name</label>
                                <input type="text" className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg p-4 text-[#F1F5F9] focus:border-[#CCF381] focus:ring-1 focus:ring-[#CCF381] focus:outline-none transition-all placeholder:text-[#94A3B8]/30" placeholder="Doe" />
                            </div>
                        </div>
                       
                        <div>
                            <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">Email Address</label>
                            <input type="email" className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg p-4 text-[#F1F5F9] focus:border-[#CCF381] focus:ring-1 focus:ring-[#CCF381] focus:outline-none transition-all placeholder:text-[#94A3B8]/30" placeholder="john@university.edu" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">Primary Event</label>
                            <div className="relative">
                                <select className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg p-4 text-[#F1F5F9] focus:border-[#CCF381] focus:ring-1 focus:ring-[#CCF381] focus:outline-none transition-all appearance-none cursor-pointer">
                                    <option>Neon Football</option>
                                    <option>Code Sprint</option>
                                    <option>Grand Quiz</option>
                                    <option>Battle Royale</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#94A3B8]">
                                    <ChevronRight size={16} className="rotate-90" />
                                </div>
                            </div>
                        </div>
                        
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "#ff5271" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#F43F5E] text-white font-bold py-5 rounded-lg uppercase tracking-widest transition-colors shadow-[0_4px_20px_rgba(244,63,94,0.4)] mt-4"
                        >
                            Confirm Registration
                        </motion.button>
                        <p className="text-center text-[#94A3B8] text-xs mt-4">
                            Limited slots available. Registration closes soon.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

// 5. FOOTER
const Footer = () => {
    return (
        <footer className="bg-[#0B0F19] border-t border-[#1E293B] pt-20 pb-10">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="mb-10 p-4 bg-[#0F1522] rounded-full">
                    <h2 className="font-black text-4xl text-[#F1F5F9] tracking-tighter">INSIGNIA<span className="text-[#F43F5E]">.</span></h2>
                </div>
                
                <div className="flex gap-8 mb-12">
                    {[Facebook, Twitter, Instagram].map((Icon, i) => (
                        <motion.a 
                            key={i} 
                            href="#" 
                            whileHover={{ y: -5, color: "#F43F5E" }}
                            className="text-[#94A3B8] hover:text-[#F43F5E] transition-colors p-3 bg-[#0F1522] rounded-full border border-[#1E293B]"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full max-w-4xl mb-16 border-b border-[#1E293B] pb-12">
                     <div className="space-y-3">
                        <h4 className="text-[#CCF381] font-bold uppercase text-sm tracking-widest">Location</h4>
                        <p className="text-[#94A3B8] text-sm leading-relaxed">University Sports Complex<br/>Surat, Gujarat</p>
                     </div>
                     <div className="space-y-3">
                        <h4 className="text-[#CCF381] font-bold uppercase text-sm tracking-widest">Contact</h4>
                        <p className="text-[#94A3B8] text-sm leading-relaxed">team@insignia.edu<br/>+91 987 654 3210</p>
                     </div>
                     <div className="space-y-3">
                        <h4 className="text-[#CCF381] font-bold uppercase text-sm tracking-widest">Legal</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-[#94A3B8] text-sm hover:text-[#F1F5F9] transition-colors">Privacy Policy</a>
                            <a href="#" className="text-[#94A3B8] text-sm hover:text-[#F1F5F9] transition-colors">Terms of Service</a>
                        </div>
                     </div>
                </div>

                <div className="text-[#94A3B8] text-xs font-medium flex flex-col md:flex-row items-center gap-4">
                    <span>© 2026 INSIGNIA. All rights reserved.</span>
                    <span className="hidden md:inline w-1 h-1 bg-[#1E293B] rounded-full"></span>
                    <span className="opacity-60">Designed for Rachit (Surat)</span>
                </div>
            </div>
        </footer>
    );
};

// --- MAIN APP ---

export default function App() {
  return (
    <div className="font-[sans-serif] text-[#F1F5F9] bg-[#0B0F19] min-h-screen selection:bg-[#F43F5E] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Open+Sans:wght@400;600&family=Pacifico&display=swap');
        
        body { margin: 0; padding: 0; background: #0B0F19; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0B0F19; }
        ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #F43F5E; }
        
        h1, h2, h3, h4, h5, button { font-family: 'Montserrat', sans-serif; }
        p, span, div, input, label { font-family: 'Open Sans', sans-serif; }
        
        .dashed-line {
            background-image: linear-gradient(to bottom, #CCF381 50%, transparent 50%);
            background-size: 2px 20px;
            background-repeat: repeat-y;
        }
      `}</style>
      
      <Hero />
      <About />
      <Events />
      <Register />
      <Footer />
    </div>
  );
}