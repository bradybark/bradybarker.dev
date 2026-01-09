import React from 'react';
import { motion } from 'motion/react';

const CpuIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <motion.rect
        width="6"
        height="6"
        x="9"
        y="9"
        rx="1"
        initial={{ scale: 1 }}
        whileHover={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.4 }}
      />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </motion.svg>
  );
};

export default CpuIcon;
