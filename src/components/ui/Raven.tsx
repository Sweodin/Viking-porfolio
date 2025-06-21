import React from 'react';
import { motion } from 'framer-motion';

const Raven: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.path
        d="M3.5 6C3.5 6 7 3 12 3C17 3 20.5 6 20.5 6C20.5 6 18 10 12 10C6 10 3.5 6 3.5 6Z M12 10V21 M9 21H15 M9 18H15"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { type: 'spring', duration: 2.5, bounce: 0 },
              opacity: { duration: 0.01 }
            }
          }
        }}
      />
    </motion.svg>
  );
};

export default Raven;
