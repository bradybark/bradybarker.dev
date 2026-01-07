// src/components/sections/HeroSection.jsx
import React, { useState } from 'react';
import { MapPin, Mail, Download, Linkedin, Github, Check, Database, BarChart3, Server, Cloud } from 'lucide-react';
import { useAchievements } from '../../hooks/useAchievements';

const HeroSection = ({ resumeData }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { unlockAchievement } = useAchievements();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personalInfo.email);
    setIsCopied(true);
    unlockAchievement('click-email');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="hero" className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-[60vh] scroll-mt-32 overflow-hidden">
      <div className="flex-1 space-y-6 animate-fade-in-up text-left max-w-xl">
        
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide uppercase">
            Data & Analytics Engineer
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <MapPin size={16} />
            {resumeData.personalInfo.location}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Data Driven. <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-text pb-2">
            Cloud Native.
          </span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {resumeData.personalInfo.bio}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Email Button */}
          <a
            onClick={handleCopyEmail}
            className={`px-6 py-3 rounded-lg font-medium transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer min-w-[170px]
              ${isCopied
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 hover:shadow-blue-600/40'
              }
            `}
          >
            {isCopied ? <Check size={18} /> : <Mail size={18} />}
            {isCopied ? "Email Copied!" : "Contact Me"}
          </a>
          
          {/* Resume Button - UPDATED HERE */}
          <a
            href="/Brady_Barker_Resume.pdf"
            download="Brady_Barker_Resume.pdf"
            onClick={() => unlockAchievement('download-resume')} // <--- ADDED ACHIEVEMENT TRIGGER
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-all flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer"
          >
            <Download size={18} /> Resume
          </a>

          <div className="flex gap-3 pl-2 border-l border-slate-300 dark:border-slate-700 ml-2">
            {/* LinkedIn */}
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => unlockAchievement('click-linkedin')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={25} />
            </a>
            {/* GitHub */}
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => unlockAchievement('click-github')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Animation Side */}
      <div className="hidden lg:flex w-72 h-72 relative shrink-0 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-30 blur-2xl animate-pulse-slow" style={{ transform: "translateZ(0)" }}></div>
        <div className="relative z-10 grid grid-cols-2 gap-4 place-content-center">
           <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
            <Database className="text-blue-500" size={32} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
            <BarChart3 className="text-cyan-500" size={32} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
            <Server className="text-indigo-500" size={32} />
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: '4.5s' }}>
            <Cloud className="text-violet-500" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;