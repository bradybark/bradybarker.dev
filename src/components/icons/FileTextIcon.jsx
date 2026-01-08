import React from 'react';
import { motion } from 'motion/react';

const FileTextIcon = ({ size = 24, className = '' }) => {
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
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <motion.path
        d="M10 9H8"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0.8, 1] }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M16 13H8"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0.8, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.path
        d="M16 17H8"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0.8, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.svg>
  );
};

export default FileTextIcon;
