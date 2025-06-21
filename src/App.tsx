import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Welcome from '@/components/sections/Welcome';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      {/* Optional: Ambient Background Video */}
      {/* 
      <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none opacity-10">
          <source src="/videos/ambient-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      */}
      
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
