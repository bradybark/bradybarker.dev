import React from 'react';
import { motion } from 'motion/react';

const TimerIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      <motion.line
        x1="10"
        x2="14"
        y1="2"
        y2="2"
        initial={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.3 }}
        transition={{ type: "spring", stiffness: 400 }}
      />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </motion.svg>
  );
};

export default TimerIcon;
