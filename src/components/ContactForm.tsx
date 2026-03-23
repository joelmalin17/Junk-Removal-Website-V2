import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-emerald-600 p-12 text-white">
            <h3 className="text-4xl font-black mb-6">Get Your Free Estimate</h3>
            <p className="text-emerald-50/80 mb-12 text-lg">
              Ready to reclaim your space? Fill out the form or give us a call. We're ready when you are.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-emerald-200 text-sm font-bold uppercase tracking-wider">Call Us</div>
                  <div className="text-2xl font-bold">(800) 555-0199</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-emerald-200 text-sm font-bold uppercase tracking-wider">Email Us</div>
                  <div className="text-2xl font-bold">hello@ecohaul.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-emerald-200 text-sm font-bold uppercase tracking-wider">Service Area</div>
                  <div className="text-2xl font-bold">Greater Metro Area</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Type</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all appearance-none">
                  <option>Residential Junk Removal</option>
                  <option>Commercial Cleanout</option>
                  <option>Appliance Disposal</option>
                  <option>Yard Waste Removal</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us what you need hauled away..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-extrabold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl">
                <Send size={20} />
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
