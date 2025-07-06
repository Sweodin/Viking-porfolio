import React, { useState, useEffect } from 'react';
import logoImage from '@/assets/images/logo-png.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close

const navItems = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Triggers when the section is in the middle of the viewport
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#welcome" aria-label="Homepage" onClick={() => {
          setActiveSection('#welcome');
          if (isMobileMenuOpen) toggleMobileMenu();
        }}>
          <img src={logoImage} alt="Site Logo" className="h-10 sm:h-12 w-auto" /> 
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg bg-opacity-95 shadow-lg py-4 z-10">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="nav-link block w-full text-center py-3"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
