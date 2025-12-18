// src/pages/Game.jsx
import React, { useState, useEffect, useRef } from 'react';
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
  // Array of objects: { index: number, type: 'bug' | 'star' | 'time', id: number }
  const [activeItems, setActiveItems] = useState([]); 
  
  // Visual Feedback States
  const [zappedIndices, setZappedIndices] = useState([]); 
  
  // Refs
  const gameStateRef = useRef('idle'); 
  const gameTimerRef = useRef(null);
  const spawnTimerRef = useRef(null);

  // --- Game Logic ---

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setGameState('playing');
    gameStateRef.current = 'playing';
    setZappedIndices([]);
    spawnEntities();
  };

  const spawnEntities = () => {
    // CRITICAL: Stop spawning if game is over
    if (gameStateRef.current !== 'playing') return;

    // Clear previous visual feedback
    setZappedIndices([]);
    
    // 1. Determine how many BUGS to spawn
    let bugCount = 1;
    if (timeLeft <= GAME_DURATION / 2) {
      const rand = Math.random();
      if (rand > 0.7) bugCount = 3;
      else if (rand > 0.4) bugCount = 2;
    }

    const newItems = [];
    const usedIndices = new Set();

    // Helper to get a unique random index
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

    // 2. Add Bugs (Always spawn bugs)
    for (let i = 0; i < bugCount; i++) {
      newItems.push({ 
        index: getUniqueIndex(), 
        type: 'bug', 
        id: Math.random() 
      });
    }

    // 3. Chance to spawn an EXTRA Powerup (30% chance)
    // This runs alongside bugs, so it doesn't replace them.
    if (Math.random() > 0.7) {
      const type = Math.random() > 0.5 ? 'time' : 'star';
      // Only add if we have space (we definitely do in a 3x3 grid with max 3 bugs)
      newItems.push({
        index: getUniqueIndex(),
        type,
        id: Math.random()
      });
    }

    setActiveItems(newItems);

    // Speed Calculation
    // Caps at 800ms refresh rate so it doesn't get impossible
    const speed = Math.max(800, 1500 - (score * 20));

    clearTimeout(spawnTimerRef.current);
    spawnTimerRef.current = setTimeout(spawnEntities, speed);
  };

  const handleWhack = (index) => {
    if (gameStateRef.current !== 'playing') return;

    const item = activeItems.find(i => i.index === index);
    if (item) {
      // Logic based on Type
      if (item.type === 'bug') {
        setScore(s => s + 1);
      } else if (item.type === 'star') {
        setScore(s => s + 5);
      } else if (item.type === 'time') {
        setTimeLeft(t => t + 1); // Updated: Only adds +1 second
      }

      // Visual Feedback Logic
      setZappedIndices(prev => [...prev, index]);

      // Remove clicked item immediately
      const remaining = activeItems.filter(i => i.index !== index);
      setActiveItems(remaining);

      // --- DELAY LOGIC ---
      // Reset the spawn timer on every click.
      clearTimeout(spawnTimerRef.current);

      if (remaining.length === 0) {
        // If board is clear, respawn quickly
        setTimeout(spawnEntities, 200); 
      } else {
        // If items remain, add a delay before they disappear/move
        spawnTimerRef.current = setTimeout(spawnEntities, 1000); 
      }
    }
  };

  const endGame = () => {
    setGameState('gameover');
    gameStateRef.current = 'gameover';
    setActiveItems([]);
    setZappedIndices([]);
    clearTimeout(spawnTimerRef.current);
    clearInterval(gameTimerRef.current);
  };

  // --- Effects ---

  // Countdown Timer
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
  }, [gameState]);

  // Cleanup
  useEffect(() => {
    return () => {
      clearInterval(gameTimerRef.current);
      clearTimeout(spawnTimerRef.current);
      gameStateRef.current = 'idle';
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 mb-4 animate-float">
          <Bug size={40} className="text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Bug <span className="text-red-500">Zapper</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Clear the bugs! Grab <span className="text-green-500 font-bold">Clocks</span> for time and <span className="text-yellow-500 font-bold">Stars</span> for points!
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-between w-full max-w-md mb-6 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-3 z-10">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
            <Trophy size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold">Score</p>
            <p className="text-xl font-bold text-slate-900 dark:text-white">{score}</p>
          </div>
        </div>

        {gameState === 'playing' && (
           <div className="flex items-center gap-3 z-10">
             <div className={`p-2 rounded-lg ${timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
               <Timer size={20} />
             </div>
             <div className="text-right">
               <p className="text-xs text-slate-500 uppercase font-bold">Time</p>
               <p className={`text-xl font-bold tabular-nums ${timeLeft <= 10 ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>
                 00:{timeLeft.toString().padStart(2, '0')}
               </p>
             </div>
           </div>
        )}
      </div>

      {/* Game Grid */}
      <div className="relative select-none">
        
        {/* Overlay */}
        {gameState !== 'playing' && (
          <div className="absolute inset-0 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-slate-200 dark:border-slate-800">
            {gameState === 'gameover' ? (
              <>
                <Trophy size={48} className="text-yellow-500 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Deploy Complete!</h2>
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
        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner max-w-md mx-auto">
          {Array.from({ length: GRID_SIZE }).map((_, idx) => {
            const item = activeItems.find(i => i.index === idx);
            const isZapped = zappedIndices.includes(idx);

            return (
              <button
                key={idx}
                onClick={() => handleWhack(idx)}
                disabled={gameState !== 'playing'}
                className={`
                  relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center transition-all duration-100 overflow-hidden
                  ${gameState === 'playing' ? 'active:scale-95' : ''}
                  bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700
                  hover:border-blue-300 dark:hover:border-blue-700
                `}
              >
                {/* Background Icon (Code) */}
                <Code size={24} className="text-slate-200 dark:text-slate-700 absolute opacity-50" />

                {/* Active Entity Layer */}
                <div className="relative z-10 transition-all duration-200">
                  {isZapped ? (
                    // --- ZAP ANIMATION ---
                    <Zap size={40} className="text-yellow-500 scale-125 animate-ping" />
                  ) : item ? (
                    // --- ACTIVE ITEMS ---
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