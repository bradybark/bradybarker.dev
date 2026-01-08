// src/components/sections/HeroSection.jsx
import React, { useState } from 'react';
import { useAchievements } from '../../hooks/useAchievements';
import MapPinIcon from '../icons/MapPinIcon';
import MailIcon from '../icons/MailIcon';
import DownloadIcon from '../icons/DownloadIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import CheckIcon from '../icons/CheckIcon';
import DatabaseIcon from '../icons/DatabaseIcon';
import BarChart3Icon from '../icons/BarChart3Icon';
import ServerIcon from '../icons/ServerIcon';
import CloudIcon from '../icons/CloudIcon';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-wide uppercase">
            Data & Analytics Engineer
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
            <MapPinIcon size={16} />
            {resumeData.personalInfo.location}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Data Driven. <br />
          <span className="text-purple-400">
            Cloud Native.
          </span>
        </h1>

        <p className="text-lg text-neutral-400 leading-relaxed">
          {resumeData.personalInfo.bio}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Email Button */}
          <a
            onClick={handleCopyEmail}
            className={`px-6 py-3 rounded-lg font-medium transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer min-w-[170px]
              ${isCopied
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/20'
                : 'bg-purple-500 hover:bg-purple-400 text-white shadow-purple-500/20 hover:shadow-purple-500/40'
              }
            `}
          >
            {isCopied ? <CheckIcon size={18} /> : <MailIcon size={18} />}
            {isCopied ? "Email Copied!" : "Contact Me"}
          </a>
          
          {/* Resume Button - UPDATED HERE */}
          <a
            href="/Brady_Barker_Resume.pdf"
            download="Brady_Barker_Resume.pdf"
            onClick={() => unlockAchievement('download-resume')} // <--- ADDED ACHIEVEMENT TRIGGER
            className="px-6 py-3 border border-neutral-800 hover:bg-neutral-800 rounded-lg font-medium transition-all flex items-center gap-2 text-neutral-300 cursor-pointer"
          >
            <DownloadIcon size={18} /> Resume
          </a>

          <div className="flex gap-3 pl-2 border-l border-neutral-800 ml-2">
            {/* LinkedIn */}
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => unlockAchievement('click-linkedin')}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <LinkedinIcon size={25} />
            </a>
            {/* GitHub */}
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => unlockAchievement('click-github')}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <GithubIcon size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Animation Side */}
      <div className="hidden lg:flex w-72 h-72 relative shrink-0 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-30 blur-2xl animate-pulse-slow" style={{ transform: "translateZ(0)" }}></div>
        <div className="relative z-10 grid grid-cols-2 gap-4 place-content-center">
           <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
            <DatabaseIcon className="text-purple-400" size={32} />
          </div>
          <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
            <BarChart3Icon className="text-neutral-400" size={32} />
          </div>
          <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800 flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
            <ServerIcon className="text-purple-400" size={32} />
          </div>
          <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-800 flex items-center justify-center animate-float" style={{ animationDelay: '4.5s' }}>
            <CloudIcon className="text-neutral-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;