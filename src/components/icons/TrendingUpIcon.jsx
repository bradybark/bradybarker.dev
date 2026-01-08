import React from 'react';
import { motion } from 'motion/react';

const TrendingUpIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.polyline
        points="22 7 13.5 15.5 8.5 10.5 2 17"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [0, 1] }}
        transition={{ duration: 0.8 }}
      />
      <polyline points="16 7 22 7 22 13" />
    </motion.svg>
  );
};

export default TrendingUpIcon;
