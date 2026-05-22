// src/components/sections/ExperienceSection.jsx
import React, { useState } from 'react';
import { Icons, SectionHeader } from '@bradybark/ui';

const RoleCard = ({ role, rIdx }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract first line or roughly first sentence
  const firstLine = role.description.split('.')[0] + '.';

  return (
    <div>
      {/* Role Divider (between roles) */}
      {rIdx > 0 && (
        <div className="mx-8 border-t border-neutral-700/50 border-dashed" />
      )}

      {/* Role Header */}
      <div 
        className="px-8 pt-5 pb-3 flex items-center justify-between cursor-pointer group/header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <div className="text-base font-medium text-white group-hover/header:text-neutral-300 transition-colors">
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

      {/* Un-expanded First Line */}
      {!isExpanded && (
        <div className="px-8 pb-2" onClick={() => setIsExpanded(true)}>
          <p className="text-sm text-neutral-400 leading-relaxed font-mono line-clamp-2 opacity-80 cursor-pointer">
            {firstLine}
          </p>
        </div>
      )}

      {/* Expanded Content */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          {/* Description */}
          <div className="px-8 pb-4">
            <p className="text-sm text-neutral-400 leading-relaxed font-mono">
              {role.description}
            </p>
          </div>

          {/* Achievements */}
          <div className="px-8 pb-2">
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
      </div>

      {/* Expand/Collapse Toggle Button at Bottom Middle */}
      <div className="flex justify-center pb-5 pt-2">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-neutral-500 hover:text-purple-400 active:text-purple-400 active:scale-95 transition-all flex items-center gap-1.5 group/btn cursor-pointer"
        >
          <span className="text-white/80 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] group-hover/btn:text-purple-500 group-active/btn:text-purple-500 group-hover/btn:-translate-y-0.5 group-active/btn:-translate-y-0.5 group-hover/btn:drop-shadow-none group-active/btn:drop-shadow-none transition-all duration-300">[</span>
          <span className="w-[65px] sm:w-[72px] text-center">{isExpanded ? 'COLLAPSE' : 'EXPAND'}</span>
          <span className="text-white/80 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] group-hover/btn:text-purple-500 group-active/btn:text-purple-500 group-hover/btn:-translate-y-0.5 group-active/btn:-translate-y-0.5 group-hover/btn:drop-shadow-none group-active/btn:drop-shadow-none transition-all duration-300">]</span>
        </button>
      </div>
    </div>
  );
};

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
              <RoleCard key={rIdx} role={role} rIdx={rIdx} />
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
