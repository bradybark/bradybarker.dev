import React from 'react';
import { motion } from 'motion/react';

const ArchiveIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      <polyline points="21 8 21 21 3 21 3 8" />
      <line x1="1" y1="3" x2="23" y2="3" />
      <path d="M10 12L14 16" />
      <path d="M14 12L10 16" />
    </motion.svg>
  );
};

export default ArchiveIcon;
