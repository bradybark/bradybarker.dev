// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-32 pb-12 bg-transparent text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-4 items-center">
        
        <p className="text-slate-400 dark:text-slate-600 text-xs font-medium opacity-50">
          © {new Date().getFullYear()} Brady Barker. All rights reserved.
        </p>

        {/* Static Tiny Link */}
        <Link 
          to="/achievements" 
          className="text-[10px] uppercase tracking-[0.2em] text-slate-300 hover:text-slate-500 dark:text-slate-700 dark:hover:text-slate-500 transition-colors"
        >
          View Achievements
        </Link>

      </div>
    </footer>
  );
};

export default Footer;