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
          {/* Subtle gradient glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px]" />

          {/* Stars - More stars with various animations */}
          <div className="absolute top-[3%] left-[22%] w-1 h-1 bg-neutral-200/60 rounded-full animate-twinkle" />
          <div className="absolute top-[7%] left-[68%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[5%] left-[88%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[12%] left-[45%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[8%] left-[70%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[18%] left-[85%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full" />
          <div className="absolute top-[16%] left-[12%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
          <div className="absolute top-[22%] left-[34%] w-1 h-1 bg-neutral-300/50 rounded-full animate-pulse-slow" />
          <div className="absolute top-[25%] left-[15%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
          <div className="absolute top-[30%] left-[55%] w-1 h-1 bg-neutral-300/50 rounded-full animate-pulse-slow" />
          <div className="absolute top-[28%] left-[78%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[35%] left-[90%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
          <div className="absolute top-[38%] left-[5%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full" />
          <div className="absolute top-[42%] left-[25%] w-1 h-1 bg-neutral-300/55 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[45%] left-[62%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
          <div className="absolute top-[48%] left-[75%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
          <div className="absolute top-[52%] left-[10%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[55%] left-[42%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[58%] left-[40%] w-1 h-1 bg-neutral-200/50 rounded-full" />
          <div className="absolute top-[62%] left-[82%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[65%] left-[80%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
          <div className="absolute top-[68%] left-[48%] w-1 h-1 bg-neutral-200/50 rounded-full animate-pulse-slow" />
          <div className="absolute top-[72%] left-[20%] w-1 h-1 bg-neutral-200/55 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[75%] left-[58%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle" />
          <div className="absolute top-[78%] left-[60%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[82%] left-[28%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[85%] left-[35%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full" />
          <div className="absolute top-[88%] left-[72%] w-1 h-1 bg-neutral-300/50 rounded-full animate-pulse-slow" />
          <div className="absolute top-[90%] left-[88%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle" />
          <div className="absolute top-[92%] left-[65%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
          <div className="absolute top-[95%] left-[15%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[20%] left-[95%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-twinkle-slow" />

          {/* Additional stars - filling in more gaps */}
          <div className="absolute top-[1%] left-[35%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />
          <div className="absolute top-[2%] left-[50%] w-1 h-1 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[4%] left-[15%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[6%] left-[32%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full" />
          <div className="absolute top-[10%] left-[18%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle" />
          <div className="absolute top-[11%] left-[75%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-pulse-slow" />
          <div className="absolute top-[14%] left-[28%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[15%] left-[92%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle" />
          <div className="absolute top-[17%] left-[38%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
          <div className="absolute top-[19%] left-[58%] w-1 h-1 bg-neutral-300/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[21%] left-[8%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
          <div className="absolute top-[23%] left-[72%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[24%] left-[48%] w-1 h-1 bg-neutral-200/50 rounded-full" />
          <div className="absolute top-[26%] left-[62%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[27%] left-[20%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-twinkle" />
          <div className="absolute top-[29%] left-[88%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[31%] left-[42%] w-1 h-1 bg-neutral-200/55 rounded-full animate-pulse-slow" />
          <div className="absolute top-[33%] left-[68%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full" />
          <div className="absolute top-[34%] left-[12%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
          <div className="absolute top-[37%] left-[52%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[39%] left-[75%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[40%] left-[18%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
          <div className="absolute top-[41%] left-[88%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
          <div className="absolute top-[44%] left-[38%] w-1 h-1 bg-neutral-300/55 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[46%] left-[55%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[47%] left-[8%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />
          <div className="absolute top-[49%] left-[82%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full" />
          <div className="absolute top-[50%] left-[28%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[53%] left-[65%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[54%] left-[15%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
          <div className="absolute top-[56%] left-[88%] w-1 h-1 bg-neutral-200/50 rounded-full" />
          <div className="absolute top-[57%] left-[32%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[59%] left-[72%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[61%] left-[22%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />
          <div className="absolute top-[63%] left-[50%] w-1 h-1 bg-neutral-200/50 rounded-full" />
          <div className="absolute top-[64%] left-[92%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[66%] left-[38%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full animate-pulse-slow" />
          <div className="absolute top-[67%] left-[85%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />
          <div className="absolute top-[69%] left-[25%] w-1 h-1 bg-neutral-200/55 rounded-full" />
          <div className="absolute top-[70%] left-[58%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[71%] left-[12%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[73%] left-[68%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
          <div className="absolute top-[74%] left-[45%] w-1 h-1 bg-neutral-200/50 rounded-full" />
          <div className="absolute top-[76%] left-[30%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[77%] left-[78%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[79%] left-[50%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />
          <div className="absolute top-[80%] left-[8%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
          <div className="absolute top-[81%] left-[65%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[83%] left-[42%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[84%] left-[92%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle" />
          <div className="absolute top-[86%] left-[55%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
          <div className="absolute top-[87%] left-[18%] w-1 h-1 bg-neutral-300/55 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[89%] left-[38%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[91%] left-[78%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle" />
          <div className="absolute top-[93%] left-[32%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
          <div className="absolute top-[94%] left-[68%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[96%] left-[48%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-pulse-slow" />
          <div className="absolute top-[97%] left-[25%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />

          {/* Purple accent stars */}
          <div className="absolute top-[15%] left-[55%] w-1 h-1 bg-purple-400/30 rounded-full animate-pulse-slow" />
          <div className="absolute top-[60%] left-[45%] w-0.5 h-0.5 bg-purple-300/25 rounded-full animate-twinkle" />
          <div className="absolute top-[82%] left-[15%] w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[36%] left-[52%] w-0.5 h-0.5 bg-purple-300/25 rounded-full animate-pulse-slow" />
          
          {/* More purple accent stars */}
          <div className="absolute top-[8%] left-[42%] w-0.5 h-0.5 bg-purple-400/25 rounded-full animate-twinkle" />
          <div className="absolute top-[24%] left-[68%] w-1 h-1 bg-purple-300/30 rounded-full animate-pulse-slow" />
          <div className="absolute top-[32%] left-[28%] w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[43%] left-[78%] w-0.5 h-0.5 bg-purple-300/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[51%] left-[35%] w-1 h-1 bg-purple-400/30 rounded-full animate-twinkle" />
          <div className="absolute top-[66%] left-[62%] w-0.5 h-0.5 bg-purple-300/20 rounded-full animate-twinkle-slow" />
          <div className="absolute top-[74%] left-[85%] w-0.5 h-0.5 bg-purple-400/25 rounded-full animate-pulse-slow" />
          <div className="absolute top-[88%] left-[48%] w-1 h-1 bg-purple-300/30 rounded-full animate-twinkle" />

          {/* Shooting stars - from random directions with randomized timing */}
          <div className="absolute top-[9%] right-[18%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '2.7s', animationDuration: '2.9s' }} />
          <div className="absolute top-[22%] left-[10%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '8.3s', animationDuration: '3.2s' }} />
          <div className="absolute bottom-[32%] left-[15%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '14.6s', animationDuration: '2.5s' }} />
          <div className="absolute bottom-[20%] right-[22%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '19.4s', animationDuration: '3.4s' }} />
          <div className="absolute top-[56%] right-[12%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '25.1s', animationDuration: '2.7s' }} />
          
          {/* More shooting stars */}
          <div className="absolute top-[15%] left-[80%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '32.5s', animationDuration: '2.8s' }} />
          <div className="absolute bottom-[15%] right-[30%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '38.2s', animationDuration: '3.1s' }} />
          <div className="absolute top-[42%] left-[5%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '45.8s', animationDuration: '2.6s' }} />
          <div className="absolute bottom-[25%] left-[88%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '52.3s', animationDuration: '3.0s' }} />
          <div className="absolute top-[68%] right-[8%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '58.7s', animationDuration: '2.9s' }} />
          <div className="absolute top-[35%] right-[35%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '64.1s', animationDuration: '2.7s' }} />
          <div className="absolute bottom-[10%] left-[25%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '71.4s', animationDuration: '3.3s' }} />
        </div>

        <HeroSection resumeData={resumeData} />
        <ExperienceSection resumeData={resumeData} />
        <ProjectsSection resumeData={resumeData} />

        {!showImpact && (
          <div className="flex justify-center -mt-12 mb-12">
            <button
              onClick={() => setShowImpact(true)}
              className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <div className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 shadow-sm group-hover:shadow-lg group-hover:border-purple-500/50 transition-all flex items-center gap-2 font-semibold">
                <TrendingUp size={18} /> See Engineering Impact
              </div>
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <span className="w-0.5 h-3 bg-neutral-700"></span>
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