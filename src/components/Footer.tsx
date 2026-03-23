import { Truck, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Truck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Eco<span className="text-emerald-500">Haul</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The most reliable junk removal service in the metro area. We focus on speed, professionalism, and eco-friendly disposal.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-xl hover:bg-emerald-600 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Residential Removal</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Commercial Cleanouts</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Appliance Disposal</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Yard Waste Removal</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Estate Cleanouts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing Guide</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6">Get tips on decluttering and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 w-full"
              />
              <button className="bg-emerald-600 px-4 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 EcoHaul Junk Removal. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
