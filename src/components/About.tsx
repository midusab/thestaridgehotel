import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="py-32 bg-hotel-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-hotel-dark overflow-hidden rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative z-10">
            <img 
              src="/src/assets/images/staridge_room_suite_1779019200923.png" 
              alt="Luxury at Staridge" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          {/* Decorative frame - refined for Next.js look */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-hotel-primary opacity-20 z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-hotel-primary opacity-20 z-0"></div>
          
          {/* Stats float card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-6 -left-6 bg-white p-8 shadow-2xl rounded-2xl z-20 hidden md:block"
          >
            <h4 className="text-4xl font-serif text-hotel-primary mb-1">150+</h4>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Luxury Guest Rooms</p>
          </motion.div>
        </motion.div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <motion.span variants={itemVariants} className="text-[10px] uppercase tracking-[0.4em] font-bold text-hotel-primary mb-6 block">
            Our Heritage
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-hotel-dark">
            Elegance Rooted in <br />
            <span className="serif-italic italic brightness-125">Tradition</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-500 mb-8 leading-relaxed text-lg font-light">
            Since its inception, Staridge Hotel has been a beacon of premium hospitality in Western Kenya. Overlooking the majestic Lake Victoria, we offer more than just a stay—we provide an immersive experience that celebrates the beauty of our county.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-12 mb-12 border-l border-hotel-primary/10 pl-8">
            <div className="italic text-gray-400 font-serif text-lg leading-relaxed">
              "We believe true luxury lies in the details—from the warmth of our welcome to the freshness of our lakeside cuisine."
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link 
              to="/facilities" 
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-hotel-primary transition-all group"
            >
              Explore Facilities 
              <div className="w-12 h-px bg-hotel-primary transition-all duration-300 group-hover:w-20"></div>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
