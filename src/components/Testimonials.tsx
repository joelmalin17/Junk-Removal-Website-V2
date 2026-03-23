import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'EcoHaul was incredible! They showed up exactly on time, were super professional, and cleared out my entire basement in less than an hour. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Michael Chen',
    role: 'Property Manager',
    content: 'I use them for all my rental property cleanouts. Their pricing is transparent and they always leave the site spotless. Best in the business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Emily Davis',
    role: 'Business Owner',
    content: 'Fast, efficient, and eco-friendly. I love that they donate what they can instead of just throwing everything in a landfill. Great service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-emerald-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">What Our Customers Say</h2>
          <p className="text-xl text-emerald-100/60 max-w-2xl mx-auto">
            Don't just take our word for it. We've helped thousands of neighbors reclaim their space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] relative">
              <Quote className="absolute top-6 right-8 text-emerald-500/20" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-500/30" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-emerald-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-emerald-50/80 leading-relaxed italic">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-5" />
            <span className="text-white font-bold">4.9 Rating based on 524 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
