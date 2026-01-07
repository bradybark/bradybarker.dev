// src/pages/Games.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bug,
  Zap,
  Code,
  Play,
  RotateCcw,
  Trophy,
  Timer,
  Star,
  Clock,
  AlertTriangle
} from 'lucide-react';

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
    <div className="min-h-screen pt-20 pb-16 px-4 flex flex-col items-center animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center mb-4 space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <Bug size={32} className="text-red-500" />
          <span>Bug <span className="text-red-500">Zapper</span></span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Clear the bugs! Grab <span className="text-green-500 font-bold">Clocks</span> & <span className="text-yellow-500 font-bold">Stars</span>
        </p>
      </div>

      {/* NEW MINIMAL STATS BAR */}
      <div className="flex items-end justify-between w-full max-w-md px-4 mb-8">
        
        {/* Score Display */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Score</span>
          <div className="flex items-center gap-2">
            <Trophy size={28} className="text-yellow-500 drop-shadow-sm" />
            <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {score}
            </span>
          </div>
        </div>

        {/* Timer Display */}
        {gameState === 'playing' && (
           <div className="flex flex-col items-end">
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Time</span>
             <div className={`flex items-center gap-2 transition-colors duration-300 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-slate-900 dark:text-white'}`}>
               <Timer size={28} />
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
          <div className="absolute inset-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-slate-200 dark:border-slate-800">
            {gameState === 'gameover' ? (
              <>
                <Trophy size={48} className="text-yellow-500 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Deployment Successful!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Final Score: <span className="font-bold text-lg text-blue-600">{score}</span></p>
                <button 
                  onClick={startGame}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
                >
                  <RotateCcw size={20} /> Play Again
                </button>
              </>
            ) : (
              <>
                <AlertTriangle size={48} className="text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Start Sprint?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Squash bugs before the deadline.</p>
                <button 
                  onClick={startGame}
                  className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
                >
                  <Play size={20} /> Start Game
                </button>
              </>
            )}
          </div>
        )}

        {/* The Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
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
                  bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700
                  hover:border-blue-300 dark:hover:border-blue-700
                `}
              >
                {/* Background Icon (Code) */}
                <Code size={24} className="text-slate-200 dark:text-slate-700 absolute opacity-50" />

                {/* Active Entity Layer */}
                <div className="relative z-10 transition-all duration-200">
                  {isZapped ? (
                    <Zap size={40} className="text-yellow-500 scale-125 animate-ping" />
                  ) : item ? (
                    item.type === 'star' ? (
                      <div className="flex flex-col items-center animate-pulse">
                         <Star size={36} className="text-yellow-500 fill-yellow-500 drop-shadow-lg" />
                         <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 border border-yellow-200 px-1 rounded mt-1">+5pts</span>
                      </div>
                    ) : item.type === 'time' ? (
                      <div className="flex flex-col items-center animate-bounce">
                        <Clock size={36} className="text-green-500 drop-shadow-lg" />
                        <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1 rounded mt-1">+1s</span>
                      </div>
                    ) : (
                      <Bug size={36} className="text-red-500 drop-shadow-lg animate-bounce" />
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