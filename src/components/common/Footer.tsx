import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../../data/mockData';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, MessageSquare } from 'lucide-react';
import { RizqoraaLogo } from './RizqoraaLogo';

export const Footer: React.FC = () => {
  const getServiceSlug = (id: string) => (id === 'lqa' ? 'linguistic-quality-assurance' : id);

  return (
    <footer className="bg-[#090C15] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center group" 
              aria-label="Rizqoraa Home"
            >
              <img
                src="/rizqoraa-footer-logo.png"
                alt="Rizqoraa Solutions - Connecting Every Language, Powering Global Business"
                decoding="async"
                className="h-9 sm:h-12 w-auto max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] object-contain select-none transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Global enterprise language & AI solutions powered by certified native linguists and proprietary neural translation infrastructure.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E4032E] shrink-0 mt-0.5" />
                <span>Aravalli Mall, Udaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E4032E] shrink-0" />
                <a href="tel:+919950464005" className="hover:text-white transition-colors">
                  +91 9950464005
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E4032E] shrink-0" />
                <a href="mailto:enterprise@Rizqoraasolutions.com" className="break-all hover:text-white transition-colors">
                  enterprise@Rizqoraasolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <a
                  href="https://wa.me/919950464005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:text-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: 9950464005</span>
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-['Space_Grotesk']">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.slice(0, 8).map((s) => (
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
                  All 12 Solutions <ArrowRight className="w-3 h-3" />
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
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rizqoraa Solutions Inc. All rights reserved. ISO 17100:2015 & ISO 9001:2015 Certified.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/quote" className="hover:text-slate-300">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
