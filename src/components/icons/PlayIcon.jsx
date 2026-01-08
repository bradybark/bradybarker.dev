import React from 'react';
import { motion } from 'motion/react';

const PlayIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.polygon
        points="6 3 20 12 6 21 6 3"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400 }}
      />
    </motion.svg>
  );
};

export default PlayIcon;
