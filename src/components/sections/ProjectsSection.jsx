// src/components/sections/ProjectsSection.jsx
import React from 'react';
import GemIcon from '../icons/GemIcon';
import SectionHeader from '../common/SectionHeader';

const ProjectsSection = ({ resumeData }) => (
  <section id="projects" className="scroll-mt-24">
    <SectionHeader title="Key Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumeData.projects.map((project, idx) => (
        <div
          key={idx}
          className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-grid-pattern">
            <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-neutral-500 tracking-wide uppercase">
              {project.role}
            </span>
          </div>

          {/* Description */}
          <div className="px-6 py-4 bg-black/20 border-b border-neutral-800/50 bg-dot-pattern">
            <p className="text-sm text-neutral-400 leading-relaxed font-mono">
              {project.description}
            </p>
          </div>

          {/* Details */}
          <div className="px-6 py-4 flex-grow accent-line-left">
            <ul className="space-y-2.5">
              {project.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                  <span className="w-1 h-1 rounded-full bg-neutral-400/50 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/30 bg-circuit-pattern">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="tech-tag-dashed"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
