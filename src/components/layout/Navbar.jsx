// src/components/layout/Navbar.jsx
import React from 'react';
import { Menu, X, Home, Sun, Moon } from 'lucide-react';

const CustomBBIcon = ({ size = 32 }) => (
  <span
    className="inline-flex items-center justify-center font-extrabold rounded-full text-white select-none"
    style={{
      width: size,
      height: size,
      fontSize: size * 0.48,
      background: 'linear-gradient(135deg, #4C1D95 0%, #2563EB 100%)',
    }}
  >
    bb
  </span>
);

const Navbar = ({
  darkMode,
  setDarkMode,
  isSidebarOpen,
  setIsSidebarOpen,
  scrollToSection,
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
      } backdrop-blur-md`}
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left: hamburger + brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <CustomBBIcon size={32} />
              <span
                className={`text-lg md:text-xl font-bold bg-clip-text text-transparent ml-2 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-300 via-purple-300 to-purple-400'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}
              >
                Brady Barker
              </span>
            </div>
          </div>

          {/* Right: Home + dark mode toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Home size={18} /> Home
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-amber-400" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
