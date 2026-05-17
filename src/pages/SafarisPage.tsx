import Safaris from '../components/Safaris';
import { motion } from 'motion/react';

export default function SafarisPage() {
  return (
    <div className="bg-hotel-dark min-h-screen">
      <div className="pt-32 pb-12 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-hotel-primary mb-4 block">Adventure Awaits</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Safaris & Tours</h1>
          <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to Hotel Staridge Limited. We are a responsible company dedicated to providing fun and authentic experiences around Homa Bay County. Our guides are ready to show you the hidden gems of Lake Victoria.
          </p>
        </motion.div>
      </div>
      <Safaris />
    </div>
  );
}
