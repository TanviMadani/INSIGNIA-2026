// 8. Stats / Interactive Strip
const InteractiveStrip = () => {
  return (
    <section className="py-20 bg-[#F43F5E] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
         <div className="text-center md:text-left">
           <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-2">
             The <span className="text-black">Leaderboard</span>
           </h3>
           <p className="font-mono text-white/80">Real-time stats from the arena.</p>
         </div>
         
         <div className="flex gap-8 md:gap-16">
            {[
              { label: "Universities", val: "45+" },
              { label: "Competitors", val: "1.2K" },
              { label: "Prize Pool", val: "₹5L" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-black italic mb-1">{stat.val}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-black font-bold">{stat.label}</div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default InteractiveStrip;
