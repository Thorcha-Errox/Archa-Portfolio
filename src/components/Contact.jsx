import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactData, emailJsConfig } from '../contexts/constants';
import './Contact.css';

emailjs.init(emailJsConfig.publicKey);

const ContactItem = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <div className="contact-item" tabIndex={0}>
      {IconComponent ? (
        <IconComponent className="contact-icon" aria-label={`${item.value} icon`} />
      ) : (
        <span className="contact-icon-fallback" aria-label="No icon available"></span>
      )}
      <span>{item.value}</span>
    </div>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
  }).isRequired,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(emailJsConfig.serviceID, emailJsConfig.templateID, formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus(`Failed to send message: ${error.text || 'Please check your EmailJS configuration'}`);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>CONTACT ME</h2>
          <p>I'm always open to discussing new opportunities and interesting projects</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h4>Let's Connect</h4>
            <p>
              Whether you have a project in mind, want to collaborate, or just want to 
              say hello, I'd love to hear from you. Feel free to reach out
              through any of the channels below.
            </p>
            
            <div className="contact-details">
              {Object.values(contactData).map((item, index) => (
                <ContactItem key={index} item={item} />
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email-Id"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Email"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-label="Subject"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              
              {status && (
                <p className={`status-message ${status.includes('Failed') ? 'error' : ''}`}>
                  {status}
                </p>
              )}
              
              <button type="submit" className="submit-btn" aria-label="Submit form">
                <Send size={18} />
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;