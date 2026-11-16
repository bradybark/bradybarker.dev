// src/components/sections/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { useAchievements } from '../../hooks/useAchievements';
import { Icons } from '@bradybark/ui';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>/';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const scramble = (text, revealed) =>
  text
    .split('')
    .map((c, i) =>
      i < revealed || c === ' '
        ? c
        : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    )
    .join('');

// Letters start as random characters and resolve left to right.
const ScrambleText = ({ text, delay = 0, duration = 1000, onDone }) => {
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? text : scramble(text, 0)
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      onDone?.();
      return;
    }
    let raf;
    let start;
    let lastTick = 0;

    const step = (t) => {
      if (start === undefined) start = t;
      const progress = Math.min((t - start) / duration, 1);
      // Re-roll characters ~every 40ms so it flickers but stays readable
      if (t - lastTick > 40 || progress === 1) {
        lastTick = t;
        setDisplay(progress === 1 ? text : scramble(text, Math.floor(progress * text.length)));
      }
      if (progress < 1) raf = requestAnimationFrame(step);
      else onDone?.();
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
    // onDone intentionally left out so a new callback identity doesn't restart the effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, duration]);

  return <span aria-hidden="true">{display}</span>;
};

const HeroSection = ({ resumeData }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [decoded, setDecoded] = useState(false);
  const { unlockAchievement } = useAchievements();
  const [firstName, ...rest] = resumeData.personalInfo.name.split(' ');
  const lastName = rest.join(' ');

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

            <div className="space-y-6">

              {/* Location tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-neutral-800/80 text-neutral-400 text-xs font-mono tracking-wide uppercase animate-slide-up-fade"
                style={{ animationDelay: '0.1s' }}
              >
                <Icons.MapPinIcon size={12} />
                {resumeData.personalInfo.location}
              </div>

              {/* Name */}
              <h1
                aria-label={resumeData.personalInfo.name}
                className="font-display font-bold tracking-tight leading-[1.1] text-5xl md:text-7xl lg:text-8xl text-shadow-strong animate-name-glow"
              >
                <span className="inline-block text-white animate-slide-up-fade" style={{ animationDelay: '0.25s' }}>
                  <ScrambleText text={firstName} delay={250} duration={700} />
                </span>
                {' '}
                <span className="inline-block pb-2 text-gradient-primary animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
                  <ScrambleText text={lastName} delay={450} duration={900} onDone={() => setDecoded(true)} />
                </span>
                {!decoded && (
                  <span
                    aria-hidden="true"
                    className="inline-block w-[0.08em] h-[0.85em] ml-[0.12em] align-[-0.08em] bg-neutral-300 animate-cursor-blink"
                  />
                )}
              </h1>

              {/* Divider */}
              <div className="hero-divider max-w-2xl" aria-hidden="true" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 animate-slide-up-fade" style={{ animationDelay: '0.7s' }}>
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
                  className="p-2.5 rounded-sm bg-black/60 border border-neutral-800/80 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all flex items-center justify-center"
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
                  className="p-2.5 rounded-sm bg-black/60 border border-neutral-800/80 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all flex items-center justify-center"
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
