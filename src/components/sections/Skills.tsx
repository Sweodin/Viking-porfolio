import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FaLaptopCode } from 'react-icons/fa'; // Example icon for Skills
import './Skills.css';

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    },
  },
};

// Sample skills data - you can expand this or move it to a JSON file
const skillsData: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 0 }, // Level can be omitted if not used for styling
  { name: 'TypeScript', level: 0 },
  { name: 'React & Next.js', level: 0 },
  { name: 'Node.js & Express', level: 0 },
  { name: 'Python & Django', level: 0 },
  { name: 'SQL & NoSQL Databases', level: 0 },
  { name: 'RESTful APIs & GraphQL', level: 0 },
  { name: 'Docker & Kubernetes', level: 0 },
  { name: 'Git & CI/CD', level: 0 },
  { name: 'Tailwind CSS & SASS', level: 0 },
  { name: 'Cloud Platforms (AWS/Azure/GCP)', level: 0 },
  { name: 'Agile Methodologies', level: 0 },
];

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills">
      <div className="skills-container">
        <div className="skills-title-container">
          <FaLaptopCode className="skills-icon" />
          <h2 className="skills-title">My Arsenal</h2>
        </div>
        <p className="skills-description">
          With a diverse toolkit and a commitment to mastery, I leverage cutting-edge technologies to forge robust and scalable solutions. Each skill is a testament to my dedication to excellence and continuous learning in the ever-evolving digital landscape.
        </p>
        <motion.div 
          className="skills-grid"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill) => (
            <motion.div key={skill.name} className="skill-tag" variants={itemVariants}>
              <p className="skill-name">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
