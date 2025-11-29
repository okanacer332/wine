"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll efektini yakala
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-dark-900/90 backdrop-blur-md py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-32 h-12 md:w-40 md:h-16">
            <Image
              src="/assets/logo-white.png" // User's uploaded logo path
              alt="Tasheli Wine Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Hamburger Btn */}
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 text-white"
          >
            <span className="hidden md:block uppercase tracking-widest text-xs font-bold group-hover:text-gold-400 transition-colors">
              Menü
            </span>
            <Menu className="w-8 h-8 text-gold-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 z-[55] bg-dark-900 flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-gold-400 transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {["Anasayfa", "Hikayemiz", "Şaraplar", "Bağlarımız", "İletişim"].map(
                (item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl md:text-6xl text-white hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}