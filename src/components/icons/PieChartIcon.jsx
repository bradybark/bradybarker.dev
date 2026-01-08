import React from 'react';
import { motion } from 'motion/react';

const PieChartIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ rotate: 360 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <path d="M21.21 15.89A10 10 0 1 1 8.11 2.79" />
      <line x1="22" y1="12" x2="12" y2="12" />
      <polyline points="12 12 12 2 20.59 20.59" />
    </motion.svg>
  );
};

export default PieChartIcon;
