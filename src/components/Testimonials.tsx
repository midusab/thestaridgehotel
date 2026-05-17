import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-hotel-dark overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[20rem] font-serif font-bold text-white leading-none overflow-hidden select-none">
          STARRIDGE
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hotel-primary/10 text-hotel-primary mb-8"
          >
            <Quote size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Guest Experiences
          </motion.h2>
          <div className="w-12 h-px bg-hotel-primary mx-auto"></div>
        </div>

        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white/90 leading-relaxed italic mb-12 max-w-4xl mx-auto px-4">
                "{TESTIMONIALS[currentIndex].content}"
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <h4 className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-1">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
                  {TESTIMONIALS[currentIndex].role}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="group relative p-2 transition-all"
            >
              <div className={`h-1 transition-all duration-700 ${
                i === currentIndex ? 'w-12 bg-hotel-primary' : 'w-4 bg-white/10 group-hover:bg-white/30'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
