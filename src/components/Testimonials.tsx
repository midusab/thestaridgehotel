import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

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
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Background Image Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/src/assets/images/staridge_testimonial_bg_1779033984752.png" 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </motion.div>
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-hotel-dark via-transparent to-hotel-dark opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-hotel-primary mb-4 block"
          >
            Guest Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            What Our Guests Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-xl mx-auto font-light leading-relaxed text-sm"
          >
            Discover the stories of excellence from those who have experienced the unique hospitality of Staridge Hotel in Homa Bay.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote size={80} strokeWidth={1} className="text-hotel-primary" />
              </div>

              <div className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-hotel-primary/20 p-1.5 rotate-3 bg-white/10 shadow-xl">
                    <img 
                      src={TESTIMONIALS[currentIndex].avatar} 
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-hotel-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-hotel-primary/30 z-10">
                    <Star size={20} fill="currentColor" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex justify-center md:justify-start gap-1 mb-6 text-hotel-primary">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed italic mb-8">
                    "{TESTIMONIALS[currentIndex].content}"
                  </p>

                  <div>
                    <h4 className="text-hotel-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-2">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-between items-center mt-12 gap-6">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-hotel-primary/30 transition-all duration-300 md:absolute md:-left-20 md:top-1/2 md:-translate-y-1/2"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="group py-2"
                >
                  <div className={`h-1 rounded-full transition-all duration-700 ${
                    i === currentIndex ? 'w-10 bg-hotel-primary shadow-[0_0_15px_rgba(182,154,101,0.5)]' : 'w-3 bg-white/10 group-hover:bg-white/30'
                  }`}></div>
                </button>
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-hotel-primary/30 transition-all duration-300 md:absolute md:-right-20 md:top-1/2 md:-translate-y-1/2"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
