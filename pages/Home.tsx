
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, Award, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
            alt="Solar Panels" 
            className="w-full h-full object-cover opacity-40 scale-110 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-2xl bg-white/5 backdrop-blur-xl text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 border border-white/10 reveal">
              <Sparkles className="h-4 w-4" />
              <span>Future-Proof Engineering</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter reveal" style={{ transitionDelay: '0.1s' }}>
              We Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Solar Energy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-light reveal" style={{ transitionDelay: '0.2s' }}>
              Precision-engineered PV permit sets and structural analysis that gets approved, every single time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 reveal" style={{ transitionDelay: '0.3s' }}>
              <Link to="/contact" className="group bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/calculator" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                Savings Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-900 py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 reveal">
            <div className="flex items-center space-x-3 text-white"><Shield className="h-6 w-6" /> <span className="font-bold tracking-tight">Licensed P.E.</span></div>
            <div className="flex items-center space-x-3 text-white"><Zap className="h-6 w-6" /> <span className="font-bold tracking-tight">48h Turnaround</span></div>
            <div className="flex items-center space-x-3 text-white"><CheckCircle2 className="h-6 w-6" /> <span className="font-bold tracking-tight">AHJ Approved</span></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Our Core Services</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Providing the technical foundation for the global shift to renewable power.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className="group bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 reveal"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                   <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed group-hover:text-blue-100 transition-colors">
                  {service.description}
                </p>
                <Link to="/services" className="text-blue-600 font-bold text-sm flex items-center group-hover:text-white transition-colors">
                  Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center reveal">
            <div className="p-8 border-r border-white/5 last:border-0">
              <p className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">15k</p>
              <p className="text-blue-500 font-bold uppercase text-xs tracking-[0.2em]">Permits Delivered</p>
            </div>
            <div className="p-8 border-r border-white/5 last:border-0">
              <p className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">99%</p>
              <p className="text-blue-500 font-bold uppercase text-xs tracking-[0.2em]">Approval Rate</p>
            </div>
            <div className="p-8 border-r border-white/5 last:border-0">
              <p className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">48h</p>
              <p className="text-blue-500 font-bold uppercase text-xs tracking-[0.2em]">Turnaround</p>
            </div>
            <div className="p-8 border-r border-white/5 last:border-0">
              <p className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">50</p>
              <p className="text-blue-500 font-bold uppercase text-xs tracking-[0.2em]">US States</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
