"use client";
import { content } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="hikayemiz" className="py-24 md:py-32 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              <span className="text-gold-400 block text-lg font-sans tracking-widest uppercase mb-2">Kuruluş 2005</span>
              {content.story.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
              {content.story.p1}
            </p>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              {content.story.p2}
            </p>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-neutral-800 relative overflow-hidden rounded-sm border border-neutral-700">
               {/* Placeholder for Vineyard Image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold-400/50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}