import React from 'react';
import './Logo.css';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logoTitle logoDesc"
      className={className} // Pass className for sizing
    >
      <title id="logoTitle">Peter Gustafsson Shield Logo</title>
      <desc id="logoDesc">An enhanced Viking shield logo with metallic gradients and decorative details, featuring the initials P and G.</desc>
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className="gradient-start" />
          <stop offset="100%" className="gradient-end" />
        </linearGradient>
      </defs>
      
      <g id="shield-base">
        <circle className="logo-bg" cx="50" cy="50" r="50" />
        <circle id="shield-outer-rim" className="logo-stroke" cx="50" cy="50" r="47" />
        <circle id="shield-inner-rim" className="logo-stroke" cx="50" cy="50" r="42" />
        <circle id="shield-boss" className="logo-fill" cx="50" cy="50" r="8" />
        <circle className="logo-bg" cx="50" cy="50" r="2" />
      </g>
      <g id="rim-rivets" className="logo-fill">
        <circle cx="50" cy="12" r="1.5" />
        <circle cx="88" cy="50" r="1.5" />
        <circle cx="50" cy="88" r="1.5" />
        <circle cx="12" cy="50" r="1.5" />
      </g>
      <g id="initials" className="logo-stroke initials-group">
        <g id="letter-p">
          <path className="animated-path" d="M32 70 V 30 L 45 30 L 45 48 L 32 48" />
        </g>
        <g id="letter-g">
          <path className="animated-path" d="M75 30 L 60 30 L 60 70 L 75 70 L 75 55 L 68 55" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
