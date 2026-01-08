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
        // Reduced opacity by 40% for more subtle appearance
        opacity: (Math.random() * 0.5 + 0.3) * 0.6,
      };
    });
  };

  // Ring 1: Inner Core (Reduced from 60 to 40 stars)
  const innerRing = useMemo(() => generateRing(40, 1, 2.5, 0.1, 0.4), []);
  // Ring 2: Mid Section (Reduced from 45 to 35 stars)
  const midRing = useMemo(() => generateRing(35, 1.5, 3, 0.4, 0.75), []);
  // Ring 3: Background Field (Reduced from 120 to 50 stars, removed outer ring for simpler look)
  const backgroundRing = useMemo(() => generateRing(50, 1, 2, 0.5, 2.2), []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">

      {/* EXPANDED MASK - Fade out from center for smooth appearance */}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_45%,transparent_80%)]">

        {/* Background Ring - Slowest rotation (240s instead of 180s) */}
        <div className="absolute inset-0 animate-[spin_240s_linear_infinite]">
          {backgroundRing.map((star) => (
            <div
              key={`bg-${star.id}`}
              className="absolute bg-neutral-600/20 rounded-full"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity * 0.4,
              }}
            />
          ))}
        </div>

        {/* Mid Ring - Slower rotation (120s instead of 90s, Reverse) */}
        <div className="absolute inset-[15%] animate-[spin_120s_linear_infinite] direction-reverse">
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

        {/* Inner Ring - Slower rotation (70s instead of 50s) */}
        <div className="absolute inset-[25%] animate-[spin_70s_linear_infinite]">
          {innerRing.map((star) => (
            <div
              key={`inner-${star.id}`}
              className="absolute bg-neutral-300 rounded-full shadow-[0_0_3px_rgba(255,255,255,0.2)]"
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

      {/* LIGHT SOURCE - Neutralized glows */}
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-3xl mix-blend-screen animate-pulse-slow" />
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
    <section id="hero" className="min-h-[70vh] scroll-mt-32 relative">

      {/* Galaxy Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <MiniGalaxy />
        </div>
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="px-8 py-16 md:px-12 md:py-20 relative">

          <div className="max-w-4xl space-y-10 relative z-10">

            {/* Hook - Attention Grabber */}
            <div className="space-y-6">
              {/* Main Headline with staggered animation */}
              <div className="relative overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] font-display">
                  <span className="inline-block text-gradient-primary animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                    The New Standard
                  </span>
                </h1>
              </div>

              {/* Tagline with animation */}
              <div className="relative animate-slide-up-fade" style={{ animationDelay: '0.5s' }}>
                <p className="text-2xl md:text-3xl font-light text-neutral-400 tracking-wider font-mono">
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.7s' }}>Ingest.</span>
                  {' '}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.9s' }}>Transform.</span>
                  {' '}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.1s' }}>Visualize.</span>
                </p>
              </div>

              {/* Name and Location */}
              <div className="flex items-center gap-3 text-sm font-mono text-neutral-400 animate-slide-up-fade" style={{ animationDelay: '1.3s' }}>
                <div className="h-px w-12 bg-gradient-to-r from-neutral-400/60 to-transparent" />
                <span className="text-white font-semibold">{resumeData.personalInfo.name}</span>
                <span className="text-neutral-600">▪</span>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <MapPinIcon size={14} />
                  {resumeData.personalInfo.location}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-400/20 to-transparent" />
              </div>
            </div>

            {/* Bio */}
            <div className="max-w-2xl animate-slide-up-fade" style={{ animationDelay: '1.5s' }}>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                {resumeData.personalInfo.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 animate-slide-up-fade" style={{ animationDelay: '1.7s' }}>
              {/* Email Button */}
              <button
                onClick={handleCopyEmail}
                className={`px-5 py-2.5 rounded-sm font-medium font-mono transition-all flex items-center justify-center gap-2 cursor-pointer border
                  ${isCopied
                    ? 'bg-neutral-950/80 border-neutral-700/80 text-white'
                    : 'bg-black/60 border-neutral-800/80 text-neutral-300 hover:text-white hover:border-neutral-600 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
                  }
                `}
              >
                {isCopied ? <CheckIcon size={18} /> : <MailIcon size={18} />}
                {isCopied ? "Email Copied!" : "Contact Me"}
              </button>

              {/* Resume Button */}
              <a
                href="/Brady_Barker_Resume.pdf"
                download="Brady_Barker_Resume.pdf"
                onClick={() => unlockAchievement('download-resume')}
                className="px-5 py-2.5 bg-black/60 border border-neutral-800/80 hover:border-neutral-600 rounded-sm font-medium font-mono transition-all flex items-center gap-2 text-neutral-300 hover:text-white cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <DownloadIcon size={18} /> Resume
              </a>

              {/* Social Links */}
              <div className="flex gap-2 pl-3 border-l border-neutral-800/80 ml-1">
                {/* LinkedIn */}
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => unlockAchievement('click-linkedin')}
                  className="p-2.5 rounded-sm bg-black/60 border border-neutral-800/80 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                {/* GitHub */}
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => unlockAchievement('click-github')}
                  className="p-2.5 rounded-sm bg-black/60 border border-neutral-800/80 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all"
                  title="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;