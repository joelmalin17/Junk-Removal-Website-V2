import { Truck, Home, Building2, Trash2, Recycle, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Residential Removal',
    description: 'Furniture, appliances, mattresses, and general household clutter hauled away fast.',
    icon: Home,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Commercial Cleanouts',
    description: 'Office furniture, electronics, and construction debris removal for businesses.',
    icon: Building2,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Appliance Disposal',
    description: 'Safe removal and eco-friendly recycling of refrigerators, washers, and dryers.',
    icon: Trash2,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Yard Waste',
    description: 'Branches, sod, dirt, and old outdoor structures cleared from your property.',
    icon: Leaf,
    color: 'bg-emerald-50 text-emerald-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Full-Service Junk Removal</h3>
          <p className="text-xl text-slate-600">
            We handle the heavy lifting, loading, and disposal. You just point, and it's gone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-emerald-500/20 p-4 rounded-2xl">
              <Recycle className="text-emerald-400" size={40} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Eco-Friendly Disposal</h4>
              <p className="text-emerald-100/70 max-w-md">
                We donate and recycle up to 70% of the items we haul away. Keeping your junk out of landfills.
              </p>
            </div>
          </div>
          <button className="bg-white text-emerald-900 px-8 py-4 rounded-2xl font-extrabold hover:bg-emerald-50 transition-colors whitespace-nowrap">
            Learn About Our Process
          </button>
        </div>
      </div>
    </section>
  );
}
