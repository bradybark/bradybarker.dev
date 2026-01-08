import React from 'react';
import { motion } from 'motion/react';

const ChevronRightIcon = ({ size = 24, className = '' }) => {
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
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <path d="m9 18 6-6-6-6" />
    </motion.svg>
  );
};

export default ChevronRightIcon;
