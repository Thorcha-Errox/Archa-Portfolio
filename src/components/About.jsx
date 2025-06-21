import React from 'react';
import PropTypes from 'prop-types';
import { educationData } from '../contexts/constants';
import './About.css';

const EducationCard = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <div className={`education-card ${item.highlight ? 'highlight' : ''}`} tabIndex={0}>
      <div className="education-title">
        {IconComponent ? (<IconComponent className="education-icon" size={24} aria-label={`${item.title} icon`} />) : 
        (<span className="education-icon-fallback" aria-label="No icon available"></span>)}
        <h3>{item.title}</h3>
      </div>
      <p>{item.description}</p>
    </div>
  );
};

EducationCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
    icon: PropTypes.elementType,
  }).isRequired,
};
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>ABOUT ME</h2>
          <p>
            I'm a passionate full-stack developer who loves building exceptional digital experiences.
            My journey started with curiosity about how websites work, and it has evolved into a career 
            focused on creating scalable, user-friendly applications. When I'm not coding, you can find me
            exploring new technologies.
          </p>
        </div>
        <div className="education-grid">
          {educationData && educationData.length > 0 ? (
            educationData.map((item, index) => (
              <EducationCard key={index} item={item} />
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;