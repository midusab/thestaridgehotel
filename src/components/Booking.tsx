import { motion } from 'motion/react';
import { Calendar, Users, Home } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hotel-primary/5 -z-10 skew-x-12 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white shadow-2xl flex flex-col lg:flex-row">
          
          {/* Reservation Info */}
          <div className="lg:w-1/3 bg-hotel-dark text-white p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-hotel-primary font-bold mb-4 block">Reservation</span>
              <h2 className="text-4xl font-serif mb-6 leading-tight">Secure Your <br /><span className="serif-italic italic">Lakeside Retreat</span></h2>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Plan your perfect stay in Homa Bay. Our team is ready to ensure your experience starts perfectly the moment you book.
              </p>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="w-8 h-px bg-hotel-primary"></div>
                Best Rate Guaranteed
              </div>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="w-8 h-px bg-hotel-primary"></div>
                Free Cancellation (48hrs)
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                  <Calendar size={12} className="text-hotel-primary" /> Check-In Arrival
                </label>
                <input 
                  type="date" 
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-hotel-primary transition-colors text-hotel-dark font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                  <Calendar size={12} className="text-hotel-primary" /> Check-Out Departure
                </label>
                <input 
                  type="date" 
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-hotel-primary transition-colors text-hotel-dark font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                  <Users size={12} className="text-hotel-primary" /> Persons / Guests
                </label>
                <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-hotel-primary transition-colors text-hotel-dark appearance-none bg-transparent font-medium">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4+ Persons</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                  <Home size={12} className="text-hotel-primary" /> Rooms Required
                </label>
                <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-hotel-primary transition-colors text-hotel-dark appearance-none bg-transparent font-medium">
                  <option>1 Room</option>
                  <option>2 Rooms</option>
                  <option>3 Rooms</option>
                  <option>Family Suite</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-hotel-primary text-white py-5 uppercase tracking-[0.3em] font-bold text-sm shadow-xl hover:bg-hotel-dark transition-all duration-300"
                >
                  Check Availability
                </motion.button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
