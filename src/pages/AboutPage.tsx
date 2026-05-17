import About from '../components/About';
import { motion } from 'motion/react';
import { MapPin, Plane, Utensils, Users, Bed, Anchor, Compass, Coffee } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Utensils,
      title: "Restaurant",
      desc: "Our indoor and outdoor dining spaces offer a wide range of African delicacies, local specialties, and elite exotic brews."
    },
    {
      icon: Users,
      title: "Conference Facilities",
      desc: "State-of-the-art facilities with reliable power backup plans, beautifully lit and situated in a quiet, productive environment."
    },
    {
      icon: Bed,
      title: "Executive Rooms",
      desc: "Affordable, cozy, and warm accommodations marked by the Staridge touch of elegance and absolute peace of mind."
    }
  ];

  const offerings = [
    { title: "Conference Facilities", icon: Users },
    { title: "Restaurant", icon: Utensils },
    { title: "Executive Rooms", icon: Bed },
    { title: "Deluxe Rooms", icon: Bed },
    { title: "Boat Riding", icon: Anchor },
    { title: "Tourist Visits", icon: Compass },
    { title: "Lobby Bar Lounge", icon: Coffee },
  ];

  return (
    <div className="pt-24 min-h-screen bg-hotel-cream">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-hotel-primary mb-6 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-serif text-hotel-dark mb-6">About Staridge</h1>
          <div className="w-16 h-px bg-hotel-primary mx-auto"></div>
        </motion.div>
      </div>

      <About />

      {/* Regional History Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-hotel-dark leading-tight">
              A Region of <br />
              <span className="italic">Infinite Discovery</span>
            </h2>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
              <p>
                Homa Bay County is a world-class tourist attraction region. This includes the great **Ruma National Park**, the last remaining home of the rare **Roan antelope** in the world. The park also shelters the magnificent **black rhinos** and a diverse array of African wildlife.
              </p>
              <p>
                For those seeking the origin of mankind, **Rusinga Island** offers unparalleled historical evidence. Our people are famously friendly and welcoming, preserving tales that breathe life into the landscape.
              </p>
              <p>
                From the mysterious waters of **Lake Simbi** to the legendary site of **Nyamgondho**—where tales tell of a lady of the lake who left with everything, leaving behind only footprints in the stone—the spirit of Homa Bay is woven into every guest experience at Staridge.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-hotel-cream rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="/src/assets/images/lake_simbi_boat_ride_1779032145529.png" 
                alt="Lake Victoria Culture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-hotel-dark/20"></div>
            </div>
            
            {/* Travel Info Badge */}
            <div className="absolute -bottom-10 -left-10 bg-hotel-dark text-white p-10 rounded-[2rem] shadow-2xl max-w-sm hidden md:block">
              <div className="flex items-center gap-4 mb-4 text-hotel-primary">
                <Plane size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Seamless Travel</span>
              </div>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                We are easily accessible: just 1 hour from Kisumu International Airport. With flights from JKIA taking only 45 minutes, you can be at your international departure within 2 hours of leaving our gates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-hotel-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-hotel-dark mb-4">Our Values</h2>
            <p className="text-gray-400 font-light">The pillars of the Staridge experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow border border-white"
              >
                <div className="w-14 h-14 bg-hotel-primary/10 rounded-2xl flex items-center justify-center text-hotel-primary mb-8">
                  <value.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-hotel-dark">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-32 bg-hotel-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-full h-full bg-hotel-primary rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-hotel-primary mb-6 block">Home Away From Home</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">What We Offer</h2>
              <p className="text-white/40 font-light leading-relaxed mb-12 text-lg">
                Hotel Staridge Limited is more than just a hotel. With its warm and relaxing atmosphere and giant double and single rooms, there is a peace of mind where your dreams come true. We are your best choice for seminars, family getaways, and honeymoons.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {offerings.map((offer, i) => (
                  <motion.div
                    key={offer.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-hotel-primary/30 transition-colors group"
                  >
                    <offer.icon size={18} className="text-hotel-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs uppercase tracking-widest font-medium text-white/70">{offer.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/src/assets/images/staridge_room_suite_1779019200923.png" className="w-full h-full object-cover opacity-60" />
                 </div>
                 <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/src/assets/images/lake_victoria_fish_dish_1779019237096.png" className="w-full h-full object-cover opacity-60" />
                 </div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/src/assets/images/staridge_conference_room_1779032098064.png" className="w-full h-full object-cover opacity-60" />
                 </div>
                 <div className="aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/src/assets/images/staridge_infinity_pool_1779033032109.png" className="w-full h-full object-cover opacity-60" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="space-y-10"
          >
            <MapPin size={40} className="text-hotel-primary mx-auto" strokeWidth={1} />
            <h2 className="text-3xl md:text-5xl font-serif text-hotel-dark leading-tight italic">
              "Welcome to Staridge, where your great tour experience lives on forever."
            </h2>
            <p className="text-gray-400 font-light text-lg">
              Enjoy our African delicacies and local music as the wind from Lake Victoria breezes to your satisfaction.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
