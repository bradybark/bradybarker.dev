// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { TrendingUp, ChevronDown } from 'lucide-react';

import resumeData, { MAIN_SECTIONS } from './data/resumeData';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';

import HeroSection from './components/sections/HeroSection';
import ImpactSection from './components/sections/ImpactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationAndCommunitySection from './components/sections/EducationAndCommunitySection';
import BioSection from './components/sections/BioSection';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('experience');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  const isManualScroll = useRef(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.willChange = 'scroll-position';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.willChange = 'auto';
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
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
      isManualScroll.current = true;

      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);

      setTimeout(() => {
        isManualScroll.current = false;
      }, 1000);

      if (window.innerWidth < 768) setIsSidebarOpen(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        scrollToSection={scrollToSection}
      />

      <Sidebar
        darkMode={darkMode}
        isSidebarOpen={isSidebarOpen}
        activeSection={activeSection}
        showImpact={showImpact}
        scrollToSection={scrollToSection}
      />

      <main
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 transition-all duration-300 ease-in-out"
        style={{ transform: 'translateZ(0)' }}
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

        <footer className="pt-20 pb-8 text-center text-slate-500 dark:text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Brady Barker. Built with React & Tailwind CSS.</p>
        </footer>
      </main>

      <MobileNav scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
