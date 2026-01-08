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
  const iconClass = "text-neutral-500";
  switch (title) {
    case "Bark Budget":
      return <Wallet size={24} className={iconClass} />;
    case "Excel Tools (CLI)":
      return <SquareTerminal size={24} className={iconClass} />;
    case "bradybarker.dev":
      return <House size={24} className={iconClass} />;
    case "Inventory Manager":
      return <Package size={24} className={iconClass} />;
    default:
      return <Code size={24} className={iconClass} />;
  }
};

const Projects = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up overflow-hidden">

      {/* Enhanced Galaxy/Star Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle gradient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px]" />

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
        <div className="absolute top-[18%] left-[58%] w-1 h-1 bg-purple-400/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-[58%] left-[48%] w-0.5 h-0.5 bg-purple-300/25 rounded-full animate-twinkle" />
        <div className="absolute top-[85%] left-[12%] w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-twinkle-slow" />

        {/* Shooting stars - from random directions with randomized timing */}
        <div className="absolute top-[12%] right-[18%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '4.1s', animationDuration: '2.8s' }} />
        <div className="absolute top-[28%] left-[8%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '10.7s', animationDuration: '3.0s' }} />
        <div className="absolute bottom-[28%] left-[18%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '17.2s', animationDuration: '2.6s' }} />
        <div className="absolute bottom-[15%] right-[28%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '22.9s', animationDuration: '3.2s' }} />
      </div>

      {/* Header */}
      <div className="text-center mb-20 space-y-6">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-neutral-900 border border-neutral-800 mb-6">
          <TerminalIcon size={40} className="text-purple-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Personal <span className="text-purple-400">Projects</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Experiments, tools, and side quests from my GitHub.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-200"
          >
            {/* Header: Icon + Title + GitHub Link */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                  {getProjectIcon(project.title)}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-lg"
                title="View Source"
              >
                <GithubIcon size={22} />
              </a>
            </div>

            <p className="text-neutral-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Optional Bullet Points */}
            {project.details && (
              <ul className="mb-6 space-y-2 flex-grow">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack Tags */}
            <div className={`flex flex-wrap gap-2 mb-8 ${!project.details ? 'flex-grow' : ''}`}>
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Link to Repo */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 group/link transition-colors"
            >
              View Repository <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;