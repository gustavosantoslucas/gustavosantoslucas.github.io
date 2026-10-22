import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stacks from './components/Stacks';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Contact from './components/Contact';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Stacks />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Courses />
        <div className="divider" />
        <Contact />
      </main>
      <WhatsApp />
    </>
  );
}

export default App;
