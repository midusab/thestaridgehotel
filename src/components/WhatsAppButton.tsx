import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 left-10 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
      title="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-2xl bg-[#25D366]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <MessageCircle size={28} fill="white" className="relative z-10" />
    </motion.a>
  );
}
