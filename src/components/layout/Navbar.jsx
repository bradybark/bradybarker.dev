// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAchievements } from '../../hooks/useAchievements';
import MenuIcon from '../icons/MenuIcon';
import XIcon from '../icons/XIcon';
import FileTextIcon from '../icons/FileTextIcon';
import FolderIcon from '../icons/FolderIcon';

const CustomBBIcon = ({ size = 32 }) => (
  <span
    className="inline-flex items-center justify-center font-bold rounded-sm text-white bg-black border border-neutral-800/80 select-none transition-all active:scale-95 hover:border-neutral-600 font-mono shadow-[0_0_10px_rgba(0,0,0,0.5)]"
    style={{
      width: size,
      height: size,
      fontSize: size * 0.42,
      letterSpacing: '-0.05em',
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
      navigate('/game');
      setClickCount(0);
    }
  };

  // Only show hamburger on Resume or Home
  const showSidebarToggle = location.pathname === '/' || location.pathname === '/resume';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Left: Hamburger + Brand */}
          <div className="flex items-center gap-4">
            {showSidebarToggle && (
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 -ml-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                aria-label="Toggle Menu"
              >
                {isSidebarOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            )}

            {/* BRAND LOGO AREA - EASTER EGG */}
            <div className="flex items-center gap-3">
              <div
                onClick={handleLogoClick}
                className="cursor-pointer"
                title="...?"
              >
                <CustomBBIcon size={32} />
              </div>

              <Link to="/" className="text-lg md:text-xl font-bold text-white font-display">
                Brady Barker
              </Link>
            </div>
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center gap-2">
            <Link
              to="/resume"
              onClick={() => unlockAchievement('visit-resume')}
              className={`nav-link-underline hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/resume'
                  ? 'text-white active'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FileTextIcon size={18} /> Resume
            </Link>

            <Link
              to="/projects"
              onClick={() => unlockAchievement('click-projects')}
              className={`nav-link-underline hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/projects'
                  ? 'text-white active'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FolderIcon size={18} /> Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;