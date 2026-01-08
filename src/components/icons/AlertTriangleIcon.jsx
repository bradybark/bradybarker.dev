import React from 'react';
import { motion } from 'motion/react';

const AlertTriangleIcon = ({ size = 24, className = '', strokeWidth = 2 }) => {
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
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <motion.path
        d="M12 9v4"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0, 1] }}
        transition={{ duration: 0.6 }}
      />
      <path d="M12 17h.01" />
    </motion.svg>
  );
};

export default AlertTriangleIcon;
