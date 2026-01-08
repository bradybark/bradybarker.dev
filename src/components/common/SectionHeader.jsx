// src/components/common/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, showBrackets = false }) => {
  return (
    <div className={`mb-12 relative ${showBrackets ? 'corner-brackets' : ''}`}>
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">
          {title}
        </h2>
      </div>
      <div className="h-px bg-gradient-to-r from-neutral-400/40 via-neutral-400/20 to-transparent" />
    </div>
  );
};

export default SectionHeader;
