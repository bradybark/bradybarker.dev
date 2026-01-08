import React from 'react';
import { motion } from 'motion/react';

const WorkflowIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <path d="M10 6h4" />
      <path d="M10 17h4" />
      <path d="M6 10v4" />
      <path d="M17 10v4" />
    </motion.svg>
  );
};

export default WorkflowIcon;
