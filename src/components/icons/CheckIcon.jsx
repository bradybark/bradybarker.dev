import React from 'react';
import { motion } from 'motion/react';

const CheckIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.path
        d="M20 6 9 17l-5-5"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [0, 1] }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  );
};

export default CheckIcon;
