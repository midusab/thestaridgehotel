import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      url: '/src/assets/images/gallery_sunset_terrace_1779034486415.png',
      title: 'Sunset Terrace',
      desc: 'Breathtaking sunsets over Lake Victoria'
    },
    {
      url: '/src/assets/images/gallery_lobby_view_1779034469855.png',
      title: 'Luxury Lobby',
      desc: 'Experience our world-class welcome'
    },
    {
      url: '/src/assets/images/staridge_room_suite_1779019200923.png',
      title: 'Executive Suite',
      desc: 'Uncompromising luxury and comfort'
    },
    {
      url: '/src/assets/images/staridge_infinity_pool_1779033032109.png',
      title: 'Infinity Pool',
      desc: 'Serenity meets the horizon'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-hotel-primary mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-hotel-dark">Moments at Staridge</h2>
          </div>
          <p className="max-w-xs text-gray-400 text-[10px] uppercase tracking-widest font-bold">Slide to explore our world</p>
        </div>

        <div className="relative group aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={images[currentIndex].url} 
                className="w-full h-full object-cover" 
                alt={images[currentIndex].title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hotel-dark/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 text-white">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 block text-hotel-primary brightness-150"
                >
                  Gallery — 0{currentIndex + 1}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-3xl md:text-5xl font-serif mb-2"
                >
                  {images[currentIndex].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-white/60 text-sm font-light tracking-wide"
                >
                  {images[currentIndex].desc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-hotel-dark"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-hotel-dark"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-12 right-12 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === currentIndex ? 'w-8 bg-hotel-primary' : 'w-2 bg-white/40'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
