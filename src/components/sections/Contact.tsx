import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Raven from '@/components/ui/Raven';
import './Contact.css';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Message sent! (This is a placeholder - no actual email is sent yet)');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <AnimatedSection id="contact">
      <div className="contact-container">
        <div className="contact-title-wrapper">
          <Raven className="contact-icon" />
          <h2 className="contact-title">Send a Raven</h2>
        </div>
        <p className="contact-description">
          Have a project in mind, a question, or just want to say hello? My inbox is always open. I'm excited to hear about your ideas and explore how we can collaborate to create something truly impactful.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="contact-input"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="contact-input"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="contact-textarea"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="contact-button-wrapper">
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
