import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { contentfulClient } from '@/lib/contentfulClient';

import type { Project, ProjectEntrySkeleton } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
          id: item.sys.id,
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.image,
          liveUrl: item.fields.liveUrl,
          sourceUrl: item.fields.sourceUrl,
          techStack: item.fields.techStack,
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

  const handleNext = () => {
    if (currentIndex + 2 < projects.length) {
      setCurrentIndex(prev => prev + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 2);
    }
  };

  if (loading) {
    return <AnimatedSection id="projects"><p>Loading projects...</p></AnimatedSection>;
  }

  if (error) {
    return <AnimatedSection id="projects"><p>{error}</p></AnimatedSection>;
  }

  return (
    <AnimatedSection id="projects">
      <h2 className="projects-title">My Work</h2>
      <div className="projects-grid">
        <AnimatePresence initial={false} mode="wait">
          {projects.slice(currentIndex, currentIndex + 2).map((project) => (
            <Card
              key={project.id}
              project={project}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            />
          ))}
        </AnimatePresence>
      </div>

      {projects.length > 2 && (
        <div className="pagination-controls">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="pagination-button"
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex + 2 >= projects.length}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </AnimatedSection>
  );
};

export default Projects;
