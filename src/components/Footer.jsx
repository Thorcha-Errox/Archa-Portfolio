import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Archa Vivek</h3>
            <p>Frontend Developer passionate about creating amazing digital experiences</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/Thorcha-Errox" className="footer-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/archa-vivek-21866b240" className="footer-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2025 Archa Vivek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
