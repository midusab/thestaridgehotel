import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  '/src/assets/images/staridge_hotel_hero_1779019184489.png',
  '/src/assets/images/staridge_room_suite_1779019200923.png',
  '/src/assets/images/lake_victoria_fish_dish_1779019237096.png',
  '/src/assets/images/staridge_infinity_pool_1779033032109.png',
  '/src/assets/images/gallery_sunset_terrace_1779034486415.png'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMAGES[currentImage]}')` }}
          >
            <div className="absolute inset-0 bg-hotel-dark/50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
        >
          <motion.span variants={itemVariants} className="text-[10px] uppercase tracking-[0.6em] font-bold mb-6 block text-hotel-primary brightness-150">
            Welcome to Homa Bay's Pride
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Discover the Soul of <br />
            <span className="serif-italic italic text-hotel-primary brightness-150">Lake Victoria</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 text-white/80 leading-relaxed font-sans">
            Staridge Hotel offers an unparalleled blend of luxury and natural beauty. Experience world-class hospitality on the quiet shores of the Victoria valley.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/booking"
              className="px-12 py-5 bg-hotel-primary text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-white hover:text-hotel-dark transition-all duration-500 w-full sm:w-auto shadow-2xl shadow-hotel-primary/30"
            >
              Check Availability
            </Link>
            <Link 
              to="/about"
              className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-white/10 transition-all duration-500 w-full sm:w-auto backdrop-blur-md"
            >
              Explore Hotel
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {HERO_IMAGES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${i === currentImage ? 'w-8 bg-hotel-primary' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover More</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-hotel-primary to-transparent"></div>
        <ArrowDown size={14} className="text-hotel-primary" />
      </motion.div>
    </section>
  );
}
