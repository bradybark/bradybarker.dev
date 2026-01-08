import React from 'react';
import { motion } from 'motion/react';

const CheckCircleIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      <polyline points="20 6 9 17 4 12" />
      <circle cx="12" cy="12" r="10" />
    </motion.svg>
  );
};

export default CheckCircleIcon;
