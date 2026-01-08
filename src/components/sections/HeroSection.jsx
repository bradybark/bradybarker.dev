// src/components/sections/HeroSection.jsx
import React, { useState, useMemo } from 'react';
import { useAchievements } from '../../hooks/useAchievements';
import MapPinIcon from '../icons/MapPinIcon';
import MailIcon from '../icons/MailIcon';
import DownloadIcon from '../icons/DownloadIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import CheckIcon from '../icons/CheckIcon';

// --- Static Stars Component (Background Fill) ---
const StaticStars = () => {
  const stars = useMemo(() => {
    // UPDATED: Increased count to 300 for full edge-to-edge coverage
    return Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1, 
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

// --- Mini Galaxy Component (Offset Spiral) ---
const MiniGalaxy = () => {
  const generateSpiral = (count) => {
    const armTraits = Array.from({ length: 3 }).map(() => ({
      lengthScale: 0.8 + Math.random() * 0.4, // Min length increased to ensure reach
      widthScale: 0.5 + Math.random() * 1.0, 
      angleOffset: (Math.random() - 0.5) * 0.5 
    }));

    return Array.from({ length: count }).map((_, i) => {
      const armIndex = Math.floor(Math.random() * 3);
      const traits = armTraits[armIndex];
      
      const distRaw = Math.random();
      
      // Distance calculation
      const distance = (0.05 + distRaw * 0.95) * traits.lengthScale;
      
      const armAngle = ((armIndex * 2 * Math.PI) / 3) + traits.angleOffset;
      const spiralTwist = distance * 5; 
      
      const scatterRaw = Math.random(); 
      const deviation = scatterRaw - 0.5; 
      const armCenterDistance = Math.abs(deviation) * 2; 
      const scatter = deviation * (0.3 + distance * 1.0) * traits.widthScale; 
      
      const angle = armAngle + spiralTwist + scatter;
      
      // UPDATED MATH:
      // Radius multiplier increased to 60.
      // With a 200vmax container, this allows stars to reach well past the left edge.
      const radius = distance * 60; 

      const top = 50 + (Math.sin(angle) * radius);
      const left = 50 + (Math.cos(angle) * radius);

      let baseOpacity = Math.random() * 0.5 + 0.3;
      const armDimming = 1 - (armCenterDistance * 0.8);
      
      // Radial Fade: Fades stars out before they hit the container edge
      const radialFade = Math.max(0, 1 - Math.pow(distRaw, 4)); 

      return {
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size: Math.random() < 0.7 ? Math.random() * 1.5 + 0.5 : Math.random() * 2 + 1.5,
        opacity: baseOpacity * armDimming * radialFade * 0.6, 
      };
    });
  };

  // 500 stars to maintain density over larger area
  const stars = useMemo(() => generateSpiral(500), []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* UPDATED CONTAINER: 
        - Left: 75% (Offset to right)
        - Size: 200vmax (Massive, ensuring overlap)
      */}
      <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] animate-[spin_160s_linear_infinite]">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: star.size > 2 ? `0 0 ${star.size}px rgba(255, 255, 255, 0.4)` : 'none'
            }}
          />
        ))}
      </div>
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

      {/* Galaxy Background & Static Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static Stars (Background Fill) */}
        <StaticStars />
        
        {/* Spinning Galaxy (Foreground Layer) */}
        <div className="absolute inset-0">
          <MiniGalaxy />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="px-8 py-16 md:px-12 md:py-20 relative">

          <div className="max-w-4xl space-y-10 relative z-10">

            {/* Hook - Attention Grabber */}
            <div className="space-y-6">
              
              {/* Main Headline */}
              <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] font-display text-shadow-strong">
                  <span className="block pb-2 text-gradient-primary animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                    The New Standard
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <div className="relative animate-slide-up-fade" style={{ animationDelay: '0.5s' }}>
                <p className="text-2xl md:text-3xl font-light text-neutral-400 tracking-wider font-mono text-shadow-subtle">
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.7s' }}>Ingest.</span>
                  {' '}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '0.9s' }}>Transform.</span>
                  {' '}
                  <span className="inline-block animate-fade-in" style={{ animationDelay: '1.1s' }}>Visualize.</span>
                </p>
              </div>

              {/* Name and Location */}
              <div className="flex items-center gap-3 text-sm font-mono text-neutral-400 animate-slide-up-fade text-shadow-subtle" style={{ animationDelay: '1.3s' }}>
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
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-display text-shadow-subtle">
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