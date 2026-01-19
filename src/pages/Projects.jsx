// src/pages/Projects.jsx
import React from 'react';
import {
  ArrowUpRight,
  Code,
  Wallet,
  SquareTerminal,
  House,
  Package,
  Layers // Imported Layers icon for Nestly
} from 'lucide-react';
import { personalProjects } from '../data/personalProjects';
import { Icons } from '@bradybark/ui';

// Map project titles to specific icons
const getProjectIcon = (title) => {
  const iconClass = "text-neutral-400";
  switch (title) {
    case "Bark Budget":
      return <Wallet size={20} className={iconClass} />;
    case "Excel Tools (CLI)":
      return <SquareTerminal size={20} className={iconClass} />;
    case "bradybarker.dev":
      return <House size={20} className={iconClass} />;
    case "Inventory Manager":
      return <Package size={20} className={iconClass} />;
    case "Nestly":
      return <Layers size={20} className={iconClass} />;
    default:
      return <Code size={20} className={iconClass} />;
  }
};

const Projects = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up overflow-hidden">
      {/* STAR BACKGROUND REMOVED */}

      {/* Header */}
      <div className="mb-16">
        <div className="relative corner-brackets-4 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <span className="corner-tr"></span>
          <span className="corner-bl"></span>
          <div className="px-8 py-12 md:px-12 md:py-16 bg-diagonal-lines">
            <div className="max-w-4xl space-y-6">
              {/* Removed geometric-corners and rounded-sm to make it square/clean */}
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-neutral-800/80 text-neutral-400 text-xs font-mono tracking-wide uppercase">
                Personal Projects
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display text-gradient-primary">
                Side Projects
              </h1>
              <div className="h-px bg-gradient-to-r from-neutral-400/40 via-neutral-400/20 to-transparent" />
              <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                Experiments, tools, and side quests from my GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalProjects.map((project, idx) => (
          <div
            key={idx}
            className="relative corner-brackets-4 border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col h-full"
          >
            <span className="corner-tr"></span>
            <span className="corner-bl"></span>
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-grid-pattern flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/50 rounded-sm border border-neutral-800/80">
                  {getProjectIcon(project.title)}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white font-mono tracking-tight">
                      {project.title}
                    </h3>
                    {/* Private Tag */}
                    {project.isPrivate && (
                      <div className="px-1.5 py-0.5 rounded-sm bg-black/50 border border-neutral-800/80 text-neutral-400 text-[10px] font-mono tracking-wide uppercase">
                        Private
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-900/50 rounded-sm"
                title="View Source"
              >
                <Icons.GithubIcon size={20} />
              </a>
            </div>

            {/* Description - Added min-h to align */}
            <div className="px-6 py-4 bg-black/20 border-b border-neutral-800/50 bg-dot-pattern min-h-[110px]">
              <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                {project.description}
              </p>
            </div>

            {/* Details - Added min-h to align */}
            {project.details && (
              <div className="px-6 py-4 border-b border-neutral-800/50 min-h-[300px]">
                <ul className="space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-neutral-400/50 mt-2 shrink-0" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack - Flex grow to fill remaining space if any */}
            <div className="px-6 py-4 flex-grow bg-circuit-pattern">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="tech-tag-dashed"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Link to Repo & Demo */}
            <div className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/30 bg-diagonal-lines flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium font-mono text-neutral-400 hover:text-white group/link transition-colors"
              >
                View Repository <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium font-mono text-neutral-400 hover:text-white group/link transition-colors"
                >
                  Visit Website <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
