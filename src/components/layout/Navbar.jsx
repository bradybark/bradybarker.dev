// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar as BarkNavbar, Icons } from '@bradybark/ui';
import { useAchievements } from '../../hooks/useAchievements';

// Define CustomBBIcon locally since we are passing it in customBrand
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

const Navbar = ({ isSidebarOpen = false, setIsSidebarOpen = () => { } }) => {
    const location = useLocation();
    const navigate = useNavigate();
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

    // Hide navbar completely on home page
    if (location.pathname === '/') return null;

    // Define navigation items based on current page/logic
    const navItems = [];

    // Add 'Game' tab if on /game route
    if (location.pathname === '/game') {
        navItems.push({
            id: 'game',
            label: 'Game',
            to: '/game',
            icon: Icons.BugIcon,
            active: true // Always active if visible here
        });
    }

    // Standard items
    navItems.push({
        id: 'resume',
        label: 'Resume',
        to: '/resume',
        icon: Icons.FileTextIcon,
        active: location.pathname === '/resume',
        onClick: () => {
            unlockAchievement('visit-resume');
            navigate('/resume');
        }
    });

    navItems.push({
        id: 'projects',
        label: 'Projects',
        to: '/projects',
        icon: Icons.FolderIcon,
        active: location.pathname === '/projects',
        onClick: () => {
            unlockAchievement('click-projects');
            navigate('/projects');
        }
    });

    // Animation class for Resume page
    const animationClass = location.pathname === '/resume' ? 'animate-slide-down' : '';

    return (
        <BarkNavbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            showToggle={location.pathname === '/resume'} // Only show toggle on Resume page
            titlePrefix="Brady"
            titleSuffix="Barker"
            titleSuffixClass="text-white"
            navItems={navItems}
            navItemVariant="underline"
            LinkComponent={Link}

            // PASS FULL CUSTOM BRAND for Easter Egg Logic + Layout
            customBrand={
                <div className="flex items-center gap-3">
                    {/* Logo as separate clickable DIV for Easter Egg */}
                    <div
                        onClick={handleLogoClick}
                        className="cursor-pointer"
                        title="...?"
                    >
                        <CustomBBIcon size={32} />
                    </div>

                    {/* Text as separate Link */}
                    <Link to="/" className="text-lg md:text-xl font-bold text-white font-display">
                        Brady Barker
                    </Link>
                </div>
            }

            className={`border-b border-neutral-800 ${animationClass}`}
            containerClass="max-w-full px-4 sm:px-6 lg:px-8" // Full width container
        />
    );
};



export default Navbar;
