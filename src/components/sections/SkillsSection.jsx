// src/components/sections/SkillsSection.jsx
import React from 'react';
import CpuIcon from '../icons/CpuIcon';
import SectionHeader from '../common/SectionHeader';

const SkillsSection = ({ resumeData }) => (
  <section id="skills" className="scroll-mt-24">
    <SectionHeader
      icon={CpuIcon}
      title="Technical Skills"
      colorClass="bg-purple-500/10 text-purple-400"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resumeData.skills.map((skillGroup, idx) => {
        const Icon = skillGroup.icon;
        return (
          <div
            key={idx}
            className="bg-neutral-900/50 rounded-2xl p-5 border border-neutral-800 hover:border-purple-500/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3 text-white">
              <div className="p-2 bg-neutral-800 rounded-lg shadow-sm group-hover:text-purple-400 transition-colors">
                <Icon size={18} className="text-neutral-400" />
              </div>
              <h3 className="font-bold text-md">{skillGroup.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded-md text-xs font-medium text-neutral-300 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default SkillsSection;
