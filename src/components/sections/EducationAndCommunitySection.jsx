// src/components/sections/EducationAndCommunitySection.jsx
import React from 'react';
import { GraduationCap, Users, Award, ChevronRight } from 'lucide-react';

const EducationAndCommunitySection = ({ resumeData }) => (
  <section id="education" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
        <h2 className="text-2xl font-bold text-center">Education</h2>
      </div>
      <div className="space-y-6">
        {resumeData.education.map((edu, idx) => (
          <div
            key={idx}
            className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors"
          >
            <h3 className="font-bold text-slate-900 dark:text-white">{edu.school}</h3>
            <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">
              {edu.degree}
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500 mt-1">
              <span>{edu.location}</span> <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <Users className="text-cyan-600 dark:text-cyan-400" size={24} />
        <h2 className="text-2xl font-bold text-center">Leadership</h2>
      </div>
      <div className="space-y-6">
        {resumeData.leadership.map((lead, idx) => (
          <div
            key={idx}
            className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors"
          >
            <h3 className="font-bold text-slate-900 dark:text-white">{lead.role}</h3>
            <div className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">
              {lead.org}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {lead.description}
            </p>
          </div>
        ))}
        <div className="group pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors">
          <h3 className="font-bold text-slate-900 dark:text-white">Community & Activities</h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {resumeData.activities.join(' • ')}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <Award className="text-purple-600" size={24} />
        <h2 className="text-2xl font-bold text-center">Awards</h2>
      </div>
      <ul className="space-y-4 text-left">
        {resumeData.awards.map((award, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
          >
            <ChevronRight size={18} className="text-purple-500 shrink-0 mt-0.5" /> {award}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default EducationAndCommunitySection;
