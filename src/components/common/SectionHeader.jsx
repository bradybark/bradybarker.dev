// src/components/common/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ icon: Icon, title, colorClass }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    <div className={`p-3 rounded-xl ${colorClass}`}>
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-center">{title}</h2>
  </div>
);

export default SectionHeader;
