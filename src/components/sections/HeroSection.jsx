// src/components/sections/HeroSection.jsx
import React, { useState, useMemo } from 'react';
import { useAchievements } from '../../hooks/useAchievements';
import MapPinIcon from '../icons/MapPinIcon';
import MailIcon from '../icons/MailIcon';
import DownloadIcon from '../icons/DownloadIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import CheckIcon from '../icons/CheckIcon';

// --- Mini Galaxy Component ---
const MiniGalaxy = () => {
  // Generate stable star data for rings
  const generateRing = (count, minSize, maxSize, minRadius, maxRadius) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * (maxRadius - minRadius) + minRadius;
      
      const top = 50 + (Math.sin(angle) * radius * 50);
      const left = 50 + (Math.cos(angle) * radius * 50);

      return {
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random() * 0.5 + 0.3,
      };
    });
  };

  // Ring 1: Inner Core (Dense, Fast)
  const innerRing = useMemo(() => generateRing(60, 1, 2.5, 0.1, 0.4), []);
  // Ring 2: Mid Section (Medium Speed)
  const midRing = useMemo(() => generateRing(45, 1.5, 3, 0.4, 0.75), []);
  // Ring 3: Outer Edge (Slow)
  const outerRing = useMemo(() => generateRing(40, 2, 4, 0.7, 1.0), []);
  
  // Ring 4: Background Field (Massive, covers entire page, rotates in sync)
  // Starts at 0.5 (overlapping) and goes to 2.2 (far outside the container)
  const backgroundRing = useMemo(() => generateRing(120, 1, 2, 0.5, 2.2), []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      
      {/* 1. EXPANDED MASK 
          Fade out extremely far from center to avoid hard edges on the massive container 
      */}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_45%,transparent_80%)]">
        
        {/* Background Ring - Rotates in sync (slowest layer for parallax depth) */}
        <div className="absolute inset-0 animate-[spin_180s_linear_infinite]">
          {backgroundRing.map((star) => (
            <div
              key={`bg-${star.id}`}
              className="absolute bg-neutral-600/30 rounded-full blur-[0.5px]"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                // Lower opacity for background stars to not distract from text
                opacity: star.opacity * 0.4, 
              }}
            />
          ))}
        </div>

        {/* Outer Ring - 120s rotation */}
        <div className="absolute inset-0 animate-[spin_120s_linear_infinite]">
          {outerRing.map((star) => (
            <div
              key={`outer-${star.id}`}
              className="absolute bg-neutral-400 rounded-full blur-[0.5px]"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>

        {/* Mid Ring - 90s rotation (Reverse) */}
        <div className="absolute inset-[15%] animate-[spin_90s_linear_infinite] direction-reverse">
          {midRing.map((star) => (
            <div
              key={`mid-${star.id}`}
              className="absolute bg-neutral-200 rounded-full"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>

        {/* Inner Ring - 50s rotation */}
        <div className="absolute inset-[25%] animate-[spin_50s_linear_infinite]">
          {innerRing.map((star) => (
            <div
              key={`inner-${star.id}`}
              className="absolute bg-purple-300 rounded-full shadow-[0_0_4px_rgba(168,85,247,0.5)]"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. LIGHT SOURCE 
          Standard Size for the visual anchor
      */}
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] blur-3xl mix-blend-screen animate-pulse-slow" />
      <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.2)_0%,transparent_60%)] blur-2xl mix-blend-screen" />
    </div>
  );
};

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
    <section id="hero" className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-[60vh] scroll-mt-32">
      
      {/* Content Side - z-10 ensures text is clickable over the background stars */}
      <div className="flex-1 space-y-6 animate-fade-in-up text-left max-w-xl z-10 relative">
        
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
          
          {/* Resume Button */}
          <a
            href="/Brady_Barker_Resume.pdf"
            download="Brady_Barker_Resume.pdf"
            onClick={() => unlockAchievement('download-resume')}
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

      {/* Structural Anchor with Massive Overflow
          Container is 2000px wide/tall to ensure stars cover the whole screen.
          Positioned centrally in the right-side anchor.
      */}
      <div className="hidden lg:flex w-72 h-72 relative shrink-0 items-center justify-center pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px]">
           <MiniGalaxy />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;