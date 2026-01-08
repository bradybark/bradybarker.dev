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
      } max-w-md w-full bg-neutral-950 shadow-[0_0_25px_rgba(0,0,0,0.5)] rounded-sm pointer-events-auto flex flex-col overflow-hidden border border-neutral-800/80`}>

        {/* Header / Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-black/60 text-red-500 p-3 rounded-sm border border-red-500/40 shrink-0">
              <RotateCcwIcon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white leading-tight font-mono">
                Reset All Progress?
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                This will permanently delete all your unlocked achievements. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-black/40 px-6 py-4 flex items-center justify-between border-t border-neutral-800/80">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-2 text-sm font-semibold font-mono text-neutral-400 hover:text-white hover:bg-black/60 rounded-sm transition-colors border border-transparent hover:border-neutral-800/80"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              resetAchievements();
            }}
            className="px-4 py-2 text-sm font-bold font-mono text-white bg-red-600/80 hover:bg-red-600 rounded-sm border border-red-500/40 shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all transform active:scale-95"
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
        {/* Subtle neutral glow */}
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)] rounded-full -top-32 -left-32 blur-3xl" />

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

        {/* Removed purple accent stars */}

        {/* Shooting stars - from random directions with randomized timing */}
        <div className="absolute top-[14%] right-[22%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '5.3s', animationDuration: '2.7s' }} />
        <div className="absolute top-[35%] left-[14%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '11.8s', animationDuration: '2.9s' }} />
        <div className="absolute bottom-[22%] left-[25%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '18.5s', animationDuration: '3.1s' }} />
        <div className="absolute bottom-[12%] right-[32%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '24.2s', animationDuration: '2.8s' }} />
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold text-white mb-4 font-display">
          Achievements
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
          Track your exploration of my portfolio. Can you unlock them all?
        </p>

        {/* Progress Bar */}
        <div className="bg-black/60 border border-neutral-800/80 rounded-sm h-6 w-full max-w-md mx-auto relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white font-mono">
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
                relative p-6 rounded-sm border transition-all duration-300
                flex flex-col items-center text-center gap-4 group
                ${isCompletionist ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''}
                ${isUnlocked
                  ? isCompletionist
                    ? 'bg-black/60 border-green-400/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                    : 'bg-black/40 border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] scale-100 opacity-100'
                  : 'bg-black/20 border-neutral-800/80 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:border-neutral-800'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`
                w-16 h-16 rounded-sm flex items-center justify-center mb-2 border
                ${isUnlocked
                  ? 'bg-black/60 border-green-400/40 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]'
                  : 'bg-black/40 border-neutral-800/80 text-neutral-600'
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
                  font-bold text-lg mb-1 font-mono
                  ${isUnlocked ? 'text-white' : 'text-neutral-500'}
                `}>
                  {isSecret ? '???' : achievement.title}
                </h3>

                <p className={`
                  text-sm leading-relaxed
                  ${isUnlocked ? 'text-neutral-300' : 'text-neutral-600'}
                `}>
                  {isSecret ? 'Hidden Achievement' : achievement.description}
                </p>
              </div>

              <div className={`
                mt-auto text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-sm border font-mono
                ${isUnlocked
                  ? 'bg-black/60 text-green-400 border-green-400/40'
                  : 'bg-black/40 text-neutral-500 border-neutral-800/80'
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
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest font-mono text-red-500 hover:bg-black/40 hover:border-red-500/40 rounded-sm transition-colors border border-transparent"
        >
          <RotateCcwIcon size={14} />
          Reset Progress
        </button>
      </div>

    </div>
  );
};

export default Achievements;