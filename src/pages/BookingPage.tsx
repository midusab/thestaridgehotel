import Booking from '../components/Booking';
import { motion } from 'motion/react';

export default function BookingPage() {
  return (
    <div className="pt-32 min-h-screen bg-hotel-cream/20">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-hotel-primary mb-6 block">The Beginning of a Journey</span>
          <h1 className="text-5xl md:text-7xl font-serif text-hotel-dark mb-4">Reservations</h1>
          <div className="w-16 h-[2px] bg-hotel-primary mx-auto opacity-40"></div>
        </motion.div>
      </div>
      <Booking />
    </div>
  );
}
