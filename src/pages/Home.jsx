// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GalaxyBackground, RareShootingStars, Icons } from '@bradybark/ui';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up overflow-hidden">

      {/* Background System */}
      <div className="absolute inset-0 -z-10 bg-neutral-950">
        <GalaxyBackground />
        <RareShootingStars />
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
            <Icons.FileTextIcon size={20} />
            View Resume
            <Icons.ChevronRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/60 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-950/80 text-white rounded-sm font-medium text-lg font-mono transition-all duration-200 w-full sm:w-auto"
          >
            <Icons.FolderIcon size={20} />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
