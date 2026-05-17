import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
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
      {/* Background Image with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/images/staridge_hotel_hero_1779019184489.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
        >
          <motion.span variants={itemVariants} className="text-sm uppercase tracking-[0.4em] font-medium mb-4 block">
            Welcome to Homa Bay's Pride
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Discover the Soul of <br />
            <span className="serif-italic italic text-hotel-primary brightness-150">Lake Victoria</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed font-sans">
            Staridge Hotel offers an unparalleled blend of luxury and natural beauty. Experience world-class hospitality on the quiet shores of the Victoria valley.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/booking"
              className="px-10 py-4 bg-hotel-primary text-white font-medium uppercase tracking-widest hover:bg-white hover:text-hotel-dark transition-all duration-300 w-full sm:w-auto shadow-2xl"
            >
              Check Availability
            </Link>
            <Link 
              to="/about"
              className="px-10 py-4 border border-white/40 text-white font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-md"
            >
              Explore Hotel
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
