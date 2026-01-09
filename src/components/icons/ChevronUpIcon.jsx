import React from 'react';
import { motion } from 'motion/react';

const ChevronUpIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.polyline
        points="18 15 12 9 6 15"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
};

export default ChevronUpIcon;
