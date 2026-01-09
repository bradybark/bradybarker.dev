import React from 'react';
import { motion } from 'motion/react';

const MenuIcon = ({ size = 24, className = '' }) => {
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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
      />
      <motion.line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.svg>
  );
};

export default MenuIcon;
