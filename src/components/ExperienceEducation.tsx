import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-mono text-[#6FA7A3] tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
            Trajectory & Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2EF]">
            Experience & Education
          </h2>
          <p className="text-[#9A9FA3] text-sm sm:text-base leading-relaxed">
            Practical internship work, academic foundation, and technical presentation milestones.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => {
            const isInternship = exp.type === 'Internship';
            const isEducation = exp.type === 'Education';
            const isPresentation = exp.type === 'Presentation';

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#141719] border border-[#292D30] space-y-4 hover:border-[#6FA7A3]/30 transition-all"
              >
                {/* Header line */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      {isInternship && (
                        <div className="p-1.5 rounded bg-[#181B1D] border border-[#292D30] text-[#6FA7A3]">
                          <Briefcase className="w-4 h-4" />
                        </div>
                      )}
                      {isEducation && (
                        <div className="p-1.5 rounded bg-[#181B1D] border border-[#292D30] text-[#6FA7A3]">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                      )}
                      {isPresentation && (
                        <div className="p-1.5 rounded bg-[#181B1D] border border-[#292D30] text-[#6FA7A3]">
                          <Award className="w-4 h-4" />
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-[#F2F2EF]">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="text-sm text-[#6FA7A3] font-medium pl-8">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-[#181B1D] text-[#F2F2EF] border border-[#292D30]">
                      <Calendar className="w-3 h-3 text-[#6FA7A3]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-[#9A9FA3]">
                      <MapPin className="w-3 h-3 text-[#6FA7A3]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Badge if present */}
                {exp.badge && (
                  <div className="inline-block px-2.5 py-1 rounded bg-[#0D0F10] border border-[#292D30] text-xs font-mono text-[#6FA7A3]">
                    {exp.badge}
                  </div>
                )}

                {/* Bullets */}
                <div className="space-y-2 pt-1">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9A9FA3] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#6FA7A3] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Academic Presentation Footnote Card */}
        <div className="p-5 rounded-xl bg-[#0D0F10] border border-[#292D30] flex items-start gap-4">
          <div className="p-2 rounded-lg bg-[#181B1D] border border-[#292D30] text-[#6FA7A3] shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs text-[#9A9FA3]">
            <div className="font-semibold text-[#F2F2EF] text-sm">
              Academic Presentation Detail · ISC 2025
            </div>
            <p className="leading-relaxed">
              Nayab presented <em>MedPredict Pro</em> as a poster at the International Science Conference 2025 held at Government Graduate College for Women, Gulberg, Lahore, on November 6, 2025, detailing data preprocessing and ensemble regression for insurance risk quantification.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
