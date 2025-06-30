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
          <h2 className="about-title">Om Mig</h2>
        </div>
        <img
          src={profileImage}
          alt="Peter Gustafsson"
          className="about-image"
        />
        <p className="about-text mb-6">
          Driven av en passion för att skapa eleganta och effektiva digitala lösningar, trivs jag i skärningspunkten mellan kreativitet och teknik. Min resa inom utveckling är ett kontinuerligt sökande efter kunskap, där jag alltid utforskar nya horisonter för att bygga sömlösa användarupplevelser och robusta applikationer.
        </p>
        <p className="about-text mb-10 sm:mb-12">
          Från konceptualisering till driftsättning är jag dedikerad till att omvandla innovativa idéer till verklighet, pixel för pixel, kodrad för kodrad. Låt oss bygga något extraordinärt tillsammans.
        </p>
        <a href="#projects" className="about-button">
          View My Projects
        </a>
      </div>
    </AnimatedSection>
  );
};

export default About;
