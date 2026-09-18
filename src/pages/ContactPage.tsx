import React, { useState } from 'react';
import { PageId } from '../types';
import { OFFICE_LOCATIONS } from '../data/mockData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [activeOffice, setActiveOffice] = useState(OFFICE_LOCATIONS[0]);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      return;
    }

    setIsSubmitting(true);

    const messageLines = [
      'New Contact Enquiry — Rizqoraa Solutions',
      '',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
    ];
    if (formData.company.trim()) {
      messageLines.push(`Company: ${formData.company.trim()}`);
    }
    if (formData.subject) {
      messageLines.push(`Subject: ${formData.subject}`);
    }
    messageLines.push(`Message: ${formData.message.trim()}`);
    messageLines.push('');
    messageLines.push('Please review this enquiry.');

    const whatsappMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/919950464005?text=${encodeURIComponent(whatsappMessage)}`;
    setSubmittedWhatsAppUrl(waUrl);

    // Open WhatsApp in a new tab for user review
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
    }, 350);
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Global Contact & Office Network
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Our global team is ready 24/7 to answer your inquiries, scope your localization project, or assist with enterprise support.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk']">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and your inquiry will be routed directly to our official WhatsApp desk.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900 font-['Space_Grotesk']">
                  Message Prepared & WhatsApp Opened!
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'Valued Partner'}</strong>. Your enquiry details have been compiled and WhatsApp has opened in a new tab with your pre-filled message ready for you to review and send directly to our team.
                </p>
                {submittedWhatsAppUrl && (
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-md transition-all"
                    >
                      <span>Open WhatsApp Again</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSent(false);
                        setFormData({ name: '', email: '', company: '', subject: 'General Inquiry', message: '' });
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-2 px-3 underline cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="John Smith"
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="john@company.com"
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Tech Inc."
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Enterprise Sales">Enterprise Sales & Partnership</option>
                      <option value="AI Dataset Annotation">AI Dataset Annotation</option>
                      <option value="Linguist Network">Join Linguist Network</option>
                      <option value="Support">Client Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="Describe your language, volume, or localization requirements..."
                    className="w-full border border-slate-200 rounded-xl p-3.5 text-xs text-[#141414] focus:outline-none focus:border-[#E4032E]"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-[#E4032E] font-medium">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E4032E] hover:bg-[#c30226] disabled:opacity-70 text-white py-3.5 rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Global Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-[#141414] font-['Space_Grotesk']">
              Official Headquarters & Desks
            </h2>

            <div className="space-y-3">
              {OFFICE_LOCATIONS.map((office) => (
                <div
                  key={office.city}
                  onClick={() => setActiveOffice(office)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeOffice.city === office.city
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xl'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold font-['Space_Grotesk'] flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E4032E]" />
                      {office.city}
                    </span>
                    {office.isHQ && (
                      <span className="text-[10px] uppercase font-bold text-[#E4032E] bg-red-500/10 px-2 py-0.5 rounded">
                        Global HQ
                      </span>
                    )}
                  </div>

                  <p className="text-xs opacity-80 mt-2 leading-relaxed">
                    {office.address}
                  </p>

                  <div className="pt-3 border-t border-slate-200/40 mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] opacity-90">
                    <a
                      href="tel:+919950464005"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 hover:text-[#E4032E] transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#E4032E]" /> {office.phone}
                    </a>
                    <a
                      href="https://wa.me/919950464005"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[#25D366] hover:underline font-semibold"
                    >
                      <span>💬 WhatsApp</span>
                    </a>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#E4032E]" /> {office.timezone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
