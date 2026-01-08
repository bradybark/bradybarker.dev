import React from 'react';
import { motion } from 'motion/react';

const CodeIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.polyline
        points="16 18 22 12 16 6"
        initial={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      />
      <motion.polyline
        points="8 6 2 12 8 18"
        initial={{ x: 0 }}
        whileHover={{ x: -3 }}
        transition={{ type: "spring", stiffness: 400 }}
      />
    </motion.svg>
  );
};

export default CodeIcon;
