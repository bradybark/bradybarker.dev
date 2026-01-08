import React from 'react';
import { motion } from 'motion/react';

const CloudIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      animate={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15, repeat: Infinity, repeatType: "reverse" }}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </motion.svg>
  );
};

export default CloudIcon;
