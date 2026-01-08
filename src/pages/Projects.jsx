// src/pages/Projects.jsx
import React from 'react';
import {
  ArrowUpRight,
  Code,
  Wallet,
  SquareTerminal,
  House,
  Package
} from 'lucide-react';
import { personalProjects } from '../data/personalProjects';
import GithubIcon from '../components/icons/GithubIcon';
import TerminalIcon from '../components/icons/TerminalIcon';

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
    default:
      return <Code size={20} className={iconClass} />;
  }
};

const Projects = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up overflow-hidden">

      {/* Enhanced Galaxy/Star Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle gradient glow */}
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)] rounded-full -top-32 -left-32 blur-3xl" />

        {/* Stars - More stars with various animations */}
        <div className="absolute top-[8%] left-[18%] w-1 h-1 bg-neutral-200/60 rounded-full animate-twinkle" />
        <div className="absolute top-[14%] left-[42%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[10%] left-[68%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[22%] left-[82%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full" />
        <div className="absolute top-[28%] left-[12%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
        <div className="absolute top-[32%] left-[52%] w-1 h-1 bg-neutral-300/50 rounded-full animate-pulse-slow" />
        <div className="absolute top-[38%] left-[88%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
        <div className="absolute top-[45%] left-[22%] w-1 h-1 bg-neutral-300/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[50%] left-[72%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
        <div className="absolute top-[55%] left-[8%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[62%] left-[38%] w-1 h-1 bg-neutral-200/50 rounded-full" />
        <div className="absolute top-[68%] left-[78%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
        <div className="absolute top-[75%] left-[18%] w-1 h-1 bg-neutral-200/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[80%] left-[58%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[88%] left-[32%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full" />
        <div className="absolute top-[92%] left-[85%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle" />

        {/* Purple accent stars */}

        {/* Shooting stars - from random directions with randomized timing */}
        <div className="absolute top-[12%] right-[18%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '4.1s', animationDuration: '2.8s' }} />
        <div className="absolute top-[28%] left-[8%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '10.7s', animationDuration: '3.0s' }} />
        <div className="absolute bottom-[28%] left-[18%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '17.2s', animationDuration: '2.6s' }} />
        <div className="absolute bottom-[15%] right-[28%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '22.9s', animationDuration: '3.2s' }} />
      </div>

      {/* Header */}
      <div className="mb-16">
        <div className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="px-8 py-12 md:px-12 md:py-16 bg-diagonal-lines">
            <div className="max-w-4xl space-y-6">
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/50 border border-neutral-800/80 text-neutral-400 text-xs font-mono tracking-wide uppercase geometric-corners">
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
            className="corner-brackets border border-neutral-800/80 rounded-sm overflow-hidden bg-black/40 hover:border-neutral-600 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/50 bg-grid-pattern flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/50 rounded-sm border border-neutral-800/80">
                  {getProjectIcon(project.title)}
                </div>
                <h3 className="text-lg font-semibold text-white font-mono tracking-tight">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-900/50 rounded-sm"
                title="View Source"
              >
                <GithubIcon size={20} />
              </a>
            </div>

            {/* Description */}
            <div className="px-6 py-4 bg-black/20 border-b border-neutral-800/50 bg-dot-pattern">
              <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                {project.description}
              </p>
            </div>

            {/* Details */}
            {project.details && (
              <div className="px-6 py-4 border-b border-neutral-800/50 accent-line-left">
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

            {/* Tech Stack */}
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

            {/* Link to Repo */}
            <div className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/30 bg-diagonal-lines">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium font-mono text-neutral-400 hover:text-white group/link transition-colors"
              >
                View Repository <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;