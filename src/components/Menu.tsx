import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';

export default function Menu() {
  const categories = ['All', 'Starters', 'Local', 'Continental', 'Desserts', 'Drinks'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-hotel-cream/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 text-hotel-dark">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-hotel-primary mb-4 block"
          >
            Lakeside Culinary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif"
          >
            The Staridge Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 max-w-xl mx-auto font-light leading-relaxed"
          >
            Situated in the suburbs of Homa Bay town, Hotel Staridge restaurant offers the finest cuisine in a variety of styles, prepared and cooked by the master chefs of the future.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            className="h-px bg-hotel-primary mx-auto mt-12"
          ></motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-500 ${
                activeCategory === category 
                  ? 'bg-hotel-primary text-white shadow-lg shadow-hotel-primary/20' 
                  : 'bg-white text-gray-400 hover:text-hotel-primary shadow-sm hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 hover:bg-white rounded-2xl transition-all duration-500"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-xl font-serif text-hotel-dark group-hover:text-hotel-primary transition-colors tracking-wide">
                    {item.name}
                  </h4>
                  <div className="flex-grow mx-4 border-b border-dotted border-gray-200"></div>
                  <span className="text-hotel-primary font-bold text-sm tabular-nums">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-400 text-xs font-light tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Special Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-hotel-cream border border-hotel-primary/10 rounded-2xl text-center"
        >
          <p className="text-gray-500 italic text-sm font-light leading-relaxed max-w-4xl mx-auto">
            "Occasionally, we do alterations on our dishes due to circumstances beyond our control e.g. market availability of some fresh food stuffs but suitable alternatives will be offered. Pop in to enjoy our sumptuous delicacies."
          </p>
        </motion.div>

        {/* Extra Info - Visual Grid */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-12 rounded-3xl shadow-xl flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-hotel-primary font-bold tracking-[0.2em] text-[10px] uppercase">Service Excellence</span>
                <h3 className="text-4xl font-serif text-hotel-dark">Formal Dining Experience</h3>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  We always serve dinner in formal style with occasional theme nights on special occasions. Our Master Chefs create culinary masterpieces daily, ensuring an authentic taste of Homa Bay.
                </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-4xl font-serif text-hotel-dark">Private Bespoke Events</h3>
                 <p className="text-gray-500 font-light leading-relaxed text-lg">
                   Staridge accommodates individual requirements for events like private parties, business luncheons, or even charity fundraising with a theme. We serve a variety of freshly prepared dishes at competitive prices from Monday to Monday.
                 </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-hotel-dark rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                 src="/src/assets/images/starney_dessert_1779032713240.png" 
                 alt="Staridge Desserts" 
                 loading="lazy"
                 className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h4 className="text-2xl font-serif">Sweet Finale</h4>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square bg-hotel-dark rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                 src="/src/assets/images/starney_cocktail_1779032730867.png" 
                 alt="Staridge Cocktails" 
                 loading="lazy"
                 className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h4 className="text-2xl font-serif">Signature Spirits</h4>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
