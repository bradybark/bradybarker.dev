import React from 'react';
import { motion } from 'motion/react';

const ClockIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      <circle cx="12" cy="12" r="10" />
      <motion.polyline
        points="12 6 12 12 16 14"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
};

export default ClockIcon;
