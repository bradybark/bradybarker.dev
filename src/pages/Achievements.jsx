// src/pages/Achievements.jsx
import React from 'react';
import toast from 'react-hot-toast';
import { useAchievements } from '../hooks/useAchievements';
import { ACHIEVEMENTS } from '../constants/achievements';
import TrophyIcon from '../components/icons/TrophyIcon';
import LockIcon from '../components/icons/LockIcon';
import RotateCcwIcon from '../components/icons/RotateCcwIcon';

const Achievements = () => {
  const { unlocked, resetAchievements } = useAchievements();

  // Calculate Progress
  const total = ACHIEVEMENTS.length;
  const count = unlocked.length;
  const percentage = Math.round((count / total) * 100);

  // --- Custom Confirmation Toast ---
  const handleResetClick = () => {
    toast.custom((t) => (
      <div className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl pointer-events-auto flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 ring-1 ring-black/5`}>
        
        {/* Header / Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 p-3 rounded-xl shrink-0">
              <RotateCcwIcon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white leading-tight">
                Reset All Progress?
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                This will permanently delete all your unlocked achievements. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - UPDATED: justify-between separates them */}
        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-2 text-sm font-semibold text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              resetAchievements(); 
            }}
            className="px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg shadow-red-600/20 transition-all transform active:scale-95"
          >
            Yes, Reset Everything
          </button>
        </div>
      </div>
    ), { 
      duration: Infinity, 
      position: 'top-center' 
    });
  };

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col overflow-hidden">

      {/* Enhanced Galaxy/Star Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle gradient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px]" />

        {/* Stars - More stars with various animations */}
        <div className="absolute top-[6%] left-[15%] w-1 h-1 bg-neutral-200/60 rounded-full animate-twinkle" />
        <div className="absolute top-[11%] left-[48%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[9%] left-[72%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[20%] left-[88%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full" />
        <div className="absolute top-[26%] left-[10%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
        <div className="absolute top-[34%] left-[56%] w-1 h-1 bg-neutral-300/50 rounded-full animate-pulse-slow" />
        <div className="absolute top-[40%] left-[92%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
        <div className="absolute top-[46%] left-[28%] w-1 h-1 bg-neutral-300/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[52%] left-[68%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
        <div className="absolute top-[58%] left-[5%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[64%] left-[42%] w-1 h-1 bg-neutral-200/50 rounded-full" />
        <div className="absolute top-[70%] left-[82%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
        <div className="absolute top-[76%] left-[22%] w-1 h-1 bg-neutral-200/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[82%] left-[62%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[86%] left-[35%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full" />
        <div className="absolute top-[94%] left-[78%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle" />

        {/* Purple accent stars */}
        <div className="absolute top-[16%] left-[62%] w-1 h-1 bg-purple-400/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-[56%] left-[38%] w-0.5 h-0.5 bg-purple-300/25 rounded-full animate-twinkle" />
        <div className="absolute top-[88%] left-[18%] w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-twinkle-slow" />

        {/* Shooting stars - from random directions with randomized timing */}
        <div className="absolute top-[14%] right-[22%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '5.3s', animationDuration: '2.7s' }} />
        <div className="absolute top-[35%] left-[14%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '11.8s', animationDuration: '2.9s' }} />
        <div className="absolute bottom-[22%] left-[25%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '18.5s', animationDuration: '3.1s' }} />
        <div className="absolute bottom-[12%] right-[32%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '24.2s', animationDuration: '2.8s' }} />
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Achievements
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
          Track your exploration of my portfolio. Can you unlock them all?
        </p>

        {/* Progress Bar */}
        <div className="bg-neutral-800 rounded-full h-6 w-full max-w-md mx-auto relative overflow-hidden shadow-inner">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-md">
            {count} / {total} Unlocked ({percentage}%)
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {ACHIEVEMENTS.map((achievement, index) => {
          const isUnlocked = unlocked.includes(achievement.id);
          const isSecret = achievement.id === 'found-game' && !isUnlocked;
          const isCompletionist = achievement.id === 'completionist';

          return (
            <div 
              key={achievement.id}
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                flex flex-col items-center text-center gap-4 group
                ${isCompletionist ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''}
                ${isUnlocked 
                  ? isCompletionist 
                    ? 'bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-neutral-900 border-yellow-400 shadow-lg shadow-yellow-500/20'
                    : 'bg-white dark:bg-neutral-900 border-yellow-400/50 shadow-lg shadow-yellow-400/10 scale-100 opacity-100' 
                  : 'bg-neutral-900/50 border-neutral-800 opacity-70 grayscale hover:grayscale-0 hover:opacity-100'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-inner
                ${isUnlocked 
                  ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-white shadow-yellow-500/50' 
                  : 'bg-neutral-700 text-neutral-400'
                }
              `}>
                {isUnlocked ? (
                  <TrophyIcon size={32} strokeWidth={2} />
                ) : (
                  <LockIcon size={28} strokeWidth={2} />
                )}
              </div>

              <div>
                <h3 className={`
                  font-bold text-lg mb-1
                  ${isUnlocked ? 'text-white' : 'text-neutral-400'}
                `}>
                  {isSecret ? '???' : achievement.title}
                </h3>
                
                <p className={`
                  text-sm leading-relaxed
                  ${isUnlocked ? 'text-neutral-300' : 'text-neutral-500'}
                `}>
                  {isSecret ? 'Hidden Achievement' : achievement.description}
                </p>
              </div>

              <div className={`
                mt-auto text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-full border
                ${isUnlocked 
                  ? 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800' 
                  : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                }
              `}>
                {isUnlocked ? 'Unlocked' : 'Locked'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Button */}
      <div className="mt-auto flex justify-center pb-8 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={handleResetClick}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <RotateCcwIcon size={14} />
          Reset Progress
        </button>
      </div>

    </div>
  );
};

export default Achievements;