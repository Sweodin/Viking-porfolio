import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { contentfulClient } from '@/lib/contentfulClient';
import type { ProjectEntry, ProjectEntrySkeleton } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection';
import './Projects.css';

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await contentfulClient.getEntries<ProjectEntrySkeleton>({
          content_type: 'project',
          select: ['sys.id', 'fields.title', 'fields.description', 'fields.image', 'fields.liveUrl', 'fields.sourceUrl', 'fields.tags'],
        });
        setProjects(response.items);
      } catch (err) {
        console.error(err);
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const renderDescription = (description: any) => {
    try {
      // Add a robust check to ensure the description is a valid rich text object before rendering.
      if (description && description.nodeType === 'document' && Array.isArray(description.content)) {
        return documentToReactComponents(description);
      }
      return null;
    } catch (e) {
      console.error('Error rendering Contentful rich text:', e);
      // Fallback UI to prevent the entire component from crashing.
      return <p className="text-sm text-red-500">Error displaying description.</p>;
    }
  };

  if (loading) {
    return <AnimatedSection id="projects"><p className="text-center">Loading projects...</p></AnimatedSection>;
  }

  if (error) {
    return <AnimatedSection id="projects"><p className="text-center text-red-500">{error}</p></AnimatedSection>;
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
        {projects.map((project) => {
          const { title, description, image, liveUrl, sourceUrl } = project.fields || {};
          const imageUrl = image?.fields?.file?.url;

          return (
            <motion.div
              key={project.sys.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {imageUrl && (
                <img
                  src={`https:${imageUrl}`}
                  alt={image?.fields?.description || title || 'Project image'}
                  className="project-image"
                  loading="lazy"
                />
              )}
              <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <div className="project-description">
                  {description && renderDescription(description)}
                </div>
                <div className="project-links">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      className="project-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                  {sourceUrl && (
                    <a
                      href={sourceUrl}
                      className="project-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;
