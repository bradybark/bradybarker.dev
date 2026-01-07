// src/pages/Projects.jsx
import React from 'react';
import {
  ArrowUpRight,
  Github,
  Code,
  Terminal,
  Wallet,
  SquareTerminal,
  House,
  Package
} from 'lucide-react';
import { personalProjects } from '../data/personalProjects';

// Map project titles to specific icons
const getProjectIcon = (title) => {
  switch (title) {
    case "Bark Budget":
      return <Wallet size={24} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />;
    case "Excel Tools (CLI)":
      return <SquareTerminal size={24} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />;
    case "bradybarker.dev":
      return <House size={24} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />;
    case "Inventory Manager":
      return <Package size={24} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />;
    default:
      return <Code size={24} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />;
  }
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up relative overflow-hidden">
      
      {/* Fun Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4 relative z-10">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 mb-6 animate-float">
          <Terminal size={40} className="text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Personal <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Experiments, tools, and side quests from my GitHub.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {personalProjects.map((project, idx) => ( 
          <div 
            key={idx}
            className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header: Icon + Title + GitHub Link */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors">
                  {getProjectIcon(project.title)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                title="View Source"
              >
                <Github size={22} />
              </a>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Optional Bullet Points */}
            {project.details && (
              <ul className="mb-6 space-y-2 flex-grow">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
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
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/link"
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