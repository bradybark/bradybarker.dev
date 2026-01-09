import React from 'react';
import { motion } from 'motion/react';

const ZapIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
      transition={{ type: "spring", stiffness: 500, damping: 12 }}
    >
      <motion.path
        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
};

export default ZapIcon;
