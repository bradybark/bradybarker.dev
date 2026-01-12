// src/components/sections/EducationAndCommunitySection.jsx
import React from 'react';
import { Icons } from '@bark/ui';

const EducationAndCommunitySection = ({ resumeData }) => (
  <section id="education" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
    {/* Education */}
    <div className="corner-brackets-4 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-child-reveal" style={{ animationDelay: '0.1s' }}>
      <span className="corner-tr"></span>
      <span className="corner-bl"></span>
      <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-grid-pattern">
        <h2 className="text-base font-semibold text-white tracking-tight font-mono">Education</h2>
      </div>
      <div className="px-6 py-5 space-y-5 bg-dot-pattern">
        {resumeData.education.map((edu, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-white text-sm">{edu.school}</h3>
            <div className="text-neutral-400 text-xs mt-1">
              {edu.degree}
            </div>
            <div className="flex justify-between items-center text-xs text-neutral-500 mt-1.5">
              <span>{edu.location}</span>
              <span className="font-mono">{edu.year}</span>
            </div>
            {idx !== resumeData.education.length - 1 && (
              <div className="mt-5 border-b border-neutral-800/30" />
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Leadership */}
    <div className="corner-brackets-4 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-child-reveal" style={{ animationDelay: '0.2s' }}>
      <span className="corner-tr"></span>
      <span className="corner-bl"></span>
      <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-diagonal-lines">
        <h2 className="text-base font-semibold text-white tracking-tight font-mono">Leadership</h2>
      </div>
      <div className="px-6 py-5 space-y-5 bg-circuit-pattern">
        {resumeData.leadership.map((lead, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-white text-sm">{lead.role}</h3>
            <div className="text-neutral-400 text-xs mt-1">
              {lead.org}
            </div>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              {lead.description}
            </p>
            {idx !== resumeData.leadership.length - 1 && (
              <div className="mt-5 border-b border-neutral-800/30" />
            )}
          </div>
        ))}
        <div>
          <div className="border-t border-neutral-800/30 pt-5">
            <h3 className="font-semibold text-white text-sm mb-2">Community & Activities</h3>
            <div className="text-xs text-neutral-500 leading-relaxed">
              {resumeData.activities.join(' • ')}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Awards */}
    <div className="corner-brackets-4 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-child-reveal" style={{ animationDelay: '0.3s' }}>
      <span className="corner-tr"></span>
      <span className="corner-bl"></span>
      <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-grid-pattern">
        <h2 className="text-base font-semibold text-white tracking-tight font-mono">Awards</h2>
      </div>
      <div className="px-6 py-5 bg-dot-pattern">
        <ul className="space-y-3">
          {resumeData.awards.map((award, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-neutral-400/50 mt-1.5 shrink-0"></span>
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EducationAndCommunitySection;