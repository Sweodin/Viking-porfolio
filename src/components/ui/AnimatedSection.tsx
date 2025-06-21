import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  id: string;
}

const AnimatedSection: React.FC<Props> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
