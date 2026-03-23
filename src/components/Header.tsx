import { Phone, Calendar, Menu, X, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Truck className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
              Eco<span className="text-emerald-500">Haul</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Pricing', 'Before & After', 'Reviews'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className={`font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-slate-600' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:18005550199" 
              className={`flex items-center gap-2 font-bold ${isScrolled ? 'text-emerald-600' : 'text-white'}`}
            >
              <Phone size={18} />
              (800) 555-0199
            </a>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105 active:scale-95">
              Book Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['Services', 'Pricing', 'Before & After', 'Reviews'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="block text-lg font-medium text-slate-700 hover:text-emerald-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                <a href="tel:18005550199" className="flex items-center gap-2 font-bold text-emerald-600 text-xl">
                  <Phone size={20} />
                  (800) 555-0199
                </a>
                <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg">
                  Book Online Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
