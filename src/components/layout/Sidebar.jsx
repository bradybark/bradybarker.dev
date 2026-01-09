// src/components/layout/Sidebar.jsx
import React from 'react';
import TrophyIcon from '../icons/TrophyIcon';
import GemIcon from '../icons/GemIcon';
import CpuIcon from '../icons/CpuIcon';
import GraduationCapIcon from '../icons/GraduationCapIcon';
import UserIcon from '../icons/UserIcon';
import TrendingUpIcon from '../icons/TrendingUpIcon';

const SIDE_NAV_ITEMS = [
  { id: 'experience', label: 'Experience', icon: TrophyIcon },
  { id: 'projects',   label: 'Key Projects', icon: GemIcon },
  { id: 'skills',     label: 'Skills', icon: CpuIcon },
  { id: 'education',  label: 'Education', icon: GraduationCapIcon },
  { id: 'bio',        label: 'About Me', icon: UserIcon },
];

const Sidebar = ({
  darkMode,
  isSidebarOpen,
  activeSection,
  showImpact,
  scrollToSection,
}) => {
  // Build items, injecting "Engineering Impact" right after "Key Projects"
  const items = SIDE_NAV_ITEMS.flatMap((item) => {
    if (item.id === 'projects' && showImpact) {
      return [
        item,
        {
          id: 'impact',
          label: 'Engineering Impact',
          icon: TrendingUpIcon,
        },
      ];
    }
    return [item];
  });

  const SideNavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-sm transition-all duration-200 text-left font-mono text-sm border border-transparent
        ${
          activeSection === id
            ? 'bg-black/60 text-white border-neutral-600 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
            : 'text-neutral-400 hover:text-white hover:bg-black/40 hover:border-neutral-800/80'
        }
      `}
    >
      {Icon && <Icon size={16} className="shrink-0" />}
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 w-64 border-r border-neutral-800/80 bg-neutral-950 z-40
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-6 space-y-2 h-full overflow-y-auto">
        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-1 font-mono">
          Navigation
        </div>
        {items.map((item) => (
          <SideNavItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
