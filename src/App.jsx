import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Header from './components/Header.jsx';
import ChatBot from './components/ChatBot.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ChatBot/>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App
