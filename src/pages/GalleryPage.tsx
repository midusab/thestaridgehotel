import { motion } from 'motion/react';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const GALLERY_IMAGES = [
  { url: '/src/assets/images/staridge_hotel_hero_1779019184489.png', title: 'Hotel Exterior', category: 'Architecture' },
  { url: '/src/assets/images/staridge_room_suite_1779019200923.png', title: 'Executive Suite', category: 'Rooms' },
  { url: '/src/assets/images/lake_victoria_fish_dish_1779019237096.png', title: 'Fine Dining', category: 'Dining' },
  { url: '/src/assets/images/staridge_conference_room_1779032098064.png', title: 'Conference Hall', category: 'Events' },
  { url: '/src/assets/images/staridge_infinity_pool_1779033032109.png', title: 'Infinity Pool', category: 'Leisure' },
  { url: '/src/assets/images/lake_simbi_boat_ride_1779032145529.png', title: 'Boat Safari', category: 'Activities' },
  { url: '/src/assets/images/gallery_lobby_view_1779034469855.png', title: 'Main Lobby', category: 'Interior' },
  { url: '/src/assets/images/gallery_sunset_terrace_1779034486415.png', title: 'Sunset Terrace', category: 'Exterior' },
  { url: '/src/assets/images/starney_cocktail_1779032730867.png', title: 'Signature Drinks', category: 'Dining' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-hotel-primary mb-6 block">Visual Journey</span>
          <h1 className="text-5xl md:text-7xl font-serif text-hotel-dark mb-6">Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in the visual elegance of Staridge. Every corner is designed to capture the essence of lakeside luxury.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                loading={i > 2 ? "lazy" : "eager"}
                className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-hotel-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-hotel-primary font-bold block mb-2">{image.category}</span>
                    <h3 className="text-white text-xl font-serif">{image.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-hotel-dark/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
          />
          <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
            <ImageIcon size={32} strokeWidth={1} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
