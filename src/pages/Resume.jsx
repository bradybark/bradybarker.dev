// src/pages/Resume.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';
import { useAchievements } from '../hooks/useAchievements';
import { useTheme } from '../hooks/useTheme';

import resumeData, { MAIN_SECTIONS } from '../data/resumeData';
import Sidebar from '../components/layout/Sidebar';
import MobileNav from '../components/layout/MobileNav';

import HeroSection from '../components/sections/HeroSection';
import ImpactSection from '../components/sections/ImpactSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationAndCommunitySection from '../components/sections/EducationAndCommunitySection';
import BioSection from '../components/sections/BioSection';

// --- Static Stars Component (Moved from HeroSection) ---
const StaticStars = () => {
  const stars = useMemo(() => {
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

// --- Mini Galaxy Component (Moved from HeroSection) ---
const MiniGalaxy = () => {
  const generateSpiral = (count) => {
    const armTraits = Array.from({ length: 3 }).map(() => ({
      lengthScale: 0.8 + Math.random() * 0.4, 
      widthScale: 0.5 + Math.random() * 1.0, 
      angleOffset: (Math.random() - 0.5) * 0.5 
    }));

    return Array.from({ length: count }).map((_, i) => {
      const armIndex = Math.floor(Math.random() * 3);
      const traits = armTraits[armIndex];
      const distRaw = Math.random();
      const distance = (0.05 + distRaw * 0.95) * traits.lengthScale;
      const armAngle = ((armIndex * 2 * Math.PI) / 3) + traits.angleOffset;
      const spiralTwist = distance * 5; 
      const scatterRaw = Math.random(); 
      const deviation = scatterRaw - 0.5; 
      const armCenterDistance = Math.abs(deviation) * 2; 
      const scatter = deviation * (0.3 + distance * 1.0) * traits.widthScale; 
      const angle = armAngle + spiralTwist + scatter;
      
      const radius = distance * 60; 

      const top = 50 + (Math.sin(angle) * radius);
      const left = 50 + (Math.cos(angle) * radius);

      let baseOpacity = Math.random() * 0.5 + 0.3;
      const armDimming = 1 - (armCenterDistance * 0.8);
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

  const stars = useMemo(() => generateSpiral(500), []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
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

const Resume = ({ isSidebarOpen, setIsSidebarOpen }) => { 
  const { isDarkMode } = useTheme();
  const darkMode = isDarkMode;
  const { unlockAchievement } = useAchievements();

  const [activeSection, setActiveSection] = useState('hero');
  const [showImpact, setShowImpact] = useState(false);

  useEffect(() => {
    unlockAchievement('visit-resume');
  }, [unlockAchievement]);

  useEffect(() => {
    if (showImpact) {
      unlockAchievement('open-impact');
    }
  }, [showImpact, unlockAchievement]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -50% 0px', threshold: 0 }
    );

    const sectionsToObserve = showImpact ? [...MAIN_SECTIONS, 'impact'] : MAIN_SECTIONS;
    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [showImpact]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id); 
      if (window.innerWidth < 768) setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* GLOBAL BACKGROUND LAYER
        This is placed outside the transformed 'max-w-7xl' container below.
        This allows 'fixed inset-0' to actually cover the full viewport.
      */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StaticStars />
        <MiniGalaxy />
      </div>

      <Sidebar
        darkMode={darkMode}
        isSidebarOpen={isSidebarOpen}
        activeSection={activeSection}
        showImpact={showImpact}
        scrollToSection={scrollToSection}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content Container - Kept relative/transformed for layout/3D effects */}
      <div
        className="relative max-w-7xl mx-auto space-y-24 overflow-x-hidden p-1 z-10"
        style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}
      >
        <HeroSection resumeData={resumeData} />
        <ExperienceSection resumeData={resumeData} />
        <ProjectsSection resumeData={resumeData} />

        {!showImpact && (
          <div className="flex justify-center -mt-12 mb-12">
            <button
              onClick={() => setShowImpact(true)}
              className="group flex flex-col items-center gap-3 text-neutral-400 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <div className="px-6 py-2.5 rounded-sm bg-black/60 border border-neutral-800/80 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-purple-400/30 transition-all flex items-center gap-2 font-medium font-mono text-sm">
                <TrendingUp size={18} /> See Engineering Impact
              </div>
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <span className="w-px h-4 bg-neutral-700"></span>
                <ChevronDown size={16} />
              </div>
            </button>
          </div>
        )}

        {showImpact && <ImpactSection onClose={() => setShowImpact(false)} />}

        <SkillsSection resumeData={resumeData} />
        <EducationAndCommunitySection resumeData={resumeData} />
        <BioSection />
      </div>

      <MobileNav 
        scrollToSection={scrollToSection} 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Resume;