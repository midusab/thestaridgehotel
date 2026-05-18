import { motion } from 'motion/react';
import { Calendar, Users, Home } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Booking() {
  return (
    <section id="booking" className="py-12 md:py-24 relative overflow-hidden bg-hotel-cream/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white/40">
          
          {/* Reservation Info - Dark Side */}
          <div className="lg:w-2/5 bg-hotel-dark text-white p-10 md:p-20 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hotel-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-hotel-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-hotel-primary font-bold mb-6 block">Personal Concierge</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Secure Your <br /><span className="text-hotel-primary italic">Paradise</span></h2>
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-light mb-12">
                Allow us to curate your perfect escape. From boat expeditions to sunset dinners, your journey begins with this simple reservation.
              </p>

              <div className="space-y-6">
                {[
                  'Bespoke Guest Services',
                  'Best Rate Guaranteed Direct',
                  'Flexible Cancellation Policy'
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-5 text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold"
                  >
                    <div className="w-8 h-[1px] bg-hotel-primary"></div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/5 relative z-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium mb-4">Direct Assistance</p>
              <div className="text-xl md:text-2xl font-serif text-hotel-primary">
                {CONTACT_INFO.phone}
              </div>
            </div>
          </div> 
 
          {/* Form Side */}
          <div className="lg:w-3/5 p-10 md:p-20 bg-gradient-to-br from-white to-hotel-cream/30">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 group-focus-within:text-hotel-primary transition-colors flex items-center gap-3">
                    <Calendar size={14} /> Arrival
                  </label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-hotel-primary transition-all text-hotel-dark font-medium bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 group-focus-within:text-hotel-primary transition-colors flex items-center gap-3">
                    <Calendar size={14} /> Departure
                  </label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-hotel-primary transition-all text-hotel-dark font-medium bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 group-focus-within:text-hotel-primary transition-colors flex items-center gap-3">
                    <Users size={14} /> Guests
                  </label>
                  <select className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-hotel-primary transition-all text-hotel-dark appearance-none bg-transparent font-medium cursor-pointer">
                    <option>Single Occupancy</option>
                    <option>Double (2 Persons)</option>
                    <option>Triple (3 Persons)</option>
                    <option>Family / Large Group</option>
                  </select>
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 group-focus-within:text-hotel-primary transition-colors flex items-center gap-3">
                    <Home size={14} /> Residence Type
                  </label>
                  <select className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-hotel-primary transition-all text-hotel-dark appearance-none bg-transparent font-medium cursor-pointer">
                    <option>Deluxe Lakeside Room</option>
                    <option>Executive Ocean View</option>
                    <option>The Presidential Suite</option>
                    <option>Bohemian Guesthouse</option>
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-hotel-primary text-white py-6 rounded-2xl uppercase tracking-[0.4em] font-bold text-xs shadow-2xl shadow-hotel-primary/30 transition-all duration-500 overflow-hidden relative group"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:tracking-[0.6em] block">Request Availability</span>
                  <div className="absolute inset-0 bg-hotel-dark transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </motion.button>
              </div>

              <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
                Secure 256-bit encrypted booking platform.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
