import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SAFARI_PACKAGES } from '../constants';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';

export default function Safaris() {
  useEffect(() => {
    // Background prefetch safari images to ensure instant visual mounting
    SAFARI_PACKAGES.forEach((pkg) => {
      const img = new Image();
      img.src = pkg.image;
    });
  }, []);
  return (
    <section id="safaris" className="py-24 bg-hotel-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-hotel-primary mb-4 block">Wild Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif">Safaris & Tours</h2>
          </div>
          <p className="max-w-md text-white/50 text-[11px] uppercase tracking-[0.2em] leading-relaxed mb-1 font-bold">
            Explore the hidden gems of Homa Bay, from the rare wildlife of Ruma to the tranquil islands of the great lake. Our curated tours bring you closer to nature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SAFARI_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden h-[600px] flex items-end rounded-3xl"
            >
              {/* Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60"
                style={{ backgroundImage: `url('${pkg.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-dark via-hotel-dark/20 to-transparent opacity-95"></div>
              </div>

              {/* Content */}
              <div className="relative p-12 w-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                <div className="flex gap-4 mb-6">
                   <div className="flex items-center gap-2 bg-hotel-primary/20 backdrop-blur-md px-4 py-2 rounded-xl border border-hotel-primary/30">
                      <Clock size={12} className="text-hotel-primary" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white">{pkg.duration}</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      <MapPin size={12} className="text-white/40" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Homa Bay</span>
                   </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-hotel-primary transition-colors leading-tight">{pkg.title}</h3>
                <p className="text-white/50 mb-10 max-w-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {pkg.description}
                </p>
                <Link to="/safaris" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-hotel-primary transition-all duration-500 text-white">
                  Discover Expedition 
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="flex gap-6">
              <Calendar className="text-hotel-primary shrink-0" size={32} />
              <div>
                <h4 className="text-lg font-serif mb-2">Custom Itineraries</h4>
                <p className="text-white/50 text-sm">We can tailor-make your safari based on your interests and schedule.</p>
              </div>
           </div>
           <div className="flex gap-6">
              <MapPin className="text-hotel-primary shrink-0" size={32} />
              <div>
                <h4 className="text-lg font-serif mb-2">Professional Guides</h4>
                <p className="text-white/50 text-sm">Experience the wild with our expert local guides who know every corner of Homa Bay.</p>
              </div>
           </div>
           <div className="flex gap-6">
              <Clock className="text-hotel-primary shrink-0" size={32} />
              <div>
                <h4 className="text-lg font-serif mb-2">All-Inclusive</h4>
                <p className="text-white/50 text-sm">From transport to packed lunches, we handle all the details for you.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
