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
      {/* Liquid Background Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-hotel-primary/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-900/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
        <motion.span 
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[15rem] md:text-[25rem] font-serif font-bold text-white leading-none overflow-hidden select-none whitespace-nowrap"
        >
          STARIDGE
        </motion.span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-hotel-primary mb-8 shadow-2xl"
          >
            <Quote size={32} strokeWidth={1} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Guest Stories
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-px bg-hotel-primary mx-auto"
          ></motion.div>
        </div>

        <div className="relative min-h-[350px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <p className="text-2xl md:text-4xl font-serif text-white/90 leading-tight italic mb-12 max-w-4xl mx-auto px-4 tracking-tight">
                "{TESTIMONIALS[currentIndex].content}"
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border-2 border-hotel-primary/30 p-1">
                   <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center text-hotel-primary font-bold">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                   </div>
                </div>
                <h4 className="text-hotel-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-2">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">
                  {TESTIMONIALS[currentIndex].role}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Liquid Progress Dots */}
        <div className="flex justify-center gap-6 mt-20">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="relative py-4"
            >
              <div className={`h-[2px] transition-all duration-1000 ease-[0.22,1,0.36,1] ${
                i === currentIndex ? 'w-16 bg-hotel-primary' : 'w-6 bg-white/10 hover:bg-white/30'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
