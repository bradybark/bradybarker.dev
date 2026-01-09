// src/pages/Games.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import BugIcon from '../components/icons/BugIcon';
import ZapIcon from '../components/icons/ZapIcon';
import CodeIcon from '../components/icons/CodeIcon';
import PlayIcon from '../components/icons/PlayIcon';
import RotateCcwIcon from '../components/icons/RotateCcwIcon';
import TrophyIcon from '../components/icons/TrophyIcon';
import TimerIcon from '../components/icons/TimerIcon';
import StarIcon from '../components/icons/StarIcon';
import ClockIcon from '../components/icons/ClockIcon';
import AlertTriangleIcon from '../components/icons/AlertTriangleIcon';

const GRID_SIZE = 9; // 3x3 Grid
const GAME_DURATION = 30; // Seconds

const Game = () => {
  const [gameState, setGameState] = useState('idle'); // idle, playing, gameover
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);

  // Track multiple active items on grid
  const [activeItems, setActiveItems] = useState([]);

  // Visual Feedback States
  const [zappedIndices, setZappedIndices] = useState([]);

  // Refs
  const gameStateRef = useRef('idle');
  const gameTimerRef = useRef(null);
  const spawnTimerRef = useRef(null);
  const idCounterRef = useRef(0);
  const spawnEntitiesRef = useRef();

  // --- Game Logic ---

  const spawnEntities = useCallback(() => {
    if (gameStateRef.current !== 'playing') return;

    setZappedIndices([]);

    // 1. Determine how many BUGS to spawn
    let bugCount = 1;
    setTimeLeft(currentTime => {
      if (currentTime <= GAME_DURATION / 2) {
        const rand = Math.random();
        if (rand > 0.7) bugCount = 3;
        else if (rand > 0.4) bugCount = 2;
      }
      return currentTime;
    });

    const newItems = [];
    const usedIndices = new Set();

    const getUniqueIndex = () => {
      let index;
      let attempts = 0;
      do {
        index = Math.floor(Math.random() * GRID_SIZE);
        attempts++;
      } while (usedIndices.has(index) && attempts < 20);
      usedIndices.add(index);
      return index;
    };

    // 2. Add Bugs
    for (let i = 0; i < bugCount; i++) {
      newItems.push({
        index: getUniqueIndex(),
        type: 'bug',
        id: `bug-${++idCounterRef.current}`
      });
    }

    // 3. Chance to spawn Powerup
    if (Math.random() > 0.7) {
      const type = Math.random() > 0.5 ? 'time' : 'star';
      newItems.push({
        index: getUniqueIndex(),
        type,
        id: `${type}-${++idCounterRef.current}`
      });
    }

    setActiveItems(newItems);

    setScore(currentScore => {
      const speed = Math.max(800, 1500 - (currentScore * 20));
      clearTimeout(spawnTimerRef.current);
      if (spawnEntitiesRef.current) {
        spawnTimerRef.current = setTimeout(spawnEntitiesRef.current, speed);
      }
      return currentScore;
    });
  }, []);

  // Keep ref in sync with latest function
  useEffect(() => {
    spawnEntitiesRef.current = spawnEntities;
  }, [spawnEntities]);

  const startGame = useCallback(() => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setGameState('playing');
    gameStateRef.current = 'playing';
    setZappedIndices([]);
    idCounterRef.current = 0;
    spawnEntities();
  }, [spawnEntities]);

  const endGame = useCallback(() => {
    setGameState('gameover');
    gameStateRef.current = 'gameover';
    setActiveItems([]);
    setZappedIndices([]);
    clearTimeout(spawnTimerRef.current);
    clearInterval(gameTimerRef.current);
  }, []);

  const handleWhack = useCallback((index) => {
    if (gameStateRef.current !== 'playing') return;

    setActiveItems(currentItems => {
      const item = currentItems.find(i => i.index === index);
      if (item) {
        if (item.type === 'bug') {
          setScore(s => s + 1);
        } else if (item.type === 'star') {
          setScore(s => s + 5);
        } else if (item.type === 'time') {
          setTimeLeft(t => t + 1);
        }

        setZappedIndices(prev => [...prev, index]);

        const remaining = currentItems.filter(i => i.index !== index);

        clearTimeout(spawnTimerRef.current);

        if (spawnEntitiesRef.current) {
          if (remaining.length === 0) {
            setTimeout(spawnEntitiesRef.current, 200);
          } else {
            spawnTimerRef.current = setTimeout(spawnEntitiesRef.current, 1000);
          }
        }

        return remaining;
      }
      return currentItems;
    });
  }, []);

  // --- Effects ---

  useEffect(() => {
    if (gameState === 'playing') {
      gameTimerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(gameTimerRef.current);
  }, [gameState, endGame]);

  useEffect(() => {
    return () => {
      clearInterval(gameTimerRef.current);
      clearTimeout(spawnTimerRef.current);
      gameStateRef.current = 'idle';
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-20 pb-16 px-4 flex flex-col items-center animate-fade-in-up overflow-hidden">

      {/* Enhanced Galaxy/Star Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle neutral glow */}
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)] rounded-full -top-32 -left-32 blur-3xl" />

        {/* Stars - More stars with various animations */}
        <div className="absolute top-[7%] left-[16%] w-1 h-1 bg-neutral-200/60 rounded-full animate-twinkle" />
        <div className="absolute top-[13%] left-[46%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[10%] left-[74%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[19%] left-[86%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full" />
        <div className="absolute top-[27%] left-[11%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
        <div className="absolute top-[33%] left-[54%] w-1 h-1 bg-neutral-300/50 rounded-full animate-pulse-slow" />
        <div className="absolute top-[39%] left-[91%] w-0.5 h-0.5 bg-neutral-200/40 rounded-full" />
        <div className="absolute top-[44%] left-[26%] w-1 h-1 bg-neutral-300/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[51%] left-[70%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full animate-twinkle" />
        <div className="absolute top-[57%] left-[7%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[63%] left-[44%] w-1 h-1 bg-neutral-200/50 rounded-full" />
        <div className="absolute top-[69%] left-[84%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />
        <div className="absolute top-[74%] left-[24%] w-1 h-1 bg-neutral-200/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[81%] left-[64%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[87%] left-[37%] w-0.5 h-0.5 bg-neutral-200/45 rounded-full" />
        <div className="absolute top-[93%] left-[80%] w-1 h-1 bg-neutral-300/50 rounded-full animate-twinkle" />

        {/* Removed purple accent stars */}

        {/* Shooting stars - from random directions with randomized timing */}
        <div className="absolute top-[13%] right-[24%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '6.4s', animationDuration: '2.6s' }} />
        <div className="absolute top-[32%] left-[16%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '13.1s', animationDuration: '3.0s' }} />
        <div className="absolute bottom-[26%] left-[22%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '19.8s', animationDuration: '2.7s' }} />
        <div className="absolute bottom-[10%] right-[34%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '26.3s', animationDuration: '3.3s' }} />
      </div>

      {/* Header */}
      <div className="text-center mb-4 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-3 font-display">
          <BugIcon size={32} className="text-red-500" />
          <span>Bug <span className="text-red-500">Zapper</span></span>
        </h1>
        <p className="text-sm text-neutral-400">
          Clear the bugs! Grab <span className="text-green-500 font-bold">Clocks</span> & <span className="text-yellow-500 font-bold">Stars</span>
        </p>
      </div>

      {/* NEW MINIMAL STATS BAR */}
      <div className="flex items-end justify-between w-full max-w-md px-4 mb-8">
        
        {/* Score Display */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Score</span>
          <div className="flex items-center gap-2">
            <TrophyIcon size={28} className="text-yellow-500 drop-shadow-sm" />
            <span className="text-5xl font-black text-white tracking-tight">
              {score}
            </span>
          </div>
        </div>

        {/* Timer Display */}
        {gameState === 'playing' && (
           <div className="flex flex-col items-end">
             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Time</span>
             <div className={`flex items-center gap-2 transition-colors duration-300 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
               <TimerIcon size={28} />
               <span className="text-5xl font-black tabular-nums tracking-tight">
                 00:{timeLeft.toString().padStart(2, '0')}
               </span>
             </div>
           </div>
        )}
      </div>

      {/* Game Grid */}
      <div className="relative select-none w-full max-w-md">
        
        {/* Overlay */}
        {gameState !== 'playing' && (
          <div className="absolute inset-0 z-20 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-neutral-800">
            {gameState === 'gameover' ? (
              <>
                <TrophyIcon size={48} className="text-yellow-500 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold text-white mb-2">Deployment Successful!</h2>
                <p className="text-neutral-400 mb-6">Final Score: <span className="font-bold text-lg text-gradient-primary">{score}</span></p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-200 hover:bg-white text-black rounded-sm font-bold font-mono transition-all shadow-lg shadow-neutral-200/20"
                >
                  <RotateCcwIcon size={20} /> Play Again
                </button>
              </>
            ) : (
              <>
                <AlertTriangleIcon size={48} className="text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Start Sprint?</h2>
                <p className="text-neutral-400 mb-6">Squash bugs before the deadline.</p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-8 py-4 bg-neutral-200 hover:bg-white text-black rounded-sm font-bold text-lg font-mono transition-all shadow-lg shadow-neutral-200/20"
                >
                  <PlayIcon size={20} /> Start Game
                </button>
              </>
            )}
          </div>
        )}

        {/* The Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-inner">
          {Array.from({ length: GRID_SIZE }).map((_, idx) => {
            const item = activeItems.find(i => i.index === idx);
            const isZapped = zappedIndices.includes(idx);

            return (
              <button
                key={idx}
                onClick={() => handleWhack(idx)}
                disabled={gameState !== 'playing'}
                className={`
                  relative aspect-square rounded-xl flex items-center justify-center transition-all duration-100 overflow-hidden
                  ${gameState === 'playing' ? 'active:scale-95 cursor-crosshair' : 'cursor-default'}
                  bg-neutral-800 border-2 border-neutral-700
                  hover:border-blue-300 dark:hover:border-blue-700
                `}
              >
                {/* Background Icon (Code) */}
                <CodeIcon size={24} className="text-neutral-700 absolute opacity-50" />

                {/* Active Entity Layer */}
                <div className="relative z-10 transition-all duration-200">
                  {isZapped ? (
                    <ZapIcon size={40} className="text-yellow-500 scale-125 animate-ping" />
                  ) : item ? (
                    item.type === 'star' ? (
                      <div className="flex flex-col items-center animate-pulse">
                         <StarIcon size={36} className="text-yellow-500 fill-yellow-500 drop-shadow-lg" />
                         <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 border border-yellow-200 px-1 rounded mt-1">+5pts</span>
                      </div>
                    ) : item.type === 'time' ? (
                      <div className="flex flex-col items-center animate-bounce">
                        <ClockIcon size={36} className="text-green-500 drop-shadow-lg" />
                        <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1 rounded mt-1">+1s</span>
                      </div>
                    ) : (
                      <BugIcon size={36} className="text-red-500 drop-shadow-lg animate-bounce" />
                    )
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Game;