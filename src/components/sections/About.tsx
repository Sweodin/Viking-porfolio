import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FaUserTie } from 'react-icons/fa';
import profileImage from '@/assets/images/Peter.jpg';
import './About.css';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <div className="about-container">
        <div className="about-title-wrapper">
          <FaUserTie className="about-icon" />
          <h2 className="about-title">About Me</h2>
        </div>
        <img
          src={profileImage}
          alt="Peter Gustafsson"
          className="about-image"
        />
        <p className="about-text mb-6">
          Driven by a passion for crafting elegant and efficient digital solutions, I thrive at the intersection of creativity and technology. My journey in development is a continuous quest for knowledge, always exploring new horizons to build seamless user experiences and robust applications.
        </p>
        <p className="about-text mb-10 sm:mb-12">
          From conceptualization to deployment, I am dedicated to transforming innovative ideas into reality, pixel by pixel, line of code by line of code. Let's build something extraordinary together.
        </p>
        <a href="#projects" className="about-button">
          View My Projects
        </a>
      </div>
    </AnimatedSection>
  );
};

export default About;
