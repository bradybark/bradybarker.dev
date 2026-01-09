import React from 'react';
import { motion } from 'motion/react';

const UserIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.path
        d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.6 }}
      />
      <circle cx="12" cy="7" r="4" />
    </motion.svg>
  );
};

export default UserIcon;
