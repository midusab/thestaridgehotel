import Booking from '../components/Booking';
import { motion } from 'motion/react';

export default function BookingPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] font-semibold text-hotel-primary mb-4 block">Reservations</span>
          <h1 className="text-5xl md:text-6xl font-serif text-hotel-dark">Book Your Stay</h1>
        </motion.div>
      </div>
      <Booking />
    </div>
  );
}
