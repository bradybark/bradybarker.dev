// src/context/AchievementContext.jsx
import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { Trophy, X, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';
import { ACHIEVEMENTS } from '../constants/achievements';

// eslint-disable-next-line react-refresh/only-export-components
export const AchievementContext = createContext();

export const AchievementProvider = ({ children }) => {
  const navigate = useNavigate();

  // 1. LAZY INITIALIZATION: Load from localStorage immediately, not in useEffect
  // This prevents the "flash" where data is empty for a split second on reload.
  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('achievements');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // 2. REF TRACKING: Keep a synchronous "live" list to prevent double-toasts in StrictMode
  const unlockedRef = useRef(new Set(unlocked));

  // Sync ref if state changes from other sources (unlikely but safe)
  useEffect(() => {
    unlockedRef.current = new Set(unlocked);
  }, [unlocked]);

  const triggerBigConfetti = useCallback(() => {
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
  }, []);

  // --- UNIFIED TOAST FUNCTION ---
  const showToast = useCallback((achievement, type = 'unlock') => {
    const isGold = achievement.id === 'completionist';
    const isReset = type === 'reset';
    
    toast.custom((t) => (
      <div 
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-sm w-full cursor-pointer hover:scale-105 transition-transform duration-200 pointer-events-auto`}
        onClick={() => {
          toast.dismiss(t.id);
          if (!isReset) navigate('/achievements');
        }}
      >
        <div className={`
          flex items-start gap-4 p-4 rounded-xl shadow-2xl border transition-colors duration-300
          ${isGold 
            ? 'bg-gradient-to-r from-yellow-200 via-yellow-50 to-yellow-200 border-yellow-400 text-yellow-900 shadow-yellow-500/50' 
            : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700 shadow-lg'
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
              {achievement.title}
            </p>
            <p className={`
              text-sm mt-1 leading-snug
              ${isGold ? 'text-yellow-800/80' : 'text-slate-500 dark:text-slate-400'}
            `}>
              {achievement.description}
            </p>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              toast.dismiss(t.id);
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
    ), { duration: 5000 });
  }, [navigate]);

  // Use a ref to store the unlock function for internal calls
  const unlockAchievementRef = useRef();

  const unlockAchievement = useCallback((id) => {
    // 3. CHECK REF FIRST: Stops double-firing instantly
    if (unlockedRef.current.has(id)) return;

    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (!achievement) return;

    // Update Ref immediately (synchronous block)
    unlockedRef.current.add(id);

    // Then update State (triggers re-render)
    setUnlocked(prev => {
      const newUnlocked = [...prev, id];
      localStorage.setItem('achievements', JSON.stringify(newUnlocked));

      // Check for completionist achievement after adding this one
      if (id !== 'completionist') {
        const standardIds = ACHIEVEMENTS
          .filter(a => a.id !== 'completionist')
          .map(a => a.id);
        const hasAllStandard = standardIds.every(achId =>
          newUnlocked.includes(achId)
        );

        if (hasAllStandard && !newUnlocked.includes('completionist')) {
          // Schedule completionist unlock on next tick to avoid cascading updates
          setTimeout(() => {
            if (unlockAchievementRef.current) {
              unlockAchievementRef.current('completionist');
              triggerBigConfetti();
            }
          }, 0);
        }
      }

      return newUnlocked;
    });

    showToast(achievement, 'unlock');
  }, [showToast, triggerBigConfetti]);

  // Keep ref in sync with latest function
  useEffect(() => {
    unlockAchievementRef.current = unlockAchievement;
  }, [unlockAchievement]);

  const resetAchievements = useCallback(() => {
    // Clear State, Storage, AND Ref
    setUnlocked([]);
    unlockedRef.current.clear();
    localStorage.removeItem('achievements');

    showToast({
      title: 'System Reset',
      description: 'All achievements have been cleared.'
    }, 'reset');
  }, [showToast]);

  return (
    <AchievementContext.Provider value={{ unlocked, unlockAchievement, resetAchievements }}>
      {children}
    </AchievementContext.Provider>
  );
};