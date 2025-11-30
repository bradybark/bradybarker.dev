// src/components/common/CustomBBIcon.jsx
import React from 'react';

const CustomBBIcon = ({ size = '24px', className = '' }) => (
  <span
    className={`inline-flex items-center justify-center font-extrabold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}
    style={{ width: size, height: size, fontSize: `calc(${size} / 2)`, lineHeight: 1, transform: 'translateY(-1px)' }}
  >
    bb
  </span>
);

export default CustomBBIcon;
