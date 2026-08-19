import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending message
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-mono text-[#6FA7A3] tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
            Opportunities & Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2EF]">
            Let's build something useful.
          </h2>
          <p className="text-[#9A9FA3] text-sm sm:text-base leading-relaxed">
            I'm currently open to AI/ML internships, junior AI/ML engineering roles, Python/AI opportunities, and entry-level software/AI engineering positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Feature */}
            <div className="p-5 rounded-xl bg-[#141719] border border-[#292D30] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#9A9FA3]">
                <span>Direct Inquiries</span>
                <span className="flex items-center gap-1 text-[#6FA7A3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3] animate-pulse"></span>
                  Active Inbox
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="direct-email-link"
                  className="font-mono text-sm font-semibold text-[#F2F2EF] hover:text-[#6FA7A3] transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="p-2 rounded-md bg-[#181B1D] border border-[#292D30] hover:border-[#6FA7A3]/50 text-[#9A9FA3] hover:text-[#F2F2EF] transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#6FA7A3]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] font-mono text-[#6FA7A3] animate-fadeIn">
                  ✓ Email copied to clipboard
                </div>
              )}
            </div>

            {/* Quick Action Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin-link"
                className="p-4 rounded-xl bg-[#141719] border border-[#292D30] hover:border-[#6FA7A3]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#6FA7A3]" />
                  <span className="text-xs font-medium text-[#F2F2EF] group-hover:text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9FA3] group-hover:text-[#6FA7A3] transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github-link"
                className="p-4 rounded-xl bg-[#141719] border border-[#292D30] hover:border-[#6FA7A3]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#6FA7A3]" />
                  <span className="text-xs font-medium text-[#F2F2EF] group-hover:text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9FA3] group-hover:text-[#6FA7A3] transition-colors" />
              </a>
            </div>

            {/* Resume Button Card */}
            <button
              onClick={onOpenResume}
              id="contact-resume-btn"
              className="w-full p-4 rounded-xl bg-[#141719] border border-[#292D30] hover:border-[#6FA7A3]/40 transition-all flex items-center justify-between group text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#6FA7A3]" />
                <div>
                  <div className="text-xs font-medium text-[#F2F2EF] group-hover:text-white">
                    View / Download Full CV
                  </div>
                  <div className="text-[11px] text-[#9A9FA3] font-mono">
                    Updated August 2026 · PDF & ATS-Friendly Format
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9FA3] group-hover:text-[#6FA7A3] transition-colors" />
            </button>

            {/* Location Note */}
            <div className="p-3.5 rounded-lg bg-[#0D0F10] border border-[#292D30] flex items-center gap-2 text-xs font-mono text-[#9A9FA3]">
              <MapPin className="w-3.5 h-3.5 text-[#6FA7A3]" />
              <span>Based in Lahore, Pakistan (Available for Hybrid & Remote)</span>
            </div>

          </div>

          {/* Quick Message Composer Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-[#141719] border border-[#292D30] space-y-4">
              <div className="flex items-center justify-between border-b border-[#292D30] pb-3">
                <div className="text-xs font-mono font-medium text-[#F2F2EF] uppercase tracking-wider">
                  Send a Direct Message
                </div>
                <span className="text-[11px] font-mono text-[#9A9FA3]">
                  Or email directly
                </span>
              </div>

              {isSent ? (
                <div className="p-6 rounded-lg bg-[#0D0F10] border border-[#6FA7A3]/40 text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#6FA7A3]/10 text-[#6FA7A3] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-[#F2F2EF]">
                    Thank you for reaching out!
                  </div>
                  <p className="text-xs text-[#9A9FA3] max-w-sm mx-auto">
                    Your note has been queued. Alternatively, feel free to email directly at <span className="font-mono text-[#6FA7A3]">{PERSONAL_INFO.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#9A9FA3]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe / Recruiter"
                        className="w-full px-3 py-2 rounded-md bg-[#0D0F10] border border-[#292D30] text-xs text-[#F2F2EF] placeholder:text-[#9A9FA3]/40 focus:outline-none focus:border-[#6FA7A3]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-[#9A9FA3]">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3 py-2 rounded-md bg-[#0D0F10] border border-[#292D30] text-xs text-[#F2F2EF] placeholder:text-[#9A9FA3]/40 focus:outline-none focus:border-[#6FA7A3]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#9A9FA3]">Opportunity / Role / Topic</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Junior AI/ML Engineer Role at..."
                      className="w-full px-3 py-2 rounded-md bg-[#0D0F10] border border-[#292D30] text-xs text-[#F2F2EF] placeholder:text-[#9A9FA3]/40 focus:outline-none focus:border-[#6FA7A3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-[#9A9FA3]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the position, project, or schedule an introductory chat..."
                      className="w-full px-3 py-2 rounded-md bg-[#0D0F10] border border-[#292D30] text-xs text-[#F2F2EF] placeholder:text-[#9A9FA3]/40 focus:outline-none focus:border-[#6FA7A3] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form"
                    className="w-full py-2.5 rounded-md text-xs font-semibold text-[#0D0F10] bg-[#6FA7A3] hover:bg-[#85bcb8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
