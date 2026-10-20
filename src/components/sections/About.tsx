import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FaUserTie } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import profileImage from '@/assets/images/Peter.jpg';
import './About.css';

const currentRoleStack = ['React', 'TypeScript', 'Vite', 'MUI', 'Zustand', 'Recharts', 'Firebase', 'Vitest'];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <div className="about-container">
        <div className="about-title-wrapper">
          <FaUserTie className="about-icon" />
          <h2 className="about-title">Om Mig</h2>
        </div>
        <img
          src={profileImage}
          alt="Peter Gustafsson"
          className="about-image"
        />
        <p className="about-text mb-6">
          Jag är fullstackutvecklare med fokus på React och TypeScript. Jag gillar att ta en idé hela vägen från behov och skiss till en driftsatt lösning som människor faktiskt använder, och jag lägger lika mycket vikt vid tillgänglighet, tester och prestanda som vid hur det ser ut.
        </p>
        <p className="about-text mb-10 sm:mb-12">
          Just nu bygger jag de digitala tjänsterna kring analysplattformen ELSA på ES Management, där jag även arbetar med att integrera AI i våra verktyg.
        </p>

        <article className="about-role" aria-labelledby="about-role-title">
          <p className="about-role-label">Nuvarande roll</p>
          <h3 id="about-role-title" className="about-role-title">Fullstack Developer &amp; AI-integrering</h3>
          <p className="about-role-meta">ES Management (ESM) · nov 2025 – nu</p>

          <ul className="about-role-list">
            <li>
              <span className="about-role-item-title">
                Företagets hemsida
                <a
                  href="https://esmanagement.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-role-link"
                  aria-label="Besök esmanagement.se"
                >
                  esmanagement.se <ExternalLink size={14} aria-hidden="true" />
                </a>
              </span>
              Byggde om sajten från statisk prototyp till en React 19-app med webbshop och kassaflöde, besparingskalkylator, diagram, interaktiva kartor och demobokning.
            </li>
            <li>
              <span className="about-role-item-title">ELSA Kundportal</span>
              Utvecklar portalen där fastighetsägare följer energi, ekonomi och nyckeltal för sina fastigheter, med dashboards, datavisualiseringar och rapporter.
            </li>
          </ul>

          <div className="about-role-stack">
            {currentRoleStack.map((tech) => (
              <span key={tech} className="about-role-chip">{tech}</span>
            ))}
          </div>
        </article>

        <a href="#projects" className="about-button">
          View My Projects
        </a>
      </div>
    </AnimatedSection>
  );
};

export default About;
