
import React from 'react';
import { Target, Users, History, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Driving the <span className="text-blue-600">Renewable Revolution</span> through engineering precision.
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded with a mission to simplify the complex landscape of solar engineering, 
              The Solar Design has evolved into a global leader in PV design solutions. 
              We bridge the gap between initial concepts and AHJ-ready construction documents.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of licensed structural and electrical engineers works around the clock 
              to ensure your projects get approved faster, saving you time and reducing installation friction.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop" 
              alt="Engineering Team" 
              className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-slate-50 p-10 rounded-2xl">
            <Target className="h-10 w-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide the fastest and most reliable solar engineering documents in the industry, 
              enabling a greener planet one roof at a time.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl">
            <Users className="h-10 w-10 text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Our Team</h3>
            <p className="text-slate-600 leading-relaxed">
              A diverse collective of designers, licensed P.E. engineers, and consultants 
              dedicated to technical excellence and client success.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl">
            <Lightbulb className="h-10 w-10 text-yellow-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-slate-600 leading-relaxed">
              Leveraging advanced CAD automation and AI-driven energy modeling to optimize 
              system performance and structural integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
