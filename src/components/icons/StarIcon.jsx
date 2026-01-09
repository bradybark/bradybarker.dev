import React from 'react';
import { motion } from 'motion/react';

const StarIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
    >
      <motion.path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.8 }}
      />
    </motion.svg>
  );
};

export default StarIcon;
