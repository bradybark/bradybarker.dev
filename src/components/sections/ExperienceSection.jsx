// src/components/sections/ExperienceSection.jsx
import React from 'react';
import { Icons, SectionHeader } from '@bark/ui';

const ExperienceSection = ({ resumeData }) => (
  <section id="experience" className="scroll-mt-24 overflow-hidden">
    <div className="animate-child-reveal" style={{ animationDelay: '0.1s' }}>
      <SectionHeader title="Professional Experience" />
    </div>

    <div className="space-y-16">
      {resumeData.experience.map((job, idx) => (
        <div key={idx} className="relative group corner-brackets animate-child-reveal" style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
          {/* Clean Card Container */}
          <div className="border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">

            {/* Header Section */}
            <div className="px-8 py-6 border-b border-neutral-800/80 bg-neutral-950/50 bg-diagonal-lines">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1.5 tracking-tight">
                    {job.company}
                  </h3>
                  <div className="text-base text-neutral-400 font-medium">
                    {job.role}
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-800/50 border border-neutral-700/50 text-xs font-mono text-neutral-400 tracking-wide self-start">
                  {job.period}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-8 py-5 bg-black/20 border-b border-neutral-800/50 bg-dot-pattern">
              <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                {job.description}
              </p>
            </div>

            {/* Achievements Section */}
            <div className="px-8 py-6">
              <ul className="space-y-3">
                {job.achievements.map((achievement, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex gap-3 text-neutral-300 leading-relaxed group/item"
                  >
                    <div className="flex-shrink-0 mt-1.5">
                      <Icons.ChevronRightIcon
                        className="w-4 h-4 text-neutral-400/40 group-hover/item:text-neutral-400/70 group-hover/item:translate-x-0.5 transition-all"
                      />
                    </div>
                    <span className="text-sm group-hover/item:text-neutral-100 transition-colors">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connecting Line for Multiple Experiences */}
          {idx !== resumeData.experience.length - 1 && (
            <div className="flex justify-center py-6">
              <div className="w-px h-8 bg-gradient-to-b from-neutral-800/50 to-transparent" />
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;