import React from 'react';
import { motion } from 'motion/react';

const TerminalIcon = ({ size = 24, className = '' }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.polyline
        points="4 17 10 11 4 5"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.6 }}
      />
      <motion.line
        x1="12"
        x2="20"
        y1="19"
        y2="19"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [0, 1] }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </motion.svg>
  );
};

export default TerminalIcon;
