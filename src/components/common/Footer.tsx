import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../../data/mockData';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const getServiceSlug = (id: string) => (id === 'lqa' ? 'linguistic-quality-assurance' : id);

  return (
    <footer className="bg-[#090C15] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-black rounded-md rotate-45 flex items-center justify-center relative">
                  <span className="w-2 h-2 rounded-full bg-[#E4032E] absolute -top-1 -right-1" />
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-none">
                  Rizqoraa<span className="text-[#E4032E]">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold leading-tight">
                  Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Global enterprise language & AI solutions powered by certified native linguists and proprietary neural translation infrastructure.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E4032E]" />
                <span>enterprise@Rizqoraasolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E4032E]" />
                <span>Global Offices: Singapore · London · New York · Dubai</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-['Space_Grotesk']">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/solutions/${getServiceSlug(s.id)}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/solutions" className="text-[#E4032E] font-semibold flex items-center gap-1 pt-1">
                  All 10 Solutions <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-['Space_Grotesk']">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <Link
                    to={`/industries/${ind.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="text-[#E4032E] font-semibold flex items-center gap-1 pt-1">
                  All Industries <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-['Space_Grotesk']">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology & AI</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources & Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/quote" className="text-[#E4032E] font-bold">Request Instant Quote</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Rizqoraa Solutions Inc. All rights reserved. ISO 17100:2015 & ISO 9001:2015 Certified.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/quote" className="hover:text-slate-300">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
