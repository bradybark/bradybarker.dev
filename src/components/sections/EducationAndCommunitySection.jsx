// src/components/sections/EducationAndCommunitySection.jsx
import React from 'react';
import GraduationCapIcon from '../icons/GraduationCapIcon';
import UsersIcon from '../icons/UsersIcon';
import AwardIcon from '../icons/AwardIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

const EducationAndCommunitySection = ({ resumeData }) => (
  <section id="education" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <GraduationCapIcon className="text-purple-400" size={24} />
        <h2 className="text-2xl font-bold text-center">Education</h2>
      </div>
      <div className="space-y-6">
        {resumeData.education.map((edu, idx) => (
          <div
            key={idx}
            className="group pl-4 border-l-2 border-neutral-800 hover:border-purple-500/30 transition-colors"
          >
            <h3 className="font-bold text-white">{edu.school}</h3>
            <div className="text-purple-400 font-medium text-sm">
              {edu.degree}
            </div>
            <div className="flex justify-between items-center text-sm text-neutral-500 mt-1">
              <span>{edu.location}</span> <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <UsersIcon className="text-neutral-400" size={24} />
        <h2 className="text-2xl font-bold text-center">Leadership</h2>
      </div>
      <div className="space-y-6">
        {resumeData.leadership.map((lead, idx) => (
          <div
            key={idx}
            className="group pl-4 border-l-2 border-neutral-800 hover:border-purple-500/30 transition-colors"
          >
            <h3 className="font-bold text-white">{lead.role}</h3>
            <div className="text-purple-400 font-medium text-sm">
              {lead.org}
            </div>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              {lead.description}
            </p>
          </div>
        ))}
        <div className="group pl-4 border-l-2 border-neutral-800 hover:border-purple-500/30 transition-colors">
          <h3 className="font-bold text-white">Community & Activities</h3>
          <div className="text-sm text-neutral-400 mt-2 leading-relaxed">
            {resumeData.activities.join(' • ')}
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center gap-3 mb-8">
        <AwardIcon className="text-purple-600" size={24} />
        <h2 className="text-2xl font-bold text-center">Awards</h2>
      </div>
      <ul className="space-y-4 text-left">
        {resumeData.awards.map((award, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-neutral-300"
          >
            <ChevronRightIcon size={18} className="text-purple-500 shrink-0 mt-0.5" /> {award}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default EducationAndCommunitySection;
