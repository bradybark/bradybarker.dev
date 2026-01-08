import React from 'react';
import { motion } from 'motion/react';

const RefreshCwIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ rotate: 180 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2-8.83" />
    </motion.svg>
  );
};

export default RefreshCwIcon;
