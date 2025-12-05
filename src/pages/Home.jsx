// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FolderGit2, FileText } from 'lucide-react'; // Changed icon
import resumeData from '../data/resumeData';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
      
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Name - Massive & Bold */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
          Brady Barker
        </h1>
        
        {/* Minimal Tagline with Data-Driven Highlight */}
        <p className="text-2xl md:text-4xl font-light text-slate-500 dark:text-slate-400 tracking-wide">
          Building <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">Data-Driven</span> Solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-12 items-center">
          <Link
            to="/resume"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText size={20} />
              View Resume
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Updated to link internally to /projects */}
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-300 rounded-full font-medium text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            <FolderGit2 size={20} />
            View Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;