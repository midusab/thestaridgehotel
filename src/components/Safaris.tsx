import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SAFARI_PACKAGES } from '../constants';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Safaris() {
  return (
    <section id="safaris" className="py-24 bg-hotel-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] font-semibold text-hotel-primary mb-4 block">Wild Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif">Safaris & Tours</h2>
          </div>
          <p className="max-w-md text-white/60 text-sm leading-relaxed mb-1">
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
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-hotel-primary bg-hotel-primary/10 px-4 py-2 rounded-full border border-hotel-primary/20 backdrop-blur-md">
                    <Clock size={12} /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
                    <MapPin size={12} /> Homa Bay
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-hotel-primary transition-colors leading-tight">{pkg.title}</h3>
                <p className="text-white/50 mb-10 max-w-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {pkg.description}
                </p>
                <Link to="/safaris" className="inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-black group-hover:gap-10 transition-all duration-500 text-white">
                  Explore Safari <div className="w-16 h-px bg-hotel-primary brightness-150"></div>
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
