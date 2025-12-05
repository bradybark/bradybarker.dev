// src/pages/Resume.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

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

const Resume = () => {
  // Receive shared state from App layout via Outlet context
  const { darkMode, isSidebarOpen, setIsSidebarOpen } = useOutletContext();
  
  const [activeSection, setActiveSection] = useState('hero');
  const [showImpact, setShowImpact] = useState(false);

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
      // We set active section immediately for better UX
      setActiveSection(id); 

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
      />

      {/* CRITICAL FIX FOR ARTIFACTS:
          1. transform: translate3d(0,0,0) -> Forces this container into its own GPU layer.
          2. backfaceVisibility: hidden -> Prevents tearing during repaints.
          3. p-1 -> Adds a tiny buffer to prevent margin collapsing which can also cause repaint errors.
      */}
      <div 
        className="max-w-7xl mx-auto space-y-24 overflow-x-hidden p-1"
        style={{ 
          transform: 'translate3d(0,0,0)', 
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        <HeroSection resumeData={resumeData} />
        <ExperienceSection resumeData={resumeData} />
        <ProjectsSection resumeData={resumeData} />

        {!showImpact && (
          <div className="flex justify-center -mt-12 mb-12">
            <button
              onClick={() => setShowImpact(true)}
              className="group flex flex-col items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <div className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-lg group-hover:border-blue-500/50 transition-all flex items-center gap-2 font-semibold">
                <TrendingUp size={18} /> See Engineering Impact
              </div>
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <span className="w-0.5 h-3 bg-slate-300 dark:bg-slate-700"></span>
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

      <MobileNav scrollToSection={scrollToSection} />
    </>
  );
};

export default Resume;