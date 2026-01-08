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
          flex items-start gap-4 p-4 rounded-sm shadow-2xl border transition-colors duration-300 corner-brackets
          ${isGold
            ? 'bg-gradient-to-r from-yellow-900/90 via-yellow-950/90 to-yellow-900/90 border-yellow-600/50 text-yellow-100 shadow-yellow-600/30 backdrop-blur-sm'
            : 'bg-black/90 text-white border-green-500/40 shadow-lg shadow-green-500/10 backdrop-blur-sm'
          }
        `}>
          <div className={`
            p-3 rounded-sm shrink-0
            ${isGold
              ? 'bg-yellow-600 text-yellow-50 animate-pulse'
              : isReset
                ? 'bg-red-900/50 text-red-400 border border-red-800/50'
                : 'bg-green-950/50 text-green-400 border border-green-500/40'
            }
          `}>
            {isReset ? <RotateCcw size={24} /> : <Trophy size={24} strokeWidth={2.5} />}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className={`
              font-extrabold text-xs uppercase tracking-widest mb-1 font-mono
              ${isGold ? 'text-yellow-400' : 'text-green-500/70'}
            `}>
              {isGold ? 'ULTIMATE UNLOCK' : (isReset ? 'System' : 'Achievement Unlocked')}
            </h4>
            <p className={`font-bold text-lg leading-tight truncate ${isGold ? 'text-gradient-primary' : ''}`}>
              {achievement.title}
            </p>
            <p className={`
              text-sm mt-1 leading-snug
              ${isGold ? 'text-yellow-200/80' : 'text-neutral-400'}
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
              ${isGold ? 'text-yellow-400 hover:text-yellow-300' : 'text-neutral-500 hover:text-neutral-300'}
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