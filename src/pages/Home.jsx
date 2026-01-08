// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import FolderIcon from '../components/icons/FolderIcon';
import FileTextIcon from '../components/icons/FileTextIcon';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up overflow-hidden">

      {/* Enhanced Galaxy/Star Background */}
      <div className="absolute inset-0 -z-10">
        {/* Centered gradient glow on name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[150px]" />

        {/* Stars - More stars with various animations */}
        <div className="absolute top-[5%] left-[20%] w-1 h-1 bg-neutral-200/60 rounded-full animate-twinkle" />
        <div className="absolute top-[12%] left-[45%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[8%] left-[75%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[18%] left-[90%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full" />

        <div className="absolute top-[25%] left-[15%] w-1 h-1 bg-neutral-200/55 rounded-full animate-pulse-slow" />
        <div className="absolute top-[32%] left-[35%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-twinkle" />
        <div className="absolute top-[28%] left-[65%] w-1 h-1 bg-neutral-200/45 rounded-full" />
        <div className="absolute top-[35%] left-[85%] w-0.5 h-0.5 bg-neutral-300/50 rounded-full animate-twinkle-slow" />

        <div className="absolute top-[45%] left-[10%] w-1 h-1 bg-neutral-200/60 rounded-full animate-twinkle" />
        <div className="absolute top-[52%] left-[40%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full" />
        <div className="absolute top-[48%] left-[70%] w-1 h-1 bg-neutral-200/50 rounded-full animate-pulse-slow" />
        <div className="absolute top-[55%] left-[92%] w-0.5 h-0.5 bg-neutral-300/45 rounded-full animate-twinkle" />

        <div className="absolute top-[65%] left-[25%] w-1 h-1 bg-neutral-200/55 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[72%] left-[50%] w-0.5 h-0.5 bg-neutral-300/35 rounded-full animate-pulse-slow" />
        <div className="absolute top-[68%] left-[80%] w-1 h-1 bg-neutral-200/45 rounded-full" />
        <div className="absolute top-[75%] left-[12%] w-0.5 h-0.5 bg-neutral-300/50 rounded-full animate-twinkle" />

        <div className="absolute top-[85%] left-[35%] w-1 h-1 bg-neutral-200/60 rounded-full animate-pulse-slow" />
        <div className="absolute top-[92%] left-[60%] w-0.5 h-0.5 bg-neutral-300/40 rounded-full animate-twinkle-slow" />
        <div className="absolute top-[88%] left-[88%] w-1 h-1 bg-neutral-200/50 rounded-full animate-twinkle" />

        {/* Purple accent stars */}
        <div className="absolute top-[15%] left-[55%] w-1 h-1 bg-purple-400/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-[60%] left-[45%] w-0.5 h-0.5 bg-purple-300/25 rounded-full animate-twinkle" />

        {/* Shooting stars - from random directions with randomized timing */}
        <div className="absolute top-[8%] right-[15%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '3.2s', animationDuration: '2.8s' }} />
        <div className="absolute top-[15%] left-[12%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-tl" style={{ animationDelay: '7.5s', animationDuration: '3.1s' }} />
        <div className="absolute bottom-[25%] left-[20%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-bl" style={{ animationDelay: '12.8s', animationDuration: '2.4s' }} />
        <div className="absolute bottom-[18%] right-[25%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star-br" style={{ animationDelay: '18.1s', animationDuration: '3.3s' }} />
        <div className="absolute top-[42%] right-[8%] w-0.5 h-0.5 bg-neutral-100 rounded-full animate-shooting-star" style={{ animationDelay: '23.7s', animationDuration: '2.6s' }} />
      </div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">

        {/* Name - Clean & Bold */}
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white">
            Brady Barker
          </h1>

          {/* Minimal Tagline */}
          <p className="text-2xl md:text-4xl font-light text-neutral-400 tracking-wide">
            Building <span className="text-purple-400 font-semibold">Data-Driven</span> Solutions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-12 items-center">
          <Link
            to="/resume"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-500 hover:bg-purple-400 text-white rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto shadow-lg shadow-purple-500/20"
          >
            <FileTextIcon size={20} />
            View Resume
            <ChevronRightIcon className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 border border-neutral-800 hover:border-purple-500/30 hover:bg-neutral-800 text-white rounded-lg font-medium text-lg transition-all duration-200 w-full sm:w-auto"
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