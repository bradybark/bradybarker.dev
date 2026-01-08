// src/components/common/MobileNav.jsx
import React from 'react';
import { MOBILE_NAV_ITEMS } from '../../data/resumeData';

const MobileNav = ({ scrollToSection }) => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-neutral-800/80 bg-neutral-950 backdrop-blur-md z-50 px-4 py-3 flex justify-between items-center overflow-x-auto no-scrollbar">
    {MOBILE_NAV_ITEMS.map(item => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="text-xs font-medium font-mono text-neutral-400 hover:text-white flex flex-col items-center gap-1 min-w-[60px] transition-colors"
      >
        <item.icon size={18} /> {item.label}
      </button>
    ))}
  </div>
);

export default MobileNav;
