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
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left
        ${
          activeSection === id
            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-l-4 border-transparent'
        }
      `}
    >
      {Icon && <Icon size={18} />}
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 w-64 border-r z-40
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}
      `}
    >
      <div className="p-6 space-y-2 h-full overflow-y-auto">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-4">
          Sections
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
