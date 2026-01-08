import React from 'react';
import { motion } from 'motion/react';

const BarChart3Icon = ({ size = 24, className = '', strokeWidth = 2 }) => {
  const barVariants = {
    initial: { scaleY: 0.6 },
    hover: { scaleY: 1 }
  };

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
      whileHover="hover"
      initial="initial"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <motion.line
        x1="18"
        x2="18"
        y1="20"
        y2="4"
        variants={barVariants}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      />
      <motion.line
        x1="6"
        x2="6"
        y1="20"
        y2="16"
        variants={barVariants}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      />
    </motion.svg>
  );
};

export default BarChart3Icon;
