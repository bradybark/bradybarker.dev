// src/components/sections/HeroSection.jsx
import React, { useState } from 'react';
import { useAchievements } from '../../hooks/useAchievements';
import { Icons } from '@bark/ui';

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
    // UPDATED: Reduced min-h from 70vh to 45vh to remove excessive bottom space
    <section id="hero" className="min-h-[45vh] scroll-mt-32 relative flex flex-col justify-center">

      {/* Note: The Galaxy/Star background is in src/pages/Resume.jsx */}

      {/* Main Content */}
      <div className="relative">
        <div className="px-8 py-12 md:px-12 md:py-16 relative">

          {/* UPDATED: Reduced space-y-10 to space-y-6 to pull buttons up */}
          <div className="max-w-4xl space-y-6 relative z-10">

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
                  <Icons.MapPinIcon size={14} />
                  {resumeData.personalInfo.location}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-400/20 to-transparent" />
              </div>
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
                {isCopied ? <Icons.CheckIcon size={18} /> : <Icons.MailIcon size={18} />}
                {isCopied ? "Email Copied!" : "Contact Me"}
              </button>

              {/* Resume Button */}
              <a
                href="/Brady_Barker_Resume.pdf"
                download="Brady_Barker_Resume.pdf"
                onClick={() => unlockAchievement('download-resume')}
                className="px-5 py-2.5 bg-black/60 border border-neutral-800/80 hover:border-neutral-600 rounded-sm font-medium font-mono transition-all flex items-center gap-2 text-neutral-300 hover:text-white cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <Icons.DownloadIcon size={18} /> Resume
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
                  <Icons.LinkedinIcon size={20} />
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
                  <Icons.GithubIcon size={20} />
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