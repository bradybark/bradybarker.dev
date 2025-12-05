// src/components/layout/Navbar.jsx
import React from 'react';
import { Menu, X, Sun, Moon, FileText, FolderGit2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
}) => {
  const location = useLocation();
  // Only show sidebar toggle if we are on the root/resume page
  const showSidebarToggle = location.pathname === '/' || location.pathname === '/resume';

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
            {showSidebarToggle && (
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Menu"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}

            {/* Changed Link to /home so clicking the logo goes to the Landing Page */}
            <Link to="/home" className="flex items-center gap-2 cursor-pointer">
              <CustomBBIcon size={32} />
              <span
                className="text-lg md:text-xl font-bold text-slate-900 dark:text-white ml-2"
              >
                Brady Barker
              </span>
            </Link>
          </div>

          {/* Right: Navigation + dark mode toggle */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/resume"
              className={`hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/resume' || location.pathname === '/'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <FileText size={18} /> Resume
            </Link>
            
            <Link
              to="/projects"
              className={`hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/projects' 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <FolderGit2 size={18} /> Projects
            </Link>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>

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