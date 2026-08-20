import React from 'react';
import { PageId } from '../types';
import { OFFICE_LOCATIONS } from '../data/mockData';
import { Globe2, ShieldCheck, Award, Users, ArrowRight, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'AI + Human Synergy',
      desc: 'We believe neural machine intelligence reaches true enterprise perfection only when combined with native human expertise.',
      icon: Sparkles,
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Every word, dataset, and document undergoes rigorous MQM quality scoring and independent LQA audit before release.',
      icon: ShieldCheck,
    },
    {
      title: 'Global Cultural Reach',
      desc: 'Language is more than literal translation—it is cultural nuance, trust, and regional authenticity across 1,000+ languages.',
      icon: Globe2,
    },
    {
      title: 'Enterprise Partnership',
      desc: 'We operate as a long-term strategic extension of our clients, embedding directly into their dev and content pipelines.',
      icon: Users,
    },
  ];

  const leadership = [
    {
      name: 'Alexander Rizq',
      role: 'Founder & Chief Executive Officer',
      bio: 'Former global localization director with 18+ years leading enterprise language technology operations across EMEA and North America.',
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      bio: 'Pioneer in Neural Machine Translation and LLM alignment datasets. Holds 6 patents in automated linguistic QA architectures.',
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Head of AI Research',
      bio: 'Specialist in low-resource language annotation, RLHF alignment, and domain-adapted neural dictionary injection.',
    },
    {
      name: 'Sarah Chen',
      role: 'VP of Quality Assurance',
      bio: 'ISO 17100 lead auditor overseeing Rizqora network of 10,000+ certified linguists and subject-matter experts.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            ABOUT RIZQORA SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Redefining Enterprise Communication for a Connected World.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Rizqora Solutions is a next-generation Global Language Solutions & AI Localization company. We empower global enterprises to expand effortlessly into international markets.
          </p>
        </div>
      </section>

      {/* Vision & Story Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              OUR VISION & PURPOSE
            </span>
            <h2 className="text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
              Not a traditional translation agency. A global language-technology powerhouse.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded to bridge the gap between fast-moving software development and traditional translation agencies, Rizqora Solutions combines proprietary neural machine translation engines with an elite network of certified native linguists.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you are localizing a complex SaaS platform, training LLMs on low-resource language datasets, or certifying medical trial documents for regulatory approval, Rizqora provides end-to-end precision and continuous pipeline automation.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-bold">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-[#E4032E] font-['Space_Grotesk']">2026-2035</div>
                <div className="text-slate-600 mt-1">Built for Next-Decade Longevity</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-[#141414] font-['Space_Grotesk']">10,000+</div>
                <div className="text-slate-600 mt-1">Certified Native Linguists</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#0A0A0A] text-white rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#E4032E]">
              Global Reach & Operations
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Headquartered in San Francisco with major hub offices in London, Tokyo, Dubai, and Singapore, our operational footprint ensures round-the-clock 24/7 project management and support.
            </p>
            <div className="space-y-3 pt-2">
              {OFFICE_LOCATIONS.map((office) => (
                <div key={office.city} className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E4032E]" />
                    {office.city}, {office.country} {office.isHQ && '(HQ)'}
                  </span>
                  <span className="text-slate-400">{office.timezone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
              CORE PRINCIPLES
            </span>
            <h2 className="text-3xl font-extrabold text-[#141414] font-['Space_Grotesk']">
              The Values Driving Our Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div key={v.title} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E4032E] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            EXECUTIVE LEADERSHIP
          </span>
          <h2 className="text-3xl font-extrabold text-[#141414] font-['Space_Grotesk']">
            Meet the Pioneers Behind Rizqora
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member) => (
            <div key={member.name} className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-900 text-white font-bold text-lg flex items-center justify-center font-['Space_Grotesk']">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#141414]">{member.name}</h3>
                <div className="text-xs font-semibold text-[#E4032E] mt-0.5">{member.role}</div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-10 rounded-3xl bg-[#0A0A0A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-extrabold font-['Space_Grotesk']">
              Ready to partner with Rizqora Solutions?
            </h3>
            <p className="text-sm text-slate-400">
              Get an enterprise quote tailored to your language and technology requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="bg-[#E4032E] hover:bg-[#c30226] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
