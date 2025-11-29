"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("tasheli_age_verified");
    if (!verified) {
      setIsVisible(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("tasheli_age_verified", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        >
          <div className="text-center max-w-md border border-gold-400/30 p-10 rounded-sm">
            <h2 className="font-serif text-3xl text-gold-400 mb-4">Tasheli Winery</h2>
            <p className="text-gray-300 mb-8 font-light">
              Web sitemizi ziyaret etmek için 18 yaşından büyük olmalısınız.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleVerify}
                className="px-8 py-3 bg-gold-400 text-black font-bold hover:bg-white transition-colors duration-300"
              >
                EVET, 18+
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-colors duration-300"
              >
                HAYIR
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}