import React, { useState } from 'react';

export const contactoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const organizers = [
    
      {
        name: "Kaladin Stormblessed",
        role: "Highmarshal of the Windrunners",
        description: "A former soldier turned Windrunner, Kaladin leads his squad with unmatched skill and honor, protecting those who cannot protect themselves.",
        image: "/api/placeholder/140/140",
        social: {
          linkedin: "https://linkedin.com/",
          twitter: "https://twitter.com/",
          github: "https://github.com/"
        }
      },
      {
        name: "Shallan Davar",
        role: "Knight Radiant, Lightweaver",
        description: "A brilliant scholar and artist, Shallan uses her abilities as a Lightweaver to uncover secrets and reshape the world with her illusions.",
        image: "/api/placeholder/140/140",
        social: {
          linkedin: "https://linkedin.com/",
          twitter: "https://twitter.com/",
          github: "https://github.com/"
        }
      },
      {
        name: "Dalinar Kholin",
        role: "Highprince of Alethkar",
        description: "Known as the Blackthorn in his younger days, Dalinar now seeks to unite the shattered nations of Roshar under his leadership and the ideals of the Knights Radiant.",
        image: "/api/placeholder/140/140",
        social: {
          linkedin: "https://linkedin.com/",
          twitter: "https://twitter.com/",
          github: "https://github.com/"
        }
      }
    
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contacto-page">
      <div className="contacto-page__container">
        <div className="contacto-page__header">
          <h1 className="contacto-page__header-title">Contacta con los Organizadores</h1>
          <p className="contacto-page__header-description">
            Conoce al equipo detrás de la Feria del Software Virtual y no dudes en contactoarnos
            para cualquier consulta o sugerencia.
          </p>
        </div>

        <div className="contacto-page__grid">
          {organizers.map((organizer, index) => (
            <div key={index} className="contacto-page__card">
              <div className="contacto-page__card-header">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="contacto-page__card-image"
                />
              </div>
              
              <div className="contacto-page__card-content">
                <h3 className="contacto-page__card-name">{organizer.name}</h3>
                <p className="contacto-page__card-role">{organizer.role}</p>
                <p className="contacto-page__card-description">{organizer.description}</p>
                
                <div className="contacto-page__card-social">
                  <a href={organizer.social.linkedin} className="contacto-page__card-social-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href={organizer.social.twitter} className="contacto-page__card-social-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a href={organizer.social.github} className="contacto-page__card-social-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form className="contacto-page__contacto-form" onSubmit={handleSubmit}>
          <h2 className="contacto-page__contacto-form-title">Envíanos un mensaje</h2>
          
          <div className="contacto-page__contacto-form-group">
            <label htmlFor="name" className="contacto-page__contacto-form-label">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="contacto-page__contacto-form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contacto-page__contacto-form-group">
            <label htmlFor="email" className="contacto-page__contacto-form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="contacto-page__contacto-form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contacto-page__contacto-form-group">
            <label htmlFor="message" className="contacto-page__contacto-form-label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className="contacto-page__contacto-form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contacto-page__contacto-form-button">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default contactoPage;