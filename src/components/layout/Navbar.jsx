// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, FolderGit2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAchievements } from '../../hooks/useAchievements';
import { useTheme } from '../../hooks/useTheme';

const CustomBBIcon = ({ size = 32 }) => (
  <span
    className="inline-flex items-center justify-center font-extrabold rounded-full text-white select-none transition-transform active:scale-95"
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

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use Global Contexts
  const { unlockAchievement } = useAchievements();
  const { isDarkMode, toggleTheme } = useTheme();

  // EASTER EGG STATE
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setClickCount(0), 1000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      unlockAchievement('found-game');
      navigate('/game'); // <--- Redirect enabled
      setClickCount(0);
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
    unlockAchievement('toggle-theme'); // Unlocks "Flashbang!"
  };

  // Only show hamburger on Resume or Home
  const showSidebarToggle = location.pathname === '/' || location.pathname === '/resume';

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b backdrop-blur-md
      ${isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}
    `}>
      <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Left: Hamburger + Brand */}
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

            {/* BRAND LOGO AREA - EASTER EGG */}
            <div className="flex items-center gap-2">
              <div 
                onClick={handleLogoClick} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
                title="...?"
              >
                <CustomBBIcon size={32} />
              </div>

              <Link to="/" className="text-lg md:text-xl font-bold text-slate-900 dark:text-white ml-2">
                Brady Barker
              </Link>
            </div>
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/resume"
              onClick={() => unlockAchievement('visit-resume')}
              className={`hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/resume' 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <FileText size={18} /> Resume
            </Link>
            
            <Link
              to="/projects"
              onClick={() => unlockAchievement('click-projects')}
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
              onClick={handleThemeToggle}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-blue-400" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;