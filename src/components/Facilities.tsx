import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { FACILITIES } from '../constants';

export default function Facilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 text-hotel-dark">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-semibold text-hotel-primary mb-4 block"
          >
            World Class
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-hotel-dark"
          >
            Amenities & Facilities
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-0.5 bg-hotel-primary mx-auto mt-6"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FACILITIES.map((facility) => {
            // @ts-ignore
            const Icon = LucideIcons[facility.iconName];
            return (
              <motion.div
                key={facility.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] bg-hotel-dark rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Image Background */}
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-dark via-hotel-dark/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 bg-hotel-primary flex items-center justify-center rounded-2xl mb-6 shadow-xl shadow-hotel-primary/20 group-hover:scale-110 transition-transform duration-500">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-3xl font-serif mb-4 tracking-wide group-hover:text-hotel-primary transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm font-light">
                    {facility.description}
                  </p>
                  
                  {/* Subtle border reveal */}
                  <div className="mt-8 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-hotel-primary">Experience Luxury</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
