import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Example social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/yourprofile', // Replace with your LinkedIn URL
      icon: <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
      label: 'LinkedIn Profile'
    },
    {
      href: 'https://github.com/yourusername', // Replace with your GitHub URL
      icon: <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />,
      label: 'GitHub Profile'
    },
    // Add more social links if needed, e.g., a personal website or another portfolio
    // {
    //   href: 'https://yourportfolio.com',
    //   icon: <FaBriefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
    //   label: 'Personal Portfolio'
    // },
  ];

  return (
    <footer className="bg-brand-bg border-t border-brand-gold/20 py-8 sm:py-10 mt-16 sm:mt-24">
      <div className="container mx-auto px-4 text-center">
        {socialLinks.length > 0 && (
          <div className="flex justify-center space-x-5 sm:space-x-6 mb-6 sm:mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-brand-text-light hover:text-brand-gold transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
        <p className="font-sans text-brand-text-light/70 text-xs sm:text-sm">
          &copy; {currentYear} Peter Gustafsson. All rights reserved.
        </p>
        <p className="font-sans text-brand-text-light/50 text-xs mt-2">
          Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
