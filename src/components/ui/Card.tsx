import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import type { Project } from '@/types';
import '../sections/Projects.css'; // Import the styles

// Type guard for Contentful Rich Text
const isRichText = (content: any): content is Document => {
  return content?.nodeType === 'document';
};

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  const imageUrl = project.image?.fields?.file?.url;
  const imageAlt = (typeof project.image?.fields?.description === 'string' && project.image.fields.description) || project.title;

  return (
    <div className="project-card">
      {imageUrl && (
        <img src={`https:${imageUrl}`} alt={imageAlt} className="project-image" loading="lazy"/>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-description">
          {project.description &&
            (isRichText(project.description)
              ? documentToReactComponents(project.description)
              : <p>{project.description as string}</p>)
          }
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button"
            >
              Live Site
            </a>
          )}
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
