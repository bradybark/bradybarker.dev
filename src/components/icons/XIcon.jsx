import React from 'react';
import { motion } from 'motion/react';

const XIcon = ({ size = 24, className = '' }) => {
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
      whileHover={{ rotate: 90, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </motion.svg>
  );
};

export default XIcon;
