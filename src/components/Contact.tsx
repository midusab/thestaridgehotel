import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-hotel-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <span className="text-sm uppercase tracking-[0.3em] font-semibold text-hotel-primary mb-4 block">Connect</span>
            <h2 className="text-4xl md:text-5xl font-serif text-hotel-dark mb-10">Get in Touch</h2>
            <p className="text-gray-500 mb-12 leading-relaxed max-w-md">
              Whether you're planning a wedding, a corporate retreat, or a simple weekend getaway, our team is here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-hotel-primary shadow-sm shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-hotel-dark">Address</h4>
                  <p className="text-sm text-gray-500 font-light">Main Road, Homa Bay Town,<br />Homa Bay County, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-hotel-primary shadow-sm shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-hotel-dark">Call Us</h4>
                  <p className="text-sm text-gray-500 font-light">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-hotel-primary shadow-sm shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-hotel-dark">Email</h4>
                  <p className="text-sm text-gray-500 font-light">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 shadow-2xl relative rounded-3xl overflow-hidden border border-gray-100">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-hotel-primary"></div>
             <h3 className="text-2xl font-serif mb-8 text-hotel-dark">Send a Message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                      <input className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-hotel-primary bg-transparent" type="text" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                      <input className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-hotel-primary bg-transparent" type="email" placeholder="john@example.com" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Subject</label>
                   <input className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-hotel-primary bg-transparent" type="text" placeholder="Reservation Inquiry" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Message</label>
                   <textarea rows={4} className="w-full border-b border-gray-100 py-4 focus:outline-none focus:border-hotel-primary resize-none bg-transparent" placeholder="Tell us more..."></textarea>
                </div>
                <motion.button 
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   className="w-full bg-hotel-dark text-white py-5 rounded-2xl uppercase tracking-[0.4em] font-bold text-[10px] hover:bg-hotel-primary transition-all duration-500 shadow-xl shadow-hotel-dark/10 group flex items-center justify-center gap-4"
                >
                   Send Message
                   <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-500"></div>
                </motion.button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-hotel-dark text-white py-20 border-t border-white/5 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-hotel-primary/20 to-transparent"></div>
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
             <div className="md:col-span-2">
                <h2 className="text-4xl font-serif mb-8 tracking-[0.2em] font-bold">
                  STARIDGE <span className="text-hotel-primary brightness-150">HOTEL</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-10 font-light italic">
                  "Experience the soul of Lake Victoria in unparalleled luxury and comfort."
                </p>
                <div className="flex gap-4">
                   {[Instagram, Facebook, Twitter].map((Icon, i) => (
                     <a 
                       key={i}
                       href="#" 
                       className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-hotel-primary hover:border-hotel-primary transition-all duration-500 hover:shadow-2xl hover:shadow-hotel-primary/20"
                     >
                       <Icon size={18} />
                     </a>
                   ))}
                </div>
             </div>

             <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-hotel-primary font-bold mb-8">Navigation</h4>
                <ul className="space-y-4 text-sm text-white/50 font-light">
                   <li><Link to="/about" className="hover:text-hotel-primary transition-colors hover:translate-x-1 inline-block duration-300">The Heritage</Link></li>
                   <li><Link to="/facilities" className="hover:text-hotel-primary transition-colors hover:translate-x-1 inline-block duration-300">Guest Facilities</Link></li>
                   <li><Link to="/gallery" className="hover:text-hotel-primary transition-colors hover:translate-x-1 inline-block duration-300">Gallery</Link></li>
                   <li><Link to="/safaris" className="hover:text-hotel-primary transition-colors hover:translate-x-1 inline-block duration-300">Explorer Safaris</Link></li>
                   <li><Link to="/booking" className="hover:text-hotel-primary transition-colors hover:translate-x-1 inline-block duration-300">Reservations</Link></li>
                   <li>
                     <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-hotel-primary/30 transition-all duration-500 group">
                       <Mail size={14} className="text-hotel-primary" /> 
                       <span className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-white">Connect Now</span>
                     </a>
                   </li>
                </ul>
             </div>

             <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-hotel-primary font-bold mb-8">Newsletter</h4>
                <p className="text-xs text-white/30 mb-6 leading-relaxed font-light">Join our circle for exclusive updates and lakeside secrets.</p>
                <div className="flex flex-col gap-3">
                   <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hotel-primary transition-colors" />
                   <button className="bg-hotel-primary text-white rounded-xl py-3 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-hotel-dark transition-all duration-500 shadow-lg shadow-hotel-primary/20">Subscribe</button>
                </div>
             </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
             <span>© 2026 Staridge Hotel Homa Bay. Crafted with excellence.</span>
             <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>
       </div>
    </footer>
  );
}
