// src/components/sections/ExperienceSection.jsx
import React from 'react';
import { Icons, SectionHeader } from '@bradybark/ui';

const ExperienceSection = ({ resumeData }) => (
  <section id="experience" className="scroll-mt-24">
    <div className="animate-child-reveal" style={{ animationDelay: '0.1s' }}>
      <SectionHeader title="Professional Experience" />
    </div>

    <div className="space-y-16">
      {resumeData.experience.map((job, idx) => (
        <div key={idx} className="relative group corner-brackets-4 animate-child-reveal" style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
          <span className="corner-tr"></span>
          <span className="corner-bl"></span>
          {/* Clean Card Container */}
          <div className="border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]">

            {/* Company Header */}
            <div className="px-8 py-6 border-b border-neutral-800/80 bg-neutral-950/50 bg-diagonal-lines relative">
              <div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {job.company}
                </h3>
              </div>
            </div>

            {/* Roles */}
            {job.roles.map((role, rIdx) => (
              <div key={rIdx}>
                {/* Role Divider (between roles) */}
                {rIdx > 0 && (
                  <div className="mx-8 border-t border-neutral-700/50 border-dashed" />
                )}

                {/* Role Header */}
                <div className="px-8 pt-5 pb-3 flex items-center justify-between">
                  <div>
                    <div className="text-base font-medium text-white">
                      {role.title}
                    </div>
                    {role.location && (
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        {role.location}
                      </div>
                    )}
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-800/50 border border-neutral-700/50 text-xs font-mono text-neutral-400 tracking-wide">
                    {role.period}
                  </div>
                </div>

                {/* Description */}
                <div className="px-8 pb-4">
                  <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                    {role.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="px-8 pb-6">
                  <ul className="space-y-3">
                    {role.achievements.map((achievement, aIdx) => (
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
            ))}
          </div>

          {/* Connecting Line for Multiple Companies */}
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
