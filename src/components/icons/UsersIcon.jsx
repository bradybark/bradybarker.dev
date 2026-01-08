import React from 'react';
import { motion } from 'motion/react';

const UsersIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <motion.circle
        cx="9"
        cy="7"
        r="4"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <motion.path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
};

export default UsersIcon;
