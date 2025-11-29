import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";
import AgeGate from "./components/AgeGate";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <AgeGate />
      <Header />
      <Hero />
      <About />
      <ProductList />
      
      {/* Basit Footer */}
      <footer className="py-12 border-t border-neutral-800 text-center">
         <p className="text-gray-500 font-serif text-sm">
           &copy; {new Date().getFullYear()} Tasheli Winery. Kara İn Bağı, Çömelek Köyü.
         </p>
      </footer>
    </main>
  );
}