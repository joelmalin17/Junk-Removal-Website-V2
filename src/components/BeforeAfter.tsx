import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Garage Cleanout',
    before: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    description: 'Cleared 15 years of accumulated household items in just 3 hours.'
  },
  {
    title: 'Construction Debris',
    before: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=800',
    description: 'Post-renovation cleanup for a local restaurant remodel.'
  }
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Visual Proof</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">See the Transformation</h3>
          </div>
          <p className="text-slate-600 max-w-md">
            Real photos from our recent jobs. We don't just haul junk; we restore your space and peace of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-3xl">
                  <img src={item.before} alt="Before" className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
                </div>
                <div className="relative group overflow-hidden rounded-3xl">
                  <img src={item.after} alt="After" className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">After</div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                <button className="p-4 rounded-full bg-slate-100 text-slate-900 hover:bg-emerald-600 hover:text-white transition-all">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
