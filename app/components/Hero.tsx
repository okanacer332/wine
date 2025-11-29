"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-gold-400 tracking-[0.3em] text-sm md:text-base font-bold mb-4 uppercase"
        >
          Torosların Kalbinden
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6"
        >
          Tasheli
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-light text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto italic"
        >
          "Doğru karar verdiğimizi daha sonra anlayacaktık..."
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
        >
             <div className="w-[1px] h-24 bg-gold-400 mx-auto animate-bounce"></div>
        </motion.div>
      </div>
    </section>
  );
}