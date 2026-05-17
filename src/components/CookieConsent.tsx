import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] w-[92%] max-w-4xl"
        >
          <div className="bg-hotel-dark/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-hotel-primary/20 rounded-2xl flex items-center justify-center text-hotel-primary shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-1">Our cookies policy</h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">
                  We use cookies to ensure that we give you the best experience on our website. This includes cookies from third-party social media websites.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 md:flex-none px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
              >
                Decline
              </button>
              <button 
                onClick={acceptCookies}
                className="flex-[2] md:flex-none px-8 py-3 bg-hotel-primary text-white rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all shadow-xl shadow-hotel-primary/20"
              >
                Accept All
              </button>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors p-1"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
