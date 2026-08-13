import React from 'react';
import { motion } from 'framer-motion';

export default function HoverEffect({
  children,
  scale = 1.02,
  y = -5,
  className = ''
}) {
  return (
    <motion.div
      whileHover={{ scale, y }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
