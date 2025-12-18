// src/context/AchievementContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Trophy, X, RotateCcw } from 'lucide-react'; // <--- Ensure RotateCcw is imported
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

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
  { id: 'completionist', title: 'The Collector', description: 'Unlocked every single achievement!' },
];

export const AchievementProvider = ({ children }) => {
  const [unlocked, setUnlocked] = useState([]);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('achievements');
    if (saved) {
      setUnlocked(JSON.parse(saved));
    }
  }, []);

  // Check for completionist
  useEffect(() => {
    const standardIds = ACHIEVEMENTS
      .filter(a => a.id !== 'completionist')
      .map(a => a.id);

    const hasAllStandard = standardIds.every(id => unlocked.includes(id));

    if (hasAllStandard && !unlocked.includes('completionist')) {
      unlockAchievement('completionist');
      triggerBigConfetti();
    }
  }, [unlocked]); 

  const unlockAchievement = (id) => {
    if (unlocked.includes(id)) return;

    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (!achievement) return;

    const newUnlocked = [...unlocked, id];
    setUnlocked(newUnlocked);
    localStorage.setItem('achievements', JSON.stringify(newUnlocked));

    setNotification(achievement);
    setTimeout(() => {
      setNotification(prev => (prev === achievement ? null : prev));
    }, 5000);
  };

  // --- RESET FUNCTION ---
  const resetAchievements = () => {
    setUnlocked([]); // Clear State
    localStorage.removeItem('achievements'); // Clear Storage
    
    // Show "System Reset" Notification
    setNotification({ 
      title: 'System Reset', 
      description: 'All achievements have been cleared.' 
    });
    
    setTimeout(() => setNotification(null), 3000);
  };

  const handlePopupClick = () => {
    setNotification(null);
    navigate('/achievements');
  };

  const triggerBigConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };
    const random = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  // Helper to determine notification style
  const isGold = notification?.id === 'completionist';
  const isReset = !notification?.id; // If no ID, it's our custom reset message

  return (
    // CRITICAL FIX: Add resetAchievements to the value object below
    <AchievementContext.Provider value={{ unlocked, unlockAchievement, resetAchievements }}>
      {children}
      
      {notification && (
        <div 
          className="fixed bottom-6 right-6 z-[100] animate-fade-in-up cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handlePopupClick}
        >
          <div className={`
            flex items-start gap-4 max-w-sm p-4 rounded-xl shadow-2xl border transition-colors duration-300
            ${isGold 
              ? 'bg-gradient-to-r from-yellow-200 via-yellow-50 to-yellow-200 border-yellow-400 text-yellow-900 shadow-yellow-500/50' 
              : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700'
            }
          `}>
            <div className={`
              p-3 rounded-lg shrink-0
              ${isGold 
                ? 'bg-yellow-400 text-white animate-pulse' 
                : isReset 
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500'
                  : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-500'
              }
            `}>
              {/* Show different icon for Reset */}
              {isReset ? <RotateCcw size={24} /> : <Trophy size={24} strokeWidth={2.5} />}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className={`
                font-extrabold text-xs uppercase tracking-widest mb-1
                ${isGold ? 'text-yellow-800' : 'text-slate-500 dark:text-slate-400'}
              `}>
                {isGold ? 'ULTIMATE UNLOCK' : (isReset ? 'System' : 'Achievement Unlocked')}
              </h4>
              <p className="font-bold text-lg leading-tight truncate">
                {notification.title}
              </p>
              <p className={`
                text-sm mt-1 leading-snug
                ${isGold ? 'text-yellow-800/80' : 'text-slate-500 dark:text-slate-400'}
              `}>
                {notification.description}
              </p>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setNotification(null);
              }}
              className={`
                p-1 transition-colors
                ${isGold ? 'text-yellow-700 hover:text-yellow-900' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'}
              `}
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