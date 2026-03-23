import { Check, Info } from 'lucide-react';

const tiers = [
  {
    name: 'Single Item',
    price: '99',
    description: 'Perfect for one large item like a sofa or fridge.',
    features: ['Curbside pickup', 'Eco-friendly recycling', 'Same-day available'],
    popular: false
  },
  {
    name: '1/4 Truck Load',
    price: '189',
    description: 'Ideal for small closet or shed cleanouts.',
    features: ['Full service loading', 'Up to 2 items donated', 'Cleanup included', 'Priority scheduling'],
    popular: true
  },
  {
    name: 'Full Truck Load',
    price: '549',
    description: 'Complete garage or large room cleanout.',
    features: ['2-3 person crew', 'Up to 2 tons of debris', 'Donation receipts', 'Deep sweep cleanup'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Transparent Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">No Hidden Fees. Ever.</h3>
          <p className="text-xl text-slate-600">
            Our pricing is based on how much space your junk takes up in our truck.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-8 rounded-[2.5rem] border transition-all hover:scale-[1.02] ${
                tier.popular ? 'border-emerald-500 shadow-xl ring-4 ring-emerald-500/10' : 'border-slate-100 shadow-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-500 text-lg font-medium">From</span>
                  <span className="text-5xl font-black text-slate-900">${tier.price}</span>
                </div>
                <p className="text-slate-500 mt-4">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <Check className="text-emerald-600" size={16} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-extrabold transition-all ${
                tier.popular 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                Book This Load
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-slate-500 bg-white w-fit mx-auto px-6 py-3 rounded-full border border-slate-100 shadow-sm">
          <Info size={18} className="text-emerald-500" />
          <p className="text-sm font-medium">Final price determined on-site after visual inspection.</p>
        </div>
      </div>
    </section>
  );
}
