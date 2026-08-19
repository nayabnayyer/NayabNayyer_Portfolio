import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0D0F10] text-[#9A9FA3] text-xs font-mono">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#292D30] pb-8">
          <div>
            <div className="font-semibold text-sm text-[#F2F2EF] tracking-wider uppercase">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-[#9A9FA3] mt-0.5">
              AI/ML Engineer · Python · Machine Learning · Deep Learning
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2F2EF] transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F2F2EF] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#F2F2EF] transition-colors"
            >
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-md bg-[#141719] border border-[#292D30] hover:border-[#6FA7A3]/50 text-[#9A9FA3] hover:text-[#F2F2EF] transition-colors cursor-pointer flex items-center gap-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Back to top</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div>
            © {new Date().getFullYear()} Nayab Nayyer · Lahore, Pakistan
          </div>
          <div className="text-[#9A9FA3]/80">
            Crafted for AI/ML engineering, internships & junior roles
          </div>
        </div>

      </div>
    </footer>
  );
};
