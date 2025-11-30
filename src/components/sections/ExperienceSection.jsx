// src/components/sections/ExperienceSection.jsx
import React from 'react';
import { Trophy, ChevronRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ExperienceSection = ({ resumeData }) => (
  <section id="experience" className="scroll-mt-24">
    <SectionHeader
      icon={Trophy}
      title="Professional Experience"
      colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    />

    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
      {resumeData.experience.map((job, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12">
          {/* header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {job.company}
              </h3>
              <div className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                {job.role}
              </div>
            </div>
            <div className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full self-start sm:self-auto">
              {job.period}
            </div>
          </div>

          {/* tagline */}
          <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
            {job.description}
          </p>

          {/* bullets */}
          <ul className="space-y-4">
            {job.achievements.map((achievement, aIdx) => (
              <li
                key={aIdx}
                className="experience-line flex gap-3 text-slate-700 dark:text-slate-300 group"
              >
                <ChevronRight
                  size={20}
                  className="text-blue-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform ease-in-out"
                />
                <span className="experience-text transition-all duration-300 ease-out group-hover:text-slate-50 group-hover:[text-shadow:0_0_10px_rgba(59,130,246,0.6)]">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
