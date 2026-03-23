import { motion } from 'motion/react';
import { CheckCircle, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
          alt="Junk removal truck and team" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Clock size={16} /> Same Day Service Available
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight text-balance">
              Fast, Reliable <span className="text-emerald-400">Junk Removal</span> Done Right.
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-xl">
              We haul away your unwanted items so you don't have to. Licensed, insured, and eco-friendly disposal. Starting at just $99.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-xl shadow-amber-500/30 transition-all transform hover:scale-105 active:scale-95">
                Get Free Quote
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-extrabold text-lg transition-all">
                Book Online
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Star className="text-amber-400 fill-amber-400" size={20} />
                </div>
                <div>
                  <div className="font-bold">4.9/5 Stars</div>
                  <div className="text-xs text-white/60">500+ Google Reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <ShieldCheck className="text-emerald-400" size={20} />
                </div>
                <div>
                  <div className="font-bold">Fully Insured</div>
                  <div className="text-xs text-white/60">Licensed & Bonded</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4"
        >
          <div className="bg-emerald-100 p-3 rounded-2xl">
            <CheckCircle className="text-emerald-600" size={32} />
          </div>
          <div>
            <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Starting From</div>
            <div className="text-4xl font-black text-slate-900">$99</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
