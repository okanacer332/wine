"use client";
import { content } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProductList() {
  return (
    <section id="şaraplar" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Koleksiyonumuz</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.products.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-dark-900 border border-neutral-800 p-8 hover:border-gold-400/30 transition-colors duration-500 overflow-hidden"
            >
              <div className="flex flex-col h-full relative z-10">
                <span className="text-gold-400 text-sm tracking-widest uppercase mb-2">{wine.type} | {wine.year}</span>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors">{wine.name}</h3>
                
                {/* Bottle Placeholder - Gerçek şişe fotosu buraya gelecek */}
                <div className="h-64 my-6 relative flex justify-center items-center">
                   <div className="w-24 h-full bg-neutral-800/50 rounded-full blur-xl absolute top-0"></div>
                   {/* Buraya Image koyulacak, şimdilik CSS ile şişe silueti yapıyoruz */}
                   <div className="w-16 h-56 bg-gradient-to-b from-neutral-700 to-black rounded-t-3xl rounded-b-lg opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out shadow-2xl"></div>
                </div>

                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {wine.description}
                </p>

                <div className="flex justify-between items-center border-t border-neutral-800 pt-4 mt-auto">
                    <span className={`text-xs px-2 py-1 border ${wine.status === 'Tükendi' ? 'border-red-900 text-red-700' : 'border-green-900 text-green-700'}`}>
                        {wine.status}
                    </span>
                    <button className="text-white text-sm font-bold uppercase hover:text-gold-400 transition-colors">
                        İncele &rarr;
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}