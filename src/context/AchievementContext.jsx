import React, { createContext, useContext, useState, useEffect } from 'react';
import { Trophy, X } from 'lucide-react';

const AchievementContext = createContext();

export const ACHIEVEMENTS = [
  { id: 'visit-resume', title: 'First Impression', description: 'Visited the Resume page.' },
  { id: 'click-linkedin', title: 'Networker', description: 'Checked out LinkedIn.' },
  { id: 'click-github', title: 'Code Inspector', description: 'Checked out GitHub.' },
  { id: 'click-email', title: "Let's Talk", description: 'Copied Email to clipboard.' },
  { id: 'click-projects', title: 'Portfolio Browser', description: 'Viewed the Projects page.' },
  { id: 'found-game', title: 'Easter Egg Hunter', description: 'Found the hidden game!' },
  { id: 'open-impact', title: 'Data Driven', description: 'Viewed the Engineering Impact section.' },
  { id: 'toggle-theme', title: 'Flashbang!', description: 'Toggled Light/Dark mode.' },
  { id: 'download-resume', title: 'Head Hunter', description: 'Downloaded a copy of the resume.' },
];

export const AchievementProvider = ({ children }) => {
  const [unlocked, setUnlocked] = useState([]);
  const [notification, setNotification] = useState(null);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('achievements');
    if (saved) {
      setUnlocked(JSON.parse(saved));
    }
  }, []);

  const unlockAchievement = (id) => {
    if (unlocked.includes(id)) return; // Already unlocked

    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (!achievement) return;

    const newUnlocked = [...unlocked, id];
    setUnlocked(newUnlocked);
    localStorage.setItem('achievements', JSON.stringify(newUnlocked));

    // Show Notification
    setNotification(achievement);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      setNotification(prev => (prev === achievement ? null : prev));
    }, 5000);
  };

  return (
    <AchievementContext.Provider value={{ unlocked, unlockAchievement }}>
      {children}
      
      {/* Achievement Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-[100] animate-fade-in-up">
          <div className="
            flex items-start gap-4 max-w-sm p-4 rounded-xl shadow-2xl border
            transition-colors duration-300
            
            {/* Light Mode: White bg, dark text */}
            bg-white text-slate-900 border-slate-200
            
            {/* Dark Mode: Dark bg, light text */}
            dark:bg-slate-900 dark:text-white dark:border-slate-700
          ">
            {/* Icon Container */}
            <div className="
              p-3 rounded-lg shrink-0
              bg-yellow-100 text-yellow-600
              dark:bg-yellow-900/30 dark:text-yellow-500
            ">
              <Trophy size={24} strokeWidth={2.5} />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="
                font-extrabold text-xs uppercase tracking-widest mb-1
                text-yellow-600 dark:text-yellow-500
              ">
                Achievement Unlocked
              </h4>
              <p className="font-bold text-lg leading-tight truncate">
                {notification.title}
              </p>
              <p className="
                text-sm mt-1 leading-snug
                text-slate-500 dark:text-slate-400
              ">
                {notification.description}
              </p>
            </div>

            <button 
              onClick={() => setNotification(null)}
              className="
                p-1 transition-colors
                text-slate-400 hover:text-slate-600
                dark:text-slate-500 dark:hover:text-slate-300
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </AchievementContext.Provider>
  );
};

export const useAchievements = () => useContext(AchievementContext);