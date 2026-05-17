import Facilities from '../components/Facilities';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FacilitiesPage() {
  const roomFeatures = [
    "High Floor", "Free Wifi", "Tea and Coffee making facility", 
    "Work desk", "Safety box", "240v socket", "Ironing facility", 
    "Satellite cable", "Complementary bottled water", "Daily house keeping services"
  ];

  return (
    <div className="pt-24 min-h-screen bg-hotel-cream/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-hotel-primary mb-4 block">Excellence & Comfort</span>
          <h1 className="text-5xl md:text-7xl font-serif text-hotel-dark mb-6">Guest Facilities</h1>
          <div className="w-24 h-px bg-hotel-primary mx-auto"></div>
        </motion.div>

        {/* Executive Rooms */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Luxury Reimagined</span>
            <h2 className="text-4xl font-serif text-hotel-dark mb-6">Executive Rooms</h2>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              Hotel Staridge offers a high level of personalised service. Our Executive Rooms include complementary breakfast buffet as well as a selection of juice, coffee, tea and evening cocktails served every day.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed font-light italic border-l-2 border-hotel-primary pl-6">
              Your tastefully appointed room is outfitted with a 30" LCD TV and your Marble bathroom offers you a shower and double vanity.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {roomFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-hotel-primary/10 flex items-center justify-center text-hotel-primary">
                    <Check size={12} />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-hotel-dark rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <img src="/src/assets/images/staridge_room_suite_1779019200923.png" alt="Executive Room" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Deluxe Rooms */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-100">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-hotel-dark rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/src/assets/images/staridge_deluxe_room_1779032129702.png" alt="Deluxe Room" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Elegant Simplicity</span>
            <h2 className="text-4xl font-serif text-hotel-dark mb-6">Deluxe Rooms</h2>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              Hotel Staridge Deluxe Rooms consist of a one-bedroom and bathroom unit. It has a King-size bed featuring a custom-made Maharaja mattress with triple-sheeted 300 thread count linen.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              The room has a 30" LCD TV with thoughtfully curated amenities to ensure your stay is as comfortable as possible.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {roomFeatures.slice(0, 8).map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-hotel-primary/10 flex items-center justify-center text-hotel-primary">
                    <Check size={12} />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Conference */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Professional Space</span>
            <h2 className="text-4xl font-serif text-hotel-dark mb-6">Conferences & Meetings</h2>
            <p className="text-gray-500 mb-6 leading-relaxed font-light">
              Whichever way you would like to meet, Hotel Staridge has got a conference room that suits you. The location of Hotel Staridge on the shores of Lake Victoria will give you a productive space wherever and whenever you need it.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              Whether you are meeting with customers, giving a presentation or catching up with colleagues, we have the best place that suits you.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-hotel-primary text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-hotel-dark transition-all duration-500"
            >
              Book Your Meeting <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-hotel-dark rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <img src="/src/assets/images/staridge_conference_room_1779032098064.png" alt="Conference Room" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Bar and Lounge */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-100">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-hotel-dark rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/src/assets/images/staridge_bar_lounge_1779032114547.png" alt="Bar and Lounge" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Nightlife & Relaxation</span>
            <h2 className="text-4xl font-serif text-hotel-dark mb-6">Bar & Lounge</h2>
            <p className="text-gray-500 mb-6 leading-relaxed font-light">
              Hotel Staridge offers you the best Bar & Lounge. If watching sports, refreshing drinks, dancing to local music or listening to a live band is your favorite, then this is the best place to come and indulge.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              Staridge welcomes you to experience the vibrant atmosphere of watching sports while enjoying a selection of beers, cocktails, and fine wines. It is also the place to enjoy a variety of local music and a traditional live band.
            </p>
          </motion.div>
        </section>

        {/* Restaurant Facility */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Culinary Journey</span>
            <h2 className="text-4xl font-serif text-hotel-dark mb-6">Fine Dining Restaurant</h2>
            <p className="text-gray-500 mb-6 leading-relaxed font-light">
              Situated in the suburbs of Homa Bay town, Hotel Staridge restaurant offers the finest cuisine in a variety of styles, prepared and cooked by our master chefs.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              We accommodate individual requirements for events like private parties, business luncheons, or even charity fundraising with a theme. We serve a variety of freshly prepared dishes at competitive prices every day of the week.
            </p>
            <p className="text-xs text-gray-400 italic mb-8 border-l border-hotel-primary/30 pl-4">
              We always serve dinner in formal style with occasional theme nights on special occasions.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-hotel-dark rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <img src="/src/assets/images/lake_victoria_fish_dish_1779019237096.png" alt="Restaurant" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Tours and Travel */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-hotel-dark rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/src/assets/images/lake_simbi_boat_ride_1779032145529.png" alt="Tours and Travel" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Explore Homa Bay</span>
            <h2 className="text-4xl font-serif text-hotel-dark mb-6">Tours & Travel</h2>
            <p className="text-gray-500 mb-6 leading-relaxed font-light">
              Welcome to Hotel Staridge Limited. We are a responsible company dedicated to providing fun and authentic experiences around Homa Bay County, which is full of tourist attraction sites.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              We organize boat rides and off-road fleets to all tourist destinations like Ruma National Park, Rusinga Island, Lake Simbi and many more. Our guides are waiting. Let's go.
            </p>
            <Link 
              to="/safaris" 
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-hotel-primary transition-all group"
            >
              Explore Safari Packages
              <div className="w-12 h-px bg-hotel-primary transition-all duration-300 group-hover:w-20"></div>
            </Link>
          </motion.div>
        </section>
      </div>

      <Facilities />
    </div>
  );
}
