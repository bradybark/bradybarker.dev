// src/components/sections/ProjectsSection.jsx
import React from 'react';
import { Gem } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ProjectsSection = ({ resumeData }) => (
  <section id="projects" className="scroll-mt-24">
    <SectionHeader
      icon={Gem}
      title="Key Projects"
      colorClass="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumeData.projects.map((project, idx) => (
        <div
          key={idx}
          className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
        >
          {/* Centered Title and Role */}
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {project.role}
            </span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
          <ul className="space-y-2 mb-6 flex-grow">
            {project.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span> {detail}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            {project.tech.map((t, tIdx) => (
              <span key={tIdx} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;