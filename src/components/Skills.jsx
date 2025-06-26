import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { skills } from '../contexts/constants';
import throttle from 'lodash/throttle';
import './Skills.css';

const SkillCard = ({ category }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback(
    throttle((e) => {
      const card = cardRef.current;
      if (!card || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return;

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
    if (!card || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  const handleFocus = () => {
    const card = cardRef.current;
    if (!card || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return;
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
      className="skill-category"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <h3>{category.title}</h3>
      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="skill-tag">
            {skill.image && (
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-icon"
                onError={(e) => (e.target.style.display = 'none')} 
              />
            )}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>SKILLS</h2>
          <p>Here are some of my skills on which I have been working on for the past 3 years.</p>
        </div>
        <div className="skills-grid">
          {skills && skills.length > 0 ? (
            skills.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))
          ) : (
            <p>No skills available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;