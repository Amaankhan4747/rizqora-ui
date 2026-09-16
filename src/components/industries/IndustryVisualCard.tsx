import React from 'react';
import { IndustryItem } from '../../data/industriesData';
import {
  Code,
  ShieldCheck,
  Lock,
  Scale,
  ShoppingBag,
  Gamepad2,
  GraduationCap,
  Factory,
  Plane,
  Car,
  Film,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe2,
  Radio,
  Cpu,
  Fingerprint,
  Award,
} from 'lucide-react';

interface IndustryVisualCardProps {
  industry: IndustryItem;
}

export const IndustryVisualCard: React.FC<IndustryVisualCardProps> = ({ industry }) => {
  const type = industry.visualTheme?.type || 'technology';

  const renderVisualContent = () => {
    switch (type) {
      case 'technology':
        return (
          <div className="space-y-4">
            {/* Network / CI-CD Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">CI/CD PIPELINE LIVE</span>
              </div>
              <span className="font-mono text-slate-400">Git Commit: #8f31e9</span>
            </div>

            {/* Code / String Simulation Card */}
            <div className="p-4 rounded-xl bg-black/80 border border-slate-800/80 font-mono text-[11px] space-y-2 text-slate-300">
              <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800">
                <span>locales/en.json → 32 Target Locales</span>
                <span className="text-emerald-400">Sync: 100%</span>
              </div>
              <div className="text-slate-400">
                <span className="text-[#E4032E] font-bold">&#123;</span>
                <div className="pl-3 space-y-1">
                  <div>
                    <span className="text-red-400">"key"</span>: <span className="text-emerald-300">"checkout.cta_button"</span>,
                  </div>
                  <div>
                    <span className="text-red-400">"i18n_fr"</span>: <span className="text-sky-300">"Finaliser ma commande"</span>,
                  </div>
                  <div>
                    <span className="text-red-400">"i18n_ar"</span>: <span className="text-amber-300" dir="rtl">"إتمام عملية الشراء"</span>
                  </div>
                </div>
                <span className="text-[#E4032E] font-bold">&#125;</span>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Latency SLA</div>
                <div className="text-base font-bold text-white font-['Space_Grotesk']">&lt;120ms</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Zero-Defect QA</div>
                <div className="text-base font-bold text-[#E4032E] font-['Space_Grotesk']">99.8%</div>
              </div>
            </div>
          </div>
        );

      case 'healthcare':
        return (
          <div className="space-y-4">
            {/* Header / Protocol */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Clinical Audit Trail
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                ISO 13485:2016
              </span>
            </div>

            {/* Dual-Pass Back-Translation Card */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Phase III Patient Protocol</span>
                <span className="text-emerald-400 font-semibold">Dual-Pass Reconciled</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Forward Translation (Certified)</div>
                <div className="text-slate-200 text-[11px] italic">
                  "Administration du médicament à jeun sous surveillance médicale."
                </div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Blind Back-Translation Audit</div>
                <div className="text-slate-300 text-[11px] italic">
                  "Administer medication on an empty stomach under medical supervision."
                </div>
              </div>
            </div>

            {/* Certifications bar */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-around text-[11px]">
              <span className="text-slate-300 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E]" /> FDA 21 CFR Part 11
              </span>
              <span className="text-slate-300 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E]" /> EMA & PMDA
              </span>
            </div>
          </div>
        );

      case 'finance':
        return (
          <div className="space-y-4">
            {/* Financial Security Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#E4032E]" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Encrypted Financial Tunnel
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-red-500/10 text-[#E4032E] text-[10px] font-bold border border-red-500/20">
                SOC-2 Type II
              </span>
            </div>

            {/* Earnings Disclosure Audit Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>SEC Form 10-K / IFRS Filing</span>
                <span className="text-emerald-400">Locked Numerical Stems</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-500">Revenue (Q3)</div>
                  <div className="text-white font-bold">$4.28B</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-500">EBITDA margin</div>
                  <div className="text-emerald-400 font-bold">28.4%</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-500">Turnaround</div>
                  <div className="text-[#E4032E] font-bold">&lt;12h</div>
                </div>
              </div>
            </div>

            {/* Financial Ledger Tag */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Daily Processed Financial Volume</div>
              <div className="text-lg font-black text-white font-['Space_Grotesk'] tracking-tight mt-0.5">
                ₹1.2 Billion+ <span className="text-xs text-slate-400 font-normal">/ day</span>
              </div>
            </div>
          </div>
        );

      case 'legal':
        return (
          <div className="space-y-4">
            {/* Legal Certificate Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Court-Certified Translation
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-bold border border-amber-500/20">
                Apostille Ready
              </span>
            </div>

            {/* Legal Clause Comparison Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Contract Clause §14.2 (Arbitration)</span>
                <span className="text-amber-400">Sworn Certification</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                <div className="text-slate-400 font-mono text-[9px] uppercase">Jurisdiction Admissibility</div>
                <div className="text-slate-200">
                  "Any dispute arising out of or in connection with this contract shall be referred to and finally resolved by arbitration..."
                </div>
              </div>
            </div>

            {/* Certified stats */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Certified Contracts</div>
                <div className="text-base font-bold text-white font-['Space_Grotesk']">50,000+</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Jurisdictions</div>
                <div className="text-base font-bold text-[#E4032E] font-['Space_Grotesk']">80+ Sovereign</div>
              </div>
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="space-y-4">
            {/* Catalog Sync Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Global SKU Pipeline
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                +68% Conversion
              </span>
            </div>

            {/* Multi-Currency Price & Checkout UI */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Active Storefront SKU Sync</span>
                <span className="text-emerald-400">20M+ Products</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono text-[11px]">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-500">US Store</div>
                  <div className="text-white font-bold">$149.00</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-500">JP Store</div>
                  <div className="text-white font-bold">¥22,400</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[9px] text-slate-500">EU Store</div>
                  <div className="text-white font-bold">€138.00</div>
                </div>
              </div>
            </div>

            {/* SEO & Checkout conversion callout */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Localized Checkout Funnels:</span>
              <span className="font-bold text-white">Apple Pay, Pix, UPI, iDEAL</span>
            </div>
          </div>
        );

      case 'gaming':
        return (
          <div className="space-y-4">
            {/* Gaming HUD Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Game Audio & HUD Engine
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] font-bold border border-purple-500/20">
                Gold Master LQA
              </span>
            </div>

            {/* Dialogue & Subtitle Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Dialogue Branching: Act III Quest 4</span>
                <span className="text-emerald-400">0 UI Overflows</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-purple-400 font-bold text-[10px] uppercase">[Vanguard Commander]</div>
                <div className="text-slate-200 text-[11px] leading-relaxed">
                  "Hold the perimeter! The energy shield won't withstand another breach!"
                </div>
                <div className="text-slate-400 text-[10px] font-mono pt-1">
                  JP Voice Track: Lip-sync matched (24.0 fps)
                </div>
              </div>
            </div>

            {/* Player satisfaction */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Player Sentiment Rating:</span>
              <span className="text-emerald-400 font-bold font-mono">98.2% Positive (Steam & App Store)</span>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4">
            {/* E-Learning Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  SCORM & LMS Architecture
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 text-[10px] font-bold border border-sky-500/20">
                xAPI Certified
              </span>
            </div>

            {/* Course Module Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Interactive Courseware Module</span>
                <span className="text-sky-400">94% Completion</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-200 font-bold">Multilingual Audio Track</span>
                  <span className="text-emerald-400 font-mono text-[10px]">Synced: 100ms</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#E4032E] h-full w-4/5 rounded-full" />
                </div>
                <div className="text-[10px] text-slate-400">
                  Interactive quizzes & pedagogical exercises culturally adapted.
                </div>
              </div>
            </div>

            {/* Active Students */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Global Active Learners</div>
              <div className="text-lg font-black text-white font-['Space_Grotesk'] tracking-tight mt-0.5">
                12,400,000+ <span className="text-xs text-slate-400 font-normal">Students</span>
              </div>
            </div>
          </div>
        );

      case 'manufacturing':
        return (
          <div className="space-y-4">
            {/* CAD & Safety Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Industrial CAD & Safety DTP
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-bold border border-amber-500/20">
                ISO 3864 / CE
              </span>
            </div>

            {/* Technical Schematics Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>Turbine Assembly Manual §08</span>
                <span className="text-amber-400">Tolerances: ±0.01mm</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                <div className="text-amber-400 font-bold text-[10px] uppercase">[DANGER // HAUTE TENSION]</div>
                <div className="text-slate-300">
                  Couper l'alimentation principale avant toute intervention sur l'armoire électrique.
                </div>
              </div>
            </div>

            {/* Precision Metric */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Manual Precision</div>
                <div className="text-base font-bold text-white font-['Space_Grotesk']">99.94%</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Maintenance Errors</div>
                <div className="text-base font-bold text-emerald-400 font-['Space_Grotesk']">-40%</div>
              </div>
            </div>
          </div>
        );

      case 'travel':
        return (
          <div className="space-y-4">
            {/* Travel & Booking Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-sky-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Global Reservation Engine
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 text-[10px] font-bold border border-sky-500/20">
                35+ Traveler Markets
              </span>
            </div>

            {/* Flight / Resort Card */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Luxury Resort & Flight Itinerary</span>
                <span className="text-emerald-400">Direct Bookings +42%</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px]">
                <div>
                  <div className="text-slate-400 text-[9px] uppercase">Destination</div>
                  <div className="text-white font-bold">Maldives · Overwater Villa</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-[9px] uppercase">Localized Concierge</div>
                  <div className="text-[#E4032E] font-bold">Arabic, Mandarin, German</div>
                </div>
              </div>
            </div>

            {/* Direct Booking Lift */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Overseas Loyalty Signups:</span>
              <span className="text-emerald-400 font-bold font-mono">3.8x Growth</span>
            </div>
          </div>
        );

      case 'automotive':
        return (
          <div className="space-y-4">
            {/* Vehicle Infotainment Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-red-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  In-Cabin Infotainment (IVI)
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20">
                ISO 26262 Safety
              </span>
            </div>

            {/* Digital Cockpit Simulation */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>ADAS Heads-Up Display Alert</span>
                <span className="text-emerald-400">99.4% Voice Accuracy</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                <div className="text-red-400 font-bold text-[10px] uppercase">[ADAS // WARNING 42]</div>
                <div className="text-white">
                  "Lane keeping assist active. Maintain hands on steering wheel."
                </div>
              </div>
            </div>

            {/* Cockpit specs */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Cluster Readability</div>
                <div className="text-base font-bold text-white font-['Space_Grotesk']">Zero Recall</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Target Markets</div>
                <div className="text-base font-bold text-[#E4032E] font-['Space_Grotesk']">45 Countries</div>
              </div>
            </div>
          </div>
        );

      case 'media':
        return (
          <div className="space-y-4">
            {/* OTT Subtitle Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  OTT Subtitling & Dubbing
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] font-bold border border-purple-500/20">
                SMPTE Frame-Accurate
              </span>
            </div>

            {/* Cinematic Subtitle Monitor */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>Timecode: 01:24:18:04 → 01:24:20:12</span>
                <span className="text-emerald-400">14.2 CPS (Optimal)</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center space-y-1">
                <div className="text-slate-400 text-[9px] uppercase font-sans font-semibold">Subtitle Preview</div>
                <div className="text-yellow-300 text-[11px] font-sans font-medium">
                  "If we don't cross the ridge before sunset, the storm will trap us here."
                </div>
              </div>
            </div>

            {/* Streaming Impact */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">International Viewership:</span>
              <span className="text-emerald-400 font-bold font-mono">5.4x Catalog Uplift</span>
            </div>
          </div>
        );

      case 'energy':
      default:
        return (
          <div className="space-y-4">
            {/* Grid & Telecom Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Critical Infrastructure Network
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-bold border border-amber-500/20">
                IEC & IEEE Compliant
              </span>
            </div>

            {/* Grid Telemetry Box */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-slate-800/80 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>Multinational EPC Consortium Tender</span>
                <span className="text-emerald-400">EIA Approved</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                <div className="text-amber-400 font-bold text-[9px] uppercase">[GRID PROTOCOL // 400KV]</div>
                <div className="text-slate-200">
                  Substation synchronization protocol certified for cross-border transmission.
                </div>
              </div>
            </div>

            {/* Onboarding Time Reduction */}
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-semibold">Project Onboarding Timeline:</span>
              <span className="text-emerald-400 font-bold font-mono">-30% Accelerated</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
      {/* Subtle ambient accent glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E4032E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Visual Header */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#E4032E] flex items-center justify-center border border-red-500/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-['Space_Grotesk']">
              TECHNICAL BLUEPRINT
            </div>
            <div className="text-xs font-bold text-white">
              {industry.name} Architecture
            </div>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
          {industry.visualTheme?.symbol || 'DOMAIN // SPEC'}
        </span>
      </div>

      {/* Dynamic Visual Content */}
      <div className="relative z-10">{renderVisualContent()}</div>

      {/* Bottom verified badge */}
      <div className="relative z-10 pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#E4032E]" />
          Verified enterprise deployment benchmark
        </span>
        <span className="font-mono text-slate-400 font-semibold">
          {industry.visualTheme?.metricValue}
        </span>
      </div>
    </div>
  );
};
