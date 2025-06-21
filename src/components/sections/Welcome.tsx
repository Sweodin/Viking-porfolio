import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import MagneticButton from '@/components/ui/MagneticButton';
import './Welcome.css';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};


const Welcome: React.FC = () => {
  return (
    <AnimatedSection id="welcome">
      <div className="welcome-container pt-28 sm:pt-32">
        <motion.h1 
          className="welcome-title"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {'PETER'.split('').map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>{char}</motion.span>
          ))}
          <br />
          {'GUSTAFSSON'.split('').map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>{char}</motion.span>
          ))}
        </motion.h1>
        <p className="welcome-subtitle">
          FULL-STACK DEVELOPER
        </p>
        <MagneticButton href="#projects" className="welcome-button">
          Explore My Work
        </MagneticButton>
      </div>
    </AnimatedSection>
  );
};

export default Welcome;
