import React, { useState, useRef } from 'react';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Raven from '@/components/ui/Raven';
import './Contact.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending' || !form.current) return;

    setStatus('sending');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
            }, (error: EmailJSResponseStatus) => {
          console.error('FAILED...', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
      });
  };

  return (
    <AnimatedSection id="contact">
      <div className="contact-container">
        <div className="contact-title-wrapper">
          <Raven className="contact-icon" />
          <h2 className="contact-title">Skicka en Korp</h2>
        </div>
        <p className="contact-description">
          Har du ett projekt i åtanke, en fråga, eller vill du bara säga hej? Min inkorg är alltid öppen. Jag ser fram emot att höra om dina idéer och utforska hur vi kan samarbeta för att skapa något riktigt slagkraftigt.
        </p>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name" className="contact-label">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="contact-input"
              placeholder="Ditt Namn"
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label">E-post</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="contact-input"
              placeholder="Din E-post"
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-label">Meddelande</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="contact-textarea"
              placeholder="Ditt Meddelande"
            ></textarea>
          </div>
          <div className="contact-button-wrapper">
            <button type="submit" className="contact-button" disabled={status === 'sending'}>
              {status === 'idle' && 'Skicka Meddelande'}
              {status === 'sending' && 'Skickar...'}
              {status === 'success' && 'Meddelande Skickat!'}
              {status === 'error' && 'Fel - Försök Igen'}
            </button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
