import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, Award, ArrowRight, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-mono text-[#6FA7A3] tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2EF]">
            Building toward AI engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#9A9FA3] text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science graduate and Silver Medalist from Lahore, Pakistan, focused on building grounded machine learning applications, deep learning computer vision pipelines, and generative AI interfaces.
            </p>
            <p>
              My hands-on experience comes from rigorous academic study, ongoing internship training at Evolvian Softwares, and developing end-to-end projects like MedPredict Pro, DecodeBot, PathAI, and ongoing chest X-ray classification with Grad-CAM explainability.
            </p>
            <p>
              Rather than chasing superficial hype, I prioritize understanding data distributions, choosing the right modeling approaches, evaluating models objectively against validation sets, and packaging systems into functional web applications.
            </p>

            {/* Progression Paradigm */}
            <div className="pt-2 space-y-2">
              <div className="text-[11px] font-mono text-[#F2F2EF] uppercase tracking-wider">
                Engineering Approach:
              </div>
              <div className="p-4 rounded-xl bg-[#141719] border border-[#292D30] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                {PERSONAL_INFO.progression.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className="flex items-center gap-1.5 text-[#F2F2EF]">
                      <span className="w-5 h-5 rounded bg-[#181B1D] border border-[#292D30] text-[#6FA7A3] flex items-center justify-center text-[10px]">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {idx < PERSONAL_INFO.progression.length - 1 && (
                      <span className="text-[#292D30] hidden sm:inline">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Merit Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#141719] border border-[#292D30] space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#6FA7A3] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Academic Distinction</span>
              </div>

              <div className="space-y-2">
                <div className="text-xl font-bold text-[#F2F2EF]">
                  BS Computer Science
                </div>
                <div className="text-sm text-[#9A9FA3]">
                  Lahore College for Women University (LCWU)
                </div>
                <div className="text-xs font-mono text-[#6FA7A3] pt-1">
                  Lahore, Pakistan · Graduated June 2026
                </div>
              </div>

              <div className="pt-3 border-t border-[#292D30] space-y-2 text-xs">
                <div className="flex justify-between font-mono">
                  <span className="text-[#9A9FA3]">Cumulative GPA:</span>
                  <span className="font-bold text-[#F2F2EF]">3.64 / 4.00</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-[#9A9FA3]">Honors:</span>
                  <span className="font-bold text-[#6FA7A3]">Silver Medalist (2nd Position)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0D0F10] border border-[#292D30] text-[11px] text-[#9A9FA3] leading-relaxed">
                Awarded Silver Medal for standing 2nd in the Department of Computer Science across all 4-year degree coursework.
              </div>
            </div>

            {/* Quick Profile Summary Card */}
            <div className="p-4 rounded-xl bg-[#141719] border border-[#292D30] flex items-center justify-between text-xs font-mono">
              <span className="text-[#9A9FA3]">Primary Location:</span>
              <span className="text-[#F2F2EF]">Lahore, Pakistan (Open to Remote / On-site)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
