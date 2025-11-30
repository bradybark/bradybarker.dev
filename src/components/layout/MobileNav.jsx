// src/components/common/MobileNav.jsx
import React from 'react';
import { MOBILE_NAV_ITEMS } from '../../data/resumeData';

const MobileNav = ({ scrollToSection }) => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 z-50 px-4 py-3 flex justify-between items-center overflow-x-auto no-scrollbar">
    {MOBILE_NAV_ITEMS.map(item => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="text-xs font-medium text-slate-600 dark:text-slate-400 flex flex-col items-center gap-1 min-w-[60px]"
      >
        <item.icon size={20} /> {item.label}
      </button>
    ))}
  </div>
);

export default MobileNav;
