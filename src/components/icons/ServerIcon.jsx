import React from 'react';
import { motion } from 'motion/react';

const ServerIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <motion.line
        x1="6"
        y1="6"
        x2="6.01"
        y2="6"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="6"
        y1="18"
        x2="6.01"
        y2="18"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.3 }}
      />
      <line x1="10" y1="6" x2="14" y2="6" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </motion.svg>
  );
};

export default ServerIcon;
