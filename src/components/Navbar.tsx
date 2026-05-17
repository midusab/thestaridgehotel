import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Check if we are on the home page or other pages for transparency logic
  const isTransparent = location.pathname === '/' && !scrolled;

  return (
    <nav 
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-700 w-[92%] md:w-[95%] max-w-7xl ${
        scrolled || location.pathname !== '/' || isOpen
          ? 'bg-hotel-dark/40 backdrop-blur-2xl py-3 px-6 md:px-8 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10' 
          : 'bg-transparent py-4 md:py-6 px-4 md:px-6'
      }`}
    >
      <div className="flex justify-between items-center text-white">
        <Link to="/" className="group flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-hotel-primary rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-hotel-primary/30 group-hover:rotate-12 transition-transform duration-500">
            <span className="text-lg md:text-xl font-serif font-bold">S</span>
          </div>
          <span className="text-lg md:text-xl font-serif tracking-[0.1em] font-bold">
            <span className="hidden sm:inline">STARIDGE </span><span className="text-hotel-primary brightness-150">HOTEL</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-1 items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/5">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label}
              to={link.href} 
              className={`text-[9px] xl:text-[10px] uppercase tracking-[0.2em] px-4 xl:px-6 py-2.5 rounded-full transition-all duration-500 font-bold relative group ${
                location.pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-hotel-primary rounded-full -z-10 shadow-lg shadow-hotel-primary/20"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <a 
            href="#" 
            title="Staff Email"
            className="p-2 hover:text-hotel-primary transition-colors text-white/40 group relative"
          >
            <Mail size={16} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-hotel-dark text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 uppercase tracking-widest">Webmail</span>
          </a>
          <Link 
            to="/booking"
            className="bg-hotel-primary text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-[9px] xl:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-hotel-dark transition-all duration-500 shadow-xl shadow-hotel-primary/40 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 active:scale-90 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-hotel-dark/95 z-[55] flex flex-col items-center justify-center px-6 lg:hidden"
          >
            {/* Background Liquid blobs for mobile menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 -right-1/4 w-full h-full bg-hotel-primary/10 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex flex-col items-center w-full gap-8"
            >
              <div className="text-[10px] uppercase tracking-[0.5em] text-hotel-primary font-bold mb-4">Discovery</div>
              <div className="flex flex-col items-center gap-6 w-full">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="w-full text-center"
                  >
                    <Link 
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl md:text-5xl font-serif text-white hover:text-hotel-primary transition-all duration-300 block ${
                        location.pathname === link.href ? 'text-hotel-primary scale-110' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8 w-full flex flex-col items-center gap-10"
              >
                <div className="w-12 h-px bg-white/10"></div>
                
                <Link 
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="bg-hotel-primary text-white w-full max-w-xs py-5 rounded-2xl text-xl uppercase tracking-widest font-bold shadow-2xl shadow-hotel-primary/40 text-center active:scale-95 transition-transform"
                >
                  Book Your Stay
                </Link>

                <div className="flex flex-col items-center gap-2 text-white/30 lowercase tracking-[0.2em] font-light">
                   <p className="text-[10px]">Homa Bay, Kenya</p>
                   <p className="text-[10px]">+254 7XX XXX XXX</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
