import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../contexts/constants';
import throttle from 'lodash/throttle';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback(
    throttle((e) => {
      const card = cardRef.current;
      if (!card || 'ontouchstart' in window) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left - centerX;
      const mouseY = e.clientY - rect.top - centerY;

      const rotateX = (mouseY / rect.height) * -15;
      const rotateY = (mouseX / rect.width) * 15;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
    }, 16),
    []
  );

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card || 'ontouchstart' in window) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  const handleFocus = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(20px)`;
  };

  const handleBlur = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          className="image-placeholder"
          onError={(e) => {
            console.error(`Failed to load image for ${project.title}: ${project.image}`);
            e.target.style.display = 'none'; 
          }}
        />
        <div className="project-overlay"></div>
      </div>
      <div className="project-content">
        <div className="title-container">
          <h3>{project.title}</h3>
          <div className="project-links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link external-link">
              <ExternalLink size={16} />
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <Github size={16} />
            </a>
          </div>
        </div>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired, 
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h3>MY PROJECTS</h3>
          <p>I have worked on a wide range of projects, here are some of my recent projects that showcase my skills and experience</p>
        </div>
        <div className="projects-grid">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;