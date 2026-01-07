// src/components/common/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ icon, title, colorClass }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <IconComponent size={24} />
      </div>
      <h2 className="text-3xl font-bold text-center">{title}</h2>
    </div>
  );
};

export default SectionHeader;
