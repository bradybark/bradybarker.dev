// src/pages/Resume.jsx
import React, { useState, useEffect } from 'react';
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

// 1. Receive props from App.jsx instead of creating local state
const Resume = ({ isSidebarOpen, setIsSidebarOpen }) => { 
  
  const { isDarkMode } = useTheme();
  const darkMode = isDarkMode;

  // REMOVE THIS LINE:
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

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
      // Close sidebar on mobile when a link is clicked
      if (window.innerWidth < 768) setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <Sidebar
        darkMode={darkMode}
        isSidebarOpen={isSidebarOpen}
        activeSection={activeSection}
        showImpact={showImpact}
        scrollToSection={scrollToSection}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div
        className="relative max-w-7xl mx-auto space-y-24 overflow-x-hidden p-1"
        style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}
      >
        {/* Enhanced Galaxy/Star Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* Subtle neutral glow */}
          <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)] rounded-full -top-32 -left-32 blur-3xl" />

          {/* Subtle stars - limited to top 20% only (hero area) */}
          <div className="absolute top-[3%] left-[22%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle" />
          <div className="absolute top-[5%] left-[68%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[7%] left-[88%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[9%] left-[45%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full" />
          <div className="absolute top-[11%] left-[15%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle" />
          <div className="absolute top-[13%] left-[85%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[15%] left-[35%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[17%] left-[55%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full" />
          <div className="absolute top-[19%] left-[75%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle" />
          <div className="absolute top-[4%] left-[10%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[6%] left-[50%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle" />
          <div className="absolute top-[8%] left-[70%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[10%] left-[28%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[12%] left-[90%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full" />
          <div className="absolute top-[14%] left-[8%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle" />
          <div className="absolute top-[16%] left-[62%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[18%] left-[42%] w-0.5 h-0.5 bg-neutral-200/30 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[20%] left-[95%] w-0.5 h-0.5 bg-neutral-300/25 rounded-full" />

          {/* Minimal shooting stars - only in top area */}
          <div className="absolute top-[8%] right-[20%] w-0.5 h-0.5 bg-neutral-100/60 rounded-full animate-shooting-star" style={{ animationDelay: '3s', animationDuration: '3s' }} />
          <div className="absolute top-[12%] left-[10%] w-0.5 h-0.5 bg-neutral-100/60 rounded-full animate-shooting-star-tl" style={{ animationDelay: '15s', animationDuration: '3s' }} />
        </div>

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