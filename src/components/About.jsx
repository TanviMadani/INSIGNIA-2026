import SectionHeader from './SectionHeader';

// 6. About Section
const About = () => {
  return (
    <section id="about" className="py-32 px-6 container mx-auto">
      <div className="md:w-1/2">
        <SectionHeader title="About" subtitle="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-8">
            Insignia isn't just a tech fest. It is a <strong className="text-white">competitive sport</strong>. 
            We've stripped away the boring conference vibes and replaced them with the adrenaline of a stadium finale.
          </p>
        </div>
        
        <div className="md:col-span-5 relative min-h-[400px]">
           {/* Poster area – keep border and gradient, inner content for poster */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#F43F5E] to-purple-600 rounded-lg transform rotate-3 opacity-20" />
           <div className="absolute inset-0 border border-slate-700 bg-[#0f1522] rounded-lg overflow-hidden">
              {/* Add poster image here */}
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
