// src/components/sections/SkillsSection.jsx
import React from 'react';
import { Cpu } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const SkillsSection = ({ resumeData }) => (
  <section id="skills" className="scroll-mt-24">
    <SectionHeader
      icon={Cpu}
      title="Technical Skills"
      colorClass="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resumeData.skills.map((skillGroup, idx) => {
        const Icon = skillGroup.icon;
        return (
          <div
            key={idx}
            className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-white">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <Icon size={18} className="text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="font-bold text-md">{skillGroup.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm"
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
