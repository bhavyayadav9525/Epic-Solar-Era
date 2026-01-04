
import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Solar Solutions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From residential rooftops to massive industrial arrays, we provide the technical 
            backbone for your solar installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-lg transition-all">
              <div className="md:w-1/3 bg-blue-600 p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{service.id.split('-').join(' ')}</h3>
                </div>
              </div>
              <div className="md:w-2/3 p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <Check className="h-3 w-3" />
                      </div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-bold mb-6">Need a custom engineering solution?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            We handle complex structural requirements, large scale utility projects, 
            and specialized battery storage integration.
          </p>
          <a href="#/contact" className="inline-block bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl">
            Talk to an Expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
