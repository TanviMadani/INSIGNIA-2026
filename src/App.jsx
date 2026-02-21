import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { THEME } from './constants/theme';
import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import InteractiveStrip from './components/InteractiveStrip';
import Events from './components/Events';
import ScheduleSection from './components/ScheduleSection';
import Footer from './components/Footer';

const InsigniaApp = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`min-h-screen ${THEME.colors.bg} selection:bg-[#F43F5E] selection:text-white overflow-x-hidden`}>
      <AnimatePresence mode='wait'>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Nav />
          <Hero />
          <Marquee />
          <About />
          {/* <InteractiveStrip /> */}
          <Events />
          <ScheduleSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default InsigniaApp;
