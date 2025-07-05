import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { isRichText } from '@/lib/rich-text';
import type { Project } from '@/types';
import { Github, ExternalLink } from 'lucide-react';

interface CardProps extends MotionProps {
  project: Project;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ project, ...props }, ref) => {
  const imageUrl = project.image?.fields?.file?.url;
  const imageDetails = project.image?.fields?.file?.details?.image;
  const imageDescription = project.image?.fields?.description;

  return (
    <motion.div ref={ref} className="project-card" {...props}>
      <div className="project-card-content">
        {imageUrl && imageDetails && (
          <img
            src={'https:' + imageUrl}
            alt={imageDescription || project.title}
            className="project-image"
            width={imageDetails.width}
            height={imageDetails.height}
          />
        )}
        <div className="project-main-content">
          <h3 className="project-card-title">{project.title}</h3>
          <div className="project-description">
            {project.description && (isRichText(project.description)
              ? documentToReactComponents(project.description)
              : <p>{project.description as string}</p>)}
          </div>
          {project.techStack && project.techStack.length > 0 && (
            <div className="tech-stack">
              <h4 className="tech-stack-title">Tech Stack</h4>
              <div className="tech-stack-list">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-stack-item">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="project-links">
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-button" aria-label="GitHub repository">
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-button" aria-label="Live project">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
