import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero onBookAppointment={() => scrollToSection('contact')} onViewServices={() => scrollToSection('services')} />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="courses">
          <Courses />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;