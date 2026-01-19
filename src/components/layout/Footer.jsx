// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-32 pb-12 bg-transparent text-center border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-4 items-center pt-12">

        <p className="text-neutral-600 text-xs font-medium">
          © {new Date().getFullYear()} Brady Barker. All rights reserved.
        </p>

        {/* Static Tiny Link */}
        <Link
          to="/achievements"
          className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 hover:text-neutral-400 transition-colors"
        >
          View Achievements
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
