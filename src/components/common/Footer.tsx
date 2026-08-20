import React, { useState } from 'react';
import { PageId } from '../../types';
import { ArrowRight, Globe, CheckCircle, Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                <div className="w-4 h-4 border-2 border-white rounded rotate-45 flex items-center justify-center relative">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] absolute -top-1 -right-1" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-['Space_Grotesk']">
                Rizqora<span className="text-[#E4032E]">.</span> Solutions
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building a world where language turns possibilities into global business with no limits. Next-generation Global Language Solutions & AI Localization.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                24/7 Global Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                ISO 17100 & SOC-2 Certified
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('services', 'translation')}
                  className="hover:text-white transition-colors"
                >
                  Translation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'localization')}
                  className="hover:text-white transition-colors"
                >
                  Localization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'ai-data-annotation')}
                  className="hover:text-white transition-colors"
                >
                  AI Data Annotation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'mtpe')}
                  className="hover:text-white transition-colors"
                >
                  MT Post Editing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'lqa')}
                  className="hover:text-white transition-colors"
                >
                  Linguistic QA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs text-[#E4032E] font-bold hover:underline"
                >
                  View All 10 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Industries & Resources Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-white transition-colors"
                >
                  Industries Served
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('languages')}
                  className="hover:text-white transition-colors"
                >
                  Languages (1,000+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="hover:text-white transition-colors"
                >
                  Technology Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-solutions')}
                  className="hover:text-white transition-colors"
                >
                  AI Solutions Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Blog & Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to our newsletter for insights on AI localization, global growth, and MTPE trends.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E4032E] transition-colors pr-9"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#E4032E] hover:bg-[#c30226] text-white rounded-md flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in">
                  <CheckCircle className="w-3.5 h-3.5" /> Subscribed successfully!
                </div>
              )}
            </form>

            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#E4032E] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#E4032E] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#E4032E] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#E4032E] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#E4032E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Company Links & Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Rizqora Solutions Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              About Company
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="hover:text-white transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
