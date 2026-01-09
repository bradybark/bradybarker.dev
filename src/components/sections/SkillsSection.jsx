// src/components/sections/SkillsSection.jsx
import React from 'react';
import CpuIcon from '../icons/CpuIcon';
import SectionHeader from '../common/SectionHeader';

const SkillsSection = ({ resumeData }) => (
  <section id="skills" className="scroll-mt-24">
    <SectionHeader title="Technical Skills" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resumeData.skills.map((skillGroup, idx) => {
        const Icon = skillGroup.icon;
        return (
          <div
            key={idx}
            className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-diagonal-lines">
              <h3 className="text-base font-semibold text-white tracking-tight font-mono">
                {skillGroup.name}
              </h3>
            </div>

            {/* Skills List */}
            <div className="px-6 py-5 bg-circuit-pattern">
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="tech-tag-dashed"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default SkillsSection;
