// src/pages/Achievements.jsx
import React from 'react';
import { Trophy, Lock } from 'lucide-react';
import { useAchievements, ACHIEVEMENTS } from '../context/AchievementContext';

const Achievements = () => {
  const { unlocked } = useAchievements();

  // Calculate Progress
  const total = ACHIEVEMENTS.length;
  const count = unlocked.length;
  const percentage = Math.round((count / total) * 100);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((achievement, index) => {
          const isUnlocked = unlocked.includes(achievement.id);
          const isSecret = achievement.id === 'found-game' && !isUnlocked;

          return (
            <div 
              key={achievement.id}
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                flex flex-col items-center text-center gap-4 group
                ${isUnlocked 
                  ? 'bg-white dark:bg-slate-900 border-yellow-400/50 shadow-lg shadow-yellow-400/10 scale-100 opacity-100' 
                  : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-70 grayscale hover:grayscale-0 hover:opacity-100'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Circle */}
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

              {/* Text Content */}
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

              {/* Status Badge */}
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
    </div>
  );
};

export default Achievements;