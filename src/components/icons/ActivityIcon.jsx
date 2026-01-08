import React from 'react';
import { motion } from 'motion/react';

const ActivityIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scaleY: 1.2 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </motion.svg>
  );
};

export default ActivityIcon;
