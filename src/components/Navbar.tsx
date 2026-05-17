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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the home page or other pages for transparency logic
  const isTransparent = location.pathname === '/' && !scrolled;

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] max-w-7xl ${
        scrolled || location.pathname !== '/' 
          ? 'bg-hotel-dark/60 backdrop-blur-2xl py-3 px-8 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10' 
          : 'bg-transparent py-6 px-6'
      }`}
    >
      <div className="flex justify-between items-center text-white">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-hotel-primary rounded-xl flex items-center justify-center shadow-lg shadow-hotel-primary/30 group-hover:rotate-12 transition-transform duration-500">
            <span className="text-xl font-serif font-bold">S</span>
          </div>
          <span className="text-xl font-serif tracking-[0.1em] font-bold hidden sm:block">
            STARIDGE <span className="text-hotel-primary brightness-150">HOTEL</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-2 items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/5">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label}
              to={link.href} 
              className={`text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all duration-500 font-bold relative group ${
                location.pathname === link.href ? 'text-hotel-primary bg-white/10' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="#" 
            title="Staff Email"
            className="p-2 hover:text-hotel-primary transition-colors text-white/40 hover:text-white"
          >
            <Mail size={16} />
          </a>
          <Link 
            to="/booking"
            className="bg-hotel-primary text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-hotel-dark transition-all duration-500 shadow-xl shadow-hotel-primary/40 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-hotel-dark/90 z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-serif text-white hover:text-hotel-primary transition-colors ${
                      location.pathname === link.href ? 'text-hotel-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
              >
                <Link 
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 bg-hotel-primary text-white px-12 py-5 rounded-full text-xl uppercase tracking-widest font-bold shadow-2xl shadow-hotel-primary/40"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
