
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Toggle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Logo (Always Visible) */}
      <div className="fixed top-6 left-6 z-[60]">
        <Link to="/" className="flex items-center space-x-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-sm" onClick={() => setIsOpen(false)}>
          <Sun className="h-6 w-6 text-yellow-500 fill-current" />
          <span className="text-sm font-black tracking-tighter text-slate-900 md:block hidden">
            SOLAR DESIGN
          </span>
        </Link>
      </div>

      {/* Floating Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-[70] w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 menu-btn-glow ${
          isOpen ? 'bg-white text-slate-900 rotate-90' : 'bg-blue-600 text-white'
        }`}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <div className="flex flex-col space-y-1.5 items-end">
            <span className="w-6 h-0.5 bg-current rounded-full"></span>
            <span className="w-4 h-0.5 bg-current rounded-full"></span>
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
          </div>
        )}
      </button>

      {/* Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[65] menu-overlay flex flex-col items-center justify-center ${isOpen ? 'open menu-open' : ''}`}
      >
        <div className="max-w-4xl w-full px-8 flex flex-col items-center">
          <nav className="flex flex-col space-y-8 items-center text-center">
            {NAV_LINKS.map((link, idx) => (
              <div 
                key={link.path} 
                className="menu-link group"
                style={{ transitionDelay: `${0.1 + idx * 0.05}s` }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-300 ${
                    location.pathname === link.path 
                    ? 'text-blue-500' 
                    : 'text-white hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </Link>
                <div className="h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-500 mx-auto mt-2"></div>
              </div>
            ))}
          </nav>

          <div className="mt-16 pt-16 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-8 menu-link" style={{ transitionDelay: '0.45s' }}>
            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold text-white mb-2">Connect with an Engineer</p>
              <p>info@thesolardesign.com</p>
              <p>+1 (555) 012-3456</p>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
