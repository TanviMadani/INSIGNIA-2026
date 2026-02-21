import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const linksContainerRef = useRef(null);

  const handleClick = (e, href) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll visibility effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text randomization effect on hover
  useEffect(() => {
    const container = linksContainerRef.current;
    if (!container) return;

    const links = container.querySelectorAll('a');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&?*+';
    const timers = new Map();

    // Progressive left-to-right reveal that keeps first character fixed
    const startReveal = (link) => {
      const originalText = link.dataset.originalText || link.textContent;
      link.dataset.originalText = originalText;
      clearInterval(timers.get(link));

      const randomizeCycles = 8;
      const stepDelay = 20;

      let revealed = Math.min(1, originalText.length); // keep first letter steady
      let steps = 0;

      const id = setInterval(() => {
        let displayed = '';
        for (let i = 0; i < originalText.length; i++) {
          const ch = originalText[i];
          if (i < revealed) {
            displayed += ch;
          } else if (ch === ' ') {
            displayed += ' ';
          } else {
            displayed += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        link.textContent = displayed;

        steps += 1;
        if (steps >= randomizeCycles) {
          steps = 0;
          revealed += 1;
        }
        if (revealed > originalText.length) {
          clearInterval(id);
          timers.delete(link);
        }
      }, stepDelay);

      timers.set(link, id);
    };

    const stopReveal = (link) => {
      const id = timers.get(link);
      if (id) clearInterval(id);
      timers.delete(link);
      const originalText = link.dataset.originalText || link.textContent;
      link.textContent = originalText;
    };

    const handleMouseOver = (e) => {
      const link = e.target.closest('a');
      if (!link || !container.contains(link)) return;
      startReveal(link);
    };
    
    const handleMouseOut = (e) => {
      const link = e.target.closest('a');
      if (!link || !container.contains(link)) return;
      stopReveal(link);
    };

    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseout', handleMouseOut);
      timers.forEach((id) => clearInterval(id));
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-40 px-6 py-5 flex justify-between items-center mix-blend-difference text-white transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-[#0B0F19]/80 backdrop-blur-sm' : ''}`}
    >
      <a 
        href="#" 
        onClick={(e) => handleClick(e, '#')} 
        className="font-black italic text-2xl tracking-tighter hover:opacity-90 transition-opacity"
      >
        INSIGNIA
      </a>
      <ul ref={linksContainerRef} className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-mono text-sm uppercase tracking-wider hover:text-[#CCF381] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
