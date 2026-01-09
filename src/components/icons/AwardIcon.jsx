import React from 'react';
import { motion } from 'motion/react';

const AwardIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.1, rotate: 12 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.circle
        cx="12"
        cy="8"
        r="7"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      />
      <path d="M8.21 13.89 L7 23l5-3 5 3-1.21-9.11" />
      <motion.path
        d="M5 9h14"
        initial={{ scale: 1 }}
        whileHover={{ scaleX: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
};

export default AwardIcon;
