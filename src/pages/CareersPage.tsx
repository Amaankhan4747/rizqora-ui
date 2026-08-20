import React, { useState } from 'react';
import { PageId, JobPosition } from '../types';
import { OPEN_POSITIONS } from '../data/mockData';
import { Briefcase, Globe, CheckCircle2, ArrowRight, UserPlus, Send, X } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantLangPair, setApplicantLangPair] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySubmitted(true);
    setTimeout(() => {
      setApplySubmitted(false);
      setShowApplyModal(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantLangPair('');
    }, 3000);
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            JOIN RIZQORA SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Build the Future of Global Language AI
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            We are hiring AI engineers, localization project managers, and certified translators across 200+ countries.
          </p>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <Globe className="w-6 h-6 text-[#E4032E]" />
            <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">100% Remote-First Culture</h3>
            <p className="text-xs text-slate-600">Work from anywhere in the world with flexible hours and global team collaboration.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <Briefcase className="w-6 h-6 text-[#E4032E]" />
            <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">Competitive Global Pay</h3>
            <p className="text-xs text-slate-600">Top-tier compensation, continuous training stipends, and performance bonuses.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <UserPlus className="w-6 h-6 text-[#E4032E]" />
            <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">Linguist Network</h3>
            <p className="text-xs text-slate-600">Join over 10,000 certified translators and subject-matter experts worldwide.</p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk']">
            Open Positions & Network Enrollment
          </h2>

          <div className="space-y-4">
            {OPEN_POSITIONS.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-red-200 shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#E4032E] bg-red-50 px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{job.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#141414] font-['Space_Grotesk']">
                    {job.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {job.location} • Experience: {job.experience}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setShowApplyModal(true);
                  }}
                  className="bg-[#E4032E] hover:bg-[#c30226] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              JOB APPLICATION
            </span>
            <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
              Apply for {selectedJob.title}
            </h3>

            {applySubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
                <div className="text-sm font-bold text-emerald-900">Application Submitted!</div>
                <p className="text-xs text-emerald-700">
                  Thank you for applying. Our talent acquisition team will review your credentials shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Language Pairs / Specialty (if applicable)</label>
                  <input
                    type="text"
                    value={applicantLangPair}
                    onChange={(e) => setApplicantLangPair(e.target.value)}
                    placeholder="English to German / SaaS MTPE"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#E4032E] hover:bg-[#c30226] text-white py-3 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
