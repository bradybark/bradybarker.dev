// src/pages/Home.jsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import FolderIcon from '../components/icons/FolderIcon';
import FileTextIcon from '../components/icons/FileTextIcon';

// --- Helper Component for The Galaxy Effect ---
const GalaxyBackground = () => {
  // We create 3 layers of stars for a "parallax" depth effect
  // Layer 1: Smallest, furthest, slowest (Background)
  // Layer 2: Medium, mid-speed
  // Layer 3: Largest, closest, slightly faster (Foreground)
  
  const generateStars = (count, minSize, maxSize, opacityRange) => {
    return Array.from({ length: count }).map((_, i) => {
      // Use polar coordinates for better circular distribution (galaxy shape)
      // but mixing with Cartesian for randomness to fill corners
      const r = Math.random() * 50 + 50; // Distance from center (%)
      const theta = Math.random() * 2 * Math.PI; // Angle
      
      return {
        id: i,
        // Simple random distribution for a vast field
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      };
    });
  };

  const layer1 = useMemo(() => generateStars(200, 1, 2, [0.1, 0.4]), []);
  const layer2 = useMemo(() => generateStars(120, 2, 3, [0.3, 0.6]), []);
  const layer3 = useMemo(() => generateStars(50, 2, 4, [0.6, 0.9]), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Rotational Container 
         We make it 150vmax to ensure it covers the corners even when rotating.
         The negative margins center it.
      */}
      
      {/* Layer 1 - Slow Rotation (Background) */}
      <div className="absolute top-1/2 left-1/2 w-[150vmax] h-[150vmax] -translate-x-1/2 -translate-y-1/2 animate-[spin_240s_linear_infinite] opacity-60">
        {layer1.map((star) => (
          <div
            key={`l1-${star.id}`}
            className="absolute bg-neutral-300 rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Layer 2 - Medium Rotation */}
      <div className="absolute top-1/2 left-1/2 w-[150vmax] h-[150vmax] -translate-x-1/2 -translate-y-1/2 animate-[spin_180s_linear_infinite] opacity-80">
        {layer2.map((star) => (
          <div
            key={`l2-${star.id}`}
            className="absolute bg-white rounded-full animate-twinkle-slow"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Layer 3 - Subtle Foreground Floating (No spin, just slow pulse/float for depth) */}
      <div className="absolute inset-0">
         {layer3.map((star) => (
          <div
            key={`l3-${star.id}`}
            className="absolute bg-white rounded-full animate-pulse-slow"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.4)` // White glow
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up overflow-hidden">

      {/* Background System */}
      <div className="absolute inset-0 -z-10 bg-neutral-950">
        {/* Deep Space Gradient Mesh - Subtle purple/blue undertones for the void, but NO purple stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950" />
        
        {/* The Galaxy Effect */}
        <GalaxyBackground />

        {/* Central Glow (The Core) - Neutralized with slow pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />

        {/* Shooting Stars - Retained for dynamic feel */}
        <div className="absolute top-[8%] right-[15%] w-0.5 h-0.5 bg-white rounded-full animate-shooting-star" style={{ animationDelay: '3.2s', animationDuration: '2.8s' }} />
        <div className="absolute top-[15%] left-[12%] w-0.5 h-0.5 bg-white rounded-full animate-shooting-star-tl" style={{ animationDelay: '7.5s', animationDuration: '3.1s' }} />
        <div className="absolute bottom-[25%] left-[20%] w-0.5 h-0.5 bg-white rounded-full animate-shooting-star-bl" style={{ animationDelay: '12.8s', animationDuration: '2.4s' }} />
      </div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Name */}
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-2xl font-display">
            Brady Barker
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-4xl font-light text-neutral-400 tracking-wide">
            Building <span className="text-gradient-primary font-semibold">Data-Driven</span> Solutions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-12 items-center">
          <Link
            to="/resume"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-200 hover:bg-white text-black rounded-sm font-bold text-lg font-mono transition-all duration-200 w-full sm:w-auto shadow-lg shadow-neutral-200/20"
          >
            <FileTextIcon size={20} />
            View Resume
            <ChevronRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/60 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-950/80 text-white rounded-sm font-medium text-lg font-mono transition-all duration-200 w-full sm:w-auto"
          >
            <FolderIcon size={20} />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;