// src/pages/Resume.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';
import { useAchievements } from '../hooks/useAchievements';



import resumeData, { MAIN_SECTIONS, MOBILE_NAV_ITEMS, TOP_NAV_ITEMS } from '../data/resumeData';
import MobileNav from '../components/layout/MobileNav';

import HeroSection from '../components/sections/HeroSection';
import ImpactSection from '../components/sections/ImpactSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationAndCommunitySection from '../components/sections/EducationAndCommunitySection';
import BioSection from '../components/sections/BioSection';

import Sidebar from '../components/layout/Sidebar';
import { StaticStars, MiniGalaxy } from '@bark/ui';

const Resume = ({ isSidebarOpen, setIsSidebarOpen }) => {
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
      // Since we don't have a sidebar, this is less relevant, but harmless
      if (window.innerWidth < 768) setIsSidebarOpen(false);
    }
  };



  return (
    <>
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StaticStars />
        <MiniGalaxy />
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        activeSection={activeSection}
        showImpact={showImpact}
        scrollToSection={scrollToSection}
      />

      {/* Main Content Container - Kept relative/transformed for layout/3D effects */}
      <div
        className="relative max-w-7xl mx-auto space-y-24 overflow-clip p-1 z-10"
        style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', perspective: '1000px' }}
      >
        <HeroSection resumeData={resumeData} />

        {/* Staggered section animations - start after hero completes (~2.5s) */}
        <div className="animate-section-reveal overflow-hidden" style={{ animationDelay: '2.5s' }}>
          <ExperienceSection resumeData={resumeData} />
        </div>

        <div className="animate-section-reveal overflow-hidden" style={{ animationDelay: '2.8s' }}>
          <ProjectsSection resumeData={resumeData} />
        </div>

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

        <div className="animate-section-reveal overflow-hidden" style={{ animationDelay: '3.1s' }}>
          <SkillsSection resumeData={resumeData} />
        </div>

        <div className="animate-section-reveal overflow-hidden" style={{ animationDelay: '3.4s' }}>
          <EducationAndCommunitySection resumeData={resumeData} />
        </div>

        <div className="animate-section-reveal overflow-hidden" style={{ animationDelay: '3.7s' }}>
          <BioSection />
        </div>
      </div>
    </>
  );
};

export default Resume;