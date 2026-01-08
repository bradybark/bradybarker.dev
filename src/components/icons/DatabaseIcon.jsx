import React from 'react';
import { motion } from 'motion/react';

const DatabaseIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <motion.ellipse
        cx="12"
        cy="19"
        rx="9"
        ry="3"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
};

export default DatabaseIcon;
