import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { contentfulClient } from '@/lib/contentfulClient';
import type { Project, ProjectEntrySkeleton } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card'; // Use the new Card component
import './Projects.css';

// Animation Variants
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

// --- Main Projects Component ---
const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await contentfulClient.withoutUnresolvableLinks.getEntries<ProjectEntrySkeleton>({
          content_type: 'project',
          order: ['-sys.createdAt'],
        });
        
        const simplifiedProjects: Project[] = response.items.map(item => ({
          ...item.fields,
          id: item.sys.id,
        }));

        setProjects(simplifiedProjects);

      } catch (err) {
        console.error('Failed to load projects:', err);
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <AnimatedSection id="projects"><p>Loading projects...</p></AnimatedSection>;
  }

  if (error) {
    return <AnimatedSection id="projects"><p>{error}</p></AnimatedSection>;
  }

  return (
    <AnimatedSection id="projects">
      <h2 className="projects-title">PROJECTS</h2>
      <motion.div
        className="projects-grid"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;

