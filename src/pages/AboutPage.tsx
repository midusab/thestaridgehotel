import About from '../components/About';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-hotel-cream">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-semibold text-hotel-primary mb-4 block">Our Legacy</span>
          <h1 className="text-5xl md:text-6xl font-serif text-hotel-dark">About Staridge</h1>
        </motion.div>
      </div>
      <About />
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hotel-primary/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-hotel-primary mb-12 flex justify-center"
          >
            <Quote size={48} strokeWidth={1} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-12 italic text-hotel-dark leading-snug"
          >
            "A journey of a thousand miles begins with a single step, but a stay at Staridge stays in your heart forever."
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-px bg-hotel-primary mx-auto mb-12"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 leading-relaxed font-light text-lg max-w-2xl mx-auto"
          >
            Founded with a vision to redefine hospitality in Homa Bay, Staridge Hotel has grown from a modest lakeside lodge to a premier destination. Our commitment to sustainable tourism and community engagement ensures that every guest contributes to the preservation of Lake Victoria's natural beauty.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
