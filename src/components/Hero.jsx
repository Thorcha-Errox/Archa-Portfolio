import React, { useRef } from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import Myimg from '../assets/picofme.png';
import './Hero.css';

const Hero = () => {
  const profileRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleMouseMove = (e) => {
    const profile = profileRef.current;
    if (!profile) return;

    const rect = profile.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left - centerX;
    const mouseY = e.clientY - rect.top - centerY;

    const rotateX = (mouseY / rect.height) * -15;
    const rotateY = (mouseX / rect.width) * 15; 

    profile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
  };

  const handleMouseEnter = () => {
    const profile = profileRef.current;
    if (!profile) return;
    profile.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    const profile = profileRef.current;
    if (!profile) return;
    profile.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <section id="about" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I'm <br />
              <span className="highlight">Archa Vivek</span> <br />
              Frontend Developer
            </h1>
            <p>
              Web Developer passionate about creating amazing digital experiences 
              with modern technologies and clean, efficient code.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <Download size={18} />
                Download CV
              </button>
              <button onClick={handleContactClick} className="btn btn-secondary">
                <Mail size={18} />
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/Thorcha-Errox" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/archa-vivek-21866b240" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div
              ref={profileRef}
              className="profile-circle"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={Myimg}
                alt="Archa Vivek"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;