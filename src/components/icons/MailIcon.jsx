import React from 'react';
import { motion } from 'motion/react';

const MailIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <motion.path
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
};

export default MailIcon;
