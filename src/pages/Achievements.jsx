// src/pages/Achievements.jsx
import React from 'react';
import { Trophy, Lock, RotateCcw } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAchievements } from '../hooks/useAchievements';
import { ACHIEVEMENTS } from '../constants/achievements';

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
      } max-w-md w-full bg-white dark:bg-slate-900 shadow-2xl rounded-2xl pointer-events-auto flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 ring-1 ring-black/5`}>
        
        {/* Header / Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 p-3 rounded-xl shrink-0">
              <RotateCcw size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Reset All Progress?
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                This will permanently delete all your unlocked achievements. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - UPDATED: justify-between separates them */}
        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col">
      
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Achievements
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Track your exploration of my portfolio. Can you unlock them all?
        </p>

        {/* Progress Bar */}
        <div className="bg-slate-200 dark:bg-slate-800 rounded-full h-6 w-full max-w-md mx-auto relative overflow-hidden shadow-inner">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-800 dark:text-white drop-shadow-md">
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
                    ? 'bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-slate-900 border-yellow-400 shadow-lg shadow-yellow-500/20'
                    : 'bg-white dark:bg-slate-900 border-yellow-400/50 shadow-lg shadow-yellow-400/10 scale-100 opacity-100' 
                  : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-70 grayscale hover:grayscale-0 hover:opacity-100'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-inner
                ${isUnlocked 
                  ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-white shadow-yellow-500/50' 
                  : 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }
              `}>
                {isUnlocked ? (
                  <Trophy size={32} strokeWidth={2} />
                ) : (
                  <Lock size={28} strokeWidth={2} />
                )}
              </div>

              <div>
                <h3 className={`
                  font-bold text-lg mb-1
                  ${isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}
                `}>
                  {isSecret ? '???' : achievement.title}
                </h3>
                
                <p className={`
                  text-sm leading-relaxed
                  ${isUnlocked ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500'}
                `}>
                  {isSecret ? 'Hidden Achievement' : achievement.description}
                </p>
              </div>

              <div className={`
                mt-auto text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-full border
                ${isUnlocked 
                  ? 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800' 
                  : 'bg-slate-200 text-slate-500 border-slate-300 dark:bg-slate-700 dark:text-slate-400 dark:border-slate-600'
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
          <RotateCcw size={14} />
          Reset Progress
        </button>
      </div>

    </div>
  );
};

export default Achievements;