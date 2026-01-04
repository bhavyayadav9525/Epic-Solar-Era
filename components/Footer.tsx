
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center space-x-2 mb-8 text-slate-900">
              <Sun className="h-8 w-8 text-yellow-500 fill-current" />
              <span className="text-2xl font-black tracking-tighter">THE SOLAR DESIGN</span>
            </div>
            <p className="text-lg leading-relaxed mb-8 max-w-sm">
              Simplifying solar engineering with fast, high-quality, and AHJ-ready construction documents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-slate-900 font-bold uppercase text-xs tracking-widest mb-8">Platform</h3>
            <ul className="space-y-4 text-sm font-medium">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-5">
            <h3 className="text-slate-900 font-bold uppercase text-xs tracking-widest mb-8">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Write to us</p>
                  <p className="font-bold text-slate-900">info@thesolardesign.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Call our office</p>
                  <p className="font-bold text-slate-900">+1 (555) 012-3456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <p>&copy; {new Date().getFullYear()} The Solar Design Engineering. Built for the Future.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
